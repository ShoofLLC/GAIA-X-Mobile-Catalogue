import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

var testurl = 'https://jsonplaceholder.typicode.com/users'
var testurl2 = 'https://facebook.github.io/react-native/movies.json'
var urlFinl = "https://aquarius.oceanprotocol.com/api/v1/aquarius/assets/ddo/query"


const getData = () => {
  console.log("getData")
  const xhr = new XMLHttpRequest();
  xhr.open('GET', urlFinl);

  xhr.onload = () => {
    const data = JSON.parse(xhr.response);
    console.log(data);
  }
  xhr.send();
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default getData;