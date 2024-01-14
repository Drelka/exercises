const container = document.querySelector("#container");
container.style.border = "5px solid pink";
container.style.borderBottom = "5px solid red";

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the text content inside the div. Yeah.";
container.appendChild(content);

const before = document.createElement("p");
before.classList.toggle(".before");
before.textContent = "paragraph inserted before div";
before.style.cssText = "font-size: 20px; color: white; background-color: black; padding-left: 5em";
before.style.fontWeight = "bold";
container.insertBefore(before, content);

const removeBtn = document.querySelector(".removeChild");
removeBtn.style.padding = "20px";
removeBtn.style.marginLeft = "10px";
removeBtn.style["background-color"] = "lime"
content.appendChild(removeBtn);

removeBtn.addEventListener("click", () => { container.removeChild(content); });

const addBtn = document.querySelector(".addChild");
addBtn.style.cssText = "color: yellow; background-color: red"
addBtn.style.padding = "10px";

addBtn.addEventListener("click", () => { container.appendChild(content); });

const listElement = document.createElement("li");
listElement.innerText = "This button removes itself too, because he's a child of the div it's removing." +
                        "It's also removing me, <li>, it's child."
removeBtn.appendChild(listElement);