const list = document.querySelector("ul");
  const itemInput = document.querySelector("input[name='item']");
  const addButton = document.querySelector("button");

  addButton.addEventListener("click", function() {
    let itemValue = itemInput.value;
    itemInput.value = '';

    let li = document.createElement("li");
    let span = document.createElement("span");
    let deleteButton = document.createElement("button");

    span.textContent = itemValue;
    deleteButton.textContent = "❌";
    li.appendChild(span);
    li.appendChild(deleteButton);
    list.appendChild(li);

    deleteButton.addEventListener("click", function() {
      li.remove();
    });

    itemInput.focus();
  });