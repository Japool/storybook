import { ComponentMeta, ComponentStory } from "@storybook/react";
import InputField from "../../components/InputField";

export default {
  title: "UI/InputField",
  component: InputField,
} as ComponentMeta<typeof InputField>;

const Template: ComponentStory<typeof InputField> = (args) => (
  <InputField {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  id: "nombre",
  type: "text",
  campo: "nombre",
  label: "Nombre",
  placeholder: "Escribe tu nombre",
  className: "input",
  style: {},
  value: "Escribe tu nombre",
};
