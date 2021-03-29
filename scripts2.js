const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "Text content goes here";
container.appendChild(content);

const paragraphRedText = document.createElement("p");
paragraphRedText.style.color = "red";
paragraphRedText.textContent = "Hey I'm red!";
container.appendChild(paragraphRedText);

const h3BlueText = document.createElement("h3");
h3BlueText.style.color = "blue";
h3BlueText.textContent = "I'm a blue h3!";
container.appendChild(h3BlueText);

const divBlackBorder = document.createElement("div");
divBlackBorder.style.border = "3px solid black";
divBlackBorder.style.backgroundColor = "pink";

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div!";
divBlackBorder.appendChild(h1);

const p = document.createElement("p");
p.textContent = "Me too!";
divBlackBorder.appendChild(p);

container.appendChild(divBlackBorder);