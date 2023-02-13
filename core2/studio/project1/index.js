function newWindow() {
    var winPop = new Array();
     winPop[winPop.length] = window.open('top_right.html','window1','scrollbars=no,width=235,height=155,left=1000,top=200,screenX=1000,screenY=200');
   window.open('top_left.html','window2','scrollbars=no,width=235,height=155,left=325,top=200,screenX=325,screenY=200');
   window.open('bottom_left.html','window3','scrollbars=no,width=235,height=155,left=325,top=600,screenX=325,screenY=600');
   window.open('bottom_right.html','window4','scrollbars=no,width=235,height=155,left=1000,top=600,screenX=1000,screenY=600');
   window.open('center_page.html','window5','scrollbars=no,width=235,height=155,left=660,top=450,screenX=660,screenY=450');
}