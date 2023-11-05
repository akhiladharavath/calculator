$(document).ready(function() {
  var $result = $("#result");
  var $numbers = $(".number");
  var $operators = $(".operator");
  var $clear = $("#clear");
  var $calculate = $("#calculate");

  // Event handler for number buttons
  $numbers.on("click", function() {
    var value = $(this).text();
    $result.val($result.val() + value);
  });

  // Event handler for operator buttons
  $operators.on("click", function() {
    var operator = $(this).text();
    $result.val($result.val() + " " + operator + " ");
  });

  // Event handler for clear button
  $clear.on("click", function() {
    $result.val("");
  });

  // Event handler for calculate button
  $calculate.on("click", function() {
    var expression = $result.val();
    var result;
    try {
      result = eval(expression); // Evaluate the expression
    } catch (error) {
      result = "Invalid expression";
    }
    $result.val(result);
  });
  
 
   $(".number").css("background-color", "red");   
  $(".operator").css("background-color","yellow");
   $("#clear").css("background-color","yellow");
    $("#calculate").css("background-color","yellow");
});
