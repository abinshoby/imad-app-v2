console.log('Loaded!');
var element=document.getElementById("maintext");
element.innerHTML="new value";
var img=document.getElementById("move");
img.onclick=function(){
    img.style.marginLeft="100px";
};