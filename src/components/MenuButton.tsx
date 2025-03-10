import React from 'react';
import {GestureResponderEvent, Image, ImageSourcePropType, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
// import {AppStyles} from '../styles/AppStyles';

export default function MenuButton(props: { onPress: ((event: GestureResponderEvent) => void) | undefined; source: ImageSourcePropType | undefined; title: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }) {
  return (
    <TouchableHighlight
      onPress={props.onPress}
      style={styles.btnClickContain}
      underlayColor="rgba(128, 128, 128, 0.1)">
      <View style={styles.btnContainer}>
        <Image source={props.source} style={styles.btnIcon} />
        <Text style={styles.btnText}>{props.title}</Text>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  btnClickContain: {
    flexDirection: 'row',
    padding: 5,
    marginTop: 5,
    marginBottom: 5,
  },
  btnContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  btnIcon: {
    height: 25,
    width: 25,
  },
  btnText: {
    fontSize: 16,
    marginLeft: 10,
    marginTop: 2,
  },
});