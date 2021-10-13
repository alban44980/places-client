import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import HomeListItem from './HomeListItem';

function HomeList({ data }: any) {
  return (
    <ScrollView
      style={styles.homeListContainer}
      contentContainerStyle={styles.contentContainer}
      horizontal={true}
    >
      <View style={styles.homeListContent}>
        {data
          ? data.map((el: any) => {
              return <HomeListItem key={el.name} data={el} />;
            })
          : null}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  homeListContainer: {
    backgroundColor: 'grey',
    borderRadius: 25,
    margin: 10,
    height: '25%',
  },
  homeListContent: {
    flexDirection: 'row',
    borderColor: 'black',
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeList;
