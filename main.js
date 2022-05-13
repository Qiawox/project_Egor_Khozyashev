let phr = ['й','ц','у','к','е','н','г','ш','щ','з','х','ъ','ф','ы','в','а','п','р','о','л','д','ж','э','ю','б','ь','т','и','м','с','ч','я','q','w','e','r','t','y','u','i','o','p','l','k','j','h','g','f','d','s','a','z','x','c','v','b','n','m','1','2','3','4','5','6','7','8','9'];
  let button = document.getElementById('button');
  let phrase = document.getElementById('ch1');

button.addEventListener('click', function() {
  let rand = Math.floor(Math.random() * phr.length);
  phrase.innerHTML = phr[rand];
});
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
   div1.innerHTML = changeColor();
 }



