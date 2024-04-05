
const valorElement = document.querySelector('#value');
const btnSomar = document.querySelector('#button');
const btnSub = document.querySelector('#button2');

let valor = 0;

btnSomar.addEventListener('click', function () {
    valor++;
    valorElement.textContent = valor;
});

btnSub.addEventListener('click', function () {
    valor--;
    valorElement.textContent = valor;
});
