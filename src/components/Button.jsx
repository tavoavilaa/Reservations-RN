import React from 'react'
import {
    Text,
    StyleSheet,
    View,
  } from 'react-native';

const Button = ({btnText}) => {
  return (
    <View 
        style={styles.button}> 
        <Text style={styles.buttonText}>
          {btnText}
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({

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
  })

export default Button