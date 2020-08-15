const promise = new Promise((resolve,reject) =>{
    setTimeout(() =>{
        // resolve('this is my resolved data')
        reject('Something went wrong')
    }, 2000)
})

promise.then((data) =>{
    console.log('1',data)
}).catch((error)=>{
    console.log(error)
})