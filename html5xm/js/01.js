var bgmusic = document.getElementById('2mp3');  
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
var maxwidth;//当前窗口的可以使用的大小
var maxheight;//当前窗口的可以使用的大小
var cshb;
var best=0;//最好成绩
var cj=0;//当前成绩
var yzgz=0;//当前已有数字的格子的个数
var dkd;
var xkd;
var map=[];
map[0]=[0,0,0,0,0];
map[1]=[0,0,0,0,0];
map[2]=[0,0,0,0,0];
map[3]=[0,0,0,0,0];
map[4]=[0,0,0,0,0];
var ys=[];
ys[0]=["ffffff"];
window.onload=function () {
    //在页面加载的时候执行
    var tx=0;
    maxwidth=window.innerWidth/100*90;//在保证页面不会出现滚动条的情况下，使canvas的可以使用的范围最大
    maxheight=window.innerHeight/100*90;
    //上面的方法即可以在视网膜屏上使用，也可以在普通的电脑屏幕上使用。
    //因为：如果通过css固定canvas的大小，那么：
    //1.无法使canvas的大小自相应2.在视网膜屏上，canvas的实际像素大小是css的像素大小的2倍
    if (maxwidth<360)
    {
        tx=1;
    }
    if (maxheight<400)
    {
        tx=1;
    }
    if (tx==1)
    {
        alert("窗口太小，请拉大！");
    }
    tzfbl();
    szcanvasdx();
    hq();
    yx();
    if (localStorage.getItem("best")==null)
    {
        localStorage.setItem("best",0);
    }
    best=localStorage.getItem("best");
    window.addEventListener('keydown', hqaj, true);
}
window.onresize = function(){
    //当人为地调整大小后，重新加载页面
    if (yzgz<2) {  
        location.reload(true);
   }  
   else {  
    if (confirm("你确定重新加载吗？")) {  
        location.reload(true);
    }  
    else {  
    }
    }  
}
function tzfbl() {
    //调整大小
    for (;1==1;)
    {
        if (maxheight/1000*800<(maxwidth-10))
        {
            return;
        }
        else
        {
            maxheight--;
        }
    }
}
function szcanvasdx()
{
    var myCanvas = document.getElementById("myCanvas");
    myCanvas.setAttribute("width", maxwidth);
    myCanvas.setAttribute("height", maxheight);
    myCanvas.setAttribute("id", "myCanvas");
    document.body.appendChild(myCanvas);
}
function hq() {
    var c=document.getElementById("myCanvas");
    if (c.getContext){
      } else {
          alert("此浏览器不支持html5的canvas元素。\n请更新浏览器版本到最新版或更换浏览器。\n推荐的浏览器为：\nchrome的最新版\n推荐的操作系统为：macOS High Sierra (10.13)\n");
          return;
      }
    ctx=c.getContext("2d");
    ctx.rotate(2.3*Math.PI/180);
}
function hzbj() {
    ctx.fillStyle="#ffdab9";
    ctx.fillRect(0,0,maxwidth,maxheight);
}
function hzyjjx(x,y,k,g,bj) {
    //绘制带有圆角的矩形
    ctx.beginPath();
    ctx.moveTo(x+bj,y);
    ctx.lineTo(x+k-bj,y);
    ctx.arcTo(x+k,y,x+k,y+bj,bj);
    ctx.lineTo(x+k,y+g-bj);
    ctx.arcTo(x+k,y+g,x+k-bj,y+g,bj);
    ctx.lineTo(x+bj,y+g);
    ctx.arcTo(x,y+g,x,y+g-bj,bj);
    ctx.lineTo(x,y+bj);
    ctx.arcTo(x,y,x+bj,y,bj);
    ctx.fill();
    return 1;
}
function hzsz2048() {
    ctx.font=" 40px myPingFangSC-Semibold";
    ctx.fillStyle="rgb(98,98,98)";
    ctx.textAlign="center";
    ctx.fillText("2048",maxwidth/2-(maxheight/1000*800/2)/2-10,40,((maxheight/1000*800/2)/2-10)*2);
    ctx.textAlign="start";
}