// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) =>{
//     console.log(snapshot.key, snapshot.val())
// })

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) =>{
//     console.log(snapshot.key, snapshot.val())
// })

// // child_added
// database.ref('expenses').on('child_added', (snapshot) =>{
//     console.log(snapshot.key, snapshot.val())
// })

// // database.ref('expenses').on('value', (snapshot) =>{
// //     console.log(snapshot.key, snapshot.val())
// // })




// // database.ref('expenses')
// //   .once('value')
// //   .then((snapshot)=>{
// //     const expenses = []
// //     snapshot.forEach((childSnapshot)=>{
// //         expenses.push({
// //             id: childSnapshot.key,
// //             ...childSnapshot.val()
// //         })
// //     })
// //     console.log(expenses)
// //   })

// //   database.ref('expenses').on('value',(snapshot)=>{
// //     const expenses = []
// //     snapshot.forEach((childSnapshot)=>{
// //         expenses.push({
// //             id: childSnapshot.key,
// //             ...childSnapshot.val()
// //         })
// //     })
// //     console.log(expenses)
// //   })

// // database.ref('expenses').push({
// //     description: 'Expense description',
// //     note:'Expense note',
// //     amount: 0,
// //     createdAt: 10000
// // })



// // database.ref('notes/-MElvgoKA3u4JguG_53F').update({
// //     body: 'buy food'
// // })


// // database.ref('notes').push({
// //     title: 'Course topics',
// //     body: 'React Native, Angular'
// // })


// // const firebaseNotes = {
// //     notes: {
// //         sdfwef: {
// //             title: 'asds',
// //             body: 'adsa'
// //         },
// //         asdasd: {
// //             title:'asdasd',
// //             body:'asdasd'
// //         }
// //     }
// // }

// // const notes = [{
// //     id: '12',
// //     title: 'First note',
// //     body: 'This is my note'
// // }, {
// //     id: '123',
// //     title: 'Second note',
// //     body: 'This is my second note'

// // }]
// // database.ref('notes').set(notes)


// // // const onValueChange = database.ref().on('value', (snapshot) =>{
// // //     let data = snapshot.val()   
// // //     console.log(`${data.name} is a ${data.job.title} at ${data.job.company}`)
// // // }, (e) =>{
// // //     console.log(e)
// // // })

// // //         setTimeout(()=>{
// // //             database.ref('job/company').set('Google')
// // //         }, 3500)

// // //         setTimeout(()=>{
// // //             database.ref('name').set('Mike')
// // //         }, 3500)

// // // const onValueChange = database.ref()
// // //         .on('value',a  )

// // //         setTimeout(()=>{
// // //             database.ref('age').set(29)
// // //         }, 3500)

// // //         setTimeout(()=>{
// // //             database.ref().off(onValueChange)
// // //         }, 7000)

// // //         setTimeout(()=>{
// // //             database.ref('age').set(30)
// // //         }, 10500)

// // // database.ref('location/city')
// // //         .once('value')
// // //         .then((snapshot)=>{
// // //             const val = snapshot.val()
// //             console.log(val)
// //         })
// //         .catch((e) =>{
// //             console.log('Error fetching data', e)
// //         })




// //   database.ref().set({
// //       name: 'Tobias',
// //       age: 21,
// //       stressLevel: 6,
// //       job: {
// //           title: 'software dev',
// //           company: 'google'
// //       },
// //       isSingle: true,
// //       location: {
// //           city: 'Salzburg',
// //           country: 'Austria'
// //       }
// //   }).then(()=>{
// //         console.log('Data is saved')
// //   }).catch((error)=>{
// //         console.log('This failed',error)
// //   })

// // //   database.ref('isSingle').set(null)

// // // database
// // //     .ref('isSingle')
// // //     .remove()
// // //     .then(()=>{
// // //         console.log('Data was removed')
// // //     }).catch(()=>{
// // //         console.log('Did not remove data')
// // //     })

// // database.ref().update({
// //     stressLevel: 9,
// //     'job/company': 'Amazon',
// //     'location/city': 'Seattle'
// // })

