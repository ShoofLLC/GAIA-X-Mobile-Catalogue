import React from 'react';
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


var DeltaDaoWebsite = 'https://www.delta-dao.com'

function WelcomeScreen(props) {
    return (
    <SafeAreaView style={styles.container}>

        <Text>test</Text>

        <TouchableHighlight onPress = {() => Alert.alert('Open Website', 'Leaving App and open the DeltaDao Website?', [
                {text: "Yes", onPress: () => Linking.openURL(DeltaDaoWebsite)},
                {text: "No", onPress: () => console.log("Pressed No")},
            ])}>

            <Image style={styles.logo} source={require("./assets/DeltaDAO_Logo.png")}/>
            
        </TouchableHighlight>

        <Button
            title = 'Open website'
            color = 'black'
            onPress = {() => Alert.alert('Open Website', 'Leaving App and open the DeltaDao Website?', [
                {text: "Yes", onPress: () => Linking.openURL(DeltaDaoWebsite)},
                {text: "No", onPress: () => console.log("Pressed No")},
            ])}
        />
    
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
        width:150,
        height: 150,
    },
});
  

export default WelcomeScreen;