import React from 'react';
import { View, ScrollView, Image, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const height = width * 0.8;

const Carousel = props => {
  const { images } = props;
  console.log(images);

  if (!images || !images.length) return null;

  return (
    <View style={styles.scrollContainer}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      >
        {images.map((image, i) => (
          <Image key={i} style={styles.image} source={image.source} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    height
  },
  image: {
    width,
    height
  }
});

export default Carousel;
