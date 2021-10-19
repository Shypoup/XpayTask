import {StyleSheet} from 'react-native';
import { colors } from '../../styles/colors';

const styles =StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.mainBackground,
        
        paddingBottom:'5%'
    },
    backIcon:{
        width:15,
        height:15,
        resizeMode:'contain',
        marginVertical :'6%',
        marginHorizontal:'6%'
    },
    poster:{
        width:'100%',
        height:300,
        resizeMode:'contain',
        borderRadius:20
    },
    title:{
        fontSize:22,
        fontWeight:'bold',
        color:colors.mainText,
        alignSelf:'center',
        marginVertical:'2%',
    },
    rate:{
        fontSize:22,
        fontWeight:'bold',
        color:colors.secondText,
        alignSelf:'center',
        marginVertical:'2%',
    },
    sectionHeader:{
        fontSize:18,
        fontWeight:'bold',
        color:colors.mainText,
        marginTop:'4%',
        marginBottom:'2%',
        marginHorizontal:'6%'
    },
    scrollSection:{
        paddingStart:'5%'
    },
    overview:{
        
        marginStart:'8%',
        marginEnd:'2%'
    },
   
    profile:{
        width:70,
        height:70,
        borderRadius:35,
        resizeMode:'cover',
        marginHorizontal:7, 
        alignSelf:'center'
    },
    actorName:{
        fontSize:12,
        
        color:colors.mainText,
        alignSelf:'center',
        marginHorizontal:7,
    }
})

export default styles;