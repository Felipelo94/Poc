import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import styles from "./transactional-zone-button.module.scss";

const TransactionalZoneButton = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const personasRoute =
    "https://proteccion.com/portalafiliados/afiliados/login-redirect";

  const empresasRoute = "https://proteccion.com/portalempresas";

  const navigateButton = route => {
    window.open(route, "_blank");
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
    setIsActive(!isActive);
  };
  return (
    <div className={styles.button_container}>
      <button
        className={`${styles.button_container__custom_button} ${isActive
          ? styles.button_container__custom_button__active
          : ""}`}
        onClick={toggleDropdown}
      >
        <p>Zona Transaccional</p>
        {showDropdown
          ? <IoIosArrowUp
              className={styles.button_container__custom_button__icon}
            />
          : <IoIosArrowDown
              className={styles.button_container__custom_button__icon}
            />}
      </button>
      {showDropdown &&
        <div className={styles.button_container__dropdown_menu}>
          <ul>
            <li
              onClick={() => navigateButton(personasRoute)}
              aria-hidden="true"
            >
              Zona Transaccional <b>Personas</b>
            </li>
            <li
              onClick={() => navigateButton(empresasRoute)}
              aria-hidden="true"
            >
              Zona Transaccional <b>Empresas</b>
            </li>
          </ul>
        </div>}
    </div>
  );
};

export default TransactionalZoneButton;
