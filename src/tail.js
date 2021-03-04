const tail = (obj) =>
{
    if (isobject(obj))
    {
       return obj.splice(1);
    }
    else   
        return "Not an Object";
}

function isobject(obj) {
    return typeof (obj) == "object";
}
module.exports = tail