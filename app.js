//Задание 1
//Создать конструктор, который возвращает любой объект из жизни с одним свойством и одним методом.
/*class Kitchen {
    constructor(model, brand) {
        this.model = model;
        this.brand = brand;
    }
getInfo(){
    return ` ${this.model} - ${this.brand} `;
    }
}
const Zow = new Kitchen ('Eve','Zow');
console.log(Zow.getInfo());
//Задание 2
//Создайте класс Calculator, который создаёт объекты с конструктором, который запрашивает 
//два значения при помощи prompt и сохраняет их значение в свойствах объекта, и двумя методами:
//sum() возвращает сумму введённых свойств.
//mul() возвращает произведение введённых свойств
/*class Calculator {
    constructor(a, b) {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
    };
    sum () {
        return this.a + this.b;
    };
    mul () {
        return this.a * this.b;
    };
}
let calculator = new Calculator();
console.log( "Sum=" + calculator.sum() );
console.log("Mul=" + calculator.mul());
*/

class Logo {
    constructor(url) {
    this.top = 0;
    this.left = 0;
    this.right = 0;
    this.bottom = 0;
    this.width = '200px';
    this.imgUrl = url;
    this.html = null;
    }
    init() {
        this.html = document.createElement('img');
        document.body.append(this.html);
        this.render();
        let body = document.querySelector('body');
        body.style.backgroundColor = 'black';
        }
    render() {
        this.html.style.position = 'fixed';
        this.html.style.top = this.top;
        this.html.style.left = this.left;
        this.html.style.right = this.right;
        this.html.style.bottom = this.bottom;
        this.html.style.width = this.width;
        this.html.src = this.imgUrl;
    }

    moveUp() {
        this.top = '20px';
        this.render();
    }
    moveDown() {
        this.bottom = '20px';
        this.render();
    
    }
    moveLeft() {
        this.left = '20px';
        this.render();
    }
    moveRight() {
        this.right = '20px';
        this.render();
    }
}

const imgUrl = 'https://bit.ly/2tcDito';
var mfLogotip = new Logo(imgUrl);
console.log(mfLogotip);

// запускаем наше микро-приложение
mfLogotip.init();

mfLogotip.moveRight();
mfLogotip.moveRight();
mfLogotip.moveRight();
mfLogotip.moveRight();
mfLogotip.moveDown();
mfLogotip.moveDown();
mfLogotip.moveDown();
mfLogotip.moveDown();
mfLogotip.moveUp()
mfLogotip.moveLeft()

//Добавить к приложению желтый круг (пример ЗДЕСЬ)
//Реализовать с помощью класса Circle, который принимает аргументы size(ширина и высота фигуры), color
//(цвет фигуры).При вызове метода render() из экземпляра класса Circle должен отрисоваться круг с 
//заданными стилями.
//Сделать по примеру из последнего видео в уроке.

class Circle  {
    constructor(width, height, background, radius, borderRadius) {
        this.background = background;
        this.width = width;
        this.height = height;
        this.radius = radius;
        this.borderRadius = borderRadius
    }
    init() {
        this.html = document.createElement('div');
        document.body.append(this.html);
        this.render()
        }   
    render() {
        this.html.style.width = this.width;
        this.html.style.height = this.height;
        this.html.style.background = this.background;
        this.html.style.radius = this.radius;
        this.html.style.borderRadius = this.borderRadius;
    }
    
}
let crcle1 = new Circle('50px', '50px', 'yellow', '2px','50px' );
crcle1.init();






