const min = (obj) => 
{
    if(isobject(obj))
    {
        if(obj.length>0)
        {
            let result=min_defn(obj,obj.length);
            return result;
        }
        else
            return null;
    }
    else{
        return "Not an Object";
    }
}

function min_defn(obj,n)
{
    if( n==1)
        return obj[0];
    a=min_defn(obj,n-1);
    return  minofnumbers(obj[n-1], a);  
}
function minofnumbers(a,b) {
    return a < b ? a:b;
}

function isobject(list) {
    return typeof (list) == "object"
}


module.exports = min
