const tail = require("./tail");
const head = require("./head");
const filterUpperCase=require("./filterUpperCase");
/// global scope variable
let result = []

const filter = (obj, func) => 
{
    if (obj.length == 0) 
    {
        temp = result
        result = []    /// emptying variable
        return temp
    }

    if (  func ( obj[0] )     )           // check the element with filter funtion 
        result.push(obj[0]);

    return filter(tail(obj), func)

}
module.exports = filter

