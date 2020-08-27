//Fetch Json file
function loadItems() {
    return fetch('data/data.json')
    .then(response => response.json())
    .then(json => json.items);
}

//Update item
function displayItems(items) {
    const container = document.querySelector('.items');
    container.innerHTML = items.map(item => createHTMLString(item)).join('');
}

//Create HTML list
function createHTMLString(item) {
    return `
    <li class="item">
        <img src="${item.img}" alt="${item.type}" class="item__thumbnail" />
        <span class="item__description">${item.gender}, ${item.size}</span>
    </li>
    `;
}

function setEventListeners(items) {
    const logo = document.querySelector('.logo');
    const buttons = document.querySelector('.buttons');

    logo.addEventListener('click', () => displayItems(items));

    buttons.addEventListener('click', (event) => {
        onButtonClick(event, items);
    });
}

function onButtonClick(event, items) {
    const dataset = event.target.dataset;
    const key = dataset.key;
    const value = dataset.value;    
    
    if(key == null || value == null) {
        return;
    }

    //updateItems(items, key, value);
    displayItems(items.filter(item => item[key] === value));
}

//Make the items matching
// function updateItems(items, key, value) {
//     items.forEach(item => {
//         if(item.dataset[key] === value) {
//             item.classList.remove('invisible');
//         }else {
//             item.classList.add('invisble');
//         }
//     });
// }

//main
loadItems()
    .then(items => {
        displayItems(items);
        setEventListeners(items);
    })
    .catch(err => {
        console.error(err);
    });