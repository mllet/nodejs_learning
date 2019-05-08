var s = "hello";

function hello() {
    console.log('Hello, world!');
}

function greet(name) {
    console.log(s + ',' + name + '！')
}

// module.exports = greet;
module.exports = {
    hello: hello,
    greet: greet
};
// exports.greet = greet;
// exports.hello = hello;