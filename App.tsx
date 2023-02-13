/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Pressable,
  FlatList,
  Alert
} from 'react-native';
import Formulario from './src/components/Formulario';
import Button from './src/components/Button';
import EmptyState from './src/components/EmptyState';
import Cliente from './src/components/Cliente';


const App = () => {

  const [showModal, setShowModal] = useState(false)
  const [clientes, setClientes] = useState([])
  const [clienteEdit, setClienteEdit] = useState({})

  const handleButton = () => {
    setShowModal(!showModal)
  }

  const clienteEditar = id => {
    const clienteEditar = clientes.filter(cliente => cliente.id === id)

    setClienteEdit(clienteEditar[0]);
  }

  const clienteEliminar = id =>{
    Alert.alert(
      '¿Deseas  eliminar este cliente?',
      'Un cliente eliminado no se puede recuperar.',
      [
        {text: 'Cancelar'},
        {text: 'Si, eliminar', onPress: ()=>{
           const clientesActualizados = clientes.filter( clientesState => clientesState.id !== id)

           setClientes(clientesActualizados);
           
        }},
      ]
    )
    
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.h2}>
        Gestión de
     </Text>
     <Text style={styles.h1}>
          Reservas
      </Text>

     
     
     {clientes.length === 0 ? <EmptyState/>
     : <FlatList
        
        data={clientes}
        keyExtractor={(item) => item.id}
        renderItem={({item})=>{
          return(
            <Cliente
              clienteEditar={clienteEditar}
              clienteEliminar={clienteEliminar}
              handleButton={handleButton}
              item={item}
            />
          )
        }}
     />
     
     }

      <Formulario 
        showModal={showModal}
        setShowModal={setShowModal}
        clientes={clientes}
        setClientes={setClientes}
        clienteEdit={clienteEdit}
        setClienteEdit={setClienteEdit}
        
      />

      <Pressable
        onPress={handleButton}
        style={styles.mb}
      >
        <Button
        
        btnText={'Reservar Turno'}
      />
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#202020',
    flex: 1,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  h2: {
    textAlign: 'center',
    fontSize: 24,
    color: '#ffffff',
    fontWeight: '300',
  },
  h1: {
    textAlign: 'center',
    fontSize: 28,
    color: '#ffffff',
    fontWeight: 'bold',
    marginBottom: 24
  },
  button: {
    borderRadius: 40,
    backgroundColor: '#1d67f9',
    padding: 14,
    textAlign: 'center',
    marginHorizontal: 24
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 14,
    color: '#ffffff',
    textTransform: 'uppercase',
    letterSpacing: 2
  },

  mb: {
    marginBottom: 40
  },

 


})


export default App;
