var input1 = document.querySelector('#input1');
var input2 = document.querySelector('#input2');
var btn = document.querySelector('button');
var resultat = function (number1, number2) {
    return number1 + number2;
};
btn.addEventListener('click', function () {
    console.log(resultat(+input1.value, +input2.value));
});
