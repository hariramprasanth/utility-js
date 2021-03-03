const max = (obj) => 
{
    if(isobject(obj))
    {
        if(obj.length>0)
        {
            let result=max_defn(obj,obj.length);
            return result;
        }
        else
            return null;
    }
    else{
        return "Not an Object";
    }
}

function max_defn(obj,n)
{
    if( n==1)
        return obj[0];
    a=max_defn(obj,n-1);
    return  maxofnumbers(obj[n-1], a);   
}

function maxofnumbers(a,b) {
    return a > b ? a:b;
}

function isobject(list) {
    return typeof (list) == "object"
}


module.exports = max
