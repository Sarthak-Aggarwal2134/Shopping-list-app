import React , {useState} from 'react';
import {Text, StyleSheet, Image,Alert} from 'react-native';  
import Header from './components/Header';
import  'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid'
import {View, FlatList} from 'react-native';
import ListItem from './components/ListItem';
import AddItems from './components/AddItem';

const App = ({title}) => {
  const [items, setItems] = useState([
    {id : uuidv4(), text : 'Milk'},
    {id : uuidv4(), text : 'Bread'},
    {id : uuidv4(), text : 'Sauce'},
    {id : uuidv4(), text : 'Paper'},

  ]);

const deleteItem = (id) => {
  setItems(prevItems => {
    return prevItems.filter(item => item.id != id);
  });
}

const addItem = (text) => {
  if(!text) {
    Alert.alert('Error', 'Enter an Item'); 
  } 
  else{
setItems(prevItems => {
    return[{id : uuidv4(), text}, ...prevItems];
  });
  }
 
}


  return (
    <View style= {styles.container}>
      <Header title = 'Shopping List'/>
      <AddItems addItem = {addItem}/>
      <FlatList 
      data = {items} 
      renderItem={({item}) => <ListItem item = {item} deleteItem = {deleteItem}/> }
      />
      </View>

  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App; 