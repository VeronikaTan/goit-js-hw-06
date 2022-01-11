
const itemsCategory = document.querySelector('#categories') 
console.log(`Number of categories: ${itemsCategory.children.length}`)

const item = document.querySelectorAll('.item')

const header = [...item].map(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length} `);
})

