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
                let newEl2 = $('<div></div>');
                let newEl3 = $('<div></div>');
                let newEl4 = $('<div></div>');
                let errorCode = $('<div></div>');
                
        let elArray = [newEl1, newEl2, newEl3, newEl4, errorCode]

            elArray.forEach(arr => {
                
                arr.attr('class', 'searchRes w-4/12 grid gap-2 justify-center')
            })


        for (let i in data.response) {
            let j = ['airline_name', 'arr_name', 'dep_name', 'duration', 'status', 'arr_time_utc', 'dep_time_utc' , 'model', 'flight_number', 'delayed', 'flag']
            let [airlineName, arrivalName, departName, duration, status, arrivalTime, departTime, model, flightNum, delay, flag ] = j
                for (let k in j) {
                    if (j[k] === i) {
                        if (i === airlineName){
                            let resultHolder1 = $('<p></p>');
                            resultHolder1.attr('class', 'res text-sky-100');
                            resultHolder1.text(`${data.response[i]} (${chosenEvent})`);
                            newEl1.append(resultHolder1);
                        }
                        else if (i === arrivalName){
                            let resultHolder1 = $('<p></p>');
                            resultHolder1.attr('class', 'res text-sky-100');
                            resultHolder1.text(`To: ${data.response[i]}`);
                            newEl4.append(resultHolder1); 
                        }
                        else if (i === departName){
                            let resultHolder1 = $('<p></p>');
                            resultHolder1.attr('class', 'res text-sky-100');
                            resultHolder1.text(`From: ${data.response[i]}`);
                            newEl4.append(resultHolder1); 
                        }
                        else if (i === duration){
                            let resultHolder1 = $('<p></p>');
                            let minToHr = data.response[i] / 60
                            minToHr = minToHr.toFixed(2)
                            resultHolder1.attr('class', 'res text-sky-100');
                            resultHolder1.text(`Flight Duration: ${minToHr} Hrs`);
                            newEl4.append(resultHolder1);  
                        }
                        else if (i === status){
                            let resultHolder1 = $('<p></p>');
                            resultHolder1.attr('class', 'res text-sky-100');
                            resultHolder1.text(`Flight Status: ${data.response[i]}`);
                            newEl4.append(resultHolder1); 
                        }
                        else if (i === arrivalTime){
                            let resultHolder1 = $('<p></p>');
                            resultHolder1.attr('class', 'res text-sky-100');
                            resultHolder1.text(`Arrival Time (UTC): ${data.response[i]}`);
                            newEl4.append(resultHolder1); 
                        }
                        else if (i === departTime){
                            let resultHolder1 = $('<p></p>');
                            resultHolder1.attr('class', 'res text-sky-100');
                            resultHolder1.text(`Depart Time (UTC): ${data.response[i]}`);
                            newEl4.append(resultHolder1); 
                        }
                        else if (i === flightNum){
                            let resultHolder1 = $('<p></p>');
                            resultHolder1.attr('class', 'res text-sky-100');
                            resultHolder1.text(`Flight Number: ${data.response[i]}`);
                            newEl4.append(resultHolder1); 
                        }
                        else if (i === model){
                            let resultHolder1 = $('<p></p>');
                            resultHolder1.attr('class', 'res text-sky-100');
                            resultHolder1.text(`Aircraft Model: ${data.response[i]}`);
                            newEl4.append(resultHolder1); 
                        }
                        else if (i === delay){
                            if (data.response[i] !== null){
                                let resultHolder1 = $('<p></p>');
                                resultHolder1.attr('class', 'res text-sky-100');
                                resultHolder1.text(`Delay: ${data.response[i]}`);
                                newEl4.append(resultHolder1); 
                            }
                            else {
                                let resultHolder1 = $('<p></p>');
                                resultHolder1.attr('class', 'res text-sky-100');
                                resultHolder1.text(`Delay Status: On Time`);
                                newEl4.append(resultHolder1); 
                            }
                        }
                        else if (i === flag){
                            let countryFlagURL = `https://www.countryflagicons.com/SHINY/48/${data.response[i]}.png`
                            let resultHolderImg = $('<img></img>')
                            resultHolderImg.attr('src', countryFlagURL)
                            resultHolderImg.attr('class', 'countryFlag')
                            newEl1.append(resultHolderImg)
              
                        }

                } 
      
            }
        }

        
        if (chosenEvent !== ''){
  
            let pHolder = $('<section></section>');
            pHolder.attr('class', 'pHolder flex flex-wrap justify-center text-left m-5 h-fit bg-gray-800 border-transparent rounded p-5 ');
            pHolder.append(newEl1, newEl4, newEl2, newEl3, errorCode);
            $('.main').append(pHolder);
            $('#resetBtn').removeClass('hidden')
            $('#userInput').removeClass('border-red-900').addClass('border-green-900')
            $('#searchBtn').addClass('hidden')

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

      })
      .catch(error => {
        console.log(`Error: ${error}`);
      });
  }
  
  export function resetClicked(){
    $('.pHolder').remove()
    $('#userInput').val('')
    $('#resetBtn').addClass('hidden')
    $('#searchBtn').removeClass('hidden')

  }