import React, {useState} from "react";
import { View, Alert, Text, FlatList, StyleSheet, Pressable } from "react-native";
import { ListItem, Avatar, ThemeProvider } from '@rneui/themed';
import foods from "../data/foods";

export default props => {

    const [num, setNum] = useState(0);


    function aumentar() {
        setNum(num + 1);
        console.log(num);
    }

    function diminuir() {
        setNum(num - 1);
        console.log(num);
    }


    function getFoodItem({item: food}){
        return(
            <ThemeProvider style={style.fundo}>
                <ListItem
                    style={style.body}
                    >
                        
                    <Avatar 
                            source={{uri: food.avatarURL}}
                            size={80}
                            rounded
                        />
                    <View style={{flex: 1}}>
                        
                        <ListItem.Content >
                            <ListItem.Title>{food.name}</ListItem.Title>
                            <ListItem.Title>{food.descricao}</ListItem.Title>
                            <ListItem.Title style={{color:'green'}}>{food.preco}</ListItem.Title>
                        </ListItem.Content>
                    </View>
                    
                    <ListItem.Chevron
                        name="remove"
                        color='#fff'
                        backgroundColor="orange"
                        borderRadius={20}
                        size={30}
                        onPress={diminuir}/>
                        <Text style={{ textAlign: 'center', fontSize: 20 }}>{num}</Text>
                    <ListItem.Chevron
                        name="add"
                        color="#fff"
                        backgroundColor="orange"
                        borderRadius={20}
                        size={30}
                        onPress={aumentar}/>
                </ListItem>
            </ThemeProvider>
        )
    }
    return (
        <View>
            <FlatList
                keyExtractor={foods => foods.id.toString()}
                data={foods}
                renderItem={getFoodItem}
            />
            <View style={style.button}>
                <Pressable
                    style={({pressed}) => [
                        {
                            backgroundColor: pressed ? 'orange' : 'green',
                        },
                        style.button, 
                    ]}
                    onPress={() => {Alert.alert('Pedido enviado')}}
                >   
                    <Text style={style.buttonText}>Continue</Text>
                </Pressable>
            </View>
        </View>


    )
}

const style = StyleSheet.create(
    {
        conteiner:{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        fundo:{
            borderRadius: 8,
            height: 50,
            
        },
        buttonText:{
            fontSize: 20,
            textAlign: 'center',
            margin: 10,
            color: 'white',
        },
        button:{
            borderRadius: 8,
            height: 50,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
        },
        body:{
            backgroundColor: '#000',
            borderRadius: 8,
            elevation: 20,
            margin: 15,

        },
    
    }
)