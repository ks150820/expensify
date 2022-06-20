import { StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    
    header:{
        flexDirection:'row',
        marginTop:10,
        
    },
    inc:{
        height:40,
        justifyContent:'center',
        alignItems:'center',
       borderBottomWidth:1,
       borderTopWidth:1,
       borderLeftWidth:1,
        flexGrow:0.5,
    },
    exp:{
        justifyContent:'center',
        height:40,
        alignItems:'center',
        borderBottomWidth:1,
       borderTopWidth:1,
       borderRightWidth:1,
        flexGrow:0.5,
    },
    body:{
        padding:20,
    },
    dropDownMenu:{
        width:140
    },
    fields:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        marginBottom:120
    },
    inputBox:{
        width:140,
        height:40,
        borderBottomWidth:1
    },
    labelText:{
        fontSize:24,
        fontWeight:'400',
        color:'black'
    },

    saveButton:{
        width : 100,
        height : 50,
        backgroundColor:"tomato",
        borderRadius:8,
        justifyContent:'center',
        alignItems:'center',
    },
    buttonContainer:{
        justifyContent:'flex-end',
        flexDirection:'row',
        marginTop:120,
        marginRight:20
    },
    saveText:{
        color:'#fff',
        fontWeight:'600',
        fontSize:16
    },
    tabColor:{
        height:40,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        flexGrow:0.5,
        backgroundColor:'tomato'
    },
    textActive:{
        color:'#fff',
        fontSize:18,
        fontWeight:'600'
    },
    textNotActive:{
        color:'black',
        fontSize:18,
        fontWeight:'600'
    }
})