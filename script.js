let btn = document.getElementsByClassName("bulb")[0];
let bulb = document.getElementsByClassName("center")[0];


function on(e){
  if(bulb.textContent.includes("Turn On")){
    bulb.src= "./BulbOn.png";
    bulb.textContent =" Turn off";
  }
else{
    bulb.src= "./BulbOff.png";
    bulb.textContent = "Turn On";
}

}
btn.addEventListener('click',on);
