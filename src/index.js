"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var concatenation_1 = require("./concatenation");
var button = document.querySelector('button');
var input = document.querySelector('input');
if (button && input) {
    button.addEventListener('click', function () {
        (0, concatenation_1.concatenation)(input.value, 'hello!');
    });
}
