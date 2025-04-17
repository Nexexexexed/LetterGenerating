import React from "react";
import styles from "../styles/InputAnnexForm.module.css";

export const InputAnnexForm = ({
  index,
  massnumberAnnex,
  massthemeAnnex,
  masstextAnnex,
  onChangemassnumberAnnex,
  onChangemassthemeAnnex,
  onChangemasstextAnnex,
}) => {
  return (
    <div className={styles.annex_block}>
      <div className={styles.annex_up_block}>
        <input
          type="text"
          className={styles.input_data}
          placeholder="Номер приложения"
          value={massnumberAnnex?.[index] || ""}
          onChange={(e) => onChangemassnumberAnnex(index, e)}
        />
        <input
          type="text"
          className={styles.input_data}
          placeholder="Название приложения"
          value={massthemeAnnex?.[index] || ""}
          onChange={(e) => onChangemassthemeAnnex(index, e)}
        />
      </div>
      <div>
        <textarea
          placeholder="Сообщение"
          className={styles.input_data_message}
          value={masstextAnnex?.[index] || ""}
          onChange={(e) => onChangemasstextAnnex(index, e)}
        />
      </div>
    </div>
  );
};
