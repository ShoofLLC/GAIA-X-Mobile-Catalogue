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

// const DATA = [
//   {
//     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//     title: 'First Item',
//   },
//   {
//     idd: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//     title: 'Second Item',
//   },
//   {
//     idd: '58694a0f-3da1-471f-bd96-145571e29d72',
//     title: 'Third Item',
//   },
// ];




var Oceanmarket = 'https://market.oceanprotocol.com/'
var DeltaDaoWebsite = 'https://www.delta-dao.com'

var urlFinal = "https://aquarius.oceanprotocol.com/api/v1/aquarius/assets/ddo/query"
var urltest = 'https://reactnative.dev/movies.json'

console.log('///////////','\nstartfile')



const Deck = (props) => (
  <View style={styles.item}>

    <TouchableHighlight onPress= {() => Alert.alert('Title', 'message', [
      {text: 'yes', onPress: () => console.log('Pressed yes')},
      {text: 'no', onPress: () => console.log('Pressed no')},
    ])}>
      <Text style={styles.headline} >{props.headline}</Text>
    </TouchableHighlight>

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
  }).then(function(response) {
    return response.text();
  }).then(function(data) {
    setData(JSON.parse(data));
  })
  

  const renderItem = ({ item }) => (
    <Item name={item.nameapp} type={item.type} discription={item.discription} author={item.author} />
  );
   const Item = ({ item }) => (
    <View style={styles.item}>
      <Text>{nameapp}</Text>
      <Text>{type}</Text>
      <Text>{discription}</Text>
      <Text>{author}</Text>
    </View> 
  );


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
        data = {data1}
        renderItem={renderItem}
        keyExtractor={item => item.service}
      />

    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    padding: 50,
    flex: 1,
    backgroundColor: 'black',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  logo: {
    width: 60,
    height: 60,
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
  },
  headline: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 0,
    width: 200,
  },
});
  

export default App;