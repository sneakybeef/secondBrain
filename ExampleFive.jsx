import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Text, TouchableOpacity, Alert  } from 'react-native';
import { Table, TableWrapper, Row } from 'react-native-table-component';
 
export default class ExampleThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initTableData : [
        ['1', '2', '3','4'],
        ['a', 'b', 'c','4'],
        ['1', '2', '3','4'],
        ['a', 'b', 'c','4']
      ],
      tableData :[],
      tableHead: ['Head', 'Head2', 'Head3', 'Head4',"Done"],
      widthArr: [70, 70, 70, 70, 70]
    }
  }
  componentDidMount(){
    this.setState({ tableData: this.addDoneCollumn(this.state.initTableData)});
  }
  elementButton = (value) => (
    <TouchableOpacity onPress={() => this._alertIndex(value)}>
      <View style={styles.btn}>
        <Text style={styles.btnText}>{value}</Text>
      </View>
    </TouchableOpacity>
  );
  _alertIndex(index) {
    Alert.alert(`This is row ${index + 1}`);
  }
  addDoneCollumn(data){
    let copy = [...this.state.initTableData];
    copy.forEach(row => {
      row.push(this.elementButton("Done"));
    });
    return copy;
  }

  render() {
    const state = this.state;
    const tableData =this.state.tableData;
    
    return (
      <View style={styles.container}>
        <ScrollView horizontal={true}>
          <View>
            <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
              <Row data={state.tableHead} widthArr={state.widthArr} style={styles.header} textStyle={styles.text}/>
            </Table>
            <ScrollView style={styles.dataWrapper}>
              <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                {
                  tableData.map((rowData, index) => (
                    <Row
                      key={index}
                      data={rowData}
                      widthArr={state.widthArr}
                      style={[styles.row, index%2 && {backgroundColor: '#F7F6E7'}]}
                      textStyle={styles.text}
                    />
                  ))
                }
              </Table>
            </ScrollView>
          </View>
        </ScrollView>
        <Text>Milan tanzt im Ballettwdwadwawdawdwd!</Text>
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  header: { height: 50, backgroundColor: '#537791' },
  text: { textAlign: 'center', fontWeight: '100' },
  dataWrapper: { marginTop: -1 },
  btn: { marginLeft:15,width: 40, height: 18, backgroundColor: '#78B7BB',  borderRadius: 2 },
  row: { height: 40, backgroundColor: '#E7E6E1' }
});