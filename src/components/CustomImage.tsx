import React from 'react';
import { Image, ImageStyle, StyleSheet } from 'react-native';

interface CustomImageProps {
  source: any;
  width?: number;
  height?: number;
  borderRadius?: number;
  style?: ImageStyle;
}

export default function CustomImage({
  source,
  width = 100,
  height = 100,
  borderRadius = 10,
  style,
}: CustomImageProps) {
  return (
    <Image source={source} style={[styles.image, { width, height, borderRadius }, style]} />
  );
}

const styles = StyleSheet.create({
  image: {
    resizeMode: 'cover',
  },
});
