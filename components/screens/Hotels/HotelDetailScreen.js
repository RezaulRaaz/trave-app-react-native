import React, { useState } from 'react'
import { View, StyleSheet, Image, Text, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import { Icons, Image as RoomImage } from './../../../constants/index'
const HotelDetailScreen = ({ navigation, route }) => {

    const getData = route.params.data;
    const [value, onChangeText] = useState(route.params.title);

    const loginScreen = () => {
        navigation.navigate('LoginScreen');
    }

    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: getData.name,
        });
    }, [navigation, value]);

    return (
        <View style={Styles.container}>
            <View style={{ flex: 35, position: 'relative' }}>
                <View style={{ height: '35%' }}>
                    <Image style={{ height: '100%', resizeMode: 'cover', borderRadius: 10 }} source={{ uri: `${getData.image}` }} />
                    <Text style={{ position: 'absolute', bottom: 10, paddingHorizontal: 10, fontSize: 25, color: 'white', left: 0, backgroundColor: '#CA595C' }}>{getData.name}</Text>
                </View>
                <View style={{ marginTop: 10, flexDirection: 'row' }}>
                    <Image source={Icons.location} style={{ width: 18, height: 18, marginRight: 10 }} />
                    <Text style={{ width: '90%', fontSize: 14, color: '#CA595C' }}>{getData.address}</Text>
                </View>
                <ScrollView style={{height:'25%'}} showsVerticalScrollIndicator={false} >
                    <Text style={{ width: '90%', fontSize: 16, color: '#000' }}>{getData.description}</Text>
                </ScrollView>
                <ScrollView style={{marginTop:10}} horizontal={true} showsHorizontalScrollIndicator={false} >
                    <TouchableOpacity onPress={() => console.log('dsfa')} style={{ marginRight: 10, position: 'relative' }}>
                        <Image style={{ height: 100, width: 120, resizeMode: 'cover', borderRadius: 10 }} source={RoomImage.coxBazar} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => console.log('dsfa')} style={{ marginRight: 10, position: 'relative' }}>
                        <Image style={{ height: 100, width: 120, resizeMode: 'cover', borderRadius: 10 }} source={RoomImage.greece} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => console.log('dsfa')} style={{ marginRight: 10, position: 'relative' }}>
                        <Image style={{ height: 100, width: 120, resizeMode: 'cover', borderRadius: 10 }} source={RoomImage.saintMarting} />
                    </TouchableOpacity>
                </ScrollView>
                <View style={{ width: '100%', height: 50, position: 'absolute', bottom: 3, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ width: "30%", height: 40, backgroundColor: '#CA595C', borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 25, color: '#fff' }}>${getData.price_per_night}</Text>
                    </View>
                    <TouchableOpacity onPress={()=>console.log('this ok')} style={{ width: "60%", height: 40, backgroundColor: '#CA595C', borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 25, color: '#fff' }}>Book Now</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 100,
        padding: 15,
        backgroundColor: 'white'
    },
})

export default HotelDetailScreen;