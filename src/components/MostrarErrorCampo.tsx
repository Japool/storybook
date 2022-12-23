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

export const MostrarErrorCampo = ({
  className = "text-red-400",
  style = {},
  uppercase = false,
  mensaje = "Error",
}: mostrarErrorCampoProps) => {
  return (
    <div className={className} style={style}>
      {uppercase ? mensaje.toUpperCase() : mensaje}
    </div>
  );
};

export default MostrarErrorCampo;
