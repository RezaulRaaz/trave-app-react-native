import React from 'react'
import { View, Text, Image } from 'react-native'
import { Image as Sliderimg } from '../../../constants/index'
const Slider = () => {
    return (
        <View style={{ height: 150, width: '100%' }}>
            <Image style={{ height: 150, width: '100%', resizeMode: 'cover', borderRadius: 20 }} source={Sliderimg.greece} />
            <Text></Text>
        </View>
    )
}
export default Slider;
