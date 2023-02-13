const container = document.querySelector('#container');

const paragraph = document.createElement('p');

paragraph.textContent = "Hey I'm red!";
paragraph.style.color = 'red';

container.appendChild(paragraph);

const header3 = document.createElement('h3');

header3.textContent = "I'm a blue h3!";
header3.style.color = 'blue';

container.appendChild(header3);

const div = document.createElement('div');

div.setAttribute('style', 'border: solid black; background-color: pink');

const header1 = document.createElement('h1');

header1.textContent = "I'm in a div";

const paragraph2 = document.createElement('p');

paragraph2.textContent = "ME TOO!";

div.append(header1, paragraph2);

container.appendChild(div);

const btn = document.querySelector('#btn');

btn.onclick = () => alert("Hello World");

btn.addEventListener('click', () => {
    alert("Hello World");
});

btn.addEventListener('click', function (e) {
    console.log(e);
});

btn.addEventListener('click', function (e) {
    console.log(e.target);
});

btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
});