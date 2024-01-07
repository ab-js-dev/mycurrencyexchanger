import React from 'react'
import { Modal, View, Text, StyleSheet, TouchableOpacity } from 'react-native'

interface ErrorModalProps {
  showError: boolean
  errorMessage: string
  onClose: () => void // Function to close the modal
}

const ErrorModal: React.FC<ErrorModalProps> = ({ showError, errorMessage, onClose }) => {
  return (
    <Modal animationType="slide" transparent={true} visible={showError} onRequestClose={onClose}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.errorMessage}>{errorMessage}</Text>
          <TouchableOpacity onPress={onClose} style={styles.button}>
            <Text style={styles.buttonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: 'rgba(0, 0, 0, 0.5)' // Semi-transparent background
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  errorMessage: {
    marginBottom: 15,
    textAlign: 'center',
    color: 'red' // Color for the error message text
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    width: 100,
    backgroundColor: '#6200EE'
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  }
})

export default ErrorModal
