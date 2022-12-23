/// <reference types="react" />
import "./dropdown.css";
export interface dropDownProps<T = any> {
    /**
     * funcion que renderiza elemento jsx que viene de una funcion.
     */
    customToggle: () => JSX.Element;
    /**
     * Valores genericos a renderizar dentro del dropdown.
     */
    contentData: T[] | undefined;
    /**
     * funcion que renderiza por cada elemento de los contentData.
     */
    renderItems: (item: {}, index: number) => JSX.Element;
    /**
     * funcion que renderiza jsx en caso de requerir footer.
     */
    renderFooter?: () => JSX.Element;
    /**
     * icono a renderiza puedes usar fontasome,boxicons,materialize, etc
     */
    icon?: string;
    /**
     * babge en caso de ser requerido
     */
    badge?: string | number;
}
export declare const Dropdown: ({ icon, badge, customToggle, contentData, renderItems, renderFooter, }: dropDownProps) => JSX.Element;
export default Dropdown;
