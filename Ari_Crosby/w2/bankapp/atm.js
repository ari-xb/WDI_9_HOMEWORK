//console.log('hi');

var getSaveBal = document.getElementById('savebal').innerHTML;
var getCheckBal = document.getElementById('checkbal').innerHTML;

var saveWithBtn = document.getElementById('savwithbtn');
var saveDepBtn = document.getElementById('savdepbtn');

var cheWithBtn = document.getElementById('chewithbtn');
var cheDepBtn = document.getElementById('chedepbtn');

var saveInputBox = document.getElementById('saveinputbox');
var cheInputBox = document.getElementById('cheinputbox');

console.log(getSaveBal);
console.log(getCheckBal);

var changeBalToInt = function() {
  var saveBal = parseInt(getSaveBal);
  var checkBal = parseInt(getCheckBal);
  console.log(saveBal);
  console.log(checkBal);
}
changeBalToInt();

var saveDeposit = function() {
  
}

saveDepBtn.addEventListener('click', saveDeposit() {});
