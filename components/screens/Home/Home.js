import React, { useState, useEffect } from 'react'
import { View, Image, ScrollView, TouchableOpacity, Text, FlatList} from 'react-native'
import Styles from './HomeStyle'
import { Icons, Image as Slider, SIZES } from '../../../constants/index'
import SkeletonPlaceholder from "react-native-skeleton-placeholder";



const cities = 'https://rezaul.ringersoft.work/api/cites';

const Home = ({ navigation }) => {

    const [city, setCity] = useState([]);
    const [loading, setLoading] = useState(true);


    const navigateDetailsScreen = (item) => {
        const data = item;
        navigation.navigate('DetailsScreen', { data });
    }

    const navigateCategoryScreen = () => {
        navigation.navigate('CategoryScreen');
    }

    useEffect(() => {
        fetch(cities).then((res) => res.json()).then((allCities) => (
            setCity(allCities),
            setLoading(false)
        )
        )
    }, []);

    return (
        <ScrollView style={Styles.container} showsVerticalScrollIndicator={false}>
            <View style={Styles.HomeTitle}>
                <Text style={{ fontSize: 20, fontWeight: '700' }} >Enjoy your life with us!</Text>
                <Image style={{ width: 20, height: 20, alignItems: 'center', justifyContent: 'center' }} source={Icons.search} />
            </View>
            <View style={Styles.CategoryList}>
                <TouchableOpacity onPress={navigateCategoryScreen}>
                    <View style={{
                        width: 50,
                        height: 50,
                        backgroundColor: '#E1F1FE',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 5
                    }}>
                        <Image style={{ width: 30, height: 30, alignItems: 'center', justifyContent: 'center' }} source={Icons.bed} />
                    </View>
                    <Text style={{ marginTop: 5, textAlign: 'center', fontWeight: '700' }}>Hotel</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => alert('Screen Coming Soon')}>
                    <View style={{
                        width: 50,
                        height: 50,
                        backgroundColor: '#FFDFEA',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 5
                    }}>
                        <Image style={{ width: 30, height: 30, alignItems: 'center', justifyContent: 'center' }} source={Icons.man} />
                    </View>
                    <Text style={{ marginTop: 5, textAlign: 'center', fontWeight: '700' }}>Travel</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => alert('Screen Coming Soon')}>
                    <View style={{
                        width: 50,
                        height: 50,
                        backgroundColor: '#E8E7FE',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 5
                    }}>
                        <Image style={{ width: 30, height: 30, alignItems: 'center', justifyContent: 'center' }} source={Icons.aeroplane} />
                    </View>
                    <Text style={{ marginTop: 5, textAlign: 'center', fontWeight: '700' }}>Flight</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => alert('Screen Coming Soon')}>
                    <View style={{
                        width: 50,
                        height: 50,
                        backgroundColor: '#DEFAE4',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 5
                    }}>
                        <Image style={{ width: 30, height: 30, alignItems: 'center', justifyContent: 'center' }} source={Icons.calender} />
                    </View>
                    <Text style={{ marginTop: 5, textAlign: 'center', fontWeight: '700' }}>Event</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => alert('Screen Coming Soon')}>
                    <View style={{
                        width: 50,
                        height: 50,
                        backgroundColor: '#FDE6D8',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 5
                    }}>
                        <Image style={{ width: 30, height: 30, alignItems: 'center', justifyContent: 'center' }} source={Icons.fastFood} />
                    </View>
                    <Text style={{ marginTop: 5, textAlign: 'center', fontWeight: '700' }}>Food</Text>
                </TouchableOpacity>
            </View>
            <View style={{marginBottom:25}}></View>
            <View style={Styles.wrap}>
                <View style={{marginRight:10 }}>
                    <Image style={Styles.wrap} source={Slider.Tajmahal} />
                </View>
            </View>
            <View style={{ marginTop: 25 }}>
                <View><Text style={{ fontSize: 20, fontWeight: '700' }}>Top Cities</Text></View>
                {/* <ScrollView style={{ marginTop: 10 }} horizontal={true} showsHorizontalScrollIndicator={false}> */}

                {loading ?
                    <SkeletonPlaceholder>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ marginRight: 10, marginTop: 5 }}>
                                <View style={{ height: 100, width: 100, resizeMode: 'cover', borderRadius: 5 }} ></View>
                            </View>
                            <View style={{ marginRight: 10, marginTop: 5 }}>
                                <View style={{ height: 100, width: 100, resizeMode: 'cover', borderRadius: 5 }} ></View>
                            </View>
                            <View style={{ marginRight: 10, marginTop: 5 }}>
                                <View style={{ height: 100, width: 100, resizeMode: 'cover', borderRadius: 5 }} ></View>
                            </View>
                            <View style={{ marginRight: 10, marginTop: 5 }}>
                                <View style={{ height: 100, width: 100, resizeMode: 'cover', borderRadius: 5 }} ></View>
                            </View>
                            <View style={{ marginRight: 10, marginTop: 5 }}>
                                <View style={{ height: 100, width: 100, resizeMode: 'cover', borderRadius: 5 }} ></View>
                            </View>
                        </View>
                    </SkeletonPlaceholder>
                    :
                    <FlatList
                        style={{ marginTop: 10 }}
                        horizontal={true}
                        data={city}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={city.id}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => navigateDetailsScreen(item)} style={{ marginRight: 10, position: 'relative' }}>
                                <Image style={{ height: 100, width: 120, resizeMode: 'cover', borderRadius: 10 }} source={{ uri: `${item.image}` }} />
                                <Text style={{ position: 'absolute', bottom: 10, paddingHorizontal: 5, color: 'white', left: 0, backgroundColor: '#CA595C' }}>{item.name}</Text>
                            </TouchableOpacity>
                        )}
                    />
                }
                {/* </ScrollView> */}
            </View>
            <View style={{ marginTop: 25, marginBottom: 20 }}>
                <View><Text style={{ fontSize: 20, fontWeight: '700' }}>Blogs</Text></View>
                <ScrollView style={{ marginTop: 25 }}>
                    <TouchableOpacity onPress={() => console.log('dsfa')} style={{ borderColor: '#ddd', width: '100%', marginBottom: 10, borderWidth: 1, padding: 5, borderRadius: 5, flexDirection: "row" }}>
                        <View style={{ marginRight: 10 }}>
                            <Image style={{ height: 100, width: 100, resizeMode: 'cover', borderRadius: 5 }} source={Slider.coxBazar} />
                        </View>
                        <View>
                            <Text style={{ fontSize: 16, fontWeight: '700' }}>17 Tips For Low-Budget Trips</Text>
                            <Text style={{ width: '28%', fontSize: 14, color: '#CA595C', }}>I didn't think I would be in quarantine for the rest of my life, but I did worry that I might emerge from it with a terminal case of inertia.</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => console.log('dsfa')} style={{ borderColor: '#ddd', width: '100%', marginBottom: 10, borderWidth: 1, padding: 5, borderRadius: 5, flexDirection: "row" }}>
                        <View style={{ marginRight: 10 }}>
                            <Image style={{ height: 100, width: 100, resizeMode: 'cover', borderRadius: 5 }} source={Slider.greece} />
                        </View>
                        <View>
                            <Text style={{ fontSize: 16, fontWeight: '700' }}>Can AI Create Cool Music?</Text>
                            <Text style={{ width: '28%', fontSize: 14, color: '#CA595C', }}>I didn't think I would be in quarantine for the rest of my life, but I did worry that I might emerge from it with a terminal case of inertia.</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => console.log('dsfa')} style={{ borderColor: '#ddd', width: '100%', marginBottom: 10, borderWidth: 1, padding: 5, borderRadius: 5, flexDirection: "row" }}>
                        <View style={{ marginRight: 10 }}>
                            <Image style={{ height: 100, width: 100, resizeMode: 'cover', borderRadius: 5 }} source={Slider.bali} />
                        </View>
                        <View>
                            <Text style={{ fontSize: 16, fontWeight: '700' }}>Dark but Funny Side Of Parenting</Text>
                            <Text style={{ width: '28%', fontSize: 14, color: '#CA595C', }}>I didn't think I would be in quarantine for the rest of my life, but I did worry that I might emerge from it with a terminal case of inertia.</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => console.log('dsfa')} style={{ borderColor: '#ddd', width: '100%', marginBottom: 10, borderWidth: 1, padding: 5, borderRadius: 5, flexDirection: "row" }}>
                        <View style={{ marginRight: 10 }}>
                            <Image style={{ height: 100, width: 100, resizeMode: 'cover', borderRadius: 5 }} source={Slider.saintMarting} />
                        </View>
                        <View>
                            <Text style={{ fontSize: 16, fontWeight: '700' }}>15 Tips For Low-Budget Trips</Text>
                            <Text style={{ width: '28%', fontSize: 14, color: '#CA595C', }}>I didn't think I would be in quarantine for the rest of my life, but I did worry that I might emerge from it with a terminal case of inertia.</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </ScrollView>
    )
}

export default Home;
