import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet
  }from 'react-native';

const EmptyState = () => {
  return (
    <View style={styles.imgContainer}>
        <Image 
        style={styles.imgStyles} 
        source={require('../img/empty-state.png')} 
        />
        <Text style={styles.h2}>No hay turnos agregados</Text>
        <Text style={styles.h3}>Comienza agregando uno</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  imgStyles: {
      marginLeft: 8,
      marginRight: 20,
      width: 280,
      height: 280
    },
    imgContainer: {
      alignItems: 'center',
      },

      h2: {
        textAlign: 'center',
        fontSize: 24,
        color: '#ffffff',
        fontWeight: '400',
        marginBottom: 4,
      },

      h3: {
        textAlign: 'center',
        fontSize: 16,
        color: '#ffffff',
        fontWeight: '300',
        marginBottom: 24,
      },
})


export default EmptyState