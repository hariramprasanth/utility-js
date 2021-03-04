const tail = require("./tail");
const head = require("./head");

let result=undefined

const reduce = (obj, func , acc) => 
{
    ans=undefined
    if(acc== undefined)
    {
        result=obj[0];
        ans=myReduce(tail(obj),func);
    }
    else
    {
        result=acc
        ans=myReduce(obj,func);
    }
    return ans;

}


function myReduce(obj,func)
{
    if (obj.length == 0) 
    {
        temp = result
        result = undefined   
        return temp
    }
     
   result=func(result,obj[0])

   return myReduce(tail(obj), func)
}

//console.log(reduce(['a', 'b', 'c'],(x,y)=>x+y,'z'))

module.exports = reduce

