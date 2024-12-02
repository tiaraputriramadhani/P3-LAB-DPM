import React from "react";
import { View, Image, StyleSheet } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Image
        source={{ uri: "https://via.placeholder.com/800x400" }} // Gambar header
        style={styles.coverImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 150,
  },
  coverImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});

export default Header;
