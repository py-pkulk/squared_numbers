const output = document.getElementById('output');
const inputnumber = document.getElementById('inputnumber');
const squaredbtn = document.getElementById('squared');

inputnumber.value ='';
inputnumber.focus();
squaredbtn.addEventListener('click', squaredresult);
output.textContent = "Squared Number = ";
function squaredresult(){
    let userinput = Number (inputnumber.value);
    let squaredoutput = userinput * userinput;
    output.textContent = squaredoutput + ' ';
    
}