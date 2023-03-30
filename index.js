var cel = document.getElementById("celsius");
var fah = document.getElementById("fahren");

cel.addEventListener('input',function(){
    let c= this.value;
    let f = (c*9/5)+32;

    if(!Number.isInteger(f)){
        f = f.toFixed(4);
    }
    fahren.value=f;
});

fahren.addEventListener('input',function(){
    let f = this.value;
    let c = (f-32)* 5/9;
    if(!Number.isInteger(c)){
        c=c.toFixed(4);
    }
    celsius.value=c;
})