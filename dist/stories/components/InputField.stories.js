"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Basic = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var InputField_1 = __importDefault(require("../../components/InputField"));
exports.default = {
    title: "UI/InputField",
    component: InputField_1.default,
};
var Template = function (args) { return ((0, jsx_runtime_1.jsx)(InputField_1.default, __assign({}, args))); };
exports.Basic = Template.bind({});
exports.Basic.args = {
    id: "nombre",
    type: "text",
    campo: "nombre",
    label: "Nombre",
    placeholder: "Escribe tu nombre",
    className: "input",
    style: {},
    value: "Escribe tu nombre",
};
