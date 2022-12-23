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
export declare const InputField: ({ id, label, campo, type, placeholder, className, style, onChange, onBlur, value, }: inputFieldProps) => JSX.Element;
export default InputField;
