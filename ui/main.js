console.log('Loaded!');
var element=document.getElementById("maintext");
element.innerHTML="new value";
var img=document.getElementById("move");
marginleft=0;
var request=new XMLHttpRequest();
request.onreadystatechange=function()
{
    if(request.readyState==XMLHttpRequest.DONE)
    {//TAKE 
       //ACTION
      if(request.status==200)
      {
          var counter=request.responseText;
          var spam=document.getElementById("counter");
    spam.innerHTML=counter.toString();
    
      }
    }
};
/*function moveright()
{   marginleft=marginleft+10;
    img.style.marginLeft=marginleft+"px";
}
img.onclick=function(){
    
    var interval=setInterval(moveright,1000);
};
var counter=0;
var button=document.getElementById("counter");
button.onclick=function(){
    counter=counter+1;
    var spam=document.getElementById("count");
    spam.innerHTML=counter.toString();
    
};*/
request.open("GET","http://abinshoby.imad.hasura-app.io/counter",true);
request.send(null);
