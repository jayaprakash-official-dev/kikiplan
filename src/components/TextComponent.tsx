import {Text, StyleProp, TextStyle} from 'react-native';
import useThemeModeHooks from '../hooks/useThemeModeHooks';

type TextType = {
  text: string | number;
  style?: StyleProp<TextStyle>;
  fs?: number;
  textAlign?: 'center' | 'auto' | 'left' | 'right' | 'justify';
  fw?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
    | undefined;
  color?: string;
};

const TextComponent = ({text, style, fs, textAlign, fw, color}: TextType) => {
  const [theme] = useThemeModeHooks();
  return (
    <Text
      style={{
        color: color ?? theme.txtPrimary,
        fontSize: fs ?? 14,
        textAlign: textAlign ?? 'center',
        fontWeight: fw ?? 'normal',
        fontFamily: 'Nunito-Medium',
        ...(style as object),
      }}>
      {text}
    </Text>
  );
};

export default TextComponent;
