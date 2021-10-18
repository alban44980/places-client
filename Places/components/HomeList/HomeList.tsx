import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import colors from "../../assets/styles/colors";
import HomeListItem from "./HomeListItem";

function HomeList({ data, route, setPlace, setCity, setFriend }: any) {
  return (
    <View style={styles.listContainer}>
      <ScrollView
        style={styles.homeListContainer}
        contentContainerStyle={styles.contentContainer}
        horizontal={true}
      >
        <View style={styles.homeListContent}>
          {data
            ? data.map((el: any) => {
                return (
                  <HomeListItem
                    key={el.id}
                    data={el}
                    route={route}
                    setPlace={setPlace}
                    setCity={setCity}
                    setFriend={setFriend}
                  />
                );
              })
            : null}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    height: "30%",
    backgroundColor: colors.backgroundDark,
  },

  homeListContainer: {
    backgroundColor: colors.backgroundMedium,
    borderRadius: 15,
    margin: 10,
    borderWidth: 1,
    paddingHorizontal: 10,
  },

  contentContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.backgroundBright,
  },

  homeListContent: {
    flexDirection: "row",
  },
});

export default HomeList;
