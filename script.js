
let sun = document.querySelector("#sun"),
    moon = document.querySelector("#moon"),
    body = document.querySelector("body"),
    cart = document.querySelector("#cart"),
    closeShopping = document.querySelector(".closeShopping"),
    homeBg = document.querySelector(".home_bg"),
    leftArrow = document.querySelector(".leftArrow"),
    rightArrow = document.querySelector(".rightArrow"),
    imageIcons = document.querySelectorAll(".image-icon"),
    list = document.querySelector(".product-right-bottom"),
    li = document.querySelectorAll(".list"),
    circle = document.querySelectorAll(".fa-circle"),
    allList = document.querySelector(".all-list"),
    listCard = document.querySelector(".listCard");
let total = document.querySelector(".total");
let quanity = document.querySelector(".quantity");
let bookType = document.querySelectorAll(".book-type");
const navMenu = document.getElementById("nav_menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close");


let products = [
    {
        id: 0,
        type: "modern",
        title: "big magic",
        author: "donna karan",
        image: "1.PNG",
        price: 20.0,
    },
    {
        id: 1,
        type: "classic",
        title: "i was born width music",
        author: "dolce & cabanna",
        image: "2.PNG",
        price: 200.0,
    },
    {
        id: 2,
        type: "biography",
        title: "i'm glad my mom died",
        author: "jennette mcCurdy",
        image: "3.PNG",
        price: 21.99,
    },
    {
        id: 3,
        type: "detective",
        title: "Warrior Soul: A Tye Caine Wilderness Mystery",
        author: "David Barbur",
        image: "4.PNG",
        price: 4.99,
    },
    {
        id: 4,
        type: "fantasy",
        title: "The Mountain in the Sea: A Novel",
        author: "Ray Nayler",
        image: "5.PNG",
        price: 18.0,
    },
    {
        id: 5,
        type: "cookbook",
        title: "Sweet Enough: A Dessert Cookbook",
        author: "Alison Roman",
        image: "6.PNG",
        price: 32.55,
    },
    {
        id: 6,
        type: "fairy tale",
        title: "Fairy Tale",
        author: "Stephen King",
        image: "7.PNG",
        price: 30.23,
    },
    {
        id: 7,
        type: "fiction",
        title: "Flash Fiction America: 73 Very Short Stories",
        author: "John DuFresne , et al.",
        image: "8.PNG",
        price: 15.76,
    },
    {
        id: 8,
        type: "horror",
        title: "Taaqtumi: An Anthology of Arctic Horror Stories",
        author: "Thomas Anguti Johnston , et al.",
        image: "9.PNG",
        price: 15.76,
    },
    {
        id: 9,
        type: "historical fiction",
        title:
            "The Things We Cannot Say: A WWII Historical Fiction Novel (Original)",
        author: "Kelly Rimmer",
        image: "10.PNG",
        price: 15.8,
    },
    {
        id: 10,
        type: "history",
        title: "The Secret History",
        author: "Donna Tartt",
        image: "11.PNG",
        price: 16.74,
    },
    {
        id: 11,
        type: "romance",
        title: "Daughter of the Moon Goddess: A Fantasy Romance Novel",
        author: "Sue Lynn Tan",
        image: "12.PNG",
        price: 16.73,
    },
    {
        id: 12,
        type: "modern",
        title: "Women Without Men: A Novel of Modern Iran",
        author: "Shahrnush Parsipur , et al.",
        image: "13.PNG",
        price: 14.83,
    },
    {
        id: 13,
        type: "classic",
        title: "War and Peace",
        author: "Leo Tolstoy , et al.",
        image: "14.PNG",
        price: 20.46,
    },
    {
        id: 14,
        type: "biography",
        title: "Barkley: A Biography (Original)",
        author: "Timothy Bella",
        image: "15.PNG",
        price: 27.89,
    },
    {
        id: 15,
        type: "detective",
        title: "The Detective Up Late",
        author: "Adrian McKinty",
        image: "16.PNG",
        price: 25.1,
    },
    {
        id: 16, type: "fantasy",
        title: "Legends & Lattes: A Novel of High Fantasy and Low Stakes",
        author: "Travis Baldree",
        image: "17.PNG",
        price: 16.73,
    },
    {
        id: 17,
        type: "cookbook",
        title: "The Everlasting Meal Cookbook: Leftovers A-Z",
        author: "Tamar Adler , et al.",
        image: "18.PNG",
        price: 32.55,
    },
    {
        id: 18,
        type: "fairy tale",
        title: "Fairy Tales for Fearless Girls",
        author: "Anita Ganeri , et al.",
        image: "19.PNG",
        price: 18.59,
    },
    {
        id: 19,
        type: "fiction",
        title: "Wonderbook (Revised and Expanded)",
        author: "Jeff VanderMeer",
        image: "20.PNG",
        price: 25.58,
    },
    {
        id: 20,
        type: "horror",
        title: "Nightmare Fuel: The Science of Horror Films",
        author: "Nina Nesseth",
        image: "21.PNG",
        price: 24.17,
    },
    {
        id: 21,
        type: "historical fiction",
        title: "Falconland: A Novel of Medieval",
        author: "Reggie Connell",
        image: "22.PNG",
        price: 14.99,
    },
    {
        id: 22,
        type: "history",
        title: "We Are the Land: A History of Native California",
        author: "Damon B. Akins , et al.",
        image: "23.PNG",
        price: 27.85,
    },
    {
        id: 23,
        type: "romance",
        title: "Rough Around the Hedges: an Uncanny Romance Novel",
        author: "Lish McBride",
        image: "24.PNG",
        price: 16.73,
    },
];

let carts = [];
// ============= menu bar ==============

navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
});

navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
});

// ================================== header slider ==================================

let img = homeBg.querySelectorAll("img");
img.forEach((item, index) => {
    item.style.left = `${index * 100}%`;
});
let counter = 0;
rightArrow.addEventListener("click", () => {
    if (counter == img.length - 1) {
        counter = 0;
        slideImage();
    } else {
        counter++;
        slideImage();
    }
});
leftArrow.addEventListener("click", () => {
    if (counter == 0) {
        counter = img.length - 1;
        slideImage();
    } else {
        counter--;
        slideImage();
    }
});
const slideImage = () => {
    img.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
};

// ============= dark mode  ==============

const toggleTheme = () => {
    body.classList.toggle("darkLight");
    sun.classList.toggle("hide");
    moon.classList.toggle("hide");
    imageIcons.forEach((img) => {
        img.classList.toggle("hide");
    })
};

sun.addEventListener("click", toggleTheme);
moon.addEventListener("click", toggleTheme);

// ============= search book  ==============

function searchBooks() {
    const searchValue = document.getElementById("mySearch").value.toLowerCase();
    console.log(searchValue);
    const bookCards = document.querySelectorAll(".book-card");

    bookCards.forEach(card => {
        const bookTitle = card.querySelector(".book-title").textContent.toLowerCase();
        const bookType = card.dataset.item.toLowerCase();
        const bookAuthor = card.querySelector(".book-author").textContent.toLowerCase();

        if (bookTitle.includes(searchValue) || bookType.includes(searchValue) || bookAuthor.includes(searchValue)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

// ============= card open  ==============

cart.addEventListener('click', () => {
    const cartElement = document.querySelector(".card");
    const container = document.querySelector(".container");
    cartElement.classList.toggle("active");
    container.classList.toggle("active");
});
closeShopping.addEventListener('click', () => {
    const cartElement = document.querySelector(".card");
    const container = document.querySelector(".container");
    container.classList.toggle("active");
    cartElement.classList.toggle("active");
});

function getProducts() {
    products.forEach((obj, index) => {
        list.innerHTML += `
        <div class="book-card" data-item="${obj.type}"> 
                <div class="book-image">
                    <img src="./Assets/Images/${obj.image}" alt="" class="book-imagish" />
                </div>
                <div class="book-details">
                    <div class="book-type">${obj.type}</div>
                    <div class="book-title">${obj.title}</div>
                    <div class="book-author">${obj.author}</div>
                    <div class="book-price">
                    <span class="book-price-symbol">$</span>${obj.price}
                    </div>
                    <div class="buttons">
                    <button class="addToCart" onclick="addToCard(${index})">Add to cart</button>
                    <i class="ri-heart-line" id="heart"></i>
                    <i class='bx bx-dots-vertical-rounded options' onclick="option(${index})"></i>
                    <div class="inOption">
                        <i class='bx bx-pencil' onclick="renameItem(${index})"></i>
                        <i class="fa-solid fa-trash" onclick="removeItem(this)"></i>
                    </div>
                    </div>
                </div>
            </div>
        `
    });
}
getProducts();

function addToCard(index) {
    const bookTitle = products[index].title;
    const addedBook = carts.find(book => book.bookTitle === bookTitle);
  
    if (addedBook) {
      addedBook.bookquanity += 1;
    } else {
      const bookPrice = products[index].price;
      const bookImage = products[index].image;
      carts.push({
        bookquanity: 1,
        bookImage: bookImage,
        bookTitle: bookTitle,
        bookPrice: bookPrice
      });
    }
    showCard();
    quanityCounter();
    totalPrice();
  }

function showCard() {
    listCard.innerHTML = "";
    carts.forEach((cart, index) => {
        listCard.innerHTML += `
            <li>
                <div><img src='./Assets/Images/${cart.bookImage}'></div>
                <div>${cart.bookTitle}</div>
                <div>${showPrice(index)}$</div>
                <div>
                    <button onclick="changeQuanity(${index}, 'minus')">-</button>
                    <div class="count">${cart.bookquanity}</div>
                    <button onclick="changeQuanity(${index}, 'plus')">+</button>
                </div>
            </li>
        `
    });
}

function changeQuanity(index, action) {
    if (action === "minus") {
        if (carts[index].bookquanity > 1) {
            carts[index].bookquanity -= 1;
        } else {
            carts.splice(index, 1);
        }
    }
    if (action === "plus") {
        carts[index].bookquanity += 1;
    }
    showCard();
    quanityCounter();
    totalPrice();

}

function quanityCounter() {
    let totalquanity = 0;
    for (let i = 0; i < carts.length; i++) {
        totalquanity += carts[i].bookquanity;
    }
    quanity.innerHTML = totalquanity;
}

function showPrice(index) {
    const price = carts[index].bookPrice;
    const quanity = carts[index].bookquanity;
    const total = price * quanity;
    return total;
}

function totalPrice() {
    let totalpr = 0;
    carts.forEach((cart) => {
        totalpr += cart.bookPrice * cart.bookquanity;
    });
    total.innerHTML = totalpr + "$";
}