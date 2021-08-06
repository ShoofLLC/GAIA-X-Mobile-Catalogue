import React from "react";
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
    Button 
} from 'react-native';
import getData from "./API";

// getData()
console.log('//////////////////\n', 'start file')

function Final(props) {
    return (
    <SafeAreaView style={styles.container}>
        
        <TouchableHighlight onPress = {() => Alert.alert('Open Website', 'Leaving App and open the DeltaDao Website?', [
                {text: "Yes", onPress: () => Linking.openURL(DeltaDaoWebsite)},
                {text: "No", onPress: () => console.log("Pressed No")},
            ])}>

            <Image style={styles.logo} source={require("./assets/DeltaDAO_Logo.png")}/>

        </TouchableHighlight>

    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 150,
        height: 150,
    },
});

export default Final;