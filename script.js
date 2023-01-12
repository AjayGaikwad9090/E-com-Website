var sideNav = document.getElementById('sidenav');
var menuBar = document.getElementById('menubar');
sideNav.style.width="0px";
menuBar.onclick=function(){
  if(sideNav.style.width=="0px"){
    sideNav.style.width="250px"
  }
  else{
    sideNav.style.width="0px"
  }
}

