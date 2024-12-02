import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
} from "react-native";
import Header from "../components/Header";
import ProfileInfo from "../components/ProfileInfo";
import Tabs from "../components/Tabs";

const ProfileScreen = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuVisible(false);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Header />
        <ProfileInfo />
        <Tabs closeMenu={closeMenu} />
      </ScrollView>

      {isMenuVisible && (
        <View style={styles.menu}>
          <TouchableOpacity style={styles.menuButton}>
            <Text style={styles.menuText}>Go Live</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuButton}>
            <Text style={styles.menuText}>Spaces</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuButton}>
            <Text style={styles.menuText}>Photos</Text>
          </TouchableOpacity>
        </View>
      )}

      <TouchableOpacity style={styles.floatingButton} onPress={toggleMenu}>
        <Text style={styles.floatingButtonText}>
          {isMenuVisible ? "×" : "+"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  floatingButton: {
    position: "absolute",
    bottom: 35,
    right: 30,
    backgroundColor: "#00acee",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  floatingButtonText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  menu: {
    position: "absolute",
    bottom: 90,
    right: 30,
    alignItems: "flex-end",
  },
  menuButton: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  menuText: {
    color: "#000",
    fontSize: 16,
  },
});

export default ProfileScreen;
