import { StyleSheet,Dimensions } from 'react-native'
const {width,height}=Dimensions.get('window')

export const styles = StyleSheet.create({
    checkboxList:{
        margin:20,
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    conditionText:{
        fontSize:13,
        color:'#64748B',
    },
    buttonBox:{
        marginTop:height/7
    }
})