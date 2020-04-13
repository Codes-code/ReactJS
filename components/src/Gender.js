//for gender generation alternatively

var a="Male"; var b="Female";

const Gender=()=> {
    var temp=a; a=b; b=temp; 
    return a;
};

export default Gender; 