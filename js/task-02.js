const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
//Добавит название ингредиента как его текстовое содержимое.
//Добавит элементу класс item.
//После чего вставит все <li> за одну операцию в список ul.ingredients.

const findUl = document.querySelector('#ingredients');
const ingArray = ingredients.map((el) => {
  const createIng = document.createElement('li');
  createIng.textContent = el;
  createIng.classList.add = 'item';
  return createIng;
});

findUl.append(...ingArray);

//находим массив 
//перебираем мапом
//создаём лишку
//присваеваем этой лишке тексовый контент перебираемого массива
//добавляем ей класс айтем
//возвращаем лишку
//распыляем массив лишек
