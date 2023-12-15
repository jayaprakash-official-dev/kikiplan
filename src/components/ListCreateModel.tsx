import {View, TouchableOpacity, Keyboard, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import Animated, {
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Ionicons';

type ListCreateModelType = {
  isVisible: boolean;
  height?: number;
  marginHorizontal?: number;
  children: React.ReactNode;
  modelCloseFun: (isOpen: boolean) => void;
};

const ListCreateModel = ({
  isVisible,
  height = 400,
  marginHorizontal,
  children,
  modelCloseFun,
}: ListCreateModelType) => {
  const bottom = useSharedValue(-height);
  const [opened, setOpened] = useState(isVisible);

  useEffect(() => {
    isVisible ? Open() : Close();
  }, [isVisible]);

  const Open = () => {
    if (isVisible) {
      bottom.value = withTiming(bottom.value + height, {duration: 1000});
      bottom.value = withSpring(bottom.value + height, {
        mass: 5,
        stiffness: 1000,
        damping: 100,
      });
      setOpened(true);
    }
  };

  const Close = () => {
    if (opened) {
      bottom.value = withTiming(bottom.value - height, {duration: 1000});
      bottom.value = withSpring(bottom.value - height, {
        mass: 5,
        stiffness: 1000,
        damping: 100,
      });
      Keyboard.dismiss();
      modelCloseFun(false);
      setOpened(false);
    }
  };

  return (
    <View
      style={{...styles.modelWrapper, display: isVisible ? 'flex' : 'none'}}>
      <Animated.View
        style={{
          ...styles.modelAnimatedView,
          height: height,
          bottom: bottom,
          display: isVisible ? 'flex' : 'none',
          left: marginHorizontal ?? 0,
          right: marginHorizontal ?? 0,
        }}>
        <TouchableOpacity
          style={{alignItems: 'flex-end', padding: 10}}
          onPress={() => Close()}>
          <Icon name="close-circle-outline" size={30} color="black" />
        </TouchableOpacity>
        {children}
      </Animated.View>
    </View>
  );
};

export default ListCreateModel;

const styles = StyleSheet.create({
  modelWrapper: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 2,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modelAnimatedView: {
    backgroundColor: 'white',
    position: 'absolute',
    zIndex: 1,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
});
