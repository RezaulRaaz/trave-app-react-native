import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Image, Text, FlatList ,TouchableOpacity } from 'react-native'
import { Icons } from './../../../constants/index'
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
const DetailsScreen = ({ navigation, route }) => {

    const getData = route.params.data;
    const [value, onChangeText] = useState(route.params.title);
    const [loading, setLoading] = useState(true);
    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: getData.name,
        });
    }, [navigation, value]);

    const navigateHotelDetailsScreen = (item) => {
        const data = item;
        navigation.navigate('HotelDetailScreen', { data });
    }


    const hotels = `https://rezaul.ringersoft.work/api/cites/get/hotels/${getData.id}`;
    const [hotelsList, setHotelList] = useState([]);
    useEffect(() => {
        fetch(hotels).then((res) => res.json()).then((getHotelList) => (
            setHotelList(getHotelList),
            setLoading(false)
        )
        )
    }, []);

    return (
        <View style={Styles.container}>
            <View style={{ flex: 35 }}>
                <View style={{ height: 150, position: 'relative' }}>
                    <Image style={{ height: 150, resizeMode: 'cover', borderRadius: 10 }} source={{ uri: `${getData.image}` }} />
                    <Text style={{ position: 'absolute', bottom: 10, paddingHorizontal: 10, fontSize: 25, color: 'white', left: 0, backgroundColor: '#CA595C' }}>{getData.name}</Text>
                </View>
                <View>
                    <Text>{getData.description}</Text>
                </View>
            </View>
            <View style={{ marginTop: 25, flex:65 }}>
                <View><Text style={{ fontSize: 20, fontWeight: '700' }}>{getData.name} Hotel List</Text></View>
                {loading ?
                    <SkeletonPlaceholder>
                        <View style={{ borderColor: '#ddd', marginBottom: 10, borderWidth: 1, padding: 5, borderRadius: 5, flexDirection: "row" }}>
                            <View style={{ marginRight: 10 }}>
                                <View style={{ height: 100, width: 100, resizeMode: 'cover', borderRadius: 5 }} ></View>
                            </View>
                            <View>
                                <View style={{ width: 120, height: 20 }} />
                                <View style={{ width: 100, height: 20, marginTop: 5 }} />
                                <View style={{ width: 100, height: 20, marginTop: 5 }} />
                            </View>
                        </View>
                        <View style={{ borderColor: '#ddd', marginBottom: 10, borderWidth: 1, padding: 5, borderRadius: 5, flexDirection: "row" }}>
                            <View style={{ marginRight: 10 }}>
                                <View style={{ height: 100, width: 100, resizeMode: 'cover', borderRadius: 5 }} ></View>
                            </View>
                            <View>
                                <View style={{ width: 120, height: 20 }} />
                                <View style={{ width: 100, height: 20, marginTop: 5 }} />
                                <View style={{ width: 100, height: 20, marginTop: 5 }} />
                            </View>
                        </View>
                        <View style={{ borderColor: '#ddd', marginBottom: 10, borderWidth: 1, padding: 5, borderRadius: 5, flexDirection: "row" }}>
                            <View style={{ marginRight: 10 }}>
                                <View style={{ height: 100, width: 100, resizeMode: 'cover', borderRadius: 5 }} ></View>
                            </View>
                            <View>
                                <View style={{ width: 120, height: 20 }} />
                                <View style={{ width: 100, height: 20, marginTop: 5 }} />
                                <View style={{ width: 100, height: 20, marginTop: 5 }} />
                            </View>
                        </View>
                    </SkeletonPlaceholder>
                    :
                    <FlatList
                        horizontal={false}
                        style={{ marginTop: 15 }}
                        data={hotelsList}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={hotelsList.id}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => navigateHotelDetailsScreen(item)} style={{ borderColor: '#ddd', marginBottom: 10, borderWidth: 1, padding: 5, borderRadius: 5,flexDirection: "row" }}>
                                <View style={{ marginRight: 10 }}>
                                    <Image style={{ height: 100, width: 100, resizeMode: 'cover', borderRadius: 5 }} source={{ uri: `${item.image}` }} />
                                </View>
                                <View>
                                    <Text style={{ fontSize: 16, fontWeight: '700' }}>{item.name}</Text>
                                    <View style={{ flexDirection: 'row', marginTop: 5 }}>
                                        <Image source={Icons.location} style={{ width: 18, height: 18 }} />
                                        <Text  style={{width:'75%' ,fontSize: 14, color: '#CA595C'}}>{item.address}</Text>
                                    </View>
                                    <Text style={{ fontSize: 14, color: '#000', marginLeft: 18, marginTop: 5 }}>${item.price_per_night} Per Night</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                }
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

export default DetailsScreen;
