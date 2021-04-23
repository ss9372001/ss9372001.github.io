
function show(a,b,c){
    var down = document.getElementById(b);
    var up = document.getElementById(c);
    var x=document.getElementById(a);
    down.style.display="none";
    up.style.display="block";
    x.style.display="block";
}

function hide(x,y,z){
    var down = document.getElementById(y);
    var up = document.getElementById(z);
    var x=document.getElementById(x);
    up.style.display="none";
    down.style.display="block";
    x.style.display="none";
}