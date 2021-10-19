import { StyleSheet } from "react-native"
import { colors } from "../../styles/colors";

const styles = StyleSheet.create({
    container: {
        width: '95%',
        flexDirection: 'row',

        marginHorizontal: '3%',
        marginVertical: '3%',

       
        shadowRadius: 2,
        backgroundColor: '#FFF',
        // Android shadow
        elevation: 1,
        borderRadius: 20,
        paddingVertical: '3%'

    },
    image: {
        width: '28%',
        height: 170,
        borderRadius: 20,
        marginStart: '4%'
    },

    dataSection: {
        marginStart: '5%',
        marginVertical: '3%',
        width: '60%',
    },
    movieName: {
        color: colors.mainText,
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: '3%'
    },
    movieDate: {
        fontSize: 18,
        marginBottom: '2%'
    },
    movieRate: {
        color: colors.secondText,
        fontSize: 23,
        fontWeight: 'bold',
        alignSelf: 'flex-end',
        marginTop: '2%'

    },
    generSection: {
        marginTop: '3%',
    },
    genreList:{
        flexWrap: 'wrap',
        alignContent: 'flex-start',
      }

});

export default styles;