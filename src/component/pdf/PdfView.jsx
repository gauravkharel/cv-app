import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,

} from "@react-pdf/renderer";

// const garamond = 'Garamond'

// Font.register({ 
//   family: 'Garamond',
//   fonts: [
//     { src: garamond },
//     { src: garamondItalic, fontStyle: 'italic' },
//     { src: garamondBold, fontWeight: 700 },
//   ]
// })


const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Garamond',
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
  },
  header: {
    borderBottom: '0.5 solid #000',
    paddingBottom: 3,
  },
  name: {
    fontSize: 24,
    fontFamily: 'Garamond',
    fontWeight: 700,
  },
  title: {
    fontSize: '12px',
  },
  links: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 20,
    fontSize: '12px',
  },
  linksItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  icons: {
    color: '#0a52cf',
    height: 10,
    width: 10,
  }
})


function PdfView() {
  return (
      <Document>
        {/*render a single page*/}
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text>Gaurav Kharel</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.mainTitle}></Text>
          </View>
        </Page>
      </Document>
  );
}

// function ShowPdf() {
//   const [isRendered, setIsRendered] = useState(false);
//   const handleClick = () => {
//     setIsRendered(!isRendered);
//   };
//   return (
//     <div>
//       <button onClick={handleClick}> Show Pdf</button>
//       {isRendered && <PdfView />}
//     </div>
//   );
// }
export default PdfView;
