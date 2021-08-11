import React from 'react'
import { View, Text, StyleSheet, Image, TextInput,Dimensions } from 'react-native'
import { Image as Logo } from '../../../constants/index'

const Login = () => {
    return (
        <View style={Styles.container}>
            <View>
                <Text style={{ fontSize: 20, fontWeight: '700', color: '#CA595C' }}>Login</Text>
                <View>
                    <TextInput placeholder="Email"
                        style={{borderWidth: 1,height:50}} />
                </View>
            </View>
        </View>
    )
}


const Styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 100,
        padding: 15,
        backgroundColor: 'white'
    },
    width:{
        width:Dimensions.get('window').width
    },
    height:{
        height:Dimensions.get('window').height
    }
})

export default Login;
