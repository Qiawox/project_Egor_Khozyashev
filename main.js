function Random (){ 
  const max = 100000;
  return Math.round(Math.random() * max );
 }

  var colorArray = ["#0DC2FF", "#007DE8", "#0E5DFF", "#0C28EB", "#1600FF", "#000000", "red", "yellow", "grey", "pink"];
  var i = 0;

function changeColor(){
    document.getElementById('ch').style.background = colorArray[i];
    i++;
    if( i >= colorArray.length) {
        i = 0;
    }
}
 const btn = document.getElementById('button');
 const div = document.getElementById('ch1');
 const div1 = document.getElementById('ch');

function Reset() {
  document.getElementById("ch1").innerHTML = "";
  document.getElementById("ch").style.background = "none";
}
const clear = document.getElementById('clear');
clear.onclick = function() {
  div.innerHTML = Reset();
  div1.innerHTML = Reset();
}
 btn.onclick = function() {
   div.innerHTML = Random();
   div1.innerHTML = changeColor();
 }



