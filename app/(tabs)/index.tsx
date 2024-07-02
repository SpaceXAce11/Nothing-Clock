import TimeZoneCell from "@/components/TimeZoneCell";
import MapRenderer from "@/components/map-render/MapRenderer";
import { transform } from "@babel/core";
import { Ionicons } from "@expo/vector-icons";
import { useRef } from "react";
import { FlatList, Pressable, StyleSheet, Text, View, ScrollView, Animated } from "react-native";

const data_test = [
  {
    "name": "Los Angeles",
    "timeZone": "03:45"
  },
  {
    "name": "Tokyo",
    "timeZone": "16:20"
  },
  {
    "name": "Paris",
    "timeZone": "09:15"
  },
  {
    "name": "London",
    "timeZone": "13:50"
  },
  {
    "name": "Sydney",
    "timeZone": "22:30"
  },
  {
    "name": "Berlin",
    "timeZone": "11:05"
  },
  {
    "name": "Rio de Janeiro",
    "timeZone": "08:40"
  },
  {
    "name": "Moscow",
    "timeZone": "19:55"
  }
]

const date = new Date();
const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const year = date.getFullYear().toString().slice(-2);
const currentDateString = `${day[date.getDay()]}, ${month[date.getMonth()]} ${year}`


export default function ClockScreen() {
  let mapScale = 1;
  const scrollY = useRef(new Animated.Value(0)).current;

  const scale = scrollY.interpolate({
    inputRange: [0, 300],  // The value 300 is just right
    outputRange: [1, 0], // Scale from 1 to 0
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.mainContainer}>
      <View style={styles.addMoreBtnContainer}>
        <Pressable style={styles.addMoreBtn}>
            <Text style={[styles.letteraMonoTxt, styles.addMoreBtnText]}>Add More</Text>
        </Pressable>
      </View>
      <ScrollView 
        style={styles.mainContainer} 
        contentContainerStyle={{
          marginTop: 10,
          paddingBottom: 100,
        }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          {
            useNativeDriver: false,
            listener: event => {},
          }
        )}
      >
        <View style={styles.mapContainer}>
          <MapRenderer style={{transform: [{ scale: scale }]}}/>
        </View>
        <View style={styles.belowMapContainer}>
          <Pressable style={[styles.clockDataPressable, {backgroundColor: "#1d1e20"}]}>
            <Text style={[styles.letteraMonoTxt, styles.clockDataPressableTxt, {color: "#fff"}]}>{currentDateString}</Text>
          </Pressable>
          <Pressable style={[styles.clockDataPressable, {backgroundColor: "#fff", flexDirection: "row", gap: 15}]}>
            <Text style={[styles.letteraMonoTxt, styles.clockDataPressableTxt]}>1 Alarm</Text>
            <Ionicons name="chevron-forward-outline" size={15} color="black" />
          </Pressable>
        </View>
        <View style={styles.timeZoneContainer}>
          <FlatList
            data={data_test}
            renderItem={({ item }) => <TimeZoneCell name={item.name} timeZone={item.timeZone}/>}
            numColumns={2}
            scrollEnabled={false}
          ></FlatList>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#0a0a0a",
    flex: 1,
    paddingHorizontal: 10,
  },
  mapContainer: {
    width: "100%",
    height: 300,
    flex: 0.5,
    paddingVertical: 10
  },
  belowMapContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginBottom: 10
  },
  clockDataPressable: {
    borderRadius: 50,
    flex: 1,
    aspectRatio: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  clockDataPressableTxt: {
    textTransform: "uppercase",
  },
  mpData: {
    flex: 1
  },
  tmZoneRow: {
    flex: 1,
    flexDirection: "row"
  },
  timeZoneContainer: {
    width: "100%",
    flex: 0.5,
    paddingVertical: 10
  },
  addMoreBtnContainer: {
    width: "100%",
    position: "absolute",
    bottom: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1
  },
  addMoreBtn: {
    backgroundColor: "red",
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 50,
  },
  addMoreBtnText: {
    color: "#fff",
    textTransform: "uppercase"
  },
  letteraMonoTxt: {
    fontFamily: "Lettera Mono",
  }
});