import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {commonStyles} from '../styles/commonStyles';
import TextComponent from './TextComponent';
import useThemeModeHooks from '../hooks/useThemeModeHooks';
import Icon from 'react-native-vector-icons/Ionicons';

export type ListType = {
  titleListProps: {
    todoTitle: string;
    todoCount: number;
    color: string;
  };
};

const ListComponent = ({titleListProps}: ListType) => {
  const [theme] = useThemeModeHooks();
  return (
    <TouchableOpacity>
      <View
        style={{
          ...commonStyles.listStyle,
          backgroundColor: theme.gray,
        }}>
        <View style={style.listWrapper}>
          <View style={{width: '20%'}}>
            <TouchableOpacity style={{padding: 10}}>
              <Icon name="menu-outline" size={30} color="gray" />
            </TouchableOpacity>
          </View>
          <View style={{width: '65%'}}>
            <TextComponent
              text={titleListProps.todoTitle}
              fs={20}
              fw={'bold'}
              textAlign="left"
              color={titleListProps.color}
            />
          </View>
          <View style={{width: '15%'}}>
            <TextComponent
              text={titleListProps.todoCount ?? 0}
              fs={20}
              fw={'bold'}
              textAlign="left"
              color={titleListProps.color}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ListComponent;

const style = StyleSheet.create({
  listWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginHorizontal: 20,
    alignItems: 'center',
  },
});
