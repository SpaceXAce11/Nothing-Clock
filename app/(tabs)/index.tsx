import TimeZoneCell from "@/components/TimeZoneCell";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function ClockScreen() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.addMoreBtnContainer}>
        <Pressable style={styles.addMoreBtn}>
          <Text style={[styles.nTypeText, styles.addMoreBtnText]}>Add More</Text>
        </Pressable>
      </View>
      <View style={styles.mapContainer}>
        <View style={styles.mpData}>

        </View>
      </View>
      <View style={styles.timeZoneContainer}>
        <View style={styles.tmZoneRow}>
          <TimeZoneCell timeZone="random" name="Italy"/>
          <TimeZoneCell timeZone="random" name="Moscow"/>
        </View>
        <View style={styles.tmZoneRow}>
          <TimeZoneCell timeZone="random" name="Italy"/>
          <TimeZoneCell timeZone="random" name="Moscow"/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#0a0a0a",
    flex: 1
  },
  mapContainer: {
    width: "100%",
    flex: 0.5,
    paddingHorizontal: 20,
    paddingVertical: 10
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
    paddingHorizontal: 20,
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
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderRadius: 50,
  },
  addMoreBtnText: {
    color: "#fff"
  },
  nTypeText: {
    fontFamily: "N Type",
  }
});