let thisH1 = document.getElementsByTagName("h1")[0];
let thisP = document.getElementsByTagName("p")[0];
let thisDiv = document.getElementsByTagName("div")[0];

function mouseIn(){
    thisH1.innerHTML = "你進來了";
}

function mouseOut(e){
    thisH1.innerHTML = "你出去了";
    thisP.innerHTML = "";
}

function mouseMove(e){
    // console.log(e);
    thisP.innerHTML= "你的位置: " + e.clientX + "," + e.clientY;
}
//addEventListener 將MouseEvent 會帶入 mouseMove 函數
//滑鼠游標進入該元件範圍
thisDiv.addEventListener("mouseover", mouseIn)
//滑鼠游標離開該元件範圍
thisDiv.addEventListener("mouseout", mouseOut)
//在該元件上移動游標 
thisDiv.addEventListener("mousemove", mouseMove)