const tail = require("./tail");
const head = require("./head");
const cube = require("./cube");
const identity=require("./identity");
let result = []

const map = (obj, func) => {
    if (obj.length == 0) 
    {
        temp = result
        result = []
        return temp
    }

    result.push(   func(obj[0])  )

    return map(tail(obj), func)
}

module.exports = map