'use strict';

const ENDPOINT = 'https://api.rand.fun/number/integer?max=100';

const button = document.querySelector('.btn');

function call() {

    fetch(ENDPOINT)
        .then(respose => respose.json())
        .then(data => (console.log(data)));
    // .catch(error => console.log(error)));


}
button.addEventListener('click', call);