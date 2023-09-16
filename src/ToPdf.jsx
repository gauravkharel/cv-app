import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
import { useState } from "react";
const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    color: "black",
  },
  section: {
    margin: 10,
    padding: 10,
  },
  viewer: {
    width: 800, //the pdf viewer will take up all of the width and height
    height: 900,
  },
});

function BasicDocument({ fullname, email }) {
  return (
    <PDFViewer style={styles.viewer}>
      {/* Start of the document*/}
      <Document>
        {/*render a single page*/}
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text>{fullname}</Text>
          </View>
          <View style={styles.section}>
            <Text>{email}</Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}

function ShowPdf() {
  const [isRendered, setIsRendered] = useState(false);
  const handleClick = () => {
    setIsRendered(!isRendered);
  };
  return (
    <div>
      <button onClick={handleClick}> Show Pdf</button>
      {isRendered && <BasicDocument />}
    </div>
  );
}
export default ShowPdf;
