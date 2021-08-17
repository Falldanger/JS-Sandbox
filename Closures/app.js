//Closures

function createCalcFunction(n) {
    return function () {
        console.log(1000 * n)
    }
}

const calc = createCalcFunction(5)

calc()

//

function createIncrementor(n) {
    return function (number) {
        return n + number
    }
}

const addOne = createIncrementor(1)
const addTen = createIncrementor(10)

console.log(addOne(9))
console.log(addOne(14))

console.log(addTen(40))
console.log(addTen(90))

function urlGenerator(domain) {
    return function (url) {
        return `https://${url}.${domain}`
    }
}

const comUrl = urlGenerator('com')

console.log(comUrl('google'))
console.log(comUrl('netflix'))

//

function bind(context, fn) {
    return function (...args) {
        fn.apply(context, args)
    }
}


function logPerson() {
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
}

const person1 = {
    name: "Jack",
    age: 25,
    job: "Developer"
}

const person2 = {
    name: "Vlad",
    age: 21,
    job: "Lawyer"
}

bind(person1,logPerson)()
bind(person2,logPerson)()