import {StyleSheet, Dimensions} from 'react-native'
const {width,height}=Dimensions.get('window')
export const styles = StyleSheet.create({
    forgetPassword:{
        color:'rgba(65, 120, 212, 1)',
        marginLeft:width/25,
        marginTop:height/50,
        fontSize:15
    },
    buttonBox:{
        marginTop:height/15
    },
    dontBox:{
        flexDirection:'row',
        marginTop:height/30,
        alignItems:'center',
        justifyContent:'center'
    }
})