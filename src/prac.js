import key from './keys'
import $ from 'jquery'
import { handleInputChange, Flight } from './Flight.js'

export function chosenStateHandler(event) {
    let URL = `https://airlabs.co/api/v9/flight?flight_icao=${handleInputChange()}&api_key=${key}`;
  
    fetch(URL)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`Error: ${response.status}`);
        }
      })
      .then(data => {
        const chosenEvent = handleInputChange();
  
        let newEl1 = $('<div></div>');
        newEl1.attr('class', 'searchRes1');
        let newEl2 = $('<div></div>');
        newEl2.attr('class', 'searchRes2');
        let newEl3 = $('<div></div>');
        newEl3.attr('class', 'searchRes3');
  
        for (let i in data.response) {

          switch (i) {
            case 'airline_name':
            case 'arr_name':
            case 'dep_name':
              let resultHolder1 = $('<p></p>');
              resultHolder1.attr('class', 'res text-center');
              resultHolder1.text(`${i}: ${data.response[i]}`);
              newEl1.append(resultHolder1);
              break;
  
            case 'duration':
            case 'status':
            case 'arr_time_utc':
            case 'manufacturer':
              let resultHolder2 = $('<p></p>');
              resultHolder2.attr('class', 'res2 text-center');
              resultHolder2.text(`${i}: ${data.response[i]}`);
              newEl2.append(resultHolder2);
              break;
  
            case 'aircraft_icao':
            case 'flight_number':
            case 'delayed':
              let resultHolder3 = $('<p></p>');
              resultHolder3.attr('class', 'res3 text-center');
              resultHolder3.text(`${i}: ${data.response[i]}`);
              newEl3.append(resultHolder3);
              break;
  
            default:
              break;
          }
        }

        
        if (chosenEvent !== ''){

            let pHolder = $('<section></section>');
            pHolder.attr('class', 'pHolder');
            pHolder.append(newEl1, newEl2, newEl3);
            $('.main').append(pHolder);
            $('#resetBtn').removeClass('hidden')
            $('#userInput').removeClass('border-red-900').addClass('border-green-900')

                setTimeout(() => {         
                    $('#userInput').removeClass('border-green-900')
                }, 1000);
                
        } else {

                $('.pHolder').remove()
                $('#resetBtn').addClass('hidden')
                $('#userInput').removeClass('border-green-900').addClass('border-red-900')
                    setTimeout(() => {
                        $('#userInput').removeClass('border-red-900')
                    }, 1000);

  }

        // let existingPHolder = $('.pHolder');
        // if (existingPHolder.length > 0) {
        //   existingPHolder.remove();
        // }


      })
      .catch(error => {
        console.log(`Error: ${error}`);
      });
  }
  
  export function resetClicked(){
    $('.pHolder').remove()
    $('#userInput').val('')
    $('#resetBtn').addClass('hidden')
  }