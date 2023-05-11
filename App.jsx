
import React, { Component } from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Button from './src/components/Button';
import Display from './src/components/Display';

export default class App extends Component {
state ={
  displayValue:'0',
  clearDisplay:false,
  operation:null,
  values:[0,0]
}

addDigit = n =>{
  if (n==='.' && this.state.displayValue.includes('.')){
    return;
  }
  const clearDisplay = this.state.displayValue ==='0' || this.state.clearDisplay;
  const currentValue = clearDisplay?'':this.state.displayValue
  const displayValue = currentValue + n
  this.setState({displayValue,clearDisplay:false})
  if (n !=='.') {
    const newValue = parseFloat(displayValue);
    const values = [...this.state.values]
    values[this.state.current] = newValue;
    this.setState({values})


  }


}


clearMemory = () => {
  this.setState({
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0,
  });
};

setOperation = operation => {
  // 1. Verifica se estamos configurando a primeira operação
  if (this.state.current === 0) {
    this.setState({ operation, current: 1, clearDisplay: true });
  } else {
    // 2. Verifica se a operação é igual (=)
    const equals = operation === '=';

    // 3. Obtém a operação atual do estado
    const currentOperation = this.state.operation;

    // 4. Cria uma cópia do array de valores do estado
    const values = [...this.state.values];

    // 5. Tenta calcular o resultado da operação atual com os valores armazenados
    try {
      values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`);
    } catch (e) {
      values[0] = this.state.values[0];
    }

    // 6. Redefine o segundo valor para 0
    values[1] = 0;

    // 7. Atualiza o estado com os novos valores e configurações
    this.setState({
      displayValue: `${values[0]}`,
      operation: equals ? null : operation,
      current: equals ? 0 : 1,
      clearDisplay: true,
      values,
    });
  }
};

  render(){
  return(

  <View style={style.display}>
    <Display value={this.state.displayValue}
        value2 = {this.state.clearDisplay? <Text> Clear:true </Text>:<Text> Clear:False </Text>}
        value3 = {<Text>values: {this.state.values[0]}</Text>}
        style={style.container}/>
    <View style={style.button}>
    <Button label='AC' triple onClick={this.clearMemory} />
    <Button label='/' operation onClick={this.setOperation}/>
    <Button label='7' onClick={this.addDigit}/>
    <Button label='8' onClick={this.addDigit}/>
    <Button label='9' onClick={this.addDigit}/>
    <Button label='*' operation onClick={this.setOperation}/>
    <Button label='4' onClick={this.addDigit}/>
    <Button label='5' onClick={this.addDigit}/>
    <Button label='6' onClick={this.addDigit}/>
    <Button label='-' operation onClick={this.setOperation}/>
    <Button label='1' onClick={this.addDigit}/>
    <Button label='2' onClick={this.addDigit}/>
    <Button label='3' onClick={this.addDigit}/>
    <Button label='+' operation onClick={this.setOperation}/>
    <Button label='0' onClick={this.addDigit} double/>
    <Button label='.' onClick={this.addDigit}/>
    <Button label='=' operation onClick={this.setOperation}/>
    </View>
  </View>)}}

const style = StyleSheet.create({
  display: {
    flex: 1,
    alignContent: "flex-end",
  },

  container: {
    flex: 1,
    alignContent: "flex-end",
    alignItems: "flex-end",
  },

  button: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "flex-start",
    backgroundColor: '#rgba(0,0,0,0.6)'
  },
});

/*import React, { Component } from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Button from './src/components/Button';
import Display from './src/components/Display';

export default class App extends Component {
  state = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0,
  };

  addDigit = (n) => {
    if (n === '.' && this.state.displayValue.includes('.')) {
      return;
    }

    const clearDisplay =
      this.state.displayValue === '0' || this.state.clearDisplay;

    const currentValue = clearDisplay ? '' : this.state.displayValue;
    const displayValue = currentValue + n;
    this.setState({ displayValue, clearDisplay: false });

    if (n !== '.') {
      const newValue = parseFloat(displayValue);
      const values = [...this.state.values];
      values[this.state.current] = newValue;
      this.setState({ values });
    }
  };

  clearMemory = () => {
    this.setState({ displayValue: '0', clearDisplay: false, operation: null, values: [0, 0], current: 0 });
  };

  setOperation = (operation) => {
    if (this.state.current === 0) {
      this.setState({ operation, current: 1, clearDisplay: true });
    } else {
      const equals = operation === '=';
      const values = [...this.state.values];
      try {
        values[0] = eval(`${values[0]} ${this.state.operation} ${values[1]}`);
      } catch (e) {
        values[0] = this.state.values[0];
      }

      values[1] = 0;
      this.setState({
        displayValue: `${values[0]}`,
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        clearDisplay: !equals,
        values,
      });
    }
  };

  render() {
    return (
      <View style={styles.display}>
        <Display value={this.state.displayValue} style={styles.container} />
        <View style={styles.button}>
          <Button label="AC" triple onClick={this.clearMemory} />
          <Button label="/" operation onClick={() => this.setOperation('/')} />
          <Button label="7" onClick={() => this.addDigit('7')} />
          <Button label="8" onClick={() => this.addDigit('8')} />
          <Button label="9" onClick={() => this.addDigit('9')} />
          <Button label="*" operation onClick={() => this.setOperation('*')} />
          <Button label="4" onClick={() => this.addDigit('4')} />
          <Button label="5" onClick={() => this.addDigit('5')} />
          <Button label="6" onClick={() => this.addDigit('6')} />
          <Button label="-" operation onClick={() => this.setOperation('-')} />
          <Button label="1" onClick={() => this.addDigit('1')} />
          <Button label="2" onClick={() => this.addDigit('2')} />
          <Button label="3" onClick={() => this.addDigit('3')} />
          <Button label="+" operation onClick={() => this.setOperation('+')} />
          <Button label="0" onClick={() => this.addDigit('0')} double />
          <Button label="." onClick={() => this.addDigit('.')} />
          <Button label="=" operation onClick={() => this.setOperation('=')} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  display: {
    flex: 1,
    alignContent: 'flex-end',
  },

  container: {
    flex: 1,
    alignContent: 'flex-end',
    alignItems: 'flex-end',
  },
  button: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
});*/