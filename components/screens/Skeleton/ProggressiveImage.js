import React from 'react'
import { View, Image, Animated} from 'react-native'
import { Icons, Image as Slider, SIZES } from '../../../constants/index'
import SkeletonPlaceholder from "react-native-skeleton-placeholder";


const ProgressiveImage = ( ) => {
    defaultImageAnimated = new Animated.Value(0);
    imageAnimated = new Animated.Value(0);
    handleDefaultImageLoad = () =>{
        Animated.timing(this.defaultImageAnimated,{
            toValue:1,
            useNativeDriver:true
        }).start();
    }
    return (
        <View></View>
    )

}

export default ProgressiveImage;
