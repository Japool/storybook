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
exports.InputField = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
require("./inputfield.css");
var InputField = function (_a) {
    var _b = _a.id, id = _b === void 0 ? "0" : _b, _c = _a.label, label = _c === void 0 ? "label" : _c, _d = _a.campo, campo = _d === void 0 ? "primary" : _d, _e = _a.type, type = _e === void 0 ? "text" : _e, _f = _a.placeholder, placeholder = _f === void 0 ? "input" : _f, _g = _a.className, className = _g === void 0 ? "input" : _g, _h = _a.style, style = _h === void 0 ? {} : _h, onChange = _a.onChange, onBlur = _a.onBlur, value = _a.value;
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [label ? (0, jsx_runtime_1.jsx)("label", __assign({ htmlFor: campo }, { children: label })) : null, (0, jsx_runtime_1.jsx)("input", { id: id, onChange: onChange, onBlur: onBlur, value: value, autoComplete: "false", className: className, name: campo, type: type, placeholder: placeholder, style: style })] }));
};
exports.InputField = InputField;
exports.default = exports.InputField;
