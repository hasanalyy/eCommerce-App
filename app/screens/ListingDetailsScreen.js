import React from "react";
import { KeyboardAvoidingView, StyleSheet, View } from "react-native";
import colors from "../config/colors";
import AppText from "../components/AppText";
import ListItem from "../components/ListItem";

import { Image } from "react-native-expo-image-cache";
import ContactSellerForm from "../components/Forms/ContactSellerForm";

const ListingDetailsScreen = ({ route }) => {
  const listing = route.params;
  return (
    <KeyboardAvoidingView
      behavior="position"
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
    >
      <View>
        <Image
          style={styles.image}
          preview={{ uri: listing.images[0].thumbnailUrl }}
          uri={listing.images[0].url}
          tint="light"
        />

        <View style={styles.detailsContainer}>
          <AppText style={styles.title}> {listing.title} </AppText>
          <AppText style={styles.price}> ${listing.price}</AppText>

          <View style={styles.userContainer}>
            <ListItem
              image={require("../assets/hasanali.jpg")}
              title="Hasan Ali"
              subTitle="5 Listings"
            />
          </View>
        </View>
        <ContactSellerForm listing={listing} />
      </View>
    </KeyboardAvoidingView>
  );
};

export default ListingDetailsScreen;

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },

  price: {
    color: colors.secondary,
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },

  title: {
    fontSize: 24,
    fontWeight: "500",
  },

  userContainer: {
    marginVertical: 40,
  },
});
