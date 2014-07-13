var obj,ctx;
var x=new Array(1000),y=new Array(1000),t=new Array(1000),k=new Array(1000),t1=new Array(1000),l1=new Array(1000),k1=new Array(1000),r=new Array(1000);
var j=0;
window.onload=function()
{
obj=document.getElementById('tik');
obj.width=window.innerWidth;
obj.style.border="1px solid black";
ctx=obj.getContext('2d');
ctx.fillStyle='yellowgreen';
ctx.strokeStyle='yellowgreen';
pop();
};
window.onmousedown=function(event)
{
if(event.pageX>0 && event.pageX<window.innerWidth && event.pageY>0 && event.pageY<400)
{
x[j]=event.pageX;
y[j]=event.pageY;
t[j]=r[j]=l1[j]=t1[j]=0;
k1[j]=0.1;
k[j]=10;
j++;
}
};
function pop()
{
ctx.clearRect(0,0,window.innerWidth,600);
for(var i=0;i<j;i++)
{
ctx.save();
ctx.translate(x[i],y[i]);
drawTr(t[i]*Math.PI/180,l1[i],k1[i],t1[i]*Math.PI/180);
ctx.restore();
if(r[i]==0)
{
t[i]+=k[i];
if(t[i]>=90)
{
t[i]=90;
r[i]=1;
}
}
else if(r[i]==1)
{
l1[i]-=k[i];
if(l1[i]<=-30)
{
r[i]=2;
}
}
else if(r[i]==2)
{
k1[i]+=0.1;
if(k1[i]>=1)
{
r[i]=3;
}
}
else if(r[i]==3)
{
t1[i]+=k[i];
//alert(t1[i]);
if(t1[i]>=30 || t1[i]<=0)
k[i]*=-1;
}
}
setTimeout("pop()",100);
}
function drawTr(rot,l2,k2,rot1)
{
var l=new Array(1,-1);
for(var i=0;i<2;i++)
{
ctx.save();
ctx.scale(l[i],1);
ctx.rotate(rot);
ctx.fillRect(0,-100,50,100);
drawPr(l2,k2,rot1);
ctx.restore();
}
}
function drawPr(l2,k2,rot1)
{
for(var i=0;i<6;i++)
{
ctx.save();
ctx.translate(0,-100+i*20);
drawEr(l2,k2,rot1);
ctx.restore();
}
}
function drawEr(l2,k2,rot1)
{
var l=new Array(1,-1);
ctx.beginPath();
ctx.moveTo(0,0);
ctx.lineTo(l2,0);
ctx.stroke();
for(var i=0;i<2;i++)
{
ctx.save();
ctx.translate(l2,0);
ctx.rotate(rot1*l[i]);
ctx.scale(k2,l[i]*k2);
ctx.beginPath();
ctx.arc(-5,0,5,Math.PI,2*Math.PI);
ctx.fill();
ctx.restore();
}
}
function save()
{
	$.ajax({url:"Derker.php",type:"POST",data:{"a":obj.toDataURL()}});
}