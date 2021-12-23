console.log(module)

module.exports.obj = {
    name:'XXX',
    age:'24'
}

module.exports.getName = () =>{
    return "XXX"
}

const key = "123"
const hello = () => {
    console.log("Hello")
}
const welcome = () => {
    console.log("Welcome to session")
}
module.exports.key = key;


module.exports = {
    welcomeFunction: welcome
}

module.exports.hello = hello;