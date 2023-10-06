const input = document.getElementById('fruit');
const suggestions = document.querySelector('.suggestions ul');
const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
   const userInput =str.toLowerCase();
   return fruit.filter (fruit => fruit.toLowerCase().includes(userInput));

}

function searchHandler(event) {
    const userInput = event.target.value;
    const results = search(userInput);
  
    if (results.length > 0) {
      document.getElementById('fruitDropdown').style.display = 'block';
      showSuggestions(results, userInput);
    } else {
      document.getElementById('fruitDropdown').style.display = 'none';
    }
  }
  
  
  function useSuggestion(event) {
    if (event.target.tagName === 'LI') {
      const suggestionText = event.target.textContent;  
      input.value = suggestionText;  
      suggestions.innerHTML = '';  
    }
  }
   

  function showSuggestions(results, inputVal) {
    const suggestionsList = document.querySelector('.suggestions ul');
  
    suggestionsList.innerHTML = '';
  
    for (let i = 0; i < Math.min(results.length, 5); i++) {
      const li = document.createElement('li');
      li.textContent = results[i];
      suggestionsList.appendChild(li);
    }
  }
  


input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);