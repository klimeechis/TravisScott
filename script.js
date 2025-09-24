const products = [
    { id: 1, name: "Яблоко", description: "Свежее красное яблоко", price: 50, details: "Выращено в яблоневых садах Краснодарского края. Сорт: Антоновка.", image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=400&q=80" },
    { id: 2, name: "Хлеб", description: "Свежий пшеничный хлеб", price: 30, details: "Испечён сегодня утром из муки высшего сорта без добавок.", image:"https://images.unsplash.com/photo-1542831371-d531d36971e6?auto=format&fit=crop&w=400&q=80" },
    { id: 3, name: "Молоко", description: "1 литр молока", price: 60, details: "Свежесобранное молоко от местных фермеров, 3.2% жирности.", image: "https://images.unsplash.com/photo-1582515073490-399813a0eabd?auto=format&fit=crop&w=400&q=80" },
    { id: 4, name: "Яйца", description: "10 штук куриных яиц", price: 80, details: "От кур свободного выгула. Категория: С1.", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80" },
    { id: 5, name: "Сыр", description: "200 г твёрдого сыра", price: 150, details: "Твёрдый сыр с выдержкой 6 месяцев, насыщенный вкус и аромат.", image: "https://images.unsplash.com/photo-1603398938378-b18306e6d317?auto=format&fit=crop&w=400&q=80" },
    { id: 6, name: "Мёд", description: "Банка натурального мёда", price: 250, details: "Мёд из луговых трав, без добавок и нагревания, проверен на качество.", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=400&q=80" },
    { id: 7, name: "AydenWest", description: "tiktoker", price: 99999, details: "Best.", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=400&q=80" },
    { id: 8, name: "Raphinha", description: "Ballon d'or owner", price: "priceless", details: "2024/2025 legend.", image: "https://images.unsplash.com/photo-1526403223542-4e9821d101bf?auto=format&fit=crop&w=400&q=80" },
    { id: 9, name: "Апельсин", description: "Свежий апельсин", price: 40, details: "Выращено в солнечной Испании, очень сочный.", image: "https://images.unsplash.com/photo-1574226516831-e1dff420e9a5?auto=format&fit=crop&w=400&q=80" },
    { id: 10, name: "Кофе", description: "250 г молотого кофе", price: 350, details: "Арабика из Колумбии, средняя обжарка.", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=400&q=80" },
    { id: 11, name: "Шоколад", description: "100 г тёмного шоколада", price: 120, details: "70% какао, не содержит ГМО и консерванты.", image: "https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=400&q=80" },
    { id: 12, name: "Оливковое масло", description: "500 мл холодного отжима", price: 600, details: "Экстра вирджин из Италии.", image: "https://www.google.com/imgres?q=%D1%88%D0%B2%D0%B5%D0%B9%D1%86%D0%B0%D1%80%D0%B8%D1%8F&imgurl=https%3A%2F%2Fvisit2swiss.com%2Fwp-content%2Fuploads%2F2020%2F05%2Flake-brienz-swiss-1.png&imgrefurl=https%3A%2F%2Fvisit2swiss.com%2F&docid=J4Bg3UJ3CDEMGM&tbnid=U1DBlNEZqbbraM&vet=12ahUKEwjUl7_79_GPAxUdLRAIHSkMJYAQM3oECBoQAA..i&w=1000&h=801&hcb=2&ved=2ahUKEwjUl7_79_GPAxUdLRAIHSkMJYAQM3oECBoQAA" }
];

const productListEl = document.getElementById("product-list");

products.forEach(product => {
    const productEl = document.createElement("div");
    productEl.classList.add("product");

    productEl.innerHTML = `
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <p class="price">${product.price} руб.</p>
        <button type="button">Подробнее</button>
        <div class="product-details">${product.details}</div>
    `;

    // Найдём кнопку и блок с деталями
    const btn = productEl.querySelector("button");
    const details = productEl.querySelector(".product-details");

    // Обработчик клика по кнопке
    btn.addEventListener("click", () => {
        const isVisible = details.style.display === "block";
        details.style.display = isVisible ? "none" : "block";
        btn.textContent = isVisible ? "Подробнее" : "Скрыть";
    });

    productListEl.appendChild(productEl);
});