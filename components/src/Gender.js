//failed, fix later, maybe?

var a="Male"; var b="Female";

const genderer=()=> {
    var temp=a; a=b; b=temp; 
    return a;
};

export default genderer; 