(() => {
   let imageCon = document.querySelector("#imageCon"),
   drag = document.querySelector(".image-drag"),
   left = document.querySelector(".image-left"),
   draggingImg = false, 
   min = 0; 
   max = imageCon.offsetWidth;


   function onDown() {
    draggingImg = true; 
   }

   function onUp () {
    draggingImg = false; 
   }

   function onMove (event) {
   
    if(draggingImg==true) {
    let x = event.clientX - imageCon.getBoundingClientRect().left; 
    if(x < min){
      x = min; 
    } else if (x > max) {
      x = max - 10; 
    }

    drag.style.left = x + "px";
    left.style.width = x + "px"; 

   }
   }

   drag.addEventListener("mousedown", onDown);
   document.body.addEventListener("mouseup", onUp); 
   document.body.addEventListener("mousemove", onMove);

})();
