import { ComponentMeta, ComponentStory } from "@storybook/react";
import MostrarErrorCampo from "../../components/MostrarErrorCampo";

export default {
  title: "UI/MostrarErrorCampo",
  component: MostrarErrorCampo,
  /*argTypes: {
    size: { control: "select" },
    color: { control: "select" },
    fontColor: { control: "color" },
  },*/
} as ComponentMeta<typeof MostrarErrorCampo>;

const Template: ComponentStory<typeof MostrarErrorCampo> = (args) => (
  <MostrarErrorCampo {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  mensaje: "Hubo un error favor de verificar",
  //allCaps: false, // true: capitalizar toda la palabra
};
export const UpperCase = Template.bind({});
UpperCase.args = {
  mensaje: "Hubo un error favor de verificar",
  uppercase: true,
};
