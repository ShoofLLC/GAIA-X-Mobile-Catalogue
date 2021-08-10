import React, { useEffect, useState } from 'react';
import { 
    StyleSheet, 
    ActivityIndicator, 
    Text, 
    View, 
    Linking, 
    Image,
    TouchableHighlight, 
    SafeAreaView, 
    Alert, 
    Button,
    filter,
    FlatList
} from 'react-native';


var Oceanmarket = 'https://market.oceanprotocol.com/'

console.log('///////////','\nstartfile')



const Deck = (props) => (
  <View style={styles.item}>

    <TouchableHighlight onPress= {() => Alert.alert('Title', 'message', [
      {text: 'yes', onPress: () => console.log('Pressed yes')},
      {text: 'no', onPress: () => console.log('Pressed no')},
    ])}>
      <Text style={styles.headline} >{props.headline}</Text>
    </TouchableHighlight>

    <Text>{props.link}</Text>

  </View>
);


const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data1, setData] = useState([]);

  let headersList = {
    "Accept": "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.io)",
    "Content-Type": "application/json"
  }
   
  fetch("https://aquarius.oceanprotocol.com/api/v1/aquarius/assets/ddo/query", { 
    method: "POST",
    body: "{\r\n    \"cancelToken\": {\r\n        \"promise\": {}\r\n    },\r\n    \"offset\": 9,\r\n    \"page\": 1,\r\n    \"query\": {\r\n        \"query_string\": {\r\n            \"query\": \"(chainId:4 OR chainId:3) AND -isInPurgatory:true \"\r\n        }\r\n    },\r\n    \"sort\": {\r\n        \"created\": -1\r\n    }\r\n}",
    headers: headersList
  })
  .then((response) => response.json())
  .then((json) => setData(json));

  

  return (
    <SafeAreaView style={styles.container}> 

      <Text style={styles.text}>Ocean Market</Text>

      <TouchableHighlight onPress = {() => Alert.alert('Open Website', 'Leaving App and open the Ocan Marketplace?', [
          {text: "Yes", onPress: () => Linking.openURL(Oceanmarket)},
          {text: "No", onPress: () => console.log("Pressed No")},
        ])}>
        <Text style={{color: 'white',}}>A marketplace to find, publish and trade data sets in the Ocean Network.</Text>
      </TouchableHighlight>
      
      <FlatList
        data = {data1.results}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Deck headline={item.id} link={item.id}/>}
      />

    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    padding: 50,
    flex: 1,
    backgroundColor: 'black',
  },
  item: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10, 
  },
  text: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
  }, //Für Deck
  headline: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 0,
    width: 200,
  },
});
  

export default App;