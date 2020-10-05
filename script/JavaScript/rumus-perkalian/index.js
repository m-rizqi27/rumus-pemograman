function multiplied() {

    var number1 = document.getElementById('number1').value;
    var number2 = document.getElementById('number2').value;

    var multiplied = number1 * number2;
    var total = document.getElementById('total');
    total.innerHTML = "";
    total.innerHTML = "Total : " + multiplied;


}