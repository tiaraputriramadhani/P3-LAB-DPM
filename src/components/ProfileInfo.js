import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import profileImage from "../../assets/dino.png";

const ProfileInfo = () => {
  return (
    <View style={styles.container}>
      <Image source={profileImage} style={styles.profileImage} />

      <View style={styles.textContainer}>
        <Text style={styles.name}>asha</Text>
        <Text style={styles.handle}>@jennrocx</Text>
        <Text style={styles.info}>Joined October 2024</Text>
        <Text style={styles.stats}>6 Following · 0 Followers</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  handle: {
    color: "gray",
    marginBottom: 5,
  },
  info: {
    color: "gray",
    marginBottom: 5,
  },
  stats: {
    marginTop: 5,
    fontWeight: "600",
  },
});

export default ProfileInfo;
