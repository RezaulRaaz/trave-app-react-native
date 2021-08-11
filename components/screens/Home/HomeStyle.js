
import { StyleSheet,Dimensions } from 'react-native';

const Styles = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor:'white'
    },
    HomeTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50,
        marginBottom:10
    },
    CategoryList:{
        height:60,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    CategoryIcon:{
        width:50,
        height:50,
        backgroundColor:'#E1F1FE',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5
    },
    wrap:{
       width:Dimensions.get('window').width-35,
       height:Dimensions.get('window').height*0.25,
       borderRadius:10,
    }
})

export default Styles;