var input = document.getElementById('inputBox');
var buttons = document.querySelectorAll('button');
// input.value = 5
var string = "";
var arr = Array.from('button');

function appendToResult(value) {
    input.value += value;
  }

  function performOperation(operator) {
    document.getElementById('inputBox').value += operator;
  }

  function clearResult() {
    document.getElementById('inputBox').value = '';
  }

function delResult(){
    input.value = input.value.slice(0, -1);
}
function percentageToResult(){
    input.value = parseFloat(input.value) / 100;
}
function calculateResult() {
    try {
      var result = eval(input.value);
      input.value = result.toFixed(3);
    } catch (error) {
      document.getElementById('inputBox').value = 'Error';
    }
}

//end code here....