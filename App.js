import React from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {texto1:'texto1',texto2:'texto2'};
    this.escrever = this.escrever.bind(this);
  }

  mudarVogais(t){
    let novo = t.toLowerCase();
    novo = novo.replace(/(a|e|i|o|u)/g, 'i');
    novo = novo.replace(/(á|à|ã|â)/g, 'i');
    novo = novo.replace(/(é|è|ê)/g, 'i');
    novo = novo.replace(/(í|ì|î)/g, 'i');
    novo = novo.replace(/(ó|ò|ô)/g, 'i');
    novo = novo.replace(/(ú|ù|û)/g, 'i');
    return novo;
  }

  escrever(t){
    let s = this.state;
    s.texto1 = t;
    s.texto2 = this.mudarVogais(t);
    this.setState(s);
  }

  render() {
    return (
      <View style={styles.body}>
        <View style={styles.titulo}>
          <Text>Criador de Mimimi</Text>
        </View>

        <View style={styles.inputArea}>
          <TextInput style={styles.input} placeholder="Digite o seu mimimi" onChangeText={this.escrever}></TextInput>
        </View>

        <View style={styles.area}>
            <Text style={[styles.texto,styles.texto1]}>{this.state.texto1.toUpperCase()}</Text>
            <Image style={styles.guri} source={require('./images/mimimi.jpg')}></Image>
            <Text style={[styles.texto,styles.texto2]}>{this.state.texto2.toUpperCase()}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingTop:30,
    backgroundColor: '#999999',
    alignItems: 'center',
    flexDirection: 'column',
  },
  titulo:{
    fontSize:30,
    color:'#FFFFFF'
  },
  inputArea:{
    alignSelf:'stretch'
  },
  input:{
    borderWidth:1,
    borderColor:"#EEEEEE",
    color:"#000000",
    height:40,
    margin:20,
    padding:10
  },
  area:{
    width:300,
    height:300,
    marginTop:10
  },
  guri:{
    width:300,
    height:300,
    marginTop:-70,
    zIndex:0
  },
  texto:{
    fontSize:25,
    color:"#FFFFFF",
    padding:10,
    backgroundColor:"transparent",
    fontWeight:'bold',
    textAlign:'center',
    height:70
  },
  texto1:{
    zIndex:1
  },
  texto2:{
    zIndex:1,
    marginTop:-70
  }
});
