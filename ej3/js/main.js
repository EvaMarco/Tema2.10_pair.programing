'use strict';

const input = document.querySelector('.input');
const button = document.querySelector('.btn');
const name = document.querySelector('.name');
const avatar = document.querySelector('.imagen');
const repo = document.querySelector('.repo');

function call() {
    const ENDPOINT = `https://api.github.com/users/${input.value}`;
    fetch(ENDPOINT)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            name.innerHTML = data.name;
            avatar.src = data.avatar_url;
            repo.innerHTML = data.public_repos;
        })

};

button.addEventListener('click', call);