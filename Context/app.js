//Context

function hello() {
    console.log('Hello', this);
}

const person = {
    name: 'Jack',
    age: 25,
    sayHello: hello
}