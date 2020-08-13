// // const person = {
// //     name: 'Andrew',
// //     age: 25,
// //     location: {
// //         city: 'Austria',
// //         temperature: 22
// //     }
// // }

// // const {name,age} = person
// // const {city, temperature} = person.location
// // console.log(`${name} is ${age}`)

// // if(city && temperature){
// // console.log(`It's ${temperature} in ${city}`)}

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan HOliday',
//     publisher: {
//         name: ''
//     }
// }

// const {title, author} = book
// const {name: publisherName='self-published'} = book.publisher

// console.log(publisherName)


const address = ['1299 S Juniper Street','Philadelphia','Pennsylvania','19147']

const [street, city, state, zip] = address

console.log(`You are in ${city}, ${state} `)

const item = ['Coffee (hot)','$2.00','$2.50','$2.75']

const [coffeename, smallprice, mediumprice, largeprice] = item

console.log(`A medium ${coffeename} costs ${mediumprice}`)






