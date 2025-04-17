import styles from "../styles/InputForm.module.css";

export const InputForm = ({
  type_message,
  name_sender,
  address_sender,
  message,
  name_recipient,
  address_recipient,
  postal_code_recipient,
  postal_code_sender,
  telephone,
  OGRN_INN,
  date,
  image,
  company_sender,
  company_recipient,
  post_sender,
  post_recipient,
  onNameSenderChange,
  onAddressSenderChange,
  onPostalCodeSenderChange,
  onNameRecipientChange,
  onAddressRecipientChange,
  onPostalCodeRecipientChange,
  onTypeMessageChange,
  onMessageChange,
  onTelephoneChange,
  onOGRN_INNChange,
  onDateChange,
  onImageChange,
  onCompanySenderChange,
  onCompanyRecipientChange,
  onPostSenderChange,
  onPostRecipientChange,
}) => (
  <div className={styles.block_inputs_textarea}>
    <div className={styles.block_inputs}>
      <div className={styles.inputs}>
        <input
          type="text"
          placeholder="Тип письма(Благодарственное/Жалоба/...)"
          value={type_message}
          onChange={onTypeMessageChange}
          className={styles.input_data_first}
        />
        <label htmlFor="file_input" className={styles.input_data}>
          {image === "" ? "Выбрать файл изображения" : "Изображение выбрано"}
        </label>
        <input
          type="file"
          id="file_input"
          onChange={onImageChange}
          style={{ display: "none" }}
        ></input>
        <input
          type="text"
          placeholder="Отправитель"
          value={name_sender}
          onChange={onNameSenderChange}
          className={styles.input_data}
        />
        <input
          type="text"
          placeholder="Должность отправителя"
          value={post_sender}
          onChange={onPostSenderChange}
          className={styles.input_data}
        />
        <input
          type="text"
          placeholder="Компания отправителя"
          value={company_sender}
          onChange={onCompanySenderChange}
          className={styles.input_data}
        />
        <input
          type="text"
          placeholder="Адрес отправителя"
          value={address_sender}
          onChange={onAddressSenderChange}
          className={styles.input_data}
        />
        <input
          type="number"
          placeholder="Почтовый индекс отправителя"
          value={postal_code_sender}
          onChange={onPostalCodeSenderChange}
          className={styles.input_data}
        />
        <input
          type="tel"
          placeholder="Телефон/Факс"
          value={telephone}
          onChange={onTelephoneChange}
          className={styles.input_data}
        />
        <input
          type="number"
          placeholder="ОГРН/ИНН"
          value={OGRN_INN}
          onChange={onOGRN_INNChange}
          className={styles.input_data}
        />
        <input
          type="date"
          placeholder="Дата"
          value={date}
          onChange={onDateChange}
          className={styles.input_data}
        />
      </div>
      <div className={styles.inputs}>
        <input
          type="text"
          placeholder="Получатель"
          value={name_recipient}
          onChange={onNameRecipientChange}
          className={styles.input_data_first}
        />
        <input
          type="text"
          placeholder="Должность получателя"
          value={post_recipient}
          onChange={onPostRecipientChange}
          className={styles.input_data}
        />
        <input
          type="text"
          placeholder="Компания получателя"
          value={company_recipient}
          onChange={onCompanyRecipientChange}
          className={styles.input_data}
        />
        <input
          type="text"
          placeholder="Адрес получателя"
          value={address_recipient}
          onChange={onAddressRecipientChange}
          className={styles.input_data}
        />
        <input
          type="number"
          placeholder="Почтовый индекс получателя"
          value={postal_code_recipient}
          onChange={onPostalCodeRecipientChange}
          className={styles.input_data}
        />
      </div>
    </div>
    <div>
      <textarea
        placeholder="Сообщение"
        value={message}
        onChange={onMessageChange}
        className={styles.input_data_message}
      />
    </div>
  </div>
);
