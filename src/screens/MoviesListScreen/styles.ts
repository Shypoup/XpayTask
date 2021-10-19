import {StyleSheet} from 'react-native';
import { colors } from '../../styles/colors';

const styles =StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.mainBackground,
    },
    headertext:{
        color:colors.mainText,
        fontSize:25,
        fontWeight:'bold',
        margin:'4%'
    },
    buttonsSection:{
        flexDirection:'row',
        width:'100%',
        paddingHorizontal:'5%'
       
    },
    activeTap:{
        backgroundColor:colors.secondBackground,
        padding:'5%',
        marginHorizontal:'3%',
        alignItems:'center',
        borderRadius:20
    },
    activeTapText:{
        color:colors.thirdText,
        fontWeight:'bold'
    },
    notActiveTap:{
        backgroundColor:colors.thirdBackground,
        padding:'5%',
        marginHorizontal:'3%',
        alignItems:'center',
        borderRadius:20
    },
    notActiveTapText:{
        color:colors.mainText,
        fontWeight:'bold'
    },

})

export default styles;