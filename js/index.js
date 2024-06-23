
function rollDice(){
const numberofroll = document.getElementById("roll-number");
const result = document.getElementById("resultphotos");
result.innerHTML = "";
const values = [];
const textresult = document.getElementById("result");

for (let i = 1; i <= numberofroll.value; i++) {
    let x = Math.floor(Math.random()*6)+1;
    values.push(x);
    result.innerHTML = result.innerHTML + `<img src="new/${x}.png" id = "photos">`;
}
 textresult.textContent = "dice : " + values.join(",")
}