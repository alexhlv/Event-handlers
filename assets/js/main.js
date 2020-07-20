/* Завдання 1:*/

// Задание 1:

// C помощью цикла создать список из 20 элементов.
// Каждый 3-й элемент сделать синим.
// Каждый 5-й - зеленым.

let list = document.getElementById('list');
for (let i = 1; i <= 20; i++) {
    let listItem = document.createElement('li');
    listItem.innerText = i;
    list.append(listItem);
}

/* Завдання 1:*/
/* Завдання 2:*/

// Задание 2:

// Создать на странице разметку:
// <h1 id="user-name"></h1>
// спросить у пользователя его имя (prompt), и вывести в данный h1.

let userName = prompt('Ваше имя?');
let title = document.getElementById('user-name');
title.innerText = userName;

/* Завдання 2:*/
/* Завдання 3:*/

// Задание 3:

//  Дан ul. Дан массив любых строк. Вставьте элементы этого массива в конец ul так,
//  чтобы каждый элемент стоял в своем li. ul создайте на странице заблаговременно.

const str = ['HTML', 'CSS', 'Java Script', 'PHP', "MSQL"];
let listOfStings = document.querySelector('#string-list');

for (let i = 0; i < str.length; i++) {
    let newLi = document.createElement('li');
    newLi.innerText = str[i];
    listOfStings.append(newLi);
}

/* Завдання 3:*/
/* Завдання 4:*/

// Задание 4:

//  Дан элемент #elem1. Вставьте перед ним span с текстом '!!!'.
//  Дан элемент #elem1. Вставьте после него span с текстом '!!!'.
//  Дан элемент #elem1. Вставьте ему в начало span с текстом '!!!'.
//  Дан элемент #elem1. Вставьте ему в конец span с текстом '!!!'.

let elem = document.querySelector('#elem1');
let newSpan = document.createElement('span');
newSpan.innerText = 'Деякий блок тексту';

elem.before(newSpan);
elem.after(newSpan);
elem.prepend(newSpan);
elem.append(newSpan);

/* Завдання 4:*/
/* Завдання 5:*/

// Задание 5:

// Напишите функция, для установки цвета фона абзаца.
// должна вызываться так: setBg(element, 'red')

function setBg (id, color) {
    let p = document.getElementById(id);
    p.style.backgroundColor = color;
}

setBg('bgcolor', 'green');

/* Завдання 5:*/
/* Завдання 6:*/

// Задание 6:

// Напишите функцию, которая выводит в HTML документ нумерованный список песен:
// Стили на ваше усмотрение

let playList = [
    {
    author: "LED ZEPPELIN",
    song:"STAIRWAY TO HEAVEN"
    },
    {
    author: "QUEEN",
    song:"BOHEMIAN RHAPSODY"
    },
    {
    author: "LYNYRD SKYNYRD",
    song:"FREE BIRD"
    },
    {
    author: "DEEP PURPLE",
    song:"SMOKE ON THE WATER"
    },
    {
    author: "JIMI HENDRIX",
    song:"ALL ALONG THE WATCHTOWER"
    },
    {
    author: "AC/DC",
    song:"BACK IN BLACK"
    },
    {
    author: "QUEEN",
    song:"WE WILL ROCK YOU"
    },
    {
    author: "METALLICA",
    song:"ENTER SANDMAN"
    }
];
    
let musicList = document.querySelector('ol');

for (let i = 0; i < playList.length; i++) {
    let musicListItem = document.createElement('li');
    musicListItem.innerHTML = `
    <b>Author:</b> ${playList[i].author};<br>
    <b>Song:</b> ${playList[i].song};
    `;
    musicList.append(musicListItem);
} 

/* Завдання 6:*/
/* Завдання 7:*/

// Задание 7:

// Нарисовать галлерею используя объекты автомобилей, которые мы создавали в ДЗ прошлого урока.
// К каждой модели авто добавить картинку.

const volkswagen = {
    name: 'Volkswagen Jetta',
    year: 2016,
    engineCapacity: 1.4,
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/2019_Volkswagen_Jetta_front_7.11.18.jpg'
}
const mercedes = {
    name: 'Mercedes GL550',
    year: 2019,
    engineCapacity: 3.2,
    image: 'https://cars.ua/thumb/car/20170819/w933/h622/q80/kupit-auto-mercedes-benz-gl-550-dnepr-203414.jpg'
}
const volvo = {
    name: 'Volvo XC90',
    year: 1976,
    engineCapacity: 5,
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/95/2018_Volvo_XC90_2.0.jpg'
}
const mitsubishi = {
    name: 'Mitsubishi OutlanderII',
    year: 2016,
    engineCapacity: 4.5,
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Mitsubishi_Outlander_II_Facelift_front_20100606.jpg'
}
const toyota = {
    name: 'Toyota LandCruiserPradoJ150',
    year: 1995,
    engineCapacity: 4.7,
    image: 'https://i.infocar.ua/i/12/809/1400x936.jpg'
}

const cars = [volkswagen, mercedes, volvo, mitsubishi, toyota];

let gallery = document.getElementById('gallery');
gallery.style.display = 'flex';
gallery.style.flexWrap = 'wrap';

for (let i = 0; i < cars.length; i++) {
    let galleryItem = document.createElement('div');
    galleryItem.style.marginBottom = '15px';
    galleryItem.style.marginRight = '15px';

    let galleryImage = document.createElement('img');
    galleryImage.style.width = '400';
    galleryImage.style.height = '250px';
    galleryImage.src = cars[i].image;

    let galleryImageDesc = document.createElement('div');
    galleryImageDesc.style.textAlign = 'center'

    galleryImageDesc.innerHTML = `
    <p>Название: ${cars[i].name}</p>
    <p>Год выпуска: ${cars[i].year}</p>
    <p>Объем двигателя: ${cars[i].engineCapacity}</p>
    `;
    
    galleryItem.append(galleryImage);
    galleryItem.append(galleryImageDesc);
    gallery.append(galleryItem);
}

/* Завдання 7:*/