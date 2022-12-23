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
exports.NotificacionToggle = exports.UserToggle = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Dropdown_1 = __importDefault(require("../../components/Dropdown"));
exports.default = {
    title: "UI/Dropdown",
    component: Dropdown_1.default,
};
var Template = function (args) { return ((0, jsx_runtime_1.jsx)(Dropdown_1.default, __assign({}, args))); };
var curr_user = {
    display_name: "Jardiel Pool",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl2dWQqcrJa3mAOe1ACtrOuQxkYz-stGMtFA&usqp=CAU",
};
var user_menus = [
    {
        icon: "bx bx-user",
        content: "Profile",
    },
    {
        icon: "bx bx-wallet-alt",
        content: "My Wallet",
    },
    {
        icon: "bx bx-cog",
        content: "Settings",
    },
    {
        icon: "bx bx-log-out-circle bx-rotate-180",
        content: "Logout",
    },
];
var notificaciones = [
    {
        icon: "bx bx-error",
        content: "Curabitur id eros quis nunc suscipit blandit",
    },
    {
        icon: "bx bx-package",
        content: "Duis malesuada justo eu sapien elementum, in semper diam posuere",
    },
    {
        icon: "bx bx-cart",
        content: "Donec at nisi sit amet tortor commodo porttitor pretium a erat",
    },
    {
        icon: "bx bx-error",
        content: "In gravida mauris et nisi",
    },
    {
        icon: "bx bx-cart",
        content: "Curabitur id eros quis nunc suscipit blandit",
    },
];
var renderUserToggle = function (user) { return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "topnav__right-user" }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: "topnav__right-user__image" }, { children: (0, jsx_runtime_1.jsx)("img", { src: user.image, alt: "" }) })), (0, jsx_runtime_1.jsx)("div", __assign({ className: "topnav__right-user__name" }, { children: user.display_name }))] }))); };
var renderUserMenu = function (item, index) { return ((0, jsx_runtime_1.jsx)("a", __assign({ href: "/" }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: "notification-item" }, { children: [(0, jsx_runtime_1.jsx)("i", { className: item.icon }), (0, jsx_runtime_1.jsx)("span", { children: item.content })] })) }), index)); };
var renderNotificationItem = function (item, index) { return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "notification-item" }, { children: [(0, jsx_runtime_1.jsx)("i", { className: item.icon }), (0, jsx_runtime_1.jsx)("span", { children: item.content })] }), index)); };
exports.UserToggle = Template.bind({});
exports.UserToggle.args = {
    customToggle: function () { return renderUserToggle(curr_user); },
    contentData: user_menus,
    renderItems: function (item, index) { return renderUserMenu(item, index); },
};
exports.NotificacionToggle = Template.bind({});
exports.NotificacionToggle.args = {
    icon: "clase_i",
    badge: "12",
    contentData: notificaciones,
    renderItems: function (item, index) { return renderNotificationItem(item, index); },
    renderFooter: function () { return (0, jsx_runtime_1.jsx)("a", __assign({ href: "/" }, { children: "Ver todo" })); },
};
