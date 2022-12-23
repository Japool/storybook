import { CSSProperties } from "react";
import "./inputfield.css";
export interface inputFieldProps {
  /**
   * Valor id del name
   */
  id: string;
  /**
   * Valor name del campo.
   */
  campo: string;
  /**
   * Nombre del input no es requerido.
   */
  label?: string;
  /**
   * Descripcion del placeholder.
   */
  placeholder?: string;
  /**
   * Tipo del input si es texto o de password.
   */
  type: "text" | "password";
  /**
   * Clases de css para el input
   */
  className: string;
  /**
   * Estilos css en linea para el input
   */
  style: CSSProperties;
  /**
   * onchange para cambiar el valor del input
   */
  //onChange: (valor: string) => void;
  onChange: () => void;
  /**
   * valor del input
   */
  value: string;
  /**
   * onblur cuando salgo del input
   */
  onBlur: () => void;
}
export const InputField = ({
  id = "0",
  label = "label",
  campo = "primary",
  type = "text",
  placeholder = "input",
  className = "input",
  style = {},
  onChange,
  onBlur,
  value,
}: inputFieldProps) => {
  return (
    <>
      {label ? <label htmlFor={campo}>{label}</label> : null}
      <input
        id={id}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        autoComplete="false"
        className={className}
        name={campo}
        type={type}
        placeholder={placeholder}
        style={style}
      />
    </>
  );
};
export default InputField;
