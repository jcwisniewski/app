import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native';
import Papa from 'papaparse';
import React, { useEffect, useState } from 'react';

const { width, height } = Dimensions.get('window');
export default function HomeScreen() {

  const [data, setData] = useState<any>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    const url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSVhMdyWHj_oT2S2sjzeBwLwyyUST4mI68q5suSYAxjWd14Si4niV9sYWaLRCDRg4SXD7eq_RQat6ZT/pub?gid=0&single=true&output=csv'; // Substitua pelo seu link CSV
    Papa.parse(url, {
      download: true,
      header: false,
      delimiter: ';', // Define o delimitador como ponto e vírgula
      complete: (results) => {
        console.log('Dados do CSV:', results.data);
        setData(results.data);
      },
      error: (error) => {
        console.error('Erro ao parsear dados:', error);
      }
    });
  };

  return (
    <View >
      <FlatList
        data={data}
        keyExtractor={(item, index) => `${index}`}
        renderItem={({ item }) => (
          <View style={styles.mainContainer}>
            <Text style={styles.font}>Name : {item[0]}</Text>
            <Text style={styles.font}>Value: {item[1]}</Text>

          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  // titleContainer: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   gap: 8,
  // },
  // stepContainer: {
  //   gap: 8,
  //   marginBottom: 8,
  // },
  // colorsContainer: {
  //   backgroundColor: '#FF223344'
  // },
  // reactLogo: {
  //   height: 178,
  //   width: 290,
  //   bottom: 0,
  //   left: 0,
  //   position: 'absolute',
  // },
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    display: 'flex',
    alignContent: 'space-between',
    backgroundColor: 'green'
  },
  font: {
    fontWeight: 'bold'
  }
});
