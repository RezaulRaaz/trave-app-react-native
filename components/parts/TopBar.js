import React from 'react'
import { View,TouchableOpacity, Text,Image} from 'react-native'
import { Icons } from '../../constants/index'

const TopBar =({navigation})=> {

    let backBtn = () =>{
        console.log('back btn press');
        // navigation.goBack()
    }
    return (
        <View style={{height:"4%",backgroundColor:'white',flexDirection:'row',}}>
            <TouchableOpacity onPress={backBtn} style={{height:30,width:30,marginRight:10}}>
               <Image style={{width:25,height:25}} source={Icons.leftArrow} />
            </TouchableOpacity>
            <View style={{width:200,height:25,alignItems:'center'}}>
                <Text style={{fontSize:20,fontWeight:'700'}}>Cox's Bazar</Text>
            </View>
        </View>
    )
}

export default TopBar;
