import key from './keys'
import $ from 'jquery'
import { handleInputChange, Flight } from './Flight.js'



export function chosenStateHandler(event) {

let URL = `https://airlabs.co/api/v9/flight?flight_icao=${handleInputChange()}&api_key=${key}`
fetch(URL).then(response => {
    if (response.ok){
        return response.json()
    } else {
        throw new Error(`Error: ${response.status}`)
    }
})
.then(data => {
    const chosenEvent = handleInputChange()
    


    console.log('chosen event', chosenEvent)
    
    let newEl = $('<div></div>')
    newEl.attr('class', 'searchRes')
    newEl.empty()

    for(let i in data.response){
        console.log(i, ':', data.response[i])
            let resultHolder = $('<p></p>')
                resultHolder.attr('class', 'res text-center') 
       
                switch(i) {
                    // case 'arr_estimated':
                    case 'arr_name':
                        resultHolder.text(`${i}: ${data.response[i]}`)

                        break;

                    case 'dep_name':  
                        resultHolder.text(`${i}: ${data.response[i]}`)

                        break;

                    case 'airline_name':
                        resultHolder.text(`${i}: ${data.response[i]}`)

                    break;

                    case 'duration':
                        resultHolder.text(`${i}: ${data.response[i]}`)

                        break;
                     
                    case 'status':
                        resultHolder.text(`${i}: ${data.response[i]}`)

                        break;

                    case 'arr_time_utc':
                        resultHolder.text(`${i}: ${data.response[i]}`)

                    break;

                    case 'manufacturer':
                        resultHolder.text(`${i}: ${data.response[i]}`)

                    break;

                    case 'aircraft_icao':
                        resultHolder.text(`${i}: ${data.response[i]}`)

                    break;

                    case 'flight_number':
                        resultHolder.text(`${i}: ${data.response[i]}`)

                    break;
                    case 'delayed':
                    case !null:
                        resultHolder.text(`${i}: ${data.response[i]}`)
                    break;

                    default:
                        resultHolder.text(null)
                        break;
                }
                newEl.append(resultHolder)
                // if (i === 'arr_name' || i === 'dep_name'){

                //     resultHolder.text(`${i}: ${data.response[i]}`)
                //     newEl.append(resultHolder)
                // }
                                
            } 

    $('.main').append(newEl)

})
.catch(error => {
    console.log(`Error: ${error}`)
})

}
