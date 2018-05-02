/* ДЗ 2 - работа с массивами и объеектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array
 */
function forEach(array, fn) {
    for (var i = 0; i < array.length; i++) {
      fn(array[i], i, array);
    }
}

/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array
 */
function map(array, fn) {
    var secArr = [];

      for (var i = 0; i < array.length; i++) {
          secArr[i] = fn(array[i], i, array);
      }

      return secArr;
}

/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array
 */
function reduce(array, fn, initial) {
    for (let i = (initial !== undefined) ? 0 : 1; i < array.length; i++) {
      initial = fn((initial !== undefined) ? initial : array[0], array[i], i, array);
    }

    return initial;
}

/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */
function upperProps(obj) {
    var arr = [];

    for (var key in obj) {
        arr.push(key.toUpperCase());
    }

    return arr;
}

/*
 Задание 5 *:

 Напишите аналог встроенного метода slice для работы с массивами
 Посмотрите как работает slice и повторите это поведение для массива, который будет передан в параметре array
 */
function slice(array, from, to) {
    if(typeof from === 'undefined' || -from > array.length) {
      from = 0;
    } else if(from < 0) {
      from = array.length + from;
    }

    if(typeof to === 'undefined' || to > array.length) {
      to = array.length;
    } else if(to < 0) {
      to = array.length + to;
    }

    var result = [];

    for(var i = from; i < to; i++) {
      result.push(array[i]);
    }

    return result;
}

/*
 Задание 6 *:

 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */
function createProxy(obj) {
    return new Proxy(obj, {
      set(target, property, value, receiver) {
          target[property] = value * value;

          return true;
      }
    })
}

export {
    forEach,
    map,
    reduce,
    upperProps,
    slice,
    createProxy
};
