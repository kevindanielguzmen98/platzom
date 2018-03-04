'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = platzom;
function platzom(str) {
    var translation = str;
    /* Si la palabra termina con "ar" se le quitan esas dos letras */
    if (str.toLowerCase().endsWith('ar')) {
        translation = str.slice(0, -2);
    }
    /* Si la palabra inicia con Z se le añade "pe" al final */
    if (str.toLowerCase().startsWith('z')) {
        translation += 'pe';
    }
    /* Si la palabra traducida tiene 10 o más letras se debe partir en dos por la mitad */
    var length = translation.length;
    if (length >= 10) {
        var firstHalf = translation.slice(0, Math.round(length / 2));
        var secondHalf = translation.slice(Math.round(length / 2));
        translation = firstHalf + '-' + secondHalf;
    }
    /*  */
    if (str == reverse(str)) {
        return minMay(str);
    }

    return translation;
}

function minMay(str) {
    var translation = '';
    var capitalize = true;
    for (var i = 0; i < str.length; i++) {
        var char = str.charAt(i);
        translation += capitalize ? char.toUpperCase() : char.toLowerCase();
        capitalize = !capitalize;
    }
    return translation;
}

function reverse(str) {
    return str.split('').reverse().join('');
}