import $ from 'jquery'
import key from './keys'

export const searchClick  = function(){

    let userInput = $('#userInput').val()
       console.log(userInput)
    
  }
export function flightData(){
let URL = `https://airlabs.co/api/v9/flights?api_key=${key}`

fetch(URL).then(response => {
    if (response.ok){
        return response.json()
    } else {
        throw new Error(`Error: ${response.status}`)
    }
})
.then(data => {

    console.log(data)

    for (let i of data.response){
        const flightRegNumber = i.reg_number;

    }
})
.catch(error => {
    console.log(`Error: ${error}`)
})
}
