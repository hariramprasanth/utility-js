const head = (obj) => {
    if (isobject(obj))
    {
        if(obj.length>0)
            return obj[0];
        else
            return null;
    }
    else   
        return "Not an Object";
}



function isobject(list) {
    return typeof (list) == "object"
}


module.exports = head