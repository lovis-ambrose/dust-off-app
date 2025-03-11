import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle, DimensionValue } from 'react-native';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  backgroundColor?: string;
  textColor?: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
  width: DimensionValue;
  height?: number;
  borderRadius?: number;
}

export default function CustomButton({
  title,
  onPress,
  backgroundColor = '#007BFF',
  textColor = '#FFF',
  style,
  textStyle,
  width,
  height,
  borderRadius,
}: CustomButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button,
         { 
          backgroundColor, width, height, borderRadius
        }, style]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={[styles.text, { color: textColor }, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
