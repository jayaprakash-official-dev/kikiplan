import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const Test = () => {
  const width = useSharedValue(100);
  const translateX = useSharedValue(0);

  const handlePress = () => {
    console.log('sdw');

    width.value = withSpring(width.value + 100, {
      mass: 10,
      stiffness: 1000,
      damping: 100,
    });

    translateX.value = withTiming(100, {
      duration: 3000,
    });
  };

  const rotateStyle = useAnimatedStyle(() => ({
    transform: [{translateY: translateX.value}],
  }));

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity onPress={handlePress}>
        <Animated.View
          style={[
            {
              width,
              height: width,
              borderRadius: width.value / 2,
              backgroundColor: 'violet',
            },
            rotateStyle,
          ]}></Animated.View>
      </TouchableOpacity>
    </View>
  );
};

export default Test;

const styles = StyleSheet.create({});
