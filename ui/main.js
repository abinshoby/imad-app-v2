console.log('Loaded!');
var element=document.getElementById("maintext");
element.innerHTML="new value";
var img=document.getElementById("move");
marginleft=0;
function moveright()
{   marginleft=marginleft+10;
    img.style.marginLeft=marginleft+"px";
}
img.onclick=function(){
    
    var interval=setInterval(moveright,1000);
};