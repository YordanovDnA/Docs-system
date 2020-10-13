import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
  },
  heading: {
    fontSize: 23,
    textAlign: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  headingText: {
    fontSize: 12,
    textAlign: "right",
    margin: 10,
    padding: 10,
  },
  mainText: {
    borderTop: 1,
    borderBottom: 1,
    flexGrow: 1,
    margin: 10,
    padding: 30,
    fontSize: 14,
  },
  footerText: {
    textAlign: "right",
    fontSize: 12,
    marginLeft: 20,
    marginRight: 20,
  },
});

// Create the letter to PDF
const LetterToPdf = ({ letter, signedBy }) => {
  console.log("Document", letter, signedBy);
  return (
    <Document title={`DSLetter-${new Date()}`}>
      <Page size="A4" style={styles.page}>
        <View style={styles.sectionTop}>
          <Text style={styles.heading}>Discharging letter</Text>
          <Text
            style={styles.headingText}
          >{`National Health Service\n[Hospital Name]\n[Hospitaladdress]\n[Hospital contact indormation]`}</Text>
          <Text style={styles.mainText}>
            {`${letter.body}\n\nYours sinciraly,\n${letter.createdBy}`}
          </Text>
        </View>
        <Text style={styles.footerText}>
          {`Signed by:\n${signedBy[0]}\n${signedBy[1]}`}
        </Text>
      </Page>
    </Document>
  );
};

//Render the pomponent with download link
const DownloadPDFLetter = ({ letter, signedBy }) => {
  console.log("Letter", letter, "SignedBy", signedBy);
  return (
    <React.Fragment>
      <PDFDownloadLink
        className="btn btn-sm btn-info"
        document={<LetterToPdf letter={letter} signedBy={signedBy} />}
        fileName="Test"
      >
        Download
      </PDFDownloadLink>
    </React.Fragment>
  );
};

export default DownloadPDFLetter;
