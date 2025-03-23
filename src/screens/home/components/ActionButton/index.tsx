import React from 'react';
import { Image, ImageSourcePropType, Pressable } from 'react-native';

type ActionButtonProps = {
  onPress: () => void;
  source: ImageSourcePropType;
};

const ActionButton = ({ onPress, source }: ActionButtonProps) => {
  return (
    <Pressable onPress={onPress}>
      <Image source={source} style={{ width: 24, height: 24 }} resizeMode="contain" />
    </Pressable>
  );
};

export default ActionButton;
