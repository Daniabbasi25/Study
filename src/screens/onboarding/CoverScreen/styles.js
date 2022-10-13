import { StyleSheet,Dimensions } from 'react-native'
const {width,height}=Dimensions.get('window')
export const styles = StyleSheet.create({
    mainview:{
      flex:1,
      alignItems:'center'
    },
    logo:{
        position:'absolute',
        // backgroundColor:'red',
        marginTop:20,
        // height:20,
        // width:80,
        zIndex:12,
        // top:height/2
        
    },
    img:{
        width:width,
        height:height,
        zIndex:-1
    },
    colorbox:{
        // backgroundColor:'linear-gradient(red, yellow)',
        zIndex:0,
        width:width,
        height:height,
        position:'absolute',
        alignItems:'center'
    },
    bottomview:{
        position:'absolute',
        marginTop:height/1.5,
        alignItems:'center'
    },
    heading:{
        color:'#fff',
        fontSize:32,
        fontWeight:'bold',
        width:width/1.5,
        // alignContent:'center',
        textAlign:'center'
    },
    subtext:{
        color:'#fff',
        width:width/1.35,
        textAlign:'center',
        opacity:0.6
    },
    button:{
        color:'#fff',
        backgroundColor:'#52B6DF',
        // padding:20
        paddingHorizontal:30,
        paddingVertical:15,
        fontSize:17,
        fontWeight:'600',
        borderRadius:10,
        marginTop:30

    }
  })