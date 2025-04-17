import { memo } from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    padding: 30,
    fontFamily: "Roboto",
  },
  section: {
    fontFamily: "Roboto",
    marginBottom: 15,
  },
  title: {
    fontFamily: "Roboto",
    fontSize: 18,
    marginBottom: 5,
    textAlign: "center",
    fontWeight: "bold",
  },
  field: {
    fontFamily: "Roboto",
    marginBottom: 10,
    fontSize: 14,
  },
  header_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  sender_block: {
    width: "48%",
  },
  recipient_block: {
    width: "48%",
  },
  image: {
    width: 75,
    height: 75,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 20,
  },
  header_annex: {
    marginBottom: 20,
    marginLeft: "auto",
    marginRight: "auto",
  },
  numAnnex: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  themeAnnex: {
    fontSize: 16,
    fontWeight: "bold",
    fontStyle: "italic",
  },

  page_annex: {
    flexDirection: "column",
    padding: 30,
    fontFamily: "Roboto",
    position: "relative",
    height: "100%",
  },
  pageNumber: {
    position: "absolute",
    bottom: 30,
    right: 30,
    fontSize: 12,
    color: "grey",
  },
});

export const MyDocument = memo(
  ({
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
      <Document language="ru" creator="Abobus" producer="Abobus">
        <Page size="A4" style={styles.page}>
          <Image src={image} style={styles.image} />
          <View style={styles.section}>
            <View style={styles.header_container}>
              <View style={styles.sender_block}>
                <Text style={styles.field}>
                  Отправитель: {post_sender} {name_sender}
                </Text>
                <Text style={styles.field}>
                  Компания отправителя: {company_sender}
                </Text>
                <Text style={styles.field}>
                  Адрес отправителя: {address_sender}
                </Text>
                <Text style={styles.field}>
                  Почтовый код отправителя: {postal_code_sender}
                </Text>
                <Text style={styles.field}>Телефон/Факс: {telephone}</Text>
                <Text style={styles.field}>ОРГН/ИНН: {OGRN_INN}</Text>
              </View>
              <View style={styles.recipient_block}>
                <Text style={styles.field}>
                  Получатель: {post_recipient} {name_recipient}
                </Text>
                <Text style={styles.field}>
                  Компания получателя: {company_recipient}
                </Text>
                <Text style={styles.field}>
                  Адрес получателя: {address_recipient}
                </Text>
                <Text style={styles.field}>
                  Почтовый код получателя: {postal_code_recipient}
                </Text>
              </View>
            </View>
            {Array.from({ length: numAnnex }).map((_, i) => (
              <Text
                key={i}
                style={{ fontSize: 14, marginBottom: 5, fontStyle: "italic" }}
              >
                Приложение № {massnumberAnnex?.[i]} — {massthemeAnnex?.[i]}
              </Text>
            ))}
            <Text style={styles.title}>{type_message}</Text>
            <View style={{ marginTop: 15, marginBottom: 20 }}>
              <Text style={{ marginBottom: 5 }}></Text>
              {message.split("\n").map((line, index) => (
                <Text key={index} style={{ marginBottom: 5 }}>
                  {line}
                </Text>
              ))}
            </View>
            <Text style={styles.field}>Дата: {date}</Text>
          </View>
        </Page>
        {Array.from({ length: numAnnex }).map((_, i) => (
          <Page key={i} size="A4" style={styles.page_annex}>
            <View style={styles.header_annex}>
              <Text style={styles.numAnnex}>
                Приложение № {massnumberAnnex?.[i]}
              </Text>
              <Text style={styles.themeAnnex}>{massthemeAnnex?.[i] || ""}</Text>
            </View>
            <View style={styles.textAnnex}>
              {masstextAnnex[i]?.split("\n").map((line, idx) => (
                <Text key={idx}>{line}</Text>
              ))}
            </View>
            <Text
              style={styles.pageNumber}
              render={({ pageNumber }) => `Страница ${pageNumber}`}
            />
          </Page>
        ))}
      </Document>
    );
  }
);
