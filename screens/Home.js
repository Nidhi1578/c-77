import React, { Component } from 'react';
import { Text, View,StyleSheet,TouchableOpacity,SafeAreaView,Platform,StatusBar,Image,ImageBackground} from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}/>
                <View style={styles.titleBar}>
                <Text style={styles.titleText}>ISS Tracker APP</Text>
                </View>
                <TouchableOpacity 
                    style={styles.routeCard}
                    onPress={()=>{this.props.navigation.navigate("IssLocation")}}
                >
                    <Text style={styles.routeText}>ISS Location</Text>
                    <Text style={styles.knowMore}>{"know more--->"}</Text>
                    <Text style={styles.bgDigit}>1</Text>
                    <Image source={require("../assets/iss_icon.png")} style={styles.iconimage}></Image>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.routeCard}
                    onPress={()=>{this.props.navigation.navigate("Meteors")}}
                    >
                    <Text style={styles.routeText}>Meteors</Text>
                    <Text style={styles.knowMore}>{"know more--->"}</Text>
                    <Text style={styles.bgDigit}>2</Text>
                    <Image source={require("../assets/meteor_icon.png")}></Image>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    titleText:{
        fontSize:40,
        fontWeight:"bold",
        color: "red"
    },
    droidSafeArea:{
        marginTop: Platform.OS === "andriod" ? StatusBar.currentHeight :0
    },
    titleBar:{
        justifyContent:"center",
        alignItems:"center",
        flex:0.15
    },
    routeCard:{
        flex:0.25,
        marginLeft:50,
        marginRight:50,
        marginTop:50,
        borderRadius:30,
        backgroundColor:"white"
    },
    routeText:{
        fontSize:35,
        color: "black",
        fontWeight:"bold",
        paddingLeft:30,
        marginTop:75,
    },
    backgroundImage:{
        flex: 1,
        resizeMode:"cover"

    },
    knowMore:{
        paddingLeft:30,
        color:"red",
        fontSize:15
    },
    bgDigit:{
        position:"absolute",
        color:"rgba(183,183,183,0.5)",
        fontSize:150,
        right:20,
        bottom:-15,
        zIndex:-1
    },
    iconimage:{
        position:"absolute",
        height:200,
        width:200,
        right:20,
        top:-80,
        resizeMode:"contain",
    }

});