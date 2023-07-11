import { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from "react-native";
import useFetchImages from "../hooks/useFetchImages";
import Slider from "@react-native-community/slider";
import { ApiImage } from "../types";
import { Image } from "expo-image";
import Error from "./Error";
import Loader from "./Loader";
import ImageViewer from "./ImageViewer";
import { Constants } from "../constants";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const IMAGE_WIDTH = width / 2 - 15;
const IMAGE_HEIGHT = height / 5 - 15;

export default function Gallery() {
  const [sliderValue, setSliderValue] = useState(
    Constants.DEFAULT_IMAGE_COUNT as number
  );
  const [isVisible, setIsVisible] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const { images, isLoading, error, refresh } = useFetchImages(sliderValue);

  const onPress = (ind: number) => {
    setImageIndex(ind);
    setIsVisible(true);
  };

  const renderItem = ({ item, index }: { item: ApiImage; index: number }) => (
    <TouchableOpacity activeOpacity={0.8} onPress={() => onPress(index)}>
      <Image source={{ uri: item.url }} style={styles.image} />
    </TouchableOpacity>
  );

  const emptyFlatlist = () => (
    <Text>Something went wrong. No image to display.</Text>
  );

  useEffect(() => {
    refresh(sliderValue);
  }, [sliderValue]);

  if (isLoading || images.length === 0) {
    return <Loader />;
  }

  if (error || !images) {
    return <Error error={error} />;
  }

  return (
    <>
      <View style={styles.sliderContainer}>
        <Text>Number of images: {sliderValue}</Text>
        <Slider
          value={sliderValue}
          onSlidingComplete={(value) => setSliderValue(value)}
          style={styles.slider}
          minimumValue={2}
          maximumValue={30}
          minimumTrackTintColor="blue"
          maximumTrackTintColor="gray"
          step={1}
        />
      </View>

      <FlatList
        data={images}
        renderItem={renderItem}
        style={styles.container}
        ListEmptyComponent={emptyFlatlist}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        contentContainerStyle={styles.gap}
        columnWrapperStyle={styles.gap}
      ></FlatList>

      <ImageViewer
        images={images}
        imageIndex={imageIndex}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
      />
    </>
  );
}

const styles = StyleSheet.create({
  sliderContainer: {
    marginTop: 20,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  slider: { width: 200, height: 40 },
  gap: { gap: 10 },
  container: {
    marginBottom: 30,
    paddingHorizontal: 10
  },
  image: {
    width: IMAGE_WIDTH,
    height: IMAGE_HEIGHT,
    borderRadius: 10
  },
  header: {
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 30,
    marginTop: 10
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white"
  },
  footer: {
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingHorizontal: 20,
    maxHeight: height / 4,
    marginBottom: 10
  },
  footerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white"
  },
  footerDescription: {
    fontSize: 14,
    color: "white",
    paddingVertical: 10
  },
  footerDate: {
    fontSize: 12,
    color: "white"
  }
});
