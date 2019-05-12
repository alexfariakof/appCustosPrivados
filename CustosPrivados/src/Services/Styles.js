import { StyleSheet } from 'react-native'

export default StyleSheet.create({

    background: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
    },
    container:{
        justifyContent: 'space-between'
    },
    containerCentralizar: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },        
    menuButton: { 
        color: 'white', 
        padding: 10, 
        marginLeft: 8, 
        fontSize: 20 
    },
    linkButton:{
        fontSize:24,
        color:'white',        
        marginTop:4, 
        marginBottom:16,
        alignItems: 'center',
        justifyContent:'center'    
    },
    ViewCentralizar: {
        justifyContent: 'center',
        alignItems: 'center'
    },   
    text:{
        fontSize: 24,
        color: 'white',
        margin: 8,
        marginTop: 16,
        marginBottom: 0,
        borderBottomWidth:2,
        borderColor:'#C4C4C4',
        padding: 4,
        paddingBottom:0
    },
    textBenVindo:{
        fontSize:48,
        color:'white',        
        marginTop:16, 
        marginBottom:0,
        alignItems: 'center',
        justifyContent:'center'    
    },
    btnIniciar: {
        backgroundColor:'#FF8C00',
        width: 100,
        height: 40,
        marginTop: 8,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#fff',
        padding:4,
        alignItems: 'center',
        justifyContent:'center'    
    },
    btnIniciarText:{
        color:'white',
        textAlign:'center', 
        fontWeight:'bold',
    },
});