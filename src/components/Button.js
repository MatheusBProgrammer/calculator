import React from 'react';
import {
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  View,
  TouchableHighlight,
} from 'react-native';


export default (props) => {
  const stylesButton = [styles.button]
  if(props.double) stylesButton.push(styles.buttonDouble)
  if(props.triple) stylesButton.push(styles.buttonTriple)
  if(props.operation) stylesButton.push(styles.operationButton)
  return (
    <TouchableHighlight onPress={()=>props.onClick(props.label)}>
      <Text style={stylesButton}>{props.label}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#F0F0F0",
    fontSize: 40,
    height: (Dimensions.get("window").width) / 4,
    width: (Dimensions.get("window").width) / 4,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    paddingTop: 25,
    borderWidth: 1,
    borderRadius: ((Dimensions.get("window").width) / 4) / 2, // Adicione esta linha para tornar os botões redondos
  },
  operationButton: {
    color: "#fff",
    backgroundColor: "#fa8231",
  },
  buttonDouble: {
    width: ((Dimensions.get("window").width) / 4) * 2,
  },
  buttonTriple: {
    width: ((Dimensions.get("window").width) / 4) * 3,
  },
  buttonText: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
});
