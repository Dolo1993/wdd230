// Define an array of fruits
const fruits = ['Apple', 'Banana', 'Blueberry', 'Cherry', 'Grape', 'Kiwi', 'Mango', 'Orange', 'Pineapple', 'Strawberry',
'Apricot', 'Avocado', 'Fragaria', 'Prunus', 'Dragonfruit', 'Durian', 'Feijoa', 'Guava'];

// Get the select elements for the three fruit options
const fruit1Select = document.getElementById('fruit1');
const fruit2Select = document.getElementById('fruit2');
const fruit3Select = document.getElementById('fruit3');

// Populate the select elements with options for each fruit
for (let i = 0; i < fruits.length; i++) {
    const option = document.createElement('option');
    option.text = fruits[i];
    option.value = fruits[i];
    fruit1Select.add(option);
    
    const option2 = document.createElement('option');
    option2.text = fruits[i];
    option2.value = fruits[i];
    fruit2Select.add(option2);
    
    const option3 = document.createElement('option');
    option3.text = fruits[i];
    option3.value = fruits[i];
    fruit3Select.add(option3);
}

// Get the form and the output area elements
const drinkForm = document.getElementById('drink-form');
const outputArea = document.getElementById('output-area');

// Add an event listener for the form submit event
drinkForm.addEventListener('submit', (event) => {
    // Prevent the form from submitting and reloading the page
    event.preventDefault();
    
    // Get the form values
    const firstName = document.getElementById('first-name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const fruit1 = document.getElementById('fruit1').value;
    const fruit2 = document.getElementById('fruit2').value;
    const fruit3 = document.getElementById('fruit3').value;
    const specialInstructions = document.getElementById('special-instructions').value;
    const date = new Date();
    
    // Set the output area values
    document.getElementById('output-name').textContent = firstName;
    document.getElementById('output-email').textContent = email;
    document.getElementById('output-phone').textContent = phone;
    document.getElementById('output-fruit1').textContent = fruit1;
    document.getElementById('output-fruit2').textContent = fruit2;
    document.getElementById('output-fruit3').textContent = fruit3;
    document.getElementById('output-special-instructions').textContent = specialInstructions;
    document.getElementById('output-date').textContent = date.toLocaleDateString();
    document.getElementById('output-carbs').textContent = Math.floor(Math.random() * 20) + 5;
    document.getElementById('output-protein').textContent = Math.floor(Math.random() * 5) + 1;
    document.getElementById('output-fat').textContent = Math.floor(Math.random() * 3) + 1;
    document.getElementById('output-sugar').textContent = Math.floor(Math.random() * 15) + 5;
    document.getElementById('output-calories').textContent = Math.floor(Math.random() * 100) + 50;
    
    // Show the output area
    outputArea.classList.remove('hidden');
});