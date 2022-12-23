import { ComponentMeta, ComponentStory } from "@storybook/react";
import Dropdown from "../../components/Dropdown";

export default {
  title: "UI/Dropdown",
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
);

const curr_user = {
  display_name: "Jardiel Pool",
  image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl2dWQqcrJa3mAOe1ACtrOuQxkYz-stGMtFA&usqp=CAU",
};
const user_menus = [
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
const notificaciones = [
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
const renderUserToggle = (user: any) => (
  <div className="topnav__right-user">
    <div className="topnav__right-user__image">
      <img src={user.image} alt="" />
    </div>
    <div className="topnav__right-user__name">{user.display_name}</div>
  </div>
);

const renderUserMenu = (item: any, index: number) => (
  <a href="/" key={index}>
    <div className="notification-item">
      <i className={item.icon}></i>
      <span>{item.content}</span>
    </div>
  </a>
);
const renderNotificationItem = (item: any, index: number) => (
  <div className="notification-item" key={index}>
    <i className={item.icon}></i>
    <span>{item.content}</span>
  </div>
);
export const UserToggle = Template.bind({});
UserToggle.args = {
  customToggle: () => renderUserToggle(curr_user),
  contentData: user_menus,
  renderItems: (item, index) => renderUserMenu(item, index),
};

export const NotificacionToggle = Template.bind({});
NotificacionToggle.args = {
  icon: "clase_i",
  badge: "12",
  contentData: notificaciones,
  renderItems: (item, index) => renderNotificationItem(item, index),
  renderFooter: () => <a href="/">Ver todo</a>,
};
