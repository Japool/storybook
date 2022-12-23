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
exports.Dropdown = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
require("./dropdown.css");
var clickOutsideRef = function (content_ref, toggle_ref) {
    document.addEventListener("mousedown", function (e) {
        // user click toggle
        if (toggle_ref.current && toggle_ref.current.contains(e.target)) {
            content_ref.current.classList.toggle("active");
        }
        else {
            // user click outside toggle and content
            if (content_ref.current &&
                !content_ref.current.contains(e.target)) {
                content_ref.current.classList.remove("active");
            }
        }
    });
};
var Dropdown = function (_a) {
    var icon = _a.icon, badge = _a.badge, customToggle = _a.customToggle, contentData = _a.contentData, renderItems = _a.renderItems, renderFooter = _a.renderFooter;
    var dropdown_toggle_el = (0, react_1.useRef)(null);
    var dropdown_content_el = (0, react_1.useRef)(null);
    clickOutsideRef(dropdown_content_el, dropdown_toggle_el);
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "dropdown" }, { children: [(0, jsx_runtime_1.jsxs)("button", __assign({ ref: dropdown_toggle_el, className: "dropdown__toggle" }, { children: [icon ? (0, jsx_runtime_1.jsx)("i", { className: icon }) : "", badge ? (0, jsx_runtime_1.jsx)("span", __assign({ className: "dropdown__toggle-badge" }, { children: badge })) : "", customToggle ? customToggle() : ""] })), (0, jsx_runtime_1.jsxs)("div", __assign({ ref: dropdown_content_el, className: "dropdown__content" }, { children: [contentData && renderItems
                        ? contentData.map(function (item, index) {
                            return renderItems(item, index);
                        })
                        : "", renderFooter ? ((0, jsx_runtime_1.jsx)("div", __assign({ className: "dropdown__footer" }, { children: renderFooter() }))) : ("")] }))] })));
};
exports.Dropdown = Dropdown;
exports.default = exports.Dropdown;
