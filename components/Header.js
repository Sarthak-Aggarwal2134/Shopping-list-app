import React from "react";
import {View, Text,StyleSheet,Image} from 'react-native';
import propsTypes from 'prop-types';

const Header =(props)=>{
  return(
    <View style={styles.header}>
    <Text style={styles.text}>{props.title}</Text>
    
    </View>

  );
};

Header.defaultProps={
  title:'Shopping List'
}

Header.propsTypes={
  title:propsTypes.string.isRequired
}
const styles=StyleSheet.create({
  header:{
    height:60,
    padding:15,
    backgroundColor:'#0066ff',
  },
  text:{
      color:'white',
      fontSize:20,
      textAlign:'center',
  }
});

export default Header;
