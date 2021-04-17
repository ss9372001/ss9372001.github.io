
// How it works section


var options = Array.from(document.querySelectorAll('.item'));
var blocks = Array.from(document.querySelectorAll('.detail-block'));

const expand=(element)=>{
    // remove the styling for each element
    options.forEach(el=>{
        el.classList.remove("active-item");
    })
// Add the styling the clicked element
    var x=element.target;
    var y=Array.from(x.classList).indexOf('item');
    if(y===-1){
        x=x.parentElement
        x.classList.add("active-item");
    } else {
        x.classList.add("active-item");
    }

// Remove expansion formeach element
    blocks.forEach(el=>{
        el.classList.remove("active-block");
    })

    // add expansion to the next sibling of selected div
    x.nextElementSibling.classList.add("active-block");
}

// calling expand function
options.forEach(el=>{
    el.addEventListener('click', expand);
})

// How it works section ends here




// Expert doctors section starts

function replace(){
    var a= document.getElementById("div4");
    var b= document.getElementById("div3");
    var c= document.getElementById("div2");
    var d= document.getElementById("div1");
    var temp=a.innerHTML;
    a.innerHTML=b.innerHTML;
    b.innerHTML=c.innerHTML;
    c.innerHTML=d.innerHTML;
    d.innerHTML=temp;
}
// const buttonsWrapper = document.getElementById("circle");
// const slides = document.getElementById("container");

// buttonsWrapper.addEventListener("click", e => {
//   if (e.target.nodeName === "DIV") {
//     Array.from(buttonsWrapper.children).forEach(item =>
//       item.classList.remove("blue_circle")
//     );
//     if (e.target.classList.contains("carousel1")) {
//       slides.style.transform = "translateX(-0%)";
//       e.target.classList.add("blue_circle");
//     } else if (e.target.classList.contains("carousel2")) {
//       slides.style.transform = "translateX(-25%)";
//       e.target.classList.add("blue_circle");
//     } else if (e.target.classList.contains('carousel3')){
//       slides.style.transform = 'translatex(-50%)';
//       e.target.classList.add('blue_circle');
//     } else if (e.target.classList.contains('carousel4')){
//         slides.style.transform = 'translatex(-75%)';
//         e.target.classList.add('blue_circle');
//       }
//   }
// });

var container=document.getElementById("circle");

var carousels=container.getElementsByClassName("carousel");

for(var i=0;i<carousels.length;i++){
    carousels[i].addEventListener('click', function(){
        var current=document.getElementsByClassName("blue_circle");
        // console.log(current);
        current[0].className=current[0].className.replace(" blue_circle", "");
        this.className += " blue_circle";
        
    });
}

//  Expert doctors section ends


// Featured treatment section starts
 function interchange(a,b,c,d,e,f){
    var a= document.getElementById("treatment1");
    var b= document.getElementById("treatment2");
    var c= document.getElementById("treatment3");
    var d= document.getElementById("treatment4");
    var e= document.getElementById("treatment5");
    var f= document.getElementById("treatment6");
    var temp=a.innerHTML;
    a.innerHTML=b.innerHTML;
    b.innerHTML=c.innerHTML;
    c.innerHTML=d.innerHTML;
    d.innerHTML=e.innerHTML;
    e.innerHTML=f.innerHTML;
    f.innerHTML=temp;
 }

 var containers=document.getElementById("circles");

var carousel=containers.getElementsByClassName("carousels");

for(var i=0;i<carousel.length;i++){
    carousel[i].addEventListener('click', function(){
        var current=document.getElementsByClassName("blue_circles");
        current[0].className=current[0].className.replace(" blue_circles", "");
        this.className += " blue_circles";
    });
}

// Featured treatment section ends






