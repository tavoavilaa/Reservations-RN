import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Pressable,
  Modal,
  TextInput,
  View,
  ScrollView,
  Alert,
  Image
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import Button from './Button';

const Formulario = ({showModal, setShowModal, clientes, setClientes, clienteEdit, setClienteEdit}) => {
  const [cliente, setCliente] = useState('');
  const [id, setId] = useState('');
  const [correo, setCorreo] = useState('');
  const [phone, setPhone] = useState('');
  const [fecha, setFecha] = useState(new Date());
  const [servicio, setServicio] = useState('');

  useEffect(() => {

      

      if (Object.keys(clienteEdit).length > 0) {
        setCliente(clienteEdit.cliente)
        setId(clienteEdit.id)
        setCorreo(clienteEdit.correo)
        setPhone(clienteEdit.phone)
        setFecha(clienteEdit.fecha)
        setServicio(clienteEdit.servicio)
      }else{
        setCliente('')
        setId('')
        setCorreo('')
        setPhone('')
        setServicio('')
        setFecha(new Date())  

      
      }
  }, [clienteEdit])
  


    const handleReservation = ()=>{
        if ([cliente,correo,phone,fecha,servicio].includes('')) {
            Alert.alert(
                'Error',
                'Todos los campos son obligatorios',

            )
            return
        }
        const nuevoCliente = {
          cliente,
          correo,
          phone,
          fecha,
          servicio
      }
        //if new register
        if (id) {
          
          nuevoCliente.id = id
          const clientesActualizados = clientes.map(clienteState => clienteState.id === nuevoCliente.id ? nuevoCliente : clienteState)

          setClientes(clientesActualizados);
          setClienteEdit({})
         
        }else{
          nuevoCliente.id = Date.now()
          setClientes([...clientes, nuevoCliente])
        }


        setShowModal(false)
        setCliente('')
        setId('')
        setCorreo('')
        setPhone('')
        setFecha(new Date())
        setServicio('')

    }
  return (
    <Modal animationType="slide" visible={showModal}>
      <SafeAreaView style={styles.containerModal}>
        <ScrollView>
          <View style={styles.returnBtnContainer}>
            <Pressable
              style={styles.returnBtn}
              onPress={() => {
                setClienteEdit({})
                setShowModal(false)}
              }>
            <Image 
            style={styles.iconStyles} 
            source={require('../img/circulo-cruzado.png')} 
            />
            </Pressable>
          </View>
          <Text style={styles.titleModal}>{ Object.keys(clienteEdit).length > 0 ? 'Edita un turno': 'Reserva un turno'} </Text>

          <View style={styles.campo}>
            <Text style={styles.label}>Nombre</Text>
            <TextInput
              style={styles.input}
              placeholder="Ingresa tu nombre"
              placeholderTextColor={'#bebebe'}
              value={cliente}
              onChangeText={setCliente}
            />
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Correo electrónico</Text>
            <TextInput
              style={styles.input}
              placeholder="Ingresa tu correo"
              placeholderTextColor={'#bebebe'}
              keyboardType="email-address"
              value={correo}
              onChangeText={setCorreo}
            />
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Teléfono</Text>
            <TextInput
              style={styles.input}
              placeholder="Ingresa tu teléfono celular"
              placeholderTextColor={'#bebebe'}
              keyboardType="number-pad"
              value={phone}
              onChangeText={setPhone}
            />
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Tipo de servicio</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              placeholderTextColor={'#bebebe'}
              multiline={true}
              numberOfLines={4}
              value={servicio}
              onChangeText={setServicio}
            />
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Fecha del servicio</Text>
            <View style={styles.input}>
              <DatePicker
                textColor="#ffffff"
                date={fecha}
                locale="es"
                onDateChange={date => setFecha(date)}
              />
            </View>
          </View>


          <Pressable
                style={[styles.campo, styles.mt5, , styles.mb5]}
                onPress={handleReservation}
            >
                <Button
                btnText={Object.keys(clienteEdit).length > 0 ? 'Confirmar Edición': 'Confirmar Reservación'}
            />
        </Pressable>

        
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  containerModal: {
    backgroundColor: '#151515',
    flex: 1,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },

  titleModal: {
    textAlign: 'center',
    fontSize: 28,
    color: '#ffffff',
    marginBottom: 16,
  },

  label: {
    color: '#ffffff',
    fontSize: 16,
    marginBottom: 8,
  },
  campo: {
    marginHorizontal: 24,
    marginTop: 16,
  },
  input: {
    backgroundColor: '#363636',
    padding: 16,
    borderRadius: 8,
    color: '#ffffff',
  },

  textArea: {
    height: 100,
    paddingTop: 16,
  },

  returnBtn: {
    alignItems: 'center',
    marginBottom: 16,
    textAlign: 'center',
  },

  returnBtnText: {
    textAlign: 'center',
    fontSize: 32,
    color: '#bebebe',
    fontWeight: 300,
  },

  mt5:{
    marginTop: 40,
    marginBottom: 40,
  },
  iconStyles:{
    width: 32,
    height: 32,
  }
});

export default Formulario;
