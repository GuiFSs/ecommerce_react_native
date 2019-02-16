import React, { Component } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { ThemeProvider } from "react-native-elements";
import MHeader from "../components/Header/MHeader";
import Carousel from "../components/Carousel/Carousel";
import Adverts from "../components/Adverts/adverts";
import Card from "../components/Card-Offers/Card";

const theme = {
  Header: {
    backgroundColor: "#E60014"
  }
};

class HomeScreen extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <View style={styles.home}>
          <ScrollView>
            <MHeader navigation={this.props.navigation} />
            <Carousel />
            <Adverts />
            <Card />
            {/* <Test /> */}
          </ScrollView>
        </View>
      </ThemeProvider>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: "#F5F5F5"
  }
});

export default HomeScreen;
