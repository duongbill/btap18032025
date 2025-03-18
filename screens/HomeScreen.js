import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons
          name="location-outline"
          size={24}
          color="black"
          style={styles.locationIcon}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Search for meals or area"
        />
        <Ionicons name="search" size={24} color="gray" />
      </View>

      <ScrollView>
        {/* Top Categories */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Top Categories</Text>
          <TouchableOpacity>
            <Text style={styles.filterText}>Filter</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoryContainer}
        >
          <View style={styles.categoryItem}>
            <Image
              source={require("../assets/img1.jpg")}
              style={styles.categoryImage}
            />
            <Text>Pizza</Text>
          </View>
          <View style={styles.categoryItem}>
            <Image
              source={require("../assets/img1.jpg")}
              style={styles.categoryImage}
            />
            <Text>Burgers</Text>
          </View>
          <View style={styles.categoryItem}>
            <Image
              source={require("../assets/img1.jpg")}
              style={styles.categoryImage}
            />
            <Text>Steak</Text>
          </View>
          <View style={styles.categoryItem}>
            <Image
              source={require("../assets/img1.jpg")}
              style={styles.categoryImage}
            />
            <Text>Burgers</Text>
          </View>
          <View style={styles.categoryItem}>
            <Image
              source={require("../assets/img1.jpg")}
              style={styles.categoryImage}
            />
            <Text>Burgers</Text>
          </View>
          <View style={styles.categoryItem}>
            <Image
              source={require("../assets/img1.jpg")}
              style={styles.categoryImage}
            />
            <Text>Burgers</Text>
          </View>
        </ScrollView>

        {/* Popular Items */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Popular Items</Text>
          <TouchableOpacity>
            <Text style={styles.viewAllText}>View all</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.popularContainer}
        >
          <View style={styles.foodItem}>
            <Image
              source={require("../assets/img1.jpg")}
              style={styles.foodImage}
            />
            <View style={styles.foodDetails}>
              <Text style={styles.foodTitle}>Food 1</Text>
              <Text style={styles.foodSubtitle}>By Viet Nam</Text>
              <Text style={styles.foodPrice}>$1</Text>
            </View>
          </View>
          <View style={styles.foodItem}>
            <Image
              source={require("../assets/img1.jpg")}
              style={styles.foodImage}
            />
            <View style={styles.foodDetails}>
              <Text style={styles.foodTitle}>Food 2</Text>
              <Text style={styles.foodSubtitle}>By Viet Nam</Text>
              <Text style={styles.foodPrice}>$3</Text>
            </View>
          </View>
        </ScrollView>
      </ScrollView>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Popular Items</Text>
        <TouchableOpacity>
          <Text style={styles.filterText}>Filter</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoryContainer}
      >
        <View style={styles.categoryItem}>
          <Image
            source={require("../assets/img1.jpg")}
            style={{ width: 300, height: 200, borderRadius: 10 }}
          />

          <Text>Pizza</Text>
        </View>
        <View style={styles.categoryItem}>
          <Image
            source={require("../assets/img1.jpg")}
            style={{ width: 300, height: 200, borderRadius: 10 }}
          />

          <Text>Burgers</Text>
        </View>
        <View style={styles.categoryItem}>
          <Image
            source={require("../assets/img1.jpg")}
            style={{ width: 300, height: 200, borderRadius: 10 }}
          />

          <Text>Steak</Text>
        </View>
        <View style={styles.categoryItem}>
          <Image
            source={require("../assets/img1.jpg")}
            style={{ width: 300, height: 200, borderRadius: 10 }}
          />

          <Text>Burgers</Text>
        </View>
        <View style={styles.categoryItem}>
          <Image
            source={require("../assets/img1.jpg")}
            style={{ width: 300, height: 200, borderRadius: 10 }}
          />

          <Text>Burgers</Text>
        </View>
        <View style={styles.categoryItem}>
          <Image
            source={require("../assets/img1.jpg")}
            style={{ width: 300, height: 200, borderRadius: 10 }}
          />

          <Text>Burgers</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
    paddingBottom: 50,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  locationIcon: { marginRight: 5 },
  searchInput: { flex: 1, height: 40, textAlign: "left" },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  sectionTitle: { fontSize: 18, fontWeight: "bold" },
  filterText: { color: "orange" },
  categoryContainer: { flexDirection: "row", marginBottom: 10 },
  categoryItem: { alignItems: "center", marginRight: 10 },
  categoryImage: { width: 80, height: 80, borderRadius: 10 },
  popularContainer: { flexDirection: "row", marginBottom: 10 },
  foodItem: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  foodImage: { width: 120, height: 100, borderRadius: 10 },
  foodDetails: { marginLeft: 10 },
  foodTitle: { fontWeight: "bold", fontSize: 16 },
  foodSubtitle: { color: "gray", fontSize: 12 },
  foodPrice: { fontSize: 14, fontWeight: "bold", color: "black" },
  viewAllText: { color: "orange" },
});

export default HomeScreen;
