
/*const products =  [
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

renderPage(products);*/



class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this._fetchProducts();
        this.render();
        this.totalSum();
    }
    _fetchProducts() {
        this.goods = [
            {id: 1, link: 'laptop.jpg', title:'Laptop', price: 20000},
            {id: 2, link: 'mouse.jpg', title: 'Mouse', price: 1000},
            {id: 3, link: 'keyboard.jpg',title: 'Keyboard', price: 2500},
            {id: 4, link: 'phone.jpg', title: 'Phone', price: 15000},
        ];
    }
    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const item = new ProductItem(product);
            block.insertAdjacentHTML("beforeend", item.render());
        }

    }
    totalSum() {
        let totalSum = 0;
        for (let item of this.goods) {
            totalSum += item.price;
        }
        return totalSum
    }
}

class ProductItem {
    constructor(product) {
        this.id = product.id;
        this.title = product.title;
        this.price = product.price;
        this.link = product.link;
        this.render();
    }
    render() {
        return `<div class="products_item" data-id="${this.id}">
        <img class="image" src="image/${this.link}">
        <h3 class="product-title">${this.title}</h3>
        <p class ="price" >${this.price}</p>
        <button class="buy-btn">Купить</button></div>`
    }
}

class Cart {
    constructor(container = '.box-btn') {
        this.container = container;
        this.addProduct(); //добавление продукта в корзину
        this.deleteProduct(); //Удаление продукта из корзины
        this.totalSumCount();// подсчет и прорисовка общей стоимости продуктов в корзине
        
    }
    


    addProduct() {}
    deleteProduct() {}
    totalSumCount() {}
}

class ProductInCart {
    constructor() {
        this.productInCart = []; //массив продуктов в корзине
        this.updateCartRow(); // обнавление количества продуктов одного типа в корзине
    }
 
    updateCartRow() {}
}

let productList = new ProductList;
console.log(productList.totalSum());

let cart = new Cart;
