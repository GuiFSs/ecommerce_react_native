import React, {Component} from 'react'
import { Image } from 'react-native';

export default class Name extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Image source={{uri: this.props.imagem}} style={this.props.style}/>
        )
    }
}