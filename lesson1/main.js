const products =  [
    {id: 1, link: 'image/laptop.jpg', title:'Laptop', price: 20000},
    {id: 2, link: 'image/mouse.jpg', title: 'Mouse', price: 1000},
    {id: 3, link: 'image/keyboard.jpg',title: 'Keyboard', price: 2500},
    {id: 4, link: 'image/phone.jpg', title: 'Phone', price: 15000},
    {id: 1, link: 'image/laptop.jpg', title:'Laptop', price: 20000},
    {id: 2, link: 'image/mouse.jpg', title: 'Mouse', price: 1000},
    {id: 3, link: 'image/keyboard.jpg',title: 'Keyboard', price: 2500},
    {id: 4, link: 'image/phone.jpg', title: 'Phone', price: 15000},
];

//Изменение функции для добавления дополнительных параметров
const renderProduct = (

title = "Laptop",
price = 20000,
link = "image/laptop.jpg"
) => 
    
    `<div class="products-item">
        <img src="${link}" alt="image" class="image">
        <h2 class="product-title">${title}</h2>
        <p class="price">${price}</p>
        <button class="buy-btn">Купить</button>
        
    </div>`
;

const renderPage = list => {
    const productList = list.map(item => renderProduct(item.title,item.price, item.link));
   
   document.querySelector('.products').innerHTML = productList.join(''); //Массив был с разделителем "," (так как при вызове innerHTML автоматом срабатывает .join(',)) - Исправлено с помощью .join('');
};

renderPage(products);