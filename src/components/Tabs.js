import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Tabs = ({ closeMenu }) => {
  const [activeTab, setActiveTab] = useState("Posts");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    closeMenu();
  };

  const renderContent = () => {
    switch (activeTab) {
      case "Posts":
        return (
          <Text style={styles.contentText}>This is the Posts content.</Text>
        );
      case "Replies":
        return (
          <Text style={styles.contentText}>This is the Replies content.</Text>
        );
      case "Media":
        return (
          <View style={styles.mediaMessage}>
            <Text style={styles.messageTitle}>
              @jennrocx hasn’t posted media
            </Text>
            <Text style={styles.messageSubtitle}>
              Once they do, those posts will appear here.
            </Text>
          </View>
        );
      case "Likes":
        return (
          <Text style={styles.contentText}>This is the Likes content.</Text>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabsRow}>
        {["Posts", "Replies", "Media", "Likes"].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={styles.tab}
            onPress={() => handleTabChange(tab)} // Panggil handleTabChange
          >
            <Text
              style={[
                styles.tabText,
                activeTab === tab ? styles.activeTabText : null,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.contentContainer}>{renderContent()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    borderTopWidth: 1,
    borderColor: "#ddd",
  },
  tabsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  tab: {
    alignItems: "center",
  },
  tabText: {
    fontSize: 16,
    color: "gray",
  },
  activeTabText: {
    color: "blue",
    fontWeight: "bold",
  },
  contentContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  contentText: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 60,
    marginVertical: 10,
  },
  mediaMessage: {
    alignItems: "center",
    marginTop: 20,
  },
  messageTitle: {
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 5,
  },
  messageSubtitle: {
    color: "gray",
    textAlign: "center",
  },
});

export default Tabs;
