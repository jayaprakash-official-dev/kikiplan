import {
  View,
  StyleSheet,
  FlatList,
  TouchableHighlight,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {commonStyles} from '../styles/commonStyles';
import TextComponent from '../components/TextComponent';
import ListComponent from '../components/ListComponent';
import useThemeModeHooks from '../hooks/useThemeModeHooks';
import {pickMultiColor} from '../utils/utils';
import ListCreateModel from '../components/ListCreateModel';

const testData = [
  {
    todoTitle: 'Auction List',
    todoCount: 100,
  },
  {
    todoTitle: 'Listing List',
    todoCount: 72,
  },
  {
    todoTitle: 'Lot List',
    todoCount: 8,
  },
  {
    todoTitle: 'Auction List',
    todoCount: 100,
  },
  {
    todoTitle: 'Listing List',
    todoCount: 72,
  },
  {
    todoTitle: 'Lot List',
    todoCount: 8,
  },
  {
    todoTitle: 'Auction List',
    todoCount: 100,
  },
  {
    todoTitle: 'Listing List',
    todoCount: 72,
  },
  {
    todoTitle: 'Lot List',
    todoCount: 8,
  },
  {
    todoTitle: 'Auction List',
    todoCount: 100,
  },
  {
    todoTitle: 'Listing List',
    todoCount: 72,
  },
  {
    todoTitle: 'Lot List',
    todoCount: 8,
  },
];

const TodoScreen = () => {
  const [theme] = useThemeModeHooks();
  const [isOpen, setIsOpen] = useState(false);
  const [todoTitle, setTodoTitle] = useState<
    {
      todoTitle: string;
      todoCount: number;
      color: string;
    }[]
  >();
  const [title, setTitle] = useState<string>('');

  useEffect(() => {
    let todoListData = testData.map((data, index) => {
      return {
        ...data,
        color: pickMultiColor(index),
      };
    });
    setTodoTitle(todoListData);
  }, []);

  const createPlan = (isOpen: boolean) => {
    setIsOpen(isOpen);
  };

  return (
    <View
      style={{
        ...commonStyles.container,
        backgroundColor: theme.secondary,
        paddingTop: 10,
      }}>
      <ListCreateModel
        modelCloseFun={createPlan}
        isVisible={isOpen}
        height={200}
        marginHorizontal={0}>
        <View style={{flex: 1}}>
          <View style={styles.addInputTxt}>
            <TextInput
              onChangeText={text => setTitle(text)}
              value={title}
              style={{padding: 10, fontSize: 18, fontFamily: 'Nunito-Medium'}}
              placeholder="Enter plan title..."
            />
          </View>
          <TouchableHighlight
            onPress={() => createPlan(false)}
            style={styles.createListBtn}>
            <TextComponent text="Add" textAlign="center" fs={20} />
          </TouchableHighlight>
        </View>
      </ListCreateModel>
      <View>
        <TextComponent
          style={{fontFamily: 'Merienda-Bold'}}
          fs={30}
          text="TODO"
        />
        <TextComponent
          style={{fontFamily: 'Merienda-Bold'}}
          fs={20}
          text={'My Lists (6)'}
        />
      </View>
      <View style={{marginTop: 10, paddingBottom: 170}}>
        {
          <FlatList
            data={todoTitle}
            renderItem={titleList => {
              return <ListComponent titleListProps={titleList.item} />;
            }}
          />
        }
      </View>
      {!isOpen && (
        <TouchableHighlight
          onPress={() => createPlan(true)}
          style={styles.createListBtn}>
          <TextComponent text="Create Plan" textAlign="center" fs={20} />
        </TouchableHighlight>
      )}
    </View>
  );
};

export default TodoScreen;

const styles = StyleSheet.create({
  addInputTxt: {
    borderWidth: 2,
    marginHorizontal: 10,
    borderRadius: 10,
    borderColor: 'gray',
    paddingLeft: 10,
    backgroundColor: '#fff',
  },
  createListBtn: {
    backgroundColor: 'black',
    position: 'absolute',
    height: 70,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
