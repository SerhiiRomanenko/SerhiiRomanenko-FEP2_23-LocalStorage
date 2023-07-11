// Модифікувати інтернет-магазин таким чином, щоб була можливість переглянути всі збережені замовлення навіть після оновлення сторінки (використовувати localStorage)
//
// На сторінці спочатку, крім списку категорій, відображається також кнопка “мої замовлення”
// При натисканні на "мої замовлення" - пропадають категорії та відображається список усіх замовлень користувача (дата та ціна) - при натисканні на замовлення - "розгортаються" деталі замовлення
// Реалізувати можливість видалення замовлення зі списку

const categories = ["Смартфони", "Ноутбуки", "ТВ", "Одяг", "Спорт"];

const products = [
    {
        id: 1,
        name: "Iphone 10",
        category: "Смартфони",
        price: 13200,
        about:
            "Apple iPhone 10 - втілення кращих інноваційних рішень. Абсолютно новий\n" +
            "дизайн з переосмисленої системою управління. Безрамковий дизайн виводить досвід використання на новий рівень.\n" +
            "Корпус зі скла і металу. Досконале апаратне ядро, завдяки найпотужнішою внутрішньої 64 бітної архітектури. Разюче\n" +
            "поліпшена найпопулярніша в світі мобільна камера. Саме таким бачить свій флагманський смартфон компанія Apple в\n" +
            "2017 році.",
    },
    {
        id: 2,
        name: "Iphone 11",
        category: "Смартфони",
        price: 23100,
        about:
            "Apple iPhone 11 - втілення кращих інноваційних рішень. Абсолютно новий\n" +
            "дизайн з переосмисленої системою управління. Безрамковий дизайн виводить досвід використання на новий рівень.\n" +
            "Корпус зі скла і металу. Досконале апаратне ядро, завдяки найпотужнішою внутрішньої 64 бітної архітектури. Разюче\n" +
            "поліпшена найпопулярніша в світі мобільна камера. Саме таким бачить свій флагманський смартфон компанія Apple в\n" +
            "2017 році.",
    },
    {
        id: 3,
        name: "Iphone 12 Pro",
        category: "Смартфони",
        price: 33100,
        about:
            "Apple iPhone 12 Pro - втілення кращих інноваційних рішень. Абсолютно новий\n" +
            "дизайн з переосмисленої системою управління. Безрамковий дизайн виводить досвід використання на новий рівень.\n" +
            "Корпус зі скла і металу. Досконале апаратне ядро, завдяки найпотужнішою внутрішньої 64 бітної архітектури. Разюче\n" +
            "поліпшена найпопулярніша в світі мобільна камера. Саме таким бачить свій флагманський смартфон компанія Apple в\n" +
            "2017 році.",
    },
    {
        id: 4,
        name: "Iphone 14",
        category: "Смартфони",
        price: 43100,
        about:
            "Apple iPhone 14 - втілення кращих інноваційних рішень. Абсолютно новий\n" +
            "дизайн з переосмисленої системою управління. Безрамковий дизайн виводить досвід використання на новий рівень.\n" +
            "Корпус зі скла і металу. Досконале апаратне ядро, завдяки найпотужнішою внутрішньої 64 бітної архітектури. Разюче\n" +
            "поліпшена найпопулярніша в світі мобільна камера. Саме таким бачить свій флагманський смартфон компанія Apple в\n" +
            "2017 році.",
    },
    {
        id: 5,
        name: "Samsung S20",
        category: "Смартфони",
        price: 10200,
        about:
            "Samsung S20 - втілення кращих інноваційних рішень. Абсолютно новий\n" +
            "дизайн з переосмисленої системою управління. Безрамковий дизайн виводить досвід використання на новий рівень.\n" +
            "Корпус зі скла і металу. Досконале апаратне ядро, завдяки найпотужнішою внутрішньої 64 бітної архітектури. Разюче\n" +
            "поліпшена найпопулярніша в світі мобільна камера. Саме таким бачить свій флагманський смартфон компанія Apple в\n" +
            "2017 році.",
    },
    {
        id: 6,
        name: "Nokia 2110",
        category: "Смартфони",
        price: 200,
        about:
            "Nokia 2110 - втілення кращих інноваційних рішень. Абсолютно новий\n" +
            "дизайн з переосмисленої системою управління. Безрамковий дизайн виводить досвід використання на новий рівень.\n" +
            "Корпус зі скла і металу. Досконале апаратне ядро, завдяки найпотужнішою внутрішньої 64 бітної архітектури. Разюче\n" +
            "поліпшена найпопулярніша в світі мобільна камера. Саме таким бачить свій флагманський смартфон компанія Apple в\n" +
            "2017 році.",
    },

    {
        id: 7,
        name: "MacBook 2021",
        category: "Ноутбуки",
        price: 33200,
        about:
            "MacBook 2021 - втілення кращих інноваційних рішень. Абсолютно новий\n" +
            "дизайн з переосмисленої системою управління. Безрамковий дизайн виводить досвід використання на новий рівень.\n" +
            "Корпус зі скла і металу. Досконале апаратне ядро, завдяки найпотужнішою внутрішньої 64 бітної архітектури. Разюче\n" +
            "поліпшена найпопулярніша в світі мобільна камера. Саме таким бачить свій флагманський смартфон компанія Apple в\n" +
            "2017 році.",
    },
    {
        id: 8,
        name: "Acer ML3000",
        category: "Ноутбуки",
        price: 12100,
        about:
            "Acer ML3000 - втілення кращих інноваційних рішень. Абсолютно новий\n" +
            "дизайн з переосмисленої системою управління. Безрамковий дизайн виводить досвід використання на новий рівень.\n" +
            "Корпус зі скла і металу. Досконале апаратне ядро, завдяки найпотужнішою внутрішньої 64 бітної архітектури. Разюче\n" +
            "поліпшена найпопулярніша в світі мобільна камера. Саме таким бачить свій флагманський смартфон компанія Apple в\n" +
            "2017 році.",
    },
    {
        id: 9,
        name: "Dell Aspire 12",
        category: "Ноутбуки",
        price: 24200,
        about:
            "Dell Aspire 12 - втілення кращих інноваційних рішень. Абсолютно новий\n" +
            "дизайн з переосмисленої системою управління. Безрамковий дизайн виводить досвід використання на новий рівень.\n" +
            "Корпус зі скла і металу. Досконале апаратне ядро, завдяки найпотужнішою внутрішньої 64 бітної архітектури. Разюче\n" +
            "поліпшена найпопулярніша в світі мобільна камера. Саме таким бачить свій флагманський смартфон компанія Apple в\n" +
            "2017 році.",
    },
    {
        id: 10,
        name: "HP Velure 2000",
        category: "Ноутбуки",
        price: 13100,
        about:
            "HP Velure 2000 - втілення кращих інноваційних рішень. Абсолютно новий\n" +
            "дизайн з переосмисленої системою управління. Безрамковий дизайн виводить досвід використання на новий рівень.\n" +
            "Корпус зі скла і металу. Досконале апаратне ядро, завдяки найпотужнішою внутрішньої 64 бітної архітектури. Разюче\n" +
            "поліпшена найпопулярніша в світі мобільна камера. Саме таким бачить свій флагманський смартфон компанія Apple в\n" +
            "2017 році.",
    },
    {
        id: 11,
        name: "Samsung S20",
        category: "Смартфони",
        price: 10200,
        about:
            "Samsung S20 - втілення кращих інноваційних рішень. Абсолютно новий\n" +
            "дизайн з переосмисленої системою управління. Безрамковий дизайн виводить досвід використання на новий рівень.\n" +
            "Корпус зі скла і металу. Досконале апаратне ядро, завдяки найпотужнішою внутрішньої 64 бітної архітектури. Разюче\n" +
            "поліпшена найпопулярніша в світі мобільна камера. Саме таким бачить свій флагманський смартфон компанія Apple в\n" +
            "2017 році.",
    },
    {
        id: 12,
        name: "Nokia 2110",
        category: "Смартфони",
        price: 200,
        about:
            "Nokia 2110 - втілення кращих інноваційних рішень. Абсолютно новий\n" +
            "дизайн з переосмисленої системою управління. Безрамковий дизайн виводить досвід використання на новий рівень.\n" +
            "Корпус зі скла і металу. Досконале апаратне ядро, завдяки найпотужнішою внутрішньої 64 бітної архітектури. Разюче\n" +
            "поліпшена найпопулярніша в світі мобільна камера. Саме таким бачить свій флагманський смартфон компанія Apple в\n" +
            "2017 році.",
    },

    {
        id: 13,
        name: "Toshiba JS60' QLED",
        category: "ТВ",
        price: 43100,
        about:
            "Toshiba JS60' QLED - втілення кращих інноваційних рішень. Абсолютно новий\n" +
            "дизайн з переосмисленої системою управління. Безрамковий дизайн виводить досвід використання на новий рівень.\n" +
            "Корпус зі скла і металу. Досконале апаратне ядро, завдяки найпотужнішою внутрішньої 64 бітної архітектури. Разюче\n" +
            "поліпшена найпопулярніша в світі мобільна камера. Саме таким бачить свій флагманський смартфон компанія Apple в\n" +
            "2017 році.",
    },
    {
        id: 14,
        name: "Samsung UV43`",
        category: "ТВ",
        price: 24200,
        about:
            "Samsung UV43` - втілення кращих інноваційних рішень. Абсолютно новий\n" +
            "дизайн з переосмисленої системою управління. Безрамковий дизайн виводить досвід використання на новий рівень.\n" +
            "Корпус зі скла і металу. Досконале апаратне ядро, завдяки найпотужнішою внутрішньої 64 бітної архітектури. Разюче\n" +
            "поліпшена найпопулярніша в світі мобільна камера. Саме таким бачить свій флагманський смартфон компанія Apple в\n" +
            "2017 році.",
    },
    {
        id: 15,
        name: "Philips MLD 50'",
        category: "ТВ",
        price: 26500,
        about:
            "Philips MLD 50' - втілення кращих інноваційних рішень. Абсолютно новий\n" +
            "дизайн з переосмисленої системою управління. Безрамковий дизайн виводить досвід використання на новий рівень.\n" +
            "Корпус зі скла і металу. Досконале апаратне ядро, завдяки найпотужнішою внутрішньої 64 бітної архітектури. Разюче\n" +
            "поліпшена найпопулярніша в світі мобільна камера. Саме таким бачить свій флагманський смартфон компанія Apple в\n" +
            "2017 році.",
    },

    {
        id: 16,
        name: "Футболка чол XXL",
        category: "Одяг",
        price: 300,
        about:
            "Футболка чол XXL - втілення кращих інноваційних рішень. Абсолютно новий\n" +
            "дизайн з переосмисленої системою управління. Безрамковий дизайн виводить досвід використання на новий рівень.\n" +
            "Корпус зі скла і металу. Досконале апаратне ядро, завдяки найпотужнішою внутрішньої 64 бітної архітектури. Разюче\n" +
            "поліпшена найпопулярніша в світі мобільна камера. Саме таким бачить свій флагманський смартфон компанія Apple в\n" +
            "2017 році.",
    },

    {
        id: 17,
        name: "Футболка жін M",
        category: "Одяг",
        price: 301,
        about:
            "Футболка жін M - втілення кращих інноваційних рішень. Абсолютно новий\n" +
            "дизайн з переосмисленої системою управління. Безрамковий дизайн виводить досвід використання на новий рівень.\n" +
            "Корпус зі скла і металу. Досконале апаратне ядро, завдяки найпотужнішою внутрішньої 64 бітної архітектури. Разюче\n" +
            "поліпшена найпопулярніша в світі мобільна камера. Саме таким бачить свій флагманський смартфон компанія Apple в\n" +
            "2017 році.",
    },
    {
        id: 18,
        name: "Костюм чоловічий D&G",
        category: "Одяг",
        price: 1000,
        about:
            "Костюм чоловічий D&G - втілення кращих інноваційних рішень. Абсолютно новий\n" +
            "дизайн з переосмисленої системою управління. Безрамковий дизайн виводить досвід використання на новий рівень.\n" +
            "Корпус зі скла і металу. Досконале апаратне ядро, завдяки найпотужнішою внутрішньої 64 бітної архітектури. Разюче\n" +
            "поліпшена найпопулярніша в світі мобільна камера. Саме таким бачить свій флагманський смартфон компанія Apple в\n" +
            "2017 році.",
    },
    {
        id: 19,
        name: "Жіноча юбка Collins",
        category: "Одяг",
        price: 560,
        about:
            "Жіноча юбка Collins - втілення кращих інноваційних рішень. Абсолютно новий\n" +
            "дизайн з переосмисленої системою управління. Безрамковий дизайн виводить досвід використання на новий рівень.\n" +
            "Корпус зі скла і металу. Досконале апаратне ядро, завдяки найпотужнішою внутрішньої 64 бітної архітектури. Разюче\n" +
            "поліпшена найпопулярніша в світі мобільна камера. Саме таким бачить свій флагманський смартфон компанія Apple в\n" +
            "2017 році.",
    },

    {
        id: 20,
        name: "Мяч футбольний Реал Мадрид",
        category: "Спорт",
        price: 350,
        about:
            "Мяч футбольний Реал Мадрид - втілення кращих інноваційних рішень. Абсолютно новий\n" +
            "дизайн з переосмисленої системою управління. Безрамковий дизайн виводить досвід використання на новий рівень.\n" +
            "Корпус зі скла і металу. Досконале апаратне ядро, завдяки найпотужнішою внутрішньої 64 бітної архітектури. Разюче\n" +
            "поліпшена найпопулярніша в світі мобільна камера. Саме таким бачить свій флагманський смартфон компанія Apple в\n" +
            "2017 році.",
    },

    {
        id: 21,
        name: "Кімоно",
        category: "Спорт",
        price: 500,
        about:
            "Кімоно - втілення кращих інноваційних рішень. Абсолютно новий\n" +
            "дизайн з переосмисленої системою управління. Безрамковий дизайн виводить досвід використання на новий рівень.\n" +
            "Корпус зі скла і металу. Досконале апаратне ядро, завдяки найпотужнішою внутрішньої 64 бітної архітектури. Разюче\n" +
            "поліпшена найпопулярніша в світі мобільна камера. Саме таким бачить свій флагманський смартфон компанія Apple в\n" +
            "2017 році.",
    },
    {
        id: 22,
        name: "Боксерські рукавиці`",
        category: "Спорт",
        price: 600,
        about:
            "Боксерські рукавиці` - втілення кращих інноваційних рішень. Абсолютно новий\n" +
            "дизайн з переосмисленої системою управління. Безрамковий дизайн виводить досвід використання на новий рівень.\n" +
            "Корпус зі скла і металу. Досконале апаратне ядро, завдяки найпотужнішою внутрішньої 64 бітної архітектури. Разюче\n" +
            "поліпшена найпопулярніша в світі мобільна камера. Саме таким бачить свій флагманський смартфон компанія Apple в\n" +
            "2017 році.",
    },
    {
        id: 23,
        name: "Спортивний костюм Adidas",
        category: "Спорт",
        price: 1200,
        about:
            "Спортивний костюм Adidas' - втілення кращих інноваційних рішень. Абсолютно новий\n" +
            "дизайн з переосмисленої системою управління. Безрамковий дизайн виводить досвід використання на новий рівень.\n" +
            "Корпус зі скла і металу. Досконале апаратне ядро, завдяки найпотужнішою внутрішньої 64 бітної архітектури. Разюче\n" +
            "поліпшена найпопулярніша в світі мобільна камера. Саме таким бачить свій флагманський смартфон компанія Apple в\n" +
            "2017 році.",
    },

    {
        id: 24,
        name: "Капа бокс",
        category: "Спорт",
        price: 50,
        about:
            "Капа бокс - втілення кращих інноваційних рішень. Абсолютно новий\n" +
            "дизайн з переосмисленої системою управління. Безрамковий дизайн виводить досвід використання на новий рівень.\n" +
            "Корпус зі скла і металу. Досконале апаратне ядро, завдяки найпотужнішою внутрішньої 64 бітної архітектури. Разюче\n" +
            "поліпшена найпопулярніша в світі мобільна камера. Саме таким бачить свій флагманський смартфон компанія Apple в\n" +
            "2017 році.",
    },

    {
        id: 25,
        name: "Форма Манчестер Сіті",
        category: "Спорт",
        price: 1400,
        about:
            "Форма Манчестер Сіті - втілення кращих інноваційних рішень. Абсолютно новий\n" +
            "дизайн з переосмисленої системою управління. Безрамковий дизайн виводить досвід використання на новий рівень.\n" +
            "Корпус зі скла і металу. Досконале апаратне ядро, завдяки найпотужнішою внутрішньої 64 бітної архітектури. Разюче\n" +
            "поліпшена найпопулярніша в світі мобільна камера. Саме таким бачить свій флагманський смартфон компанія Apple в\n" +
            "2017 році.",
    },
    {
        id: 26,
        name: "Баскетбольний мяч",
        category: "Спорт",
        price: 750,
        about:
            "аскетбольний мяч - втілення кращих інноваційних рішень. Абсолютно новий\n" +
            "дизайн з переосмисленої системою управління. Безрамковий дизайн виводить досвід використання на новий рівень.\n" +
            "Корпус зі скла і металу. Досконале апаратне ядро, завдяки найпотужнішою внутрішньої 64 бітної архітектури. Разюче\n" +
            "поліпшена найпопулярніша в світі мобільна камера. Саме таким бачить свій флагманський смартфон компанія Apple в\n" +
            "2017 році.",
    },
    {
        id: 27,
        name: "Жіноча юбка Collins",
        category: "Одяг",
        price: 560,
        about:
            "Жіноча юбка Collins - втілення кращих інноваційних рішень. Абсолютно новий\n" +
            "дизайн з переосмисленої системою управління. Безрамковий дизайн виводить досвід використання на новий рівень.\n" +
            "Корпус зі скла і металу. Досконале апаратне ядро, завдяки найпотужнішою внутрішньої 64 бітної архітектури. Разюче\n" +
            "поліпшена найпопулярніша в світі мобільна камера. Саме таким бачить свій флагманський смартфон компанія Apple в\n" +
            "2017 році.",
    },
];

const productSection = document.querySelector(".products");
const categoriesBox = document.querySelector(".categories");
const aboutProduct = document.querySelector(".aboutProduct");
const $form = document.querySelector(".form");
const $pibInput = document.querySelector(".form__pib");
const $cities = document.querySelectorAll(".form__city");
const $allErrorMessage = document.querySelectorAll("small");
const $postNumber = document.querySelectorAll(".form__post");
const $countInput = document.querySelector(".form__count");
const $typesOfPay = document.getElementsByName("typeOfPay");
const $commentInput = document.querySelector(".form__comments");
const $submitButton = document.querySelector(".form__submit");
const $canselButton = document.querySelector(".form__cansel");
const $trashLink = document.querySelector(".header__trashLink");
const $mainBox = document.querySelector(".main__box");
const $ordersTag = document.querySelector(".main__orders");
const $ordersContainer = document.querySelector(".main__ordersContainer");
const $ordersTitle = document.querySelector(".orders__title");


let activeCategory = null;
let activeProduct = null;
const categoriesMurkUp = document.createElement("ul");
categoriesMurkUp.className = "categories__list";


function validatePIB(input) {
    const resName = input.value.trim();
    const errMessage = document.querySelector(".form__errorPIB");
    if (resName.length > 1 &&
        resName.includes(" ") &&
        !/[0-9\\!@#$%^&*()-+:;_"'`|=]/.test(resName)) {
        errMessage.style.display = "none";
        $pibInput.style.border = "1px solid black";
        return resName;
    } else {
        $pibInput.style.border = "1px solid red";
        errMessage.style.display = "inline";
        return false;
    }
}

function validateCity(cities) {
    const $formCityError = document.querySelector(".form__cityError");
    for (const city of cities) {
        if (city.selected) {
            $formCityError.style.display = "none";
            return city.textContent;
        }
    }
    $formCityError.style.display = "inline";
    return false;
}

function validatePostNumber(postNumbers) {
    const $errorPostNumber = document.querySelector(".form__errorPostNumber");
    for (const number of postNumbers) {
        if (number.selected) {
            $errorPostNumber.style.display = "none";
            return number.textContent;
        }
    }
    $errorPostNumber.style.display = "inline";
    return false;
}

function getChechedRadio(radios) {
    for (const elem of radios) {
        if (elem.checked) {
            return elem.value;
        }
    }
}


function renderOrders() {
    $ordersTag.style.display = "block";
    let orders = JSON.parse(window.localStorage.getItem("orders"));
    $ordersTag.innerHTML = "";
    if (orders.length > 0) {
        $ordersTitle.textContent = "Мої замовлення:";
        let buttonOpenBuyForm = document.createElement("button");
        buttonOpenBuyForm.textContent = "Замовити товари";
        buttonOpenBuyForm.classList.add("main__buttonOpenBuyForm");
        buttonOpenBuyForm.addEventListener("click", function () {
            $form.style.display = "block";
            $ordersTitle.style.display = "none";
            $ordersTag.style.display = "none";
        })
        $ordersTag.append(buttonOpenBuyForm);
    } else {
        $ordersTitle.textContent = "Список моїх замовлень пустий :("
    }
    console.log(orders);

    let rightSideDiv = document.createElement("p");
    rightSideDiv.classList.add("main__rightSideDiv");
    rightSideDiv.innerHTML = "";
    $ordersTag.append(rightSideDiv);

    for (let item of orders) {
        let itemDiv = document.createElement("div");
        itemDiv.classList.add("main__orderBox");

        let leftSideDiv = document.createElement("div");
        leftSideDiv.classList.add("main__leftSideDiv");
        leftSideDiv.dataset.value = item.id;
        leftSideDiv.dataset.about = item.about;



        const itemName = document.createElement("p");
        itemName.textContent = item.name;
        leftSideDiv.appendChild(itemName);

        const itemPrice = document.createElement("p");
        itemPrice.textContent = item.price;
        leftSideDiv.appendChild(itemPrice);

        const itemDetailsButton = document.createElement("button");
        itemDetailsButton.classList.add("main__itemDetailsButton", "orderBtn");
        itemDetailsButton.textContent = "Деталі";
        itemDetailsButton.addEventListener("click", function () {
            rightSideDiv.textContent = item.about;
            const rightSideTitle = document.createElement("h2");
            rightSideTitle.textContent = "Інформація про товар: ";
            rightSideTitle.style.margin = "0px";
            rightSideDiv.prepend(rightSideTitle)
        })
        leftSideDiv.appendChild(itemDetailsButton);

        const itemDelete = document.createElement("button");
        itemDelete.classList.add("main__delItemFromLS", "orderBtn");
        itemDelete.textContent = "Видалити";
        itemDelete.addEventListener("click", delProductFromLS)
        leftSideDiv.appendChild(itemDelete);


        $ordersTag.append(leftSideDiv);
    }
}


categoriesMurkUp.addEventListener("click", function (event) {
    activeCategory = event.target.innerText;
    if (categories.includes(activeCategory) && activeCategory !== null) {
        productSection.innerHTML = '';
        aboutProduct.innerHTML = '';
        for (let product of products) {
            if (product.category === activeCategory) {
                productSection.innerHTML += `<div class="products__item">
                                        <p class="products__title">${product.name}</p>
                                        <p class="products__price">${product.price} грн</p>
                                        <button class="products__buyButton" value=${product.id} onclick=setActiveProduct(${product.id})>Детально</button>
                                    </div>`;
            }
        }
    }
});

let listMarkup = "";
for (let i = 0; i < categories.length; i++) {
    let a = document.createElement("a");
    a.className = "categories__link";
    a.href = "#";
    listMarkup += `<a class="categories__link" href='#'>
                    <li class="categories__item">
                        ${categories[i]}
                    </li>
                  </a>`;
}

categoriesMurkUp.innerHTML = listMarkup;
categoriesBox.append(categoriesMurkUp);

$submitButton.addEventListener("click", function (event) {
    event.preventDefault();

    let resultInfo = "none";

    const isValidPIB = validatePIB($pibInput);
    const isValidCity = validateCity($cities);
    const isValidPostNumber = validatePostNumber($postNumber);
    if (isValidPIB && isValidCity && isValidPostNumber) {
        resultInfo = `Інформація про доставку: 
        ПІБ: ${isValidPIB} 
        Місто: ${isValidCity}, 
        Поштове відділення: ${isValidPostNumber},
        Спосіб оплати: ${getChechedRadio($typesOfPay)}
        Кількість товарів: ${$countInput.value},
        Ваш коментар: ${$commentInput.value}`;
        alert(resultInfo);
        window.location.assign("index.html");
    }
})

$canselButton.addEventListener("click", function (event) {
    event.preventDefault();
    $form.reset();
    $allErrorMessage.forEach((item) => item.style.display = "none")
    $form.style.display = "none";
    $pibInput.style.border = "1px solid black";
    renderOrders();
})

$trashLink.addEventListener("click", function (event) {
    event.preventDefault();
    $form.style.display = "none";
    $mainBox.style.display = "none";
    renderOrders();
})

function addProductToLS(product) {
    if (window.localStorage.getItem("orders")) {
        let arrayOrdersFromLS = JSON.parse(window.localStorage.getItem("orders"));
        arrayOrdersFromLS.push(product);
        window.localStorage.setItem("orders", JSON.stringify(arrayOrdersFromLS))
        console.log(JSON.parse(window.localStorage.getItem("orders")))
    } else {
        let order = [];
        order.push(product);
        window.localStorage.setItem("orders", JSON.stringify(order));
        console.log(JSON.parse(window.localStorage.getItem("orders")))
    }
}

function delProductFromLS(product) {
    let orders = JSON.parse(window.localStorage.getItem("orders"));
    console.log(product.currentTarget.parentNode.getAttribute('data-value'));
    let filtredOrders = orders.filter(item => item.id !== +product.currentTarget.parentNode.getAttribute('data-value'));
    window.localStorage.setItem("orders", JSON.stringify(filtredOrders));
    alert(`Товар видалено`);
    renderOrders();
}

function setActiveProduct(item) {
    activeProduct = item;
    let aboutContainer = document.createElement("div");
    aboutContainer.className = "aboutProduct__about";
    aboutProduct.innerHTML = "";
    for (let product of products) {
        if (product.id === activeProduct) {
            aboutContainer.dataset.value = product.id;
            aboutContainer.innerHTML += product.about;
            let buyBtn = document.createElement("button");
            buyBtn.classList.add("aboutProduct__button");
            buyBtn.textContent = "В корзину";
            buyBtn.addEventListener("click", function (event) {
                event.preventDefault();
                let productForBuy = products.filter(item => item.id === +activeProduct);
                const orderedProduct = productForBuy[0];
                addProductToLS(orderedProduct);
                alert(`Товар "${orderedProduct.name}" додано в корзину`);

            });
            aboutContainer.append(buyBtn);
        }
    }
    aboutProduct.append(aboutContainer);
}

$pibInput.addEventListener("keydown", function () {
    console.log(validatePIB($pibInput))
})