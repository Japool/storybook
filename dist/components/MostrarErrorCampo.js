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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MostrarErrorCampo = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
require("./mostrarErrorCampo.css");
var MostrarErrorCampo = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "text-red-400" : _b, _c = _a.style, style = _c === void 0 ? {} : _c, _d = _a.uppercase, uppercase = _d === void 0 ? false : _d, _e = _a.mensaje, mensaje = _e === void 0 ? "Error" : _e;
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: className, style: style }, { children: uppercase ? mensaje.toUpperCase() : mensaje })));
};
exports.MostrarErrorCampo = MostrarErrorCampo;
exports.default = exports.MostrarErrorCampo;
