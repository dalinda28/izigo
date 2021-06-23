import React from 'react';
import MapView from 'react-native-maps';
import { StackActions } from '@react-navigation/native';
import { StyleSheet, Text, TextInput, View, Dimensions} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";

const Main = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <View style={styles.icon}>
                    <Ionicons name="search-outline" size={19} color="white" />
                </View>
                <Text onPress={() => navigation.navigate("Search")} style={styles.input}>Où allons-nous ?</Text>
            </View>
                <MapView 
                    style={styles.map}
                    provider={MapView.PROVIDER_GOOGLE}
                    initialRegion={{
                        latitude: 48.8534,
                        longitude:2.3488,
                        latitudeDelta: 0.09,
                        longitudeDelta:0.04
                        }}/>
            </View>
         
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        margin: 1
    },

    inputContainer:{
        position: 'absolute',
        zIndex: 1,
        flex:1,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: "#FE596F",
        borderRadius: 50,
        width: 300,
        height: 50,
        top: "10%",
        paddingLeft: 10,
        paddingRight: 0,
        marginLeft: "12%",
        shadowOffset:{  width: 2,  height: 2,  },
        shadowColor: 'grey',
        shadowOpacity: 1.0,
        shadowRadius: 2,
    },

    input: {
        flex: 1,
        color: "white",
        left: 15
    },

    icon:{
        //padding:2,
        display:"flex",
        left: 5,
        zIndex: 2
    },
    

    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
})

export default Main;