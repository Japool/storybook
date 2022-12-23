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
exports.UpperCase = exports.Basic = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var MostrarErrorCampo_1 = __importDefault(require("../../components/MostrarErrorCampo"));
exports.default = {
    title: "UI/MostrarErrorCampo",
    component: MostrarErrorCampo_1.default,
    /*argTypes: {
      size: { control: "select" },
      color: { control: "select" },
      fontColor: { control: "color" },
    },*/
};
var Template = function (args) { return ((0, jsx_runtime_1.jsx)(MostrarErrorCampo_1.default, __assign({}, args))); };
exports.Basic = Template.bind({});
exports.Basic.args = {
    mensaje: "Hubo un error favor de verificar",
    //allCaps: false, // true: capitalizar toda la palabra
};
exports.UpperCase = Template.bind({});
exports.UpperCase.args = {
    mensaje: "Hubo un error favor de verificar",
    uppercase: true,
};
