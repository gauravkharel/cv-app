import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "red",
    color: "white",
  },
  section: {
    margin: 10,
    padding: 10,
  },
  viewer: {
    width: window.innerWidth, //the pdf viewer will take up all of the width and height
    height: window.innerHeight,
  },
});

function BasicDocument({fullname, email}) {
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
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text>{email}</Text>
          </View>
          <View style={styles.section}>
            <Text>World</Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}

// function ShowPdf(){
//   const [isRendered, setIsRendered] = useState(false)
//   const handleClick = () => {
//     setIsRendered(!isRendered)
//   }
//   return (
//     <div>
//       <button onClick={handleClick}> Show Pdf</button>
//       {isRendered && <BasicDocument />}
//     </div>
//     )
// }
export default BasicDocument;
