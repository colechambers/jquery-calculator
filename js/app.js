$(document).ready(function() {
    $('span').click(function() {
      //http://api.jquery.com/attr/
      if($(this).attr('id') === "clear") {
        $('#screen').text("");
      }
      //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
      else if($(this).attr('id') === "equals") {
        calculate();
      }else {
        $('#screen').append($(this).text());
      }
    });
    function calculate() {
      if($('#screen').text === "") {
      }else {
        var inner = $('#screen').text();
        var operator = "";
        var op2Index;
        var op1 = "";
        var op2 = "";
        var result;
        for (var i = 0; i < inner.length; i++) {
        if (inner[i] == '÷' || inner[i] == 'x' || inner[i] == '+' || inner[i] == '-') {
          op2Index = i;
          operator = inner[i];
        }
        op1 = inner.substring(0, op2Index);
        op2 = inner.substring((op2Index+1), inner.length);
        op1 = parseInt(op1);
        op2 = parseInt(op2);
        if(operator === '÷') {
        result = op1 / op2;
        check(result);
        }
        else if (operator === 'x') {
        result = op1 * op2;
        check(result);
        }
        else if (operator === '+') {
        result = op1 + op2;
        check(result);
        }else {
        result = op1 - op2;
        check(result);
        }
      }
    }
  }
  function check(result) {
    if (isNaN(result)) {
      $('#screen').text('ERROR');
    }else {
      $('#screen').text(result);
    }
  }
});
