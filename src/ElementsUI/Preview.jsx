import { PDFViewer } from "@react-pdf/renderer";
import { MyDocument } from "./MyDocument";
import styles from "../styles/Preview.module.css";

export const Preview = ({
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
  numAnnex,
  massnumberAnnex,
  massthemeAnnex,
  masstextAnnex,
}) => {
  return (
    <div className={styles.preview}>
      <PDFViewer width="100%" height="100%">
        <>
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
            numAnnex={numAnnex}
            massnumberAnnex={massnumberAnnex}
            massthemeAnnex={massthemeAnnex}
            masstextAnnex={masstextAnnex}
          />
        </>
      </PDFViewer>
    </div>
  );
};
