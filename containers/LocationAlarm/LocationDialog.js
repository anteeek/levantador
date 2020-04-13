import React from "react";
import { View } from "react-native";
import { Button, Paragraph, Dialog, Portal } from 'react-native-paper';

export default ({isActive, onDismiss, onAccept}) => (
  <Portal>
    <Dialog
       visible={isActive}
       onDismiss={onDismiss}>
      <Dialog.Title>Location permissions</Dialog.Title>
      <Dialog.Content>
        <Paragraph>We need your location in order to set the alarm up. Your data is not sent to any server. Press cancel to exit this screen</Paragraph>
      </Dialog.Content>
      <View style={styles.actionButtons}>
        <Dialog.Actions>
          <Button onPress={onDismiss}>Cancel</Button>
        </Dialog.Actions>
        <Dialog.Actions>
          <Button onPress={onAccept}>Accept</Button>
        </Dialog.Actions>
      </View>
      </Dialog>
  </Portal>
  )

const styles = {
  actionButtons: {
    flexDirection: "row",
    justifyContent: "space-around"
  }
}
