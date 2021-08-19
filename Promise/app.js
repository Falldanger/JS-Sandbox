//Promise

console.log('Request data...')

//using callbacks
setTimeout(() => {
    console.log('Preparing data...')

    const backendData = {
        server: 'aws',
        port: 2000,
        status: 'working'
    }

    setTimeout(() => {
        backendData.modified = true
        console.log('Data received', backendData)
    }, 2000)
}, 2000)


//same but thought promises
const p = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('Preparing data...')

        const backendData = {
            server: 'aws',
            port: 2000,
            status: 'working'
        }
        resolve(backendData)
    }, 2000)
})

p.then((data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data.modified = true
            resolve(data)
        }, 2000)
    })
}).then((clientData) => {
        clientData.fromPromise = false
        return clientData
    }).then((newData) => {
    console.log('Modified', newData)
}).catch((error) => {
    console.error('Error: ', error)
}).finally(()=>{
    console.log('Finally')
})

// catch follow for errors
// finally execute in any case


//other example executing to 3 sec
const sleep = (ms) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, ms)
    })
}

sleep(2000).then(() => {
    console.log('After 2 sec')
})

sleep(3000).then(() => {
    console.log('After 3 sec')
})

//waiting for last promise execution
Promise.all([sleep(2000),sleep(5000)]).then(()=>{
    console.log('All promises')
})

//waiting until first promise execute
Promise.race([sleep(2000),sleep(5000)]).then(()=>{
    console.log('Race promises')
})