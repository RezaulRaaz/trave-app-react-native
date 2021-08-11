import React, { useState, useEffect } from 'react'
import { View, Text, Image, FlatList, StyleSheet,TouchableOpacity} from 'react-native'
import { Icons } from './../../../constants/index'
import SkeletonCategory from './SkeletonCategory';

const CategoryScreen = ({ navigation }) => {

    const hotels = 'https://rezaul.ringersoft.work/api/hotels';
    const [hotelsList, setHotelList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [img, setImg] = useState(true);
    useEffect(() => {
        fetch(hotels).then((res) => res.json()).then((getHotelList) => (
            setHotelList(getHotelList),
            setLoading(false)
        )
        )
    }, []);

    const navigateHotelDetailsScreen = (item) => {
        const data = item;
        navigation.navigate('HotelDetailScreen', { data });
    }



    return (
        <View style={Styles.container}>
            {loading ?
                <SkeletonCategory></SkeletonCategory>
                :
                <View>
                    <View><Text style={{ fontSize: 20, fontWeight: '700' }}>Hotel List</Text></View>
                    <FlatList
                        style={{ marginTop: 15 }}
                        data={hotelsList}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={hotelsList.id}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => navigateHotelDetailsScreen(item)} style={{ borderColor: '#ddd',width:'100%', marginBottom: 10, borderWidth: 1, padding: 5, borderRadius: 5, flexDirection: "row" }}>
                                <View style={{ marginRight: 10 }}>
                                    <Image style={{ height: 100, width: 100, resizeMode: 'cover', borderRadius: 5 }} source={{ uri: `${item.image}` }} />
                                </View>
                                <View>
                                    <Text style={{ fontSize: 16, fontWeight: '700' }}>{item.name}</Text>
                                    <View style={{ flexDirection: 'row', marginTop: 5}}>
                                        <Image source={Icons.location} style={{ width: 18, height: 18 }} />
                                        <Text style={{width:'75%' ,fontSize: 14, color: '#CA595C',}}>{item.address}</Text>
                                    </View>
                                    <Text style={{ fontSize: 14, color: '#000', marginLeft: 18, marginTop: 5 }}>${item.price_per_night} Per Night</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            }
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

export default CategoryScreen;
