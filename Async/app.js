//Async - Event loop

console.log('Start')

console.log('Start 2')

function timeout2sec(){
    console.log('timeout2sec')
}

window.setTimeout(function (){
    console.log('Execute script after 5 sec')
}, 5000)

setTimeout(timeout2sec,2000)

console.log('End')

//
console.log('start')

// call stack ->web api-> callback queue -> anonymous func in call stack -> call stack
setTimeout(function (){
    console.log('async call')
},0)

console.log('end')