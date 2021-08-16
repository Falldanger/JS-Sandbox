//Context

function hello() {
    console.log('Hello', this);
}

const person = {
    name: 'Jack',
    age: 25,
    sayHello: hello,
    sayHelloWindow: hello.bind(document),
    logInfo: function (job, phone) {
        console.group(`${this.name} info:`)
        console.log(`Name is ${this.name}`)
        console.log(`Age is ${this.age}`)
        console.log(`Job is ${job}`)
        console.log(`Phone is ${job}`)
        console.groupEnd()
    }
}

const admin = {
    name: 'admin',
    age: 23
}

// const fnAdminInfoLog = person.logInfo.bind(admin)
// fnAdminInfoLog('Backend dev','380506069066')

// person.logInfo.bind(admin,'Backend dev','380506069066')()
// person.logInfo.call(admin,'Backend dev','380506069066')
person.logInfo.apply(admin, ['Backend dev', '380506069066'])

//

const array = [1, 2, 3, 4, 5, 6]

function multBy(arr, n) {
    return arr.map(function (i) {
        return i * n
    })
}

Array.prototype.multBy = function (n){
return this.map(function (i){
    return i*n
})
}

console.log(array.multBy(10))
