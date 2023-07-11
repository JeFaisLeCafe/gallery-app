import React, { useState } from "react";
import { View, ScrollView, StyleSheet, Text, Dimensions } from "react-native";
import { ApiImage } from "../types";
import ImageView from "react-native-image-viewing";

const height = Dimensions.get("window").height;

interface ImageViewerProps {
  imageIndex: number;
  images: ApiImage[];
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
}

export default function ImageViewer({
  imageIndex,
  images,
  isVisible,
  setIsVisible
}: ImageViewerProps) {
  const [isFooterVisible, setFooterVisible] = useState(true);

  const imageHeader = ({ imageIndex }: { imageIndex: number }) => (
    <View style={styles.header}>
      <Text style={styles.headerText}>
        {imageIndex + 1} of {images.length}
      </Text>
    </View>
  );

  const imageFooter = ({ imageIndex }: { imageIndex: number }) => {
    const image = images[imageIndex];
    if (!isFooterVisible) return <></>;
    return (
      <ScrollView style={styles.footer}>
        <Text style={styles.footerTitle}>{image.title}</Text>
        <Text style={styles.footerDescription}>{image.explanation}</Text>
        <Text style={styles.footerDate}>
          Taken on {image.date}, copyright {image.copyright}
        </Text>
      </ScrollView>
    );
  };

  const handleClose = () => {
    setIsVisible(false);
    setFooterVisible(true);
  };

  const handleLongPress = () => {
    setFooterVisible(!isFooterVisible);
  };

  return (
    <ImageView
      HeaderComponent={imageHeader}
      FooterComponent={imageFooter}
      images={images.map((image) => ({ uri: image.url }))}
      imageIndex={imageIndex}
      visible={isVisible}
      onRequestClose={handleClose}
      onLongPress={handleLongPress}
    />
  );
}

const styles = StyleSheet.create({
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
