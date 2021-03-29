import React from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import AppText from "./AppText";

const PickerItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}>{item.label}</AppText>
    </TouchableOpacity>
  );
};
export default PickerItem;

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});
