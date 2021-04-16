import * as React from 'react';
import {View, Text, Image, SafeAreaView, ScrollView, StyleSheet} from 'react-native'

function Detalles({route})  {
    const {image,title,summary} = route.params;

    return(

                <View style={estilos.container}>
                    <Text style={estilos.titulo}>{title}</Text>    
                    <Image source={{uri: image}} style={estilos.imagen}/>
                    <Text style={estilos.resumen}>{summary}</Text> 
                </View>

    )
} 
export default Detalles;

const estilos = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        backgroundColor:'black'
    },
    titulo:{
        fontSize:20,
        color:'red',
        marginStart:20
    },
    resumen:{
        color:'white',
        marginStart:20
    },
    imagen:{
        height:200,
        width:200,
        borderColor:'white',
        borderWidth:1
    },

});
