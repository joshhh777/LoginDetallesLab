import React, {Component} from 'react';
import {View, FlatList, StyleSheet, Text, Image, TouchableOpacity, ToastAndroid} from 'react-native';
import { useState } from 'react';
import { useEffect } from 'react';


function Item(props){
    return(
        <TouchableOpacity style={estilos.item} onPress={()=>props.navigation.navigate('Detalles',{
            image: props.image,
            title: props.title,
            summary: props.summary
        })}>
            <View >
            <Image source={{uri:props.image}} style={estilos.imagen}/>
            </View>
            <View >
            <Text style={estilos.titulo}>{props.title}</Text>
            <Text style={estilos.desc}>{props.summary}</Text>
            </View>
        </TouchableOpacity>
    );
 }
 function Lista({navigation}){
     const [lista, setLista] = useState([])

     useEffect(() => {
         fetch(
            "https://yts.mx/api/v2/list_movies.json"
         )
         .then(res => res.json())
         .then(
            result => {
                setLista(result.data.movies)
            },
         )}
     )
    return (
            <View style={estilos.container}>
                <FlatList style={estilos.lista}
                data={lista.length > 0 ? lista : []}
                renderItem={({item})=>{
                 return(
                 <Item  image={item.medium_cover_image} title={item.title} summary={item.summary} navigation={navigation}/>)
                }}
                 keyExtractor={item => item.id}
                 />
            </View>           
        );    
}
 
export default Lista;


const estilos = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center'
    },
    item:{
        marginVertical:5,
        marginHorizontal:16,
        flexDirection:'row'
    },
    titulo:{
        fontSize:20,
        color:'red',
        marginStart:20
    },
    imagen:{
        height:80,
        width:80,
        borderColor:'white',
        borderWidth:1
    }, 
    desc:{
        color:'white',
        marginStart:20
    },
    lista:{
        marginTop:15,
        backgroundColor:'black'
    },
});