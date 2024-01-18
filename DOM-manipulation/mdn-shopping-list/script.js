const ul = document.querySelector("ul");
const input = document.querySelector("#item");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    const item = input.value;
    input.value = "";

    const li = document.createElement("li");
    const span = document.createElement("span");
    const delBtn = document.createElement("button");

    li.appendChild(span);
    li.appendChild(delBtn);

    span.textContent = item;
    delBtn.textContent = "Delete";

    ul.appendChild(li);

    delBtn.addEventListener("click", () => {
        ul.removeChild(li);
    });

    input.focus();
});