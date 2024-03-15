import React, { useState } from "react";

import styles from "./InterestLinkCard.module.scss";
import { SCALE_SIZE_16PX, scaleLine, scaleText } from "../../../utils/scaleText";

export const InterestLinkCard = ({ item, accessibility }) => {
  const [hovered, setHovered] = useState(false);


  

  return (
    <div
      className={styles.card_container}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        className={styles.card_container__image}
        src={hovered ? item.imagenHover.file.url : item.imagen.file.url}
        alt={item.imagen.title}
      />
      <span
        className={styles.card_container__text}
        style={{
          fontSize: scaleText(accessibility && accessibility.fontSize, SCALE_SIZE_16PX, 1.5)
            .fontSize,
          lineHeight: scaleLine(accessibility && accessibility.lineSize)
        }}
        >
        {item.titulo}
      </span>
    </div>
  );
};
