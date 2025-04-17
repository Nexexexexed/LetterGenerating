import React, { useState, useCallback, useEffect } from "react";
import { Font } from "@react-pdf/renderer";

import "./styles/main.css";

import { InputForm } from "./ElementsUI/InputForm";
import { Preview } from "./ElementsUI/Preview";
import { DownloadLink } from "./ElementsUI/DownloadLink";

import { InputAnnexForm } from "../src/ElementsUI/InputAnnexForm";

import RobotoRegular from "./fonts/Roboto/static/Roboto-Regular.ttf";
import RobotoBold from "./fonts/Roboto/static/Roboto-Bold.ttf";
import RobotoItalic from "./fonts/Roboto/static//Roboto-Italic.ttf";

Font.register({
  family: "Roboto",
  fonts: [
    {
      src: RobotoRegular,
      fontWeight: "normal",
    },
    {
      src: RobotoBold,
      fontWeight: "bold",
    },
    {
      src: RobotoItalic,
      fontWeight: "normal",
      fontStyle: "italic",
    },
  ],
});

const App = () => {
  const [type_message, setType_message] = useState("");
  const [name_sender, setName_sender] = useState("");
  const [post_sender, setPost_sender] = useState("");
  const [company_sender, setCompany_sender] = useState("");
  const [address_sender, setAddress_sender] = useState("");
  const [postal_code_sender, setPostal_code_sender] = useState("");
  const [telephone, setTelephone] = useState("");
  const [OGRN_INN, setOGRN_INN] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");
  const [image, setImage] = useState("");

  const [company_recipient, setCompany_recipient] = useState("");
  const [name_recipient, setName_recipient] = useState("");
  const [post_recipient, setPost_recipient] = useState("");
  const [address_recipient, setAddress_recipient] = useState("");
  const [postal_code_recipient, setPostal_code_recipient] = useState("");

  const [massnumberAnnex, setnumberAnnex] = useState([""]);
  const [massthemeAnnex, setthemeAnnex] = useState([""]);
  const [masstextAnnex, settextAnnex] = useState([""]);

  const [numAnnex, setnumAnnex] = useState(0);

  useEffect(() => {
    const new_image_src = image.replace(/\\/g, "/");
    setImage(new_image_src);
  }, [image]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlemassnumberAnnex = useCallback((index, e) => {
    const newValue = e.target.value;
    setnumberAnnex((prevArray) => {
      const newArray = [...prevArray];
      newArray[index] = newValue;
      return newArray;
    });
  }, []);

  const handlemassthemeAnnex = useCallback((index, e) => {
    const newValue = e.target.value;
    setthemeAnnex((prevArray) => {
      const newArray = [...prevArray];
      newArray[index] = newValue;
      return newArray;
    });
  }, []);

  const handlemasstextAnnex = useCallback((index, e) => {
    const newValue = e.target.value;
    settextAnnex((prevArray) => {
      const newArray = [...prevArray];
      newArray[index] = newValue;
      return newArray;
    });
  }, []);

  const handleTelephoneChange = useCallback(
    (e) => setTelephone(e.target.value),
    []
  );

  const handlePostSenderChange = useCallback(
    (e) => setPost_sender(e.target.value),
    []
  );
  const handlePostRecipientChange = useCallback(
    (e) => setPost_recipient(e.target.value),
    []
  );

  const handleOGRN_INNChange = useCallback(
    (e) => setOGRN_INN(e.target.value),
    []
  );

  const handledateChange = useCallback((e) => setDate(e.target.value), []);

  const handleNameSenderChange = useCallback(
    (e) => setName_sender(e.target.value),
    []
  );

  const handleCompanySenderChange = useCallback(
    (e) => setCompany_sender(e.target.value),
    []
  );

  const handleCompanyRecipientChange = useCallback(
    (e) => setCompany_recipient(e.target.value),
    []
  );

  const handleNameRecipientChange = useCallback(
    (e) => setName_recipient(e.target.value),
    []
  );
  const handleAddressSenderChange = useCallback(
    (e) => setAddress_sender(e.target.value),
    []
  );
  const handleAddressRecipientChange = useCallback(
    (e) => setAddress_recipient(e.target.value),
    []
  );
  const handPostalCodeSenderChange = useCallback(
    (e) => setPostal_code_sender(e.target.value),
    []
  );
  const handPostalCodeRecipientChange = useCallback(
    (e) => setPostal_code_recipient(e.target.value),
    []
  );

  const handleTypeMessageChange = useCallback(
    (e) => setType_message(e.target.value),
    []
  );
  const handleMessageChange = useCallback(
    (e) => setMessage(e.target.value),
    []
  );

  const AnnexList = [];

  for (let i = 0; i < numAnnex; i++) {
    AnnexList.push(
      <InputAnnexForm
        key={i}
        index={i}
        massnumberAnnex={massnumberAnnex}
        massthemeAnnex={massthemeAnnex}
        masstextAnnex={masstextAnnex}
        onChangemassnumberAnnex={handlemassnumberAnnex}
        onChangemassthemeAnnex={handlemassthemeAnnex}
        onChangemasstextAnnex={handlemasstextAnnex}
      ></InputAnnexForm>
    );
  }

  return (
    <div style={{ padding: 20, maxWidth: 800, margin: "0 auto" }}>
      <h1 className="header">Создание письма</h1>
      <div className="main_block">
        <div className="left_block">
          <h2>Данные письма</h2>
          <InputForm
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
            post_recipient={post_recipient}
            company_sender={company_sender}
            company_recipient={company_recipient}
            post_sender={post_sender}
            onNameSenderChange={handleNameSenderChange}
            onAddressSenderChange={handleAddressSenderChange}
            onPostalCodeSenderChange={handPostalCodeSenderChange}
            onNameRecipientChange={handleNameRecipientChange}
            onAddressRecipientChange={handleAddressRecipientChange}
            onPostalCodeRecipientChange={handPostalCodeRecipientChange}
            onTypeMessageChange={handleTypeMessageChange}
            onMessageChange={handleMessageChange}
            onTelephoneChange={handleTelephoneChange}
            onOGRN_INNChange={handleOGRN_INNChange}
            onDateChange={handledateChange}
            onImageChange={handleImageChange}
            onCompanySenderChange={handleCompanySenderChange}
            onCompanyRecipientChange={handleCompanyRecipientChange}
            onPostSenderChange={handlePostSenderChange}
            onPostRecipientChange={handlePostRecipientChange}
          />
          <div>{AnnexList}</div>
          <button
            className="button_add"
            onClick={() => setnumAnnex(numAnnex + 1)}
          >
            Добавить приложение
          </button>

          <DownloadLink
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
        </div>
        <div className="rigth_block">
          <Preview
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
        </div>
      </div>
    </div>
  );
};
export default App;
