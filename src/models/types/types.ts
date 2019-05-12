import { NavigationScreenProp } from 'react-navigation';
import { ViewStyle } from 'react-native';

export interface INavigationProps {
  navigation: NavigationScreenProp<any, any>;
}

export interface IIcon {
  show: boolean;
  name: string;
  style?: ViewStyle;
}

export interface IAnuncio {
  _id: string;
  descricao: string;
  imagem: string;
  __v?: number;
}

export interface IProduto {
  _id: string;
  nome: string;
  preco: number;
  descricao: string;
  caracteristicas: {};
  imagens: string[];
  categoria: string;
  avaliacao: number;
  qtdEstoque: number;
}
