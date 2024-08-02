let links = document.querySelectorAll(".menu-item > a")

for(let i = 0; i < links.length; i++ ) {
    links[i].onclick = function(event) {
        event.preventDefault();
        document
        .querySelector(links[i].getAttribute("href"))
        .scrollIntoView({ behavior: "smooth"});
    }
}

const products = [
    {
        id: 1,
        name: "Cosmetic products",
        descrtion: "Lorem Ipsum - это просто фиктивный текст для полиграфической промышленности. Lorem Ipsum был стандартным фиктивным текстом в отрасли.",
        image: "./assets/image/products1.png",
        price: "120",
    },
    {
        id: 2,
        name: "Cosmetic products",
        descrtion: "Lorem Ipsum - это просто фиктивный текст для полиграфической промышленности. Lorem Ipsum был стандартным фиктивным текстом в отрасли.",
        image: "./assets/image/products2.png",
        price: "120",
    },
];

const productsBox = document.querySelector(".products-box");
const productsMap = products.map((el) => {
    return `
     <div class="card">
                <img src="${el.image}" alt="" loading="lazy"/>
                <div class="card-content">
                  <h2>${el.name}</h2>
                <p>
                ${el.descrtion}
                </p>
                <div class="card-actions">
                  <div class="card-action">
                    <button>Buy Now</button>
                    <button>Add To cart</button>
                  </div>
                  <span>${el.price} $</span>
                </div>
                </div>
              </div>
            </div>
    `
});

productsBox.innerHTML = productsMap.join("")
console.log(productsMap)