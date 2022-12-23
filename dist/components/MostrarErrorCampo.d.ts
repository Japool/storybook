import { CSSProperties } from "react";
import "./mostrarErrorCampo.css";
export interface mostrarErrorCampoProps {
    /**
     * Este es el mensaje a mostrar en la etiqueta
     */
    mensaje: string;
    /**
     * Clases a tomar de los estilos css creados.
     */
    className: string;
    /**
     * Mensaje en mayusculas.
     */
    uppercase?: boolean;
    /**
     * Clases de css, para ingregar al componte.
     */
    style: CSSProperties;
}
export declare const MostrarErrorCampo: ({ className, style, uppercase, mensaje, }: mostrarErrorCampoProps) => JSX.Element;
export default MostrarErrorCampo;
