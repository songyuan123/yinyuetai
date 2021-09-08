	window.onload=function(){
 //头部js   
  var menubtn = document.getElementById("menubtn");
    var  mask = document.getElementById("mask");
     menubtn.addEventListener("touchstart",function (event) {
        if(menubtn.className=='menuBtn_clos'){
            menubtn.className ='menuBtn_open';
            mask.style.display = 'block';

        }else if(menubtn.className=='menuBtn_open'){
            menubtn.className ='menuBtn_clos';
            mask.style.display =  'none';
        }
        event.stopPropagation()
  })
  
  document.documentElement.addEventListener("touchstart",function(){
    menubtn.className="menuBtn_clos";
    mask.style.display="none";
  })
   mask.addEventListener("touchstart",function (event) {
        event.stopPropagation()
    })

   var  input = document.querySelector("#search [type='text']")
       input.addEventListener("touchstart",function (event) {
           input.style.backgroundColor="white";
           event.stopPropagation()

       });
       document.documentElement. addEventListener("touchstart",function () {
           input.style.backgroundColor="#999";
       });


//导航条nav
loading();
function loading(){
    var  nav = document.getElementById("nav")
    var  navlist= document.getElementById("navlist");
    var beginTime ;
    var beginValue ;
    var endTime ;
    var endValue ;
    var disValue;
    var disTime;
    var startX;
    var moveX;
    var ch=nav.clientWidth;
    var cs;
    var aaa;
    
    nav.addEventListener("touchstart",function(event){
      event.stopPropagation();
      disValue=0;
      disTime=0;
      navlist.style.transition="none";
      beginValue= event.changedTouches[0].clientX;
      cs=navlist.offsetLeft;
      startX=beginValue-cs;
      beginTime=new Date().getTime();
    });
    nav.addEventListener("touchmove",function(event){
      event.stopPropagation();
      moveX=event.changedTouches[0].clientX;
      endValue=moveX;
      navlist.style.left=moveX-startX+"px";
      cs=navlist.offsetLeft;
      aaa=(moveX-beginValue)/ch;
      if (cs>0) {
        navlist.style.left=(1-aaa)*(moveX-startX)+"px";
        console.log((1-aaa)*(moveX-startX))

      }else if (cs<-navlist.offsetWidth+ch) {
        navlist.style.left=-navlist.offsetWidth+ch+(moveX-beginValue)*(1+aaa)+"px";//现在的位置-移动的位置*(1+aaa)
      }
      endTime=new Date().getTime();
      disTime=endTime-beginTime;
      disValue=endValue-beginValue;
      
    });
    nav.addEventListener("touchend",function(){
      event.stopPropagation();
       if (cs>0) {
        navlist.style.left=0+"px";
        navlist.style.transition="0.5s cubic-bezier(0,1.85,.81,1.71)";
      }else if (cs<-navlist.offsetWidth+ch) {
        navlist.style.left=-navlist.offsetWidth+ch+"px";
         navlist.style. transition="0.5s cubic-bezier(0,1.85,.81,1.71)";
      }else{
        var speed=disValue/disTime;
        navlist.style.left=(moveX-startX)+(speed*100)+"px";
        navlist.style.transition="0.5s";

    }
    
      

    });
    
}

//导航条点击变换颜色
nav();
function nav(){
      var navlist=document.getElementById("navlist");
      var li=navlist.getElementsByTagName("li");
      
        for(var i=0;i<li.length;i++){
          li[i].onclick=function(){
            for(var i=0;i<li.length;i++){
              li[i].style.backgroundColor="white";
            }
             this.style.backgroundColor="#690";
          }
        }
      
      
    }


//banner滑动
 
    var div=document.getElementById("banner");
    var ul=div.getElementsByTagName("ul")[0];
    var li=ul.getElementsByTagName("li");
    var startX;
       var disX;
       var startX2;
    ul.innerHTML=ul.innerHTML+ul.innerHTML;
    ul.style.left=-ul.offsetWidth/2+"px";
    div.addEventListener("touchstart", function (event) {
        var touch = event.changedTouches[0];
        ul.style.transition="none";
         startX = touch.clientX-ul.offsetLeft;
         startX2=touch.clientX;
         clearInterval(time);
         

    });

    div.addEventListener("touchmove", function (event) {
        var touch = event.changedTouches[0];
        var nowX = touch.clientX;
        disX = nowX - startX;
        disX2=nowX-startX2;
        ul.style.left=disX+"px";
        
    });
    div.addEventListener("touchend",function(event){
      //当滑动方向为正时
       if (disX2>0) {
             if (ul.offsetLeft>=-div.offsetWidth*9&&ul.offsetLeft<-div.offsetWidth*8.5) {
              ul.style.transition="left 0.5s";
              ul.style.left=-div.offsetWidth*9+"px";
             }else if (ul.offsetLeft>=-div.offsetWidth*8.5&&ul.offsetLeft<-div.offsetWidth*8) {
              ul.style.transition="left 0.5s";
              ul.style.left=-div.offsetWidth*8+"px";
             }else if (ul.offsetLeft>=-div.offsetWidth*8&&ul.offsetLeft<-div.offsetWidth*7.5) {
              ul.style.transition="left 0.5s";
              ul.style.left=-div.offsetWidth*8+"px";
             }else if (ul.offsetLeft>=-div.offsetWidth*7.5&&ul.offsetLeft<-div.offsetWidth*7) {
              ul.style.transition="left 0.5s";
              ul.style.left=-div.offsetWidth*7+"px";
             }else if (ul.offsetLeft>=-div.offsetWidth*7&&ul.offsetLeft<-div.offsetWidth*6.5) {
              ul.style.transition="left 0.5s";
              ul.style.left=-div.offsetWidth*7+"px";
             }else if (ul.offsetLeft>=-div.offsetWidth*6.5&&ul.offsetLeft<-div.offsetWidth*6) {
              ul.style.transition="left 0.5s";
              ul.style.left=-div.offsetWidth*6+"px";
             }else if (ul.offsetLeft>=-div.offsetWidth*6&&ul.offsetLeft<-div.offsetWidth*5.5) {
              ul.style.transition="left 0.5s";
              ul.style.left=-div.offsetWidth*6+"px";
             }else if (ul.offsetLeft>=-div.offsetWidth*5.5&&ul.offsetLeft<-div.offsetWidth*5) {
              ul.style.transition="left 0.5s";
              ul.style.left=-div.offsetWidth*5+"px";//
             }else if (ul.offsetLeft>=-div.offsetWidth*5&&ul.offsetLeft<-div.offsetWidth*4.5) {
              ul.style.transition="left 0.5s";
              ul.style.left=-div.offsetWidth*5+"px";
             }else if (ul.offsetLeft>=-div.offsetWidth*4.5&&ul.offsetLeft<-div.offsetWidth*4) {
              ul.style.transition="left 0.5s";
              ul.style.left=-div.offsetWidth*4+"px";
             }else if (ul.offsetLeft>=-div.offsetWidth*4&&ul.offsetLeft<-div.offsetWidth*3.5) {
              ul.style.transition="left 0.5s";
              ul.style.left=-div.offsetWidth*4+"px";
             }else if (ul.offsetLeft>=-div.offsetWidth*3.5&&ul.offsetLeft<-div.offsetWidth*3) {
              ul.style.transition="left 0.5s";
              ul.style.left=-div.offsetWidth*3+"px";
             }else if (ul.offsetLeft>=-div.offsetWidth*3&&ul.offsetLeft<-div.offsetWidth*2.5) {
              ul.style.transition="left 0.5s";
              ul.style.left=-div.offsetWidth*3+"px";
             }else if (ul.offsetLeft>=-div.offsetWidth*2.5&&ul.offsetLeft<-div.offsetWidth*2) {
              ul.style.transition="left 0.5s";
              ul.style.left=-div.offsetWidth*2+"px";
             }else if (ul.offsetLeft>=-div.offsetWidth*2&&ul.offsetLeft<-div.offsetWidth*1.5) {
              ul.style.transition="left 0.5s";
              ul.style.left=-div.offsetWidth*2+"px";
             }else if (ul.offsetLeft>=-div.offsetWidth*1.5&&ul.offsetLeft<-div.offsetWidth*1) {
              ul.style.transition="left 0.5s";
              ul.style.left=-div.offsetWidth*1+"px";
             }else if (ul.offsetLeft>=-div.offsetWidth*1&&ul.offsetLeft<-div.offsetWidth*0.5) {
              ul.style.transition="left 0.5s";
              ul.style.left=-div.offsetWidth*1+"px";
             }else if (ul.offsetLeft>=-div.offsetWidth*0.5&&ul.offsetLeft<-div.offsetWidth*0) {
              ul.style.transition="none";
              ul.style.left=-div.offsetWidth*5+"px";
             }
        }else if (disX2<0) {//当滑动方向为负时
              if(ul.offsetLeft<=-div.offsetWidth*0&&ul.offsetLeft>-div.offsetWidth*0.5) {
              ul.style.transition="left 0.5s";
              ul.style.left=-div.offsetWidth*0+"px";
             }else if (ul.offsetLeft<=-div.offsetWidth*0.5&&ul.offsetLeft>-div.offsetWidth*1) {
              ul.style.transition="left 0.5s";
              ul.style.left=-div.offsetWidth*0+"px";
             }else if (ul.offsetLeft<=-div.offsetWidth*18&&ul.offsetLeft>-div.offsetWidth*1.5) {
              ul.style.transition="left 0.5s";
              ul.style.left=-div.offsetWidth*1+"px";
             }else if (ul.offsetLeft<=-div.offsetWidth*1.5&&ul.offsetLeft>-div.offsetWidth*2) {
              ul.style.transition="left 0.5s";
              ul.style.left=-div.offsetWidth*1+"px";
             }else if (ul.offsetLeft<=-div.offsetWidth*2&&ul.offsetLeft>-div.offsetWidth*2.5) {
              ul.style.transition="left 0.5s";
              ul.style.left=-div.offsetWidth*2+"px";
             }else if (ul.offsetLeft<=-div.offsetWidth*2.5&&ul.offsetLeft>-div.offsetWidth*3) {
              ul.style.transition="left 0.5s";
              ul.style.left=-div.offsetWidth*2+"px";
             }else if (ul.offsetLeft<=-div.offsetWidth*3&&ul.offsetLeft>-div.offsetWidth*3.5) {
              ul.style.transition="left 0.5s";
              ul.style.left=-div.offsetWidth*3+"px";
             }else if (ul.offsetLeft<=-div.offsetWidth*3.5&&ul.offsetLeft>-div.offsetWidth*4) {
              ul.style.transition="left 0.5s";
              ul.style.left=-div.offsetWidth*3+"px";
            } else if (ul.offsetLeft<=-div.offsetWidth*9) {
              ul.style.left=-div.offsetWidth*4+"px"; 
             }else if (ul.offsetLeft<=-div.offsetWidth*4&&ul.offsetLeft>-div.offsetWidth*4.5) {
              ul.style.transition="left 0.5s";
              ul.style.left=-div.offsetWidth*4+"px";
             }else if (ul.offsetLeft<=-div.offsetWidth*4.5&&ul.offsetLeft>-div.offsetWidth*5) {
              ul.style.transition="left 0.5s";
              ul.style.left=-div.offsetWidth*5+"px";
             }else if (ul.offsetLeft<=-div.offsetWidth*5&&ul.offsetLeft>-div.offsetWidth*5.5) {
              ul.style.transition="left 0.5s";
              ul.style.left=-div.offsetWidth*5+"px";
             }else if (ul.offsetLeft<=-div.offsetWidth*5.5&&ul.offsetLeft>-div.offsetWidth*6) {
              ul.style.transition="left 0.5s";
              ul.style.left=-div.offsetWidth*6+"px";
             }else if (ul.offsetLeft<=-div.offsetWidth*6&&ul.offsetLeft>-div.offsetWidth*6.5) {
              ul.style.transition="left 0.5s";
              ul.style.left=-div.offsetWidth*6+"px";
             }else if (ul.offsetLeft<=-div.offsetWidth*6.5&&ul.offsetLeft>-div.offsetWidth*7) {
              ul.style.transition="left 0.5s";
              ul.style.left=-div.offsetWidth*7+"px";
             }else if (ul.offsetLeft<=-div.offsetWidth*7&&ul.offsetLeft>-div.offsetWidth*7.5) {
              ul.style.transition="left 0.5s";
              ul.style.left=-div.offsetWidth*7+"px";
             }else if (ul.offsetLeft<=-div.offsetWidth*7.5&&ul.offsetLeft>-div.offsetWidth*8) {
              ul.style.transition="left 0.5s";
              ul.style.left=-div.offsetWidth*8+"px";
             }else if (ul.offsetLeft<=-div.offsetWidth*8&&ul.offsetLeft>-div.offsetWidth*8.5) {
              ul.style.transition="left 0.5s";
              ul.style.left=-div.offsetWidth*8+"px";
             }else if (ul.offsetLeft<=-div.offsetWidth*8.5&&ul.offsetLeft>-div.offsetWidth*9) {
              ul.style.transition="none";
              ul.style.left=-div.offsetWidth*4+"px";
             } 

        }
        time=setInterval(function(){
      if (i==5) {
        i=0;
      }else{
        i+=1;
      }
       if(ul.offsetLeft==0){
        ul.style.Left=-div.offsetWidth*5+"px";
        i=1;
      }else if(ul.offsetLeft==-div.offsetWidth){
        ul.style.Left=-div.offsetWidth*6+"px";
        i=2;
      }else if(ul.offsetLeft==-div.offsetWidth*2){
        ul.style.Left=-div.offsetWidth*7+"px";
        i=3;
      }else if(ul.offsetLeft==-div.offsetWidth*3){
        ul.style.Left=-div.offsetWidth*8+"px";
        i=4;
      }else if(ul.offsetLeft==-div.offsetWidth*4){
        ul.style.Left=-div.offsetWidth*9+"px";
        i=0;
      }else if(ul.offsetLeft==-div.offsetWidth*5){
        ul.style.Left=-div.offsetWidth*5+"px";
        i=1;
      }else if(ul.offsetLeft==-div.offsetWidth*6){
        ul.style.Left=-div.offsetWidth*6+"px";
        i=2;
      }else if(ul.offsetLeft==-div.offsetWidth*7){
        ul.style.Left=-div.offsetWidth*7+"px";
        i=3;
      }else if(ul.offsetLeft==-div.offsetWidth*8){
        ul.style.Left=-div.offsetWidth*8+"px";
        i=4;
      }else if(ul.offsetLeft==-div.offsetWidth*9){
        ul.style.Left=-div.offsetWidth*9+"px";
        i=0;
      }
      new banner[i];
      
    },2000)

    })

    //自动轮播
    var banner=new Array();
    banner[1]=function(){
      ul.style.transition="left 1s"; 
      ul.style.left=-div.offsetWidth*6+"px";
    }
    banner[2]=function(){
      ul.style.transition="left 1s";
      ul.style.left=-div.offsetWidth*7+"px";
    }
    banner[3]=function(){
      ul.style.transition="left 1s";
      ul.style.left=-div.offsetWidth*8+"px";
    }
    banner[4]=function(){
      ul.style.transition="left 1s";
      ul.style.left=-div.offsetWidth*9+"px";

    }
    banner[5]=function(){
      ul.style.transition="none";
      ul.style.left=-div.offsetWidth*4+"px";
    }
    banner[0]=function(){
      ul.style.transition="left 1s";
      ul.style.left=-div.offsetWidth*5+"px";
    }


    var time;
    var i=0;
    time=setInterval(function(){
      if (i==5) {
        i=0;
      }else{
        i+=1;
      }
      new banner[i];
      
    },4000)


    //主体滑动效果
    zuti();
 function zuti(){
    var zutistart;
    var zutistart2;
    var zutimove;
    var zutiend;
    var beginTime ;
    var beginValue ;
    var endTime ;
    var endValue ;
    var disTime;
    var disValue;
    var content=document.getElementById("content");
    var zuti=document.getElementById("huadong");
    var ch=document.documentElement.clientHeight;
    content.style.height=ch+"px";
    zuti.addEventListener("touchstart",function(event){
      disValue=0;
      disTime=0;
      zuti.style.transition="none";
     zutistart=event.changedTouches[0].clientY-zuti.offsetTop;
     zutistart2=event.changedTouches[0].clientY;
     event.stopPropagation();

     beginTime=new Date().getTime();
     beginValue=zutistart2;
    })
    zuti.addEventListener("touchmove",function(event){
      event.stopPropagation();
      zutimove=event.changedTouches[0].clientY;
      zuti.style.top=zutimove-zutistart+"px";
      
        if (zuti.offsetTop>0) {
            zuti.style.top=(zutimove-zutistart)*(1-zuti.offsetTop/ch)+"px";
        } else if (zuti.offsetTop<-zuti.offsetHeight+document.documentElement.clientHeight) {
            zuti.style.top=-zuti.offsetHeight+document.documentElement.clientHeight-(zutistart2-zutimove)*(1-(zutistart2-zutimove)/ch)+"px";
           
      }
      endTime=new Date().getTime();
      endValue=zutimove;
      disValue=endValue-beginValue;
      disTime=endTime-beginTime;
    })
    zuti.addEventListener("touchend",function(event){
      var speed=disValue/disTime;
      if (zuti.offsetTop>0) {
        zuti.style.top=0+"px";
        zuti.style.transition="0.5s cubic-bezier(0, 1.85, 0.81, 1.71)";

      }else if (zuti.offsetTop<-zuti.offsetHeight+ch) {
        zuti.style.top=-zuti.offsetHeight+ch+"px";
        zuti.style.transition="0.5s cubic-bezier(0, 1.85, 0.81, 1.71)";
      }else{
        zuti.style.top=(zutimove-zutistart)+speed*100+"px";
        zuti.style.transition="0.5s";
      }
    })
    
    
 }   
   //section
   section1();
function section1(){
   var tabnav=document.getElementById("tab_nav");
   var tabnava=tabnav.getElementsByTagName("a");
   var tabwrap=document.getElementById("tab_wrap");
   var tablist=document.getElementById("tab_list");
   var tabul=tablist.getElementsByTagName("ul");
   tabnava[0].style.borderBottom="solid red";//默认开机时的颜色
   tabul[0].style.width=tablist.offsetWidth/6+"px";
   tabul[1].style.width=tablist.offsetWidth/6+"px";
   tabul[2].style.width=tablist.offsetWidth/6+"px";
   tabul[3].style.width=tablist.offsetWidth/6+"px";
   tabul[4].style.width=tablist.offsetWidth/6+"px";
   tabul[5].style.width=tablist.offsetWidth/6+"px";
   var tabwarapstart;
   var tabwrapmove;
   tabwrap.addEventListener("touchstart",function(event){
      tabwrapstart=event.changedTouches[0].clientX-tablist.offsetLeft;
      tablist.style.transition="none";
   });
   tabwrap.addEventListener("touchmove",function(event){
       tabwrapmove=event.changedTouches[0].clientX;
       tablist.style.left=tabwrapmove-tabwrapstart+"px";

   });
   tabwrap.addEventListener("touchend",function(event){
     tablist.style.transition="0.5s";
     //当向左滑动时
       if (tabwrapmove-tabwrapstart<0) {
            if (tablist.offsetLeft<=0&&tablist.offsetLeft>-tablist.offsetWidth*1/12) {
                tablist.style.left=0+"px";
                tabnava[0].style.borderBottom="solid red";
                tabnava[1].style.borderBottom="none";
                tabnava[2].style.borderBottom="none";
                tabnava[3].style.borderBottom="none";
                tabnava[4].style.borderBottom="none";
                tabnava[5].style.borderBottom="none";
            }else if (tablist.offsetLeft<=-tablist.offsetWidth*1/12&&tablist.offsetLeft>-tablist.offsetWidth*2/12) {
                tablist.style.left=-tablist.offsetWidth*1/6+"px";
                tabnava[0].style.borderBottom="none";
                tabnava[1].style.borderBottom="solid red";
                tabnava[2].style.borderBottom="none";
                tabnava[3].style.borderBottom="none";
                tabnava[4].style.borderBottom="none";
                tabnava[5].style.borderBottom="none";
            }else if (tablist.offsetLeft<=-tablist.offsetWidth*2/12&&tablist.offsetLeft>-tablist.offsetWidth*3/12) {
                tablist.style.left=-tablist.offsetWidth*1/6+"px";
                tabnava[0].style.borderBottom="none";
                tabnava[1].style.borderBottom="solid red";
                tabnava[2].style.borderBottom="none";
                tabnava[3].style.borderBottom="none";
                tabnava[4].style.borderBottom="none";
                tabnava[5].style.borderBottom="none";
            }else if (tablist.offsetLeft<=-tablist.offsetWidth*3/12&&tablist.offsetLeft>-tablist.offsetWidth*4/12) {
                tablist.style.left=-tablist.offsetWidth*2/6+"px";
                tabnava[0].style.borderBottom="none";
                tabnava[1].style.borderBottom="none";
                tabnava[2].style.borderBottom="solid red";
                tabnava[3].style.borderBottom="none";
                tabnava[4].style.borderBottom="none";
                tabnava[5].style.borderBottom="none";
            }else if (tablist.offsetLeft<=-tablist.offsetWidth*4/12&&tablist.offsetLeft>-tablist.offsetWidth*5/12) {
                tablist.style.left=-tablist.offsetWidth*2/6+"px";
                tabnava[0].style.borderBottom="none";
                tabnava[1].style.borderBottom="none";
                tabnava[2].style.borderBottom="solid red";
                tabnava[3].style.borderBottom="none";
                tabnava[4].style.borderBottom="none";
                tabnava[5].style.borderBottom="none";
            }else if (tablist.offsetLeft<=-tablist.offsetWidth*5/12&&tablist.offsetLeft>-tablist.offsetWidth*6/12) {
                tablist.style.left=-tablist.offsetWidth*3/6+"px";
                tabnava[0].style.borderBottom="none";
                tabnava[1].style.borderBottom="none";
                tabnava[2].style.borderBottom="none";
                tabnava[3].style.borderBottom="solid red";
                tabnava[4].style.borderBottom="none";
                tabnava[5].style.borderBottom="none";
            }else if (tablist.offsetLeft<=-tablist.offsetWidth*6/12&&tablist.offsetLeft>-tablist.offsetWidth*7/12) {
                tablist.style.left=-tablist.offsetWidth*3/6+"px";
                tabnava[0].style.borderBottom="none";
                tabnava[1].style.borderBottom="none";
                tabnava[2].style.borderBottom="none";
                tabnava[3].style.borderBottom="solid red";
                tabnava[4].style.borderBottom="none";
                tabnava[5].style.borderBottom="none";
            }else if (tablist.offsetLeft<=-tablist.offsetWidth*7/12&&tablist.offsetLeft>-tablist.offsetWidth*8/12) {
                tablist.style.left=-tablist.offsetWidth*4/6+"px";
                tabnava[0].style.borderBottom="none";
                tabnava[1].style.borderBottom="none";
                tabnava[2].style.borderBottom="none";
                tabnava[3].style.borderBottom="none";
                tabnava[4].style.borderBottom="solid red";
                tabnava[5].style.borderBottom="none";
            }else if (tablist.offsetLeft<=-tablist.offsetWidth*8/12&&tablist.offsetLeft>-tablist.offsetWidth*9/12) {
                tablist.style.left=-tablist.offsetWidth*4/6+"px";
                tabnava[0].style.borderBottom="none";
                tabnava[1].style.borderBottom="none";
                tabnava[2].style.borderBottom="none";
                tabnava[3].style.borderBottom="none";
                tabnava[4].style.borderBottom="solid red";
                tabnava[5].style.borderBottom="none";
            }else if (tablist.offsetLeft<=-tablist.offsetWidth*9/12&&tablist.offsetLeft>-tablist.offsetWidth*10/12) {
                tablist.style.left=-tablist.offsetWidth*5/6+"px";
                tabnava[0].style.borderBottom="none";
                tabnava[1].style.borderBottom="none";
                tabnava[2].style.borderBottom="none";
                tabnava[3].style.borderBottom="none";
                tabnava[4].style.borderBottom="none";
                tabnava[5].style.borderBottom="solid red";
            } if (tablist.offsetLeft<=-tablist.offsetWidth*10/12) {
                tablist.style.left=-tablist.offsetWidth*5/6+"px";
                 tablist.style.transition="0.5s cubic-bezier(0,1.85,.81,1.71)";
                tabnava[0].style.borderBottom="none";
                tabnava[1].style.borderBottom="none";
                tabnava[2].style.borderBottom="none";
                tabnava[3].style.borderBottom="none";
                tabnava[4].style.borderBottom="none";
                tabnava[5].style.borderBottom="solid red";
            }
           //当向右滑动时
       }else if (tabwrapmove-tabwrapstart>0) {
          if (tablist.offsetLeft<=0&&tablist.offsetLeft>-tablist.offsetWidth*1/12) {
                tablist.style.left=0+"px";
                tabnava[0].style.borderBottom="solid red";
                tabnava[1].style.borderBottom="none";
                tabnava[2].style.borderBottom="none";
                tabnava[3].style.borderBottom="none";
                tabnava[4].style.borderBottom="none";
                tabnava[5].style.borderBottom="none";
            }else if (tablist.offsetLeft<=-tablist.offsetWidth*1/12&&tablist.offsetLeft>-tablist.offsetWidth*2/12) {
                tablist.style.left=-tablist.offsetWidth*1/6+"px";
                tabnava[0].style.borderBottom="none";
                tabnava[1].style.borderBottom="solid red";
                tabnava[2].style.borderBottom="none";
                tabnava[3].style.borderBottom="none";
                tabnava[4].style.borderBottom="none";
                tabnava[5].style.borderBottom="none";
            }else if (tablist.offsetLeft<=-tablist.offsetWidth*2/12&&tablist.offsetLeft>-tablist.offsetWidth*3/12) {
                tablist.style.left=-tablist.offsetWidth*1/6+"px";
                tabnava[0].style.borderBottom="none";
                tabnava[1].style.borderBottom="solid red";
                tabnava[2].style.borderBottom="none";
                tabnava[3].style.borderBottom="none";
                tabnava[4].style.borderBottom="none";
                tabnava[5].style.borderBottom="none";
            }else if (tablist.offsetLeft<=-tablist.offsetWidth*3/12&&tablist.offsetLeft>-tablist.offsetWidth*4/12) {
                tablist.style.left=-tablist.offsetWidth*2/6+"px";
                tabnava[0].style.borderBottom="none";
                tabnava[1].style.borderBottom="none";
                tabnava[2].style.borderBottom="solid red";
                tabnava[3].style.borderBottom="none";
                tabnava[4].style.borderBottom="none";
                tabnava[5].style.borderBottom="none";
            }else if (tablist.offsetLeft<=-tablist.offsetWidth*4/12&&tablist.offsetLeft>-tablist.offsetWidth*5/12) {
                tablist.style.left=-tablist.offsetWidth*2/6+"px";
                tabnava[0].style.borderBottom="none";
                tabnava[1].style.borderBottom="none";
                tabnava[2].style.borderBottom="solid red";
                tabnava[3].style.borderBottom="none";
                tabnava[4].style.borderBottom="none";
                tabnava[5].style.borderBottom="none";
            }else if (tablist.offsetLeft<=-tablist.offsetWidth*5/12&&tablist.offsetLeft>-tablist.offsetWidth*6/12) {
                tablist.style.left=-tablist.offsetWidth*3/6+"px";tabnava[0].style.borderBottom="none";
                tabnava[0].style.borderBottom="none";
                tabnava[1].style.borderBottom="none";
                tabnava[2].style.borderBottom="none";
                tabnava[3].style.borderBottom="solid red";
                tabnava[4].style.borderBottom="none";
                tabnava[5].style.borderBottom="none";
            }else if (tablist.offsetLeft<=-tablist.offsetWidth*6/12&&tablist.offsetLeft>-tablist.offsetWidth*7/12) {
                tablist.style.left=-tablist.offsetWidth*3/6+"px";
                tabnava[0].style.borderBottom="none";
                tabnava[1].style.borderBottom="none";
                tabnava[2].style.borderBottom="none";
                tabnava[3].style.borderBottom="solid red";
                tabnava[4].style.borderBottom="none";
                tabnava[5].style.borderBottom="none";
            }else if (tablist.offsetLeft<=-tablist.offsetWidth*7/12&&tablist.offsetLeft>-tablist.offsetWidth*8/12) {
                tablist.style.left=-tablist.offsetWidth*4/6+"px";
                tabnava[0].style.borderBottom="none";
                tabnava[1].style.borderBottom="none";
                tabnava[2].style.borderBottom="none";
                tabnava[3].style.borderBottom="none";
                tabnava[4].style.borderBottom="solid red";
                tabnava[5].style.borderBottom="none";
            }else if (tablist.offsetLeft<=-tablist.offsetWidth*8/12&&tablist.offsetLeft>-tablist.offsetWidth*9/12) {
                tablist.style.left=-tablist.offsetWidth*4/6+"px";
                tabnava[0].style.borderBottom="none";
                tabnava[1].style.borderBottom="none";
                tabnava[2].style.borderBottom="none";
                tabnava[3].style.borderBottom="none";
                tabnava[4].style.borderBottom="solid red";
                tabnava[5].style.borderBottom="none";
            }else if (tablist.offsetLeft<=-tablist.offsetWidth*9/12&&tablist.offsetLeft>-tablist.offsetWidth*10/12) {
                tablist.style.left=-tablist.offsetWidth*5/6+"px";
                tabnava[0].style.borderBottom="none";
                tabnava[1].style.borderBottom="none";
                tabnava[2].style.borderBottom="none";
                tabnava[3].style.borderBottom="none";
                tabnava[4].style.borderBottom="none";
                tabnava[5].style.borderBottom="solid red";
            } else if (tablist.offsetLeft>0) {
              tablist.style.left=0+"px";
              tablist.style.transition="0.5s cubic-bezier(0,1.85,.81,1.71)";
                tabnava[0].style.borderBottom="solid red";
                tabnava[1].style.borderBottom="none";
                tabnava[2].style.borderBottom="none";
                tabnava[3].style.borderBottom="none";
                tabnava[4].style.borderBottom="none";
                tabnava[5].style.borderBottom="none";
            }
       }
       

   });
}
 

  section2();
function section2(){
   var tabnav=document.getElementById("tab2_nav");
   var tabnava=tabnav.getElementsByTagName("a");
   var tabwrap=document.getElementById("tab2_wrap");
   var tablist=document.getElementById("tab2_list");
   var tabul=tablist.getElementsByTagName("ul");
   tabnava[0].style.borderBottom="solid red";//默认开机时的颜色
   tabul[0].style.width=tablist.offsetWidth/6+"px";
   tabul[1].style.width=tablist.offsetWidth/6+"px";
   tabul[2].style.width=tablist.offsetWidth/6+"px";
   tabul[3].style.width=tablist.offsetWidth/6+"px";
   tabul[4].style.width=tablist.offsetWidth/6+"px";
   tabul[5].style.width=tablist.offsetWidth/6+"px";
   var tabwarapstart;
   var tabwrapmove;
   tabwrap.addEventListener("touchstart",function(event){
      tabwrapstart=event.changedTouches[0].clientX-tablist.offsetLeft;
      tablist.style.transition="none";
   });
   tabwrap.addEventListener("touchmove",function(event){
       tabwrapmove=event.changedTouches[0].clientX;
       tablist.style.left=tabwrapmove-tabwrapstart+"px";

   });
   tabwrap.addEventListener("touchend",function(event){
     tablist.style.transition="0.5s";
     //当向左滑动时
       if (tabwrapmove-tabwrapstart<0) {
            if (tablist.offsetLeft<=0&&tablist.offsetLeft>-tablist.offsetWidth*1/12) {
                tablist.style.left=0+"px";
                tabnava[0].style.borderBottom="solid red";
                tabnava[1].style.borderBottom="none";
                tabnava[2].style.borderBottom="none";
                tabnava[3].style.borderBottom="none";
                tabnava[4].style.borderBottom="none";
                tabnava[5].style.borderBottom="none";
            }else if (tablist.offsetLeft<=-tablist.offsetWidth*1/12&&tablist.offsetLeft>-tablist.offsetWidth*2/12) {
                tablist.style.left=-tablist.offsetWidth*1/6+"px";
                tabnava[0].style.borderBottom="none";
                tabnava[1].style.borderBottom="solid red";
                tabnava[2].style.borderBottom="none";
                tabnava[3].style.borderBottom="none";
                tabnava[4].style.borderBottom="none";
                tabnava[5].style.borderBottom="none";
            }else if (tablist.offsetLeft<=-tablist.offsetWidth*2/12&&tablist.offsetLeft>-tablist.offsetWidth*3/12) {
                tablist.style.left=-tablist.offsetWidth*1/6+"px";
                tabnava[0].style.borderBottom="none";
                tabnava[1].style.borderBottom="solid red";
                tabnava[2].style.borderBottom="none";
                tabnava[3].style.borderBottom="none";
                tabnava[4].style.borderBottom="none";
                tabnava[5].style.borderBottom="none";
            }else if (tablist.offsetLeft<=-tablist.offsetWidth*3/12&&tablist.offsetLeft>-tablist.offsetWidth*4/12) {
                tablist.style.left=-tablist.offsetWidth*2/6+"px";
                tabnava[0].style.borderBottom="none";
                tabnava[1].style.borderBottom="none";
                tabnava[2].style.borderBottom="solid red";
                tabnava[3].style.borderBottom="none";
                tabnava[4].style.borderBottom="none";
                tabnava[5].style.borderBottom="none";
            }else if (tablist.offsetLeft<=-tablist.offsetWidth*4/12&&tablist.offsetLeft>-tablist.offsetWidth*5/12) {
                tablist.style.left=-tablist.offsetWidth*2/6+"px";
                tabnava[0].style.borderBottom="none";
                tabnava[1].style.borderBottom="none";
                tabnava[2].style.borderBottom="solid red";
                tabnava[3].style.borderBottom="none";
                tabnava[4].style.borderBottom="none";
                tabnava[5].style.borderBottom="none";
            }else if (tablist.offsetLeft<=-tablist.offsetWidth*5/12&&tablist.offsetLeft>-tablist.offsetWidth*6/12) {
                tablist.style.left=-tablist.offsetWidth*3/6+"px";
                tabnava[0].style.borderBottom="none";
                tabnava[1].style.borderBottom="none";
                tabnava[2].style.borderBottom="none";
                tabnava[3].style.borderBottom="solid red";
                tabnava[4].style.borderBottom="none";
                tabnava[5].style.borderBottom="none";
            }else if (tablist.offsetLeft<=-tablist.offsetWidth*6/12&&tablist.offsetLeft>-tablist.offsetWidth*7/12) {
                tablist.style.left=-tablist.offsetWidth*3/6+"px";
                tabnava[0].style.borderBottom="none";
                tabnava[1].style.borderBottom="none";
                tabnava[2].style.borderBottom="none";
                tabnava[3].style.borderBottom="solid red";
                tabnava[4].style.borderBottom="none";
                tabnava[5].style.borderBottom="none";
            }else if (tablist.offsetLeft<=-tablist.offsetWidth*7/12&&tablist.offsetLeft>-tablist.offsetWidth*8/12) {
                tablist.style.left=-tablist.offsetWidth*4/6+"px";
                tabnava[0].style.borderBottom="none";
                tabnava[1].style.borderBottom="none";
                tabnava[2].style.borderBottom="none";
                tabnava[3].style.borderBottom="none";
                tabnava[4].style.borderBottom="solid red";
                tabnava[5].style.borderBottom="none";
            }else if (tablist.offsetLeft<=-tablist.offsetWidth*8/12&&tablist.offsetLeft>-tablist.offsetWidth*9/12) {
                tablist.style.left=-tablist.offsetWidth*4/6+"px";
                tabnava[0].style.borderBottom="none";
                tabnava[1].style.borderBottom="none";
                tabnava[2].style.borderBottom="none";
                tabnava[3].style.borderBottom="none";
                tabnava[4].style.borderBottom="solid red";
                tabnava[5].style.borderBottom="none";
            }else if (tablist.offsetLeft<=-tablist.offsetWidth*9/12&&tablist.offsetLeft>-tablist.offsetWidth*10/12) {
                tablist.style.left=-tablist.offsetWidth*5/6+"px";
                tabnava[0].style.borderBottom="none";
                tabnava[1].style.borderBottom="none";
                tabnava[2].style.borderBottom="none";
                tabnava[3].style.borderBottom="none";
                tabnava[4].style.borderBottom="none";
                tabnava[5].style.borderBottom="solid red";
            } if (tablist.offsetLeft<=-tablist.offsetWidth*10/12) {
                tablist.style.left=-tablist.offsetWidth*5/6+"px";
                 tablist.style.transition="0.5s cubic-bezier(0,1.85,.81,1.71)";
                tabnava[0].style.borderBottom="none";
                tabnava[1].style.borderBottom="none";
                tabnava[2].style.borderBottom="none";
                tabnava[3].style.borderBottom="none";
                tabnava[4].style.borderBottom="none";
                tabnava[5].style.borderBottom="solid red";
            }
           //当向右滑动时
       }else if (tabwrapmove-tabwrapstart>0) {
          if (tablist.offsetLeft<=0&&tablist.offsetLeft>-tablist.offsetWidth*1/12) {
                tablist.style.left=0+"px";
                tabnava[0].style.borderBottom="solid red";
                tabnava[1].style.borderBottom="none";
                tabnava[2].style.borderBottom="none";
                tabnava[3].style.borderBottom="none";
                tabnava[4].style.borderBottom="none";
                tabnava[5].style.borderBottom="none";
            }else if (tablist.offsetLeft<=-tablist.offsetWidth*1/12&&tablist.offsetLeft>-tablist.offsetWidth*2/12) {
                tablist.style.left=-tablist.offsetWidth*1/6+"px";
                tabnava[0].style.borderBottom="none";
                tabnava[1].style.borderBottom="solid red";
                tabnava[2].style.borderBottom="none";
                tabnava[3].style.borderBottom="none";
                tabnava[4].style.borderBottom="none";
                tabnava[5].style.borderBottom="none";
            }else if (tablist.offsetLeft<=-tablist.offsetWidth*2/12&&tablist.offsetLeft>-tablist.offsetWidth*3/12) {
                tablist.style.left=-tablist.offsetWidth*1/6+"px";
                tabnava[0].style.borderBottom="none";
                tabnava[1].style.borderBottom="solid red";
                tabnava[2].style.borderBottom="none";
                tabnava[3].style.borderBottom="none";
                tabnava[4].style.borderBottom="none";
                tabnava[5].style.borderBottom="none";
            }else if (tablist.offsetLeft<=-tablist.offsetWidth*3/12&&tablist.offsetLeft>-tablist.offsetWidth*4/12) {
                tablist.style.left=-tablist.offsetWidth*2/6+"px";
                tabnava[0].style.borderBottom="none";
                tabnava[1].style.borderBottom="none";
                tabnava[2].style.borderBottom="solid red";
                tabnava[3].style.borderBottom="none";
                tabnava[4].style.borderBottom="none";
                tabnava[5].style.borderBottom="none";
            }else if (tablist.offsetLeft<=-tablist.offsetWidth*4/12&&tablist.offsetLeft>-tablist.offsetWidth*5/12) {
                tablist.style.left=-tablist.offsetWidth*2/6+"px";
                tabnava[0].style.borderBottom="none";
                tabnava[1].style.borderBottom="none";
                tabnava[2].style.borderBottom="solid red";
                tabnava[3].style.borderBottom="none";
                tabnava[4].style.borderBottom="none";
                tabnava[5].style.borderBottom="none";
            }else if (tablist.offsetLeft<=-tablist.offsetWidth*5/12&&tablist.offsetLeft>-tablist.offsetWidth*6/12) {
                tablist.style.left=-tablist.offsetWidth*3/6+"px";tabnava[0].style.borderBottom="none";
                tabnava[0].style.borderBottom="none";
                tabnava[1].style.borderBottom="none";
                tabnava[2].style.borderBottom="none";
                tabnava[3].style.borderBottom="solid red";
                tabnava[4].style.borderBottom="none";
                tabnava[5].style.borderBottom="none";
            }else if (tablist.offsetLeft<=-tablist.offsetWidth*6/12&&tablist.offsetLeft>-tablist.offsetWidth*7/12) {
                tablist.style.left=-tablist.offsetWidth*3/6+"px";
                tabnava[0].style.borderBottom="none";
                tabnava[1].style.borderBottom="none";
                tabnava[2].style.borderBottom="none";
                tabnava[3].style.borderBottom="solid red";
                tabnava[4].style.borderBottom="none";
                tabnava[5].style.borderBottom="none";
            }else if (tablist.offsetLeft<=-tablist.offsetWidth*7/12&&tablist.offsetLeft>-tablist.offsetWidth*8/12) {
                tablist.style.left=-tablist.offsetWidth*4/6+"px";
                tabnava[0].style.borderBottom="none";
                tabnava[1].style.borderBottom="none";
                tabnava[2].style.borderBottom="none";
                tabnava[3].style.borderBottom="none";
                tabnava[4].style.borderBottom="solid red";
                tabnava[5].style.borderBottom="none";
            }else if (tablist.offsetLeft<=-tablist.offsetWidth*8/12&&tablist.offsetLeft>-tablist.offsetWidth*9/12) {
                tablist.style.left=-tablist.offsetWidth*4/6+"px";
                tabnava[0].style.borderBottom="none";
                tabnava[1].style.borderBottom="none";
                tabnava[2].style.borderBottom="none";
                tabnava[3].style.borderBottom="none";
                tabnava[4].style.borderBottom="solid red";
                tabnava[5].style.borderBottom="none";
            }else if (tablist.offsetLeft<=-tablist.offsetWidth*9/12&&tablist.offsetLeft>-tablist.offsetWidth*10/12) {
                tablist.style.left=-tablist.offsetWidth*5/6+"px";
                tabnava[0].style.borderBottom="none";
                tabnava[1].style.borderBottom="none";
                tabnava[2].style.borderBottom="none";
                tabnava[3].style.borderBottom="none";
                tabnava[4].style.borderBottom="none";
                tabnava[5].style.borderBottom="solid red";
            } else if (tablist.offsetLeft>0) {
              tablist.style.left=0+"px";
              tablist.style.transition="0.5s cubic-bezier(0,1.85,.81,1.71)";
                tabnava[0].style.borderBottom="solid red";
                tabnava[1].style.borderBottom="none";
                tabnava[2].style.borderBottom="none";
                tabnava[3].style.borderBottom="none";
                tabnava[4].style.borderBottom="none";
                tabnava[5].style.borderBottom="none";
            }
       }  

   });
}  
//vedio 点击窗口变大
vedio();
function vedio(){
  var div=document.getElementById("tab2_list");
  var li=div.getElementsByTagName("li");
  var tanchuang=document.getElementById("tanchuang");
  var close=document.getElementById("close");

  var mp4=[
     //经典
      "mp4/经典1.mp4",
      "mp4/经典2.mp4",
      "mp4/经典3.mp4",
      "mp4/经典4.mp4",
      "mp4/经典5.mp4",
      "mp4/经典6.mp4",
      //影视
      "mp4/影视1.mp4",
      "mp4/影视2.mp4",
      "mp4/影视3.mp4",
      "mp4/影视4.mp4",
      "mp4/影视5.mp4",
      "mp4/影视6.mp4",
       //舞蹈
      "mp4/舞蹈1.mp4",
      "mp4/舞蹈2.mp4",
      "mp4/舞蹈3.mp4",
      "mp4/舞蹈4.mp4",
      "mp4/舞蹈5.mp4",
      "mp4/舞蹈6.mp4",
      //动漫
      "mp4/动漫1.mp4",
      "mp4/动漫2.mp4",
      "mp4/动漫3.mp4",
      "mp4/动漫4.mp4",
      "mp4/动漫5.mp4",
      "mp4/动漫6.mp4",
      //bgm
      "mp4/bgm1.mp4",
      "mp4/bgm2.mp4",
      "mp4/bgm3.mp4",
      "mp4/bgm4.mp4",
      "mp4/bgm5.mp4",
      "mp4/bgm6.mp4",
      //其它
      "mp4/其它1.mp4",
      "mp4/其它2.mp4",
      "mp4/其它3.mp4",
      "mp4/其它4.mp4",
      "mp4/其它5.mp4",
      "mp4/其它6.mp4",
      
  ]
  var video=[
      document.createElement("VIDEO"),
      document.createElement("VIDEO"),
      document.createElement("VIDEO"),
      document.createElement("VIDEO"),
      document.createElement("VIDEO"),
      document.createElement("VIDEO"),
      document.createElement("VIDEO"),
      document.createElement("VIDEO"),
      document.createElement("VIDEO"),
      document.createElement("VIDEO"),
      document.createElement("VIDEO"),
      document.createElement("VIDEO"),
      document.createElement("VIDEO"),
      document.createElement("VIDEO"),
      document.createElement("VIDEO"),
      document.createElement("VIDEO"),
      document.createElement("VIDEO"),
      document.createElement("VIDEO"),
      document.createElement("VIDEO"),
      document.createElement("VIDEO"),
      document.createElement("VIDEO"),
      document.createElement("VIDEO"),
      document.createElement("VIDEO"),
      document.createElement("VIDEO"),
      document.createElement("VIDEO"),
      document.createElement("VIDEO"),
      document.createElement("VIDEO"),
      document.createElement("VIDEO"),
      document.createElement("VIDEO"),
      document.createElement("VIDEO"),
      document.createElement("VIDEO"),
      document.createElement("VIDEO"),
      document.createElement("VIDEO"),
      document.createElement("VIDEO"),
      document.createElement("VIDEO"),
      document.createElement("VIDEO"),
      
  ]

  for(var i=0;i<li.length;i++){
    li[i].appendChild(video[i]);
    video[i].src=mp4[i];
    
    li[i].onclick=function(){
        tanchuang.style.display="block";
        tanchuang.getElementsByTagName("video")[0].src=this.getElementsByTagName("video")[0].src;
        tanchuang.children[1].play();
       //console.log(tanchuang);
    }
    close.onclick=function(){
        tanchuang.style.display="none";
        tanchuang.children[1].pause();
        tanchuang.removeChild(this.parentNode.children[1].src);
    }
  }
}
 //音乐
audio();
function audio(){
       //audio 点击图片切换
        var div=document.getElementsByClassName("tldiv2");
        var s1=document.getElementsByClassName("s1");
        var s2=document.getElementsByClassName("s2");
        for (var i = 0;i<div.length ; i++) {
          s1[i].onclick=function(){
            for (var i = 0;i<div.length;i++) {
                div[i].id="none";
                audio[i].pause();
            }
            this.parentNode.id="tldiv2";
            this.parentNode.parentNode.parentNode.children[2].play();
          }
          s2[i].onclick=function(){
            this.parentNode.id="none";
            this.parentNode.parentNode.parentNode.children[2].pause();
            
          }
          
        }

        //audio 背景图以及点击切换
        var li=document.getElementById("tab_list").getElementsByTagName("li");
        var img=[
        "url(imgs/audio_mengdeguangdian.jpg)",
        "url(imgs/audio_huihuxidetong.jpg)",
        "url(imgs/audio_sudi.jpg)",
        "url(imgs/audio_tianxia.jpg)",
        "url(imgs/audio_qindong.jpg)",
        "url(imgs/audio_gongfu.jpg)",
          "url(imgs/audio_aishang.jpg)",
          "url(imgs/audio_danggui.jpg)",
          "url(imgs/audio_wuyunran.jpg)",
          "url(imgs/audio_haohan.jpg)",
          "url(imgs/audio_yiyanwannian.jpg)",
          "url(imgs/audio_taohuadao.jpg)",
        "url(imgs/audio_qitian.jpg)",
        "url(imgs/audio_xieerpomaoerpo.jpg)",
        "url(imgs/audio_wodehuabanxie.jpg)",
        "url(imgs/audio_shanhai.jpg)",
        "url(imgs/audio_shuangjiegun.jpg)",
        "url(imgs/audio_qitiandasheng.jpg)",
          "url(imgs/audio_caochao.jpg)",
          "url(imgs/audio_zuichibi.jpg)",
          "url(imgs/audio_diertiantang.jpg)",
          "url(imgs/audio_shashou.jpg)",
          "url(imgs/audio_heijian.jpg)",
          "url(imgs/audio_buchaobuyonghuaqian.jpg)",
        "url(imgs/audio_qinhuaci.jpg)",
        "url(imgs/audio_hongcengkezhan.jpg)",
        "url(imgs/audio_huoyuanjia.jpg)",
        "url(imgs/audio_yequ.jpg)",
        "url(imgs/audio_yifuzhimin.jpg)",
        "url(imgs/audio_longjuanfeng.jpg)",
          "url(imgs/audio_cunyinyue.jpg)",
           "url(imgs/audio_cunyinyue.jpg)",
           "url(imgs/audio_cunyinyue.jpg)",
           "url(imgs/audio_cunyinyue.jpg)",
           "url(imgs/audio_cunyinyue.jpg)",
           "url(imgs/audio_cunyinyue.jpg)"
        ];
          for(var i=0;i<li.length;i++){
            li[i].style.backgroundImage=img[i];
          }
        //给li添加audio
        var mp3=[
          "mp3/梦的光点.mp3",
          "mp3/会呼吸的痛.mp3",
          "mp3/宿敌.mp3",
          "mp3/天下.mp3",
          "mp3/情动.mp3",
          "mp3/只要为你活一天.mp3",
            "mp3/爱殇.mp3",
            "mp3/当归.mp3",
            "mp3/乌云然.mp3",
            "mp3/浩瀚.mp3",
            "mp3/一眼万年.mp3",
            "mp3/桃花岛.mp3",
          "mp3/齐天.mp3",
          "mp3/鞋儿破帽儿破.mp3",
          "mp3/我的滑板鞋.mp3",
          "mp3/山海.mp3",
          "mp3/双截棍.mp3",
          "mp3/齐天大圣.m4a",
            "mp3/曹操.mp3",
            "mp3/醉赤壁.mp3",
            "mp3/第二天堂.mp3",
            "mp3/杀手.mp3",
            "mp3/黑键.mp3",
            "mp3/不潮不用花钱.mp3",
          "mp3/青花瓷.mp3",
          "mp3/红尘客栈.mp3",
          "mp3/霍元甲.mp3",
          "mp3/夜曲.mp3",
          "mp3/以父之名.mp3",
          "mp3/龙卷风.mp3",
             "mp3/天宫.mp3",
             "mp3/失去才懂.mp3",
             "mp3/舞步生风.mp3",
             "mp3/三生树.mp3",
             "mp3/心弦.mp3",
             "mp3/幻昼.mp3",
          
        ]
        
        var audio=[
          document.createElement("AUDIO"), 
          document.createElement("AUDIO"), 
          document.createElement("AUDIO"), 
          document.createElement("AUDIO"), 
          document.createElement("AUDIO"), 
          document.createElement("AUDIO"), 
          document.createElement("AUDIO"), 
          document.createElement("AUDIO"), 
          document.createElement("AUDIO"), 
          document.createElement("AUDIO"), 
          document.createElement("AUDIO"), 
          document.createElement("AUDIO"), 
          document.createElement("AUDIO"), 
          document.createElement("AUDIO"), 
          document.createElement("AUDIO"), 
          document.createElement("AUDIO"), 
          document.createElement("AUDIO"), 
          document.createElement("AUDIO"), 
          document.createElement("AUDIO"), 
          document.createElement("AUDIO"), 
          document.createElement("AUDIO"), 
          document.createElement("AUDIO"), 
          document.createElement("AUDIO"), 
          document.createElement("AUDIO"), 
          document.createElement("AUDIO"), 
          document.createElement("AUDIO"), 
          document.createElement("AUDIO"), 
          document.createElement("AUDIO"), 
          document.createElement("AUDIO"), 
          document.createElement("AUDIO"), 
          document.createElement("AUDIO"), 
          document.createElement("AUDIO"), 
          document.createElement("AUDIO"), 
          document.createElement("AUDIO"), 
          document.createElement("AUDIO"), 
          document.createElement("AUDIO"), 
        ]
        for(var i=0;i<li.length;i++){
          li[i].appendChild(audio[i]);
          
          audio[i].src=mp3[i];
       
           
      }
    }

//页脚
footer();
function footer(){
  var footer=document.getElementById("footer");
  var ul=footer.getElementsByTagName("ul")[0];
  var li=ul.getElementsByTagName("li");

  }
 }//window.onload


      

    
    
    
