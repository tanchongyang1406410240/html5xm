var bgmusic = document.getElementById('1mp3');  
bgmusic.addEventListener('canplay', function(){  
    this.play();  
}, false);  
window.addEventListener('load', function(){  
    window.addEventListener('touchstart', once, false);  
}, false);  
function once(){  
    bgmusic.play();  
    window.removeEventListener('touchstart', once, false);  
}
var ctx;
var mapdq=[];//存放地图数据
var mapdqdx=[];//用来存放地图的大小
var dqgs=0;//保存当前的关数
var tph=20;
var tps=20;
var csh=0;
var css=0;
var rh=0;//玩家的当前位置
var rs=0;//玩家的当前位置
var ch=0;//迷宫的出口的位置
var cs=0;//迷宫的出口的位置
var wc=false;//是否完成了当前关卡
var max=3;//与最大关数有关
window.onload=function () {
    dqgs=0;
    szcanvasdx();
    hqhb();
    hmap();//绘制地图
    window.addEventListener('keydown', hqaj, true);
}
function szcanvasdx()
{
    //设置html中的canvas元素的大小
    var myCanvas = document.getElementById("myCanvas");
    myCanvas.setAttribute("width", screen.availWidth);
    myCanvas.setAttribute("height", screen.availHeight);
    myCanvas.setAttribute("id", "myCanvas");
    document.body.appendChild(myCanvas);
}
function hqhb()
{
    //获取canvas的js的对象
    var c=document.getElementById("myCanvas");
    ctx=c.getContext("2d"); 
    alert("通过方向键使移动绿色的小球到红球的位置");  
}