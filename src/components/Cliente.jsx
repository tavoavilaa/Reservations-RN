import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Pressable,
    Image
  } from 'react-native';

const Cliente = ({item, handleButton, clienteEditar,clienteEliminar}) => {
    const {cliente,fecha, id} = item
    const formatearFecha = fecha => {
        const nuevaFecha = new Date(fecha)
        const opciones = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            
        }

        return nuevaFecha.toLocaleDateString('es-ES',opciones)
    }
  return (
    <View style={styles.listado}>
        <View style={[styles.clienteLabel]}>
        <Text style={[styles.cliente]}>Cliente:</Text>
        <View style={styles.btnContainer}>
          <Pressable
            onPress={() => {
              handleButton()
              clienteEditar(id)
            }}
          >
            <Image 
          style={styles.iconStyles} 
          source={require('../img/editar.png')} 
          />
          </Pressable>
          <Pressable
            onPress={() => clienteEliminar(id)}
          >
          <Image 
          style={styles.iconStyles} 
          source={require('../img/basura.png')} 
          />
          </Pressable>
        </View>
       
        </View>
        <Text style={[styles.h2]}>{cliente}</Text>
        <Text style={[styles.h4]}>{formatearFecha(fecha)}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    cliente: {
        fontSize: 14,
        color: '#ffffff',
        fontWeight: '300',
        borderBottomWidth: 3,
        borderBottomColor: '#ffffff',
        paddingBottom: 4
      },

      clienteLabel: {
        borderBottomWidth: 1,
        borderBottomColor: '#464646',
        marginBottom: 4,
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
 
    h2: {
        fontSize: 24,
        color: '#ffffff',
        fontWeight: '600',
        marginBottom: 4
      },

      h4: {
        fontSize: 16,
        color: '#ffffff',
        fontWeight: '300',
      },

      listado: {
        backgroundColor: '#363636',
        paddingHorizontal: 16,
        marginHorizontal: 24,
        borderRadius: 8,
        marginBottom: 8,
        borderLeftWidth: 2,
        borderLeftColor: '#1d67f9',
        padding: 16
      },

      btnContainer: {
        flexDirection: 'row',
        gap: 16,
        alignItems: 'center',
        paddingBottom: 6
      },

      iconStyles:{
        width: 22,
        height: 22,
      }

})

export default Cliente