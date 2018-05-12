/* Задание со звездочкой */

/*
 Создайте страницу с кнопкой.
 При нажатии на кнопку должен создаваться div со случайными размерами, цветом и позицией на экране
 Необходимо предоставить возможность перетаскивать созданные div при помощи drag and drop
 Запрещено использовать сторонние библиотеки. Разрешено пользоваться только тем, что встроено в браузер
 */

/*
 homeworkContainer - это контейнер для всех ваших домашних заданий
 Если вы создаете новые html-элементы и добавляете их на страницу, то дабавляйте их только в этот контейнер

 Пример:
   const newDiv = document.createElement('div');
   homeworkContainer.appendChild(newDiv);
 */
const homeworkContainer = document.querySelector('#homework-container');

/*
 Функция должна создавать и возвращать новый div с классом draggable-div и случайными размерами/цветом/позицией
 Функция должна только создавать элемент и задвать ему случайные размер/позицию/цвет
 Функция НЕ должна добавлять элемент на страницу. На страницу элемент добавляется отдельно

 Пример:
   const newDiv = createDiv();
   homeworkContainer.appendChild(newDiv);
 */
function createDiv() {
    let div = document.createElement('div');

    div.classList.add('draggable-div');

    const randColor = () => {
        let r = Math.floor(Math.random() * (256));
        let g = Math.floor(Math.random() * (256));
        let b = Math.floor(Math.random() * (256));

        return '#' + r.toString(16) + g.toString(16) + b.toString(16);
    };

    div.style.backgroundColor = randColor();
    div.style.width = Math.random() * 100 + 'px';
    div.style.height = Math.random() * 100 + 'px';
    div.style.position = 'absolute';
    div.style.top = Math.random() * 300 + 'px';
    div.style.left = Math.random() * 300 + 'px';
    div.style.userSelect = 'none';

    homeworkContainer.appendChild(div);

    return div;
}

/*
 Функция должна добавлять обработчики событий для перетаскивания элемента при помощи drag and drop

 Пример:
   const newDiv = createDiv();
   homeworkContainer.appendChild(newDiv);
   addListeners(newDiv);
 */
function addListeners(target) {
    const coords = {
        x: 0,
        y: 0
    };

    target.addEventListener('mousedown', (event) => {
        document.addEventListener('mousemove', moveHandler);
        coords.x = event.clientX;
        coords.y = event.clientY;
    });

    document.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', moveHandler);
        coords.x = null;
        coords.y = null;
    });

    function moveHandler(event) {
        const shift = {
            x: coords.x - event.clientX,
            y: coords.y - event.clientY
        };

        target.style.left = (target.offsetLeft - shift.x) + 'px';
        target.style.top = (target.offsetTop - shift.y) + 'px';

        coords.x = event.clientX;
        coords.y = event.clientY;
    }
}

let addDivButton = homeworkContainer.querySelector('#addDiv');

addDivButton.addEventListener('click', function() {
    // создать новый div
    const div = createDiv();

    // добавить на страницу
    homeworkContainer.appendChild(div);
    // назначить обработчики событий мыши для реализации D&D
    addListeners(div);
    // можно не назначать обработчики событий каждому div в отдельности, а использовать делегирование
    // или использовать HTML5 D&D - https://www.html5rocks.com/ru/tutorials/dnd/basics/
});

export {
    createDiv
};
