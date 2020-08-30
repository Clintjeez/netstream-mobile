//import { StatusBar } from "expo-status-bar";
import React, { useRef, useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  StatusBar,
  ImageBackground,
  TextInput,
  FlatList,
} from "react-native";
import carousel from "react-native-anchor-carousel";
import { FontAwesome5, Feather, MaterialIcons } from "@expo/vector-icons";
import Carousel from "react-native-anchor-carousel";

const Home = () => {
  const [background, setBackground] = useState({
    uri:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVS2TOajMnYf1nTpaBETe_esfqXn0uiJ5WUFPjAhZfa3yXulST",
    name: "Billion",
    stat: "2019 - Actions/Sci-fi - 3h 2m",
    desc:
      "Chuck Rhoades, a sincere but ruthless US attorney, engages in an egoistic battle with hedge fund kingpin Bobby 'Axe' Axelrod as they try to outdo each other in the competitive financial market.",
  });

  const [gallery, setGallery] = useState([
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVS2TOajMnYf1nTpaBETe_esfqXn0uiJ5WUFPjAhZfa3yXulST",
      title: "Billion",
      released: "2016 ‧ Drama ‧ 5 seasons",
      key: "1",
      desc:
        "Chuck Rhoades, a sincere but ruthless US attorney, engages in an egoistic battle with hedge fund kingpin Bobby 'Axe' Axelrod as they try to outdo each other in the competitive financial market.",
    },
    {
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ-VY5cjeq-HcRzfG3ofhcEhXFE06-Ev2xohkP9pY3MKNrkgRxp",
      title: "Fast & Furious Presents: Hobbs & Shaw",
      released: "2019 ‧ Action/Comedy ‧ 2h 16m",
      key: "2",
      desc:
        "Brixton Lorr is a cybernetically enhanced soldier who possesses superhuman strength, a brilliant mind and a lethal pathogen that could wipe out half of the world's population. It's now up to hulking lawman Luke Hobbs and lawless operative Deckard Shaw to put aside their past differences and work together to prevent the seemingly indestructible Lorr from destroying humanity.",
    },
    {
      image:
        "https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_3adaf4f8.jpeg?region=0,0,540,810",
      title: "Avengers: End Game",
      released: "2019 - Actions/Sci-fi - 3h 2m",
      key: "3",
      desc:
        "After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance",
    },
    {
      image:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTqQriJ6O1rAS-Z5d8R_SQiPwqry3q6g7n2dybttCB2bJnqozNR",
      title: "Money Heist",
      released: "2017 ‧ Crime ‧ 4 seasons",
      key: "4",
      desc:
        "A criminal mastermind who goes by The Professor has a plan to pull off the biggest heist in recorded history -- to print billions of euros in the Royal Mint of Spain. To help him carry out the ambitious plan, he recruits eight people with certain abilities and who have nothing to lose.",
    },
    {
      image:
        "https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_3adaf4f8.jpeg?region=0,0,540,810",
      title: "Avengers: End Game",
      released: "2019 - Actions/Sci-fi - 3h 2m",
      key: "5",
      desc:
        "After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance",
    },
  ]);

  const [list, setList] = useState([
    {
      image:
        "https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_3adaf4f8.jpeg?region=0,0,540,810",
      key: "1",
    },
    {
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS6MveoDoJOg9-wMvtHE4ak_-HDZeYS1egb9PwRcf8lhrtcppMc",
      key: "2",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJKLiEyyz1Q9RC8EBYl3ijr3nuGeyO2ETmwy6Kdq0AQtD0elWD",
      key: "3",
    },
    {
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS9KHHcZ77V9cPmxm5b0yAjefFIqgQU4uB13lLIGXU8Jvbr8xIs",
      key: "4",
    },
    {
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRELit2kPy5sGWZycPI0NdcHalgftUy7Fc-sqLdV9FDCsiqHQbc",
      key: "5",
    },
  ]);

  const carouselRef = useRef(null);
  const { width, height } = Dimensions.get("window");
  const renderItem = ({ item, index }) => {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            carouselRef.current.scrollToIndex(index);
            setBackground({
              uri: item.image,
              name: item.title,
              stat: item.released,
              desc: item.desc,
            });
          }}
        >
          <Image source={{ uri: item.image }} style={styles.carouselImage} />
          <Text style={styles.carouselText}>{item.title}</Text>
          <MaterialIcons
            name="library-add"
            size={30}
            color="white"
            style={styles.carouselIcon}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <ScrollView style={{ backgroundColor: "#000" }}>
      <View style={styles.carouselContentContainer}>
        <View style={{ ...StyleSheet.absoluteFill, backgroundColor: "#000" }}>
          <ImageBackground
            source={{ uri: background.uri }}
            style={styles.ImageBg}
            blurRadius={10}
          >
            <View style={styles.searchBoxContainer}>
              <TextInput
                placeholder="Search Movies"
                placeholderTextColor="#666"
                style={styles.SearchBox}
              />
              <Feather
                name="search"
                size={22}
                color="#666"
                style={styles.searchBoxIcon}
              />
            </View>
            <Text
              style={{
                color: "white",
                fontSize: 24,
                fontWeight: "bold",
                marginLeft: 10,
                marginVertical: 10,
              }}
            >
              Top Picks this Week
            </Text>
            <View style={styles.carouselContainerView}>
              <Carousel
                style={styles.Carousel}
                data={gallery}
                renderItem={renderItem}
                itemWidth={200}
                containerWidth={width - 20}
                separatorWidth={0}
                ref={carouselRef}
                inActiveOpacity={0.4}
              />
            </View>
            <View style={styles.movieInfoContainer}>
              <View style={{ justifyContent: "center" }}>
                <Text style={styles.movieName}>{background.name}</Text>
                <Text style={styles.movieStat}>{background.stat}</Text>
              </View>
              <TouchableOpacity style={styles.playIconContainer}>
                <FontAwesome5
                  name="play"
                  size={22}
                  color="#02ad94"
                  style={{ marginLeft: 4 }}
                />
              </TouchableOpacity>
            </View>
            <View style={{ paddingHorizontal: 14, marginTop: 14 }}>
              <Text style={{ color: "white", opacity: 0.8, lineHeight: 20 }}>
                {background.desc}
              </Text>
            </View>
          </ImageBackground>
        </View>
      </View>

      <View style={{ marginHorizontal: 14 }}>
        <Text
          style={{
            color: "white",
            fontSize: 24,
            fontWeight: "bold",
            marginBottom: 24,
          }}
        >
          Continue Matching
        </Text>
        <ImageBackground
          source={{
            uri:
              "https://m.media-amazon.com/images/M/MV5BNmVmMmM5ZmItZDg0OC00NTFiLWIxNzctZjNmYTY5OTU3ZWU3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY1200_CR93,0,630,1200_AL_.jpg",
          }}
          style={{ height: 250, width: "100%", backgroundColor: "#000" }}
        >
          <Text style={{ color: "white", padding: 14 }}>Suits</Text>
          <TouchableOpacity
            style={{
              ...styles.playIconContainer,
              position: "absolute",
              top: "40%",
              right: "40%",
            }}
          >
            <FontAwesome5
              name="play"
              size={22}
              color="#02ad94"
              style={{ marginLeft: 4 }}
            />
          </TouchableOpacity>
        </ImageBackground>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 24,
            marginTop: 36,
            height: 100,
          }}
        >
          <Text style={{ color: "white", fontSize: 24, fontWeight: "bold" }}>
            My List
          </Text>
          <Text style={{ color: "white", fontSize: 14, fontWeight: "normal" }}>
            View All
          </Text>
        </View>

        <FlatList
          style={{ marginBottom: 30 }}
          data={list}
          horizontal={true}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity style={{ marginRight: 20 }}>
                <Image
                  source={{ uri: item.image }}
                  style={{ height: 300, width: 200 }}
                />
                <View
                  style={{
                    position: "absolute",
                    height: 5,
                    width: "100%",
                    backgroundColor: "#02ad94",
                    opacity: 0.8,
                  }}
                ></View>
                <FontAwesome5
                  name="play"
                  size={38}
                  color="#fff"
                  style={{
                    position: "absolute",
                    top: "45%",
                    left: "45%",
                    opacity: 0.9,
                  }}
                />
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  carouselContentContainer: {
    flex: 1,
    backgroundColor: "#000",
    height: 720,
    paddingHorizontal: 14,
  },
  ImageBg: {
    flex: 1,
    height: null,
    width: null,
    opacity: 1,
    justifyContent: "flex-start",
  },
  searchBoxContainer: {
    backgroundColor: "#fff",
    elevation: 10,
    borderRadius: 4,
    marginVertical: 10,
    width: "95%",
    flexDirection: "row",
    alignSelf: "center",
  },
  SearchBox: {
    padding: 12,
    paddingLeft: 20,
    fontSize: 16,
  },
  searchBoxIcon: {
    position: "absolute",
    right: 20,
    top: 14,
  },
  carouselContainerView: {
    width: "100%",
    height: 350,
    justifyContent: "center",
    alignItems: "center",
  },
  Carousel: {
    flex: 1,
    overflow: "visible",
  },
  carouselImage: {
    width: 200,
    height: 320,
    borderRadius: 10,
    alignSelf: "center",
    backgroundColor: "rgba(0,0,0,0.9)",
  },
  carouselText: {
    padding: 14,
    color: "white",
    position: "absolute",
    bottom: 10,
    left: 2,
    fontWeight: "bold",
  },
  carouselIcon: {
    position: "absolute",
    top: 15,
    right: 15,
  },
  movieInfoContainer: {
    flexDirection: "row",
    marginTop: 16,
    justifyContent: "space-between",
    width: Dimensions.get("window").width - 14,
  },
  movieName: {
    paddingLeft: 14,
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 6,
  },
  movieStat: {
    paddingLeft: 14,
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
    opacity: 0.8,
  },
  playIconContainer: {
    backgroundColor: "#212121",
    padding: 18,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
    borderWidth: 4,
    borderColor: "rgba(2,173,148,0.2)",
    marginBottom: 14,
  },
});

export default Home;
