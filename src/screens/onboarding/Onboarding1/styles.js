import { StyleSheet,Dimensions } from 'react-native'
const {width,height}=Dimensions.get('window')
export const styles = StyleSheet.create({
    maincontainer:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#fff'
    },
    Image:{
        width:width,
        height:height/1.7
    },
    BGImage:{
        width:width,
        position:'absolute',
        height:height/1.7
    },
    logo:{
        position:'absolute',
        marginTop:height/2.0
    },
    heading:{
        fontSize:24,
        fontWeight:'bold',
        color:'#000',
        marginTop:height/18,
        textAlign:'center'
    },
    subtext:{
        // font-weight: 400;
        // font-size: 13px;
        // line-height: 22px;
        fontWeight:'400',
        fontSize:15,
        lineHeight:22,
        width:width/1.2,
        textAlign:'center',
        color:'#64748B'
    },
    buttonbox:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        // backgroundColor:'red',
        width:width,
        paddingHorizontal:width/9,
        marginTop:height/14
    },
    buttons:{
        color:'#52B6DF',
        fontSize:18,
    },
})