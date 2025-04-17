import { memo } from "react";
import { Page, Text, View, StyleSheet, Document } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    padding: 30,
    fontFamily: "Roboto",
  },
  header_annex: {
    marginBottom: 20,
  },
  numAnnex: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  themeAnnex: {
    fontSize: 14,
    fontStyle: "italic",
  },
  textAnnex: {
    fontSize: 12,
    lineHeight: 1.5,
  },
});

export const AnnexLetter = memo(({ numberAnnex, themeAnnex, textAnnex }) => {
  return (
    <Page size="A4" style={styles.page}>
      <View style={styles.header_annex}>
        <Text style={styles.numAnnex}> Приложение № {numberAnnex}</Text>
        <Text style={styles.themeAnnex}> {themeAnnex}</Text>
      </View>
      <View>
        <Text style={styles.textAnnex}>{textAnnex}</Text>
      </View>
    </Page>
  );
});
