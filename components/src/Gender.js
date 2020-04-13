//for gender generation alternatively

var a="Male"; var b="Female";

const gender=()=> {
    var temp=a; a=b; b=temp; 
    return a;
};

export default gender; 