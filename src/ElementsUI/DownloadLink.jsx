import { PDFDownloadLink } from "@react-pdf/renderer";
import { MyDocument } from "./MyDocument";

import styles from "../styles/DownloadLink.module.css";

export const DownloadLink = ({
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
}) => (
  <PDFDownloadLink
    document={
      <MyDocument
        type_message={type_message}
        name_sender={name_sender}
        address_sender={address_sender}
        message={message}
        name_recipient={name_recipient}
        address_recipient={address_recipient}
        postal_code_recipient={postal_code_recipient}
        postal_code_sender={postal_code_sender}
        telephone={telephone}
        OGRN_INN={OGRN_INN}
        date={date}
        image={image}
        company_sender={company_sender}
        company_recipient={company_recipient}
        post_sender={post_sender}
        post_recipient={post_recipient}
      />
    }
    fileName="letter.pdf"
    className={styles.button_download}
  >
    {({ loading }) => (loading ? "Генерация PDF..." : "Скачать PDF")}
  </PDFDownloadLink>
);
