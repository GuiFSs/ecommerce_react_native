import * as React from 'react';
import { Image } from 'react-native-elements';

interface IProps {
  uri: string;
  style?: string;
}

const Item = (props: IProps) => <Image source={{ ...props }} />;

export default Item;
