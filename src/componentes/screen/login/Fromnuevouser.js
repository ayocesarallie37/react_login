import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Modal, Portal, Text, Button, PaperProvider } from 'react-native-paper';

const Fromnuevouser = () => {
    const [visible, setVisible] = React.useState(false);

    const showModal = () => {
        setVisible(true)
    };

    const hideModal = () => {
        setVisible(false)
    };

    const containerStyle = { backgroundColor: 'white', padding: 0 };

    return (
        <PaperProvider>
            <Portal>
                <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                    <Text>Example Modal.  Click outside this area to dismiss.</Text>
                </Modal>
            </Portal>
            <Button style={{ marginTop: 30 }} onPress={showModal}>
                Show
            </Button>
        </PaperProvider>
    )
}

export default Fromnuevouser

const styles = StyleSheet.create({})