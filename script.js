let btn = document.getElementsByClassName("bulb")[0];
let bulb = document.getElementsByClassName("center")[0];


function on(e){
  if(btn.textContent.includes("Turn On")){
    bulb.src= "./BulbOn.png";
    btn.textContent =" Turn Off";
  }
else{
    bulb.src= "./BulbOff.png";
    btn.textContent = "Turn On";
}

}
btn.addEventListener('click',on);
