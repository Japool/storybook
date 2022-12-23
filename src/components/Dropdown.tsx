import { RefObject, useRef } from "react";

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
const clickOutsideRef = (
  content_ref: RefObject<HTMLDivElement>,
  toggle_ref: RefObject<HTMLButtonElement>
) => {
  document.addEventListener("mousedown", (e: TouchEvent | MouseEvent) => {
    // user click toggle
    if (toggle_ref.current && toggle_ref.current.contains(e.target as Node)) {
      content_ref.current!.classList.toggle("active");
    } else {
      // user click outside toggle and content
      if (
        content_ref.current &&
        !content_ref.current.contains(e.target as Node)
      ) {
        content_ref.current.classList.remove("active");
      }
    }
  });
};

export const Dropdown = ({
  icon,
  badge,
  customToggle,
  contentData,
  renderItems,
  renderFooter,
}: dropDownProps) => {
  const dropdown_toggle_el = useRef<HTMLButtonElement>(null);
  const dropdown_content_el = useRef<HTMLDivElement>(null);

  clickOutsideRef(dropdown_content_el, dropdown_toggle_el);
  return (
    <div className="dropdown">
      <button ref={dropdown_toggle_el} className="dropdown__toggle">
        {icon ? <i className={icon}></i> : ""}
        {badge ? <span className="dropdown__toggle-badge">{badge}</span> : ""}
        {customToggle ? customToggle() : ""}
      </button>
      <div ref={dropdown_content_el} className="dropdown__content">
        {contentData && renderItems
          ? contentData.map((item: any, index: number) =>
              renderItems(item, index)
            )
          : ""}
        {renderFooter ? (
          <div className="dropdown__footer">{renderFooter()}</div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Dropdown;
