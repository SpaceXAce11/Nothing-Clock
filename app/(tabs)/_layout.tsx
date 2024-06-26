import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { Stack, Tabs } from "expo-router";
import { StyleSheet, Text } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: "#0a0a0a"
        },
        tabBarStyle: {
          backgroundColor: "#0a0a0a"
        },
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "#fff",
        tabBarIconStyle: {
          display: "none"
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 14,
          fontFamily: "Lettera Mono",
          textTransform: "uppercase"
        },
        headerTitleAlign: "center",
        headerLeft: () => <Ionicons name="add" size={20} color="#fff" style={{paddingHorizontal: 25}}/>,
        headerRight: () => <Ionicons name="settings-outline" size={20} color="#fff" style={{paddingHorizontal: 25}}/>
      }}
    >
      <Tabs.Screen 
        name="index" 
        options={{
          headerTitle: (props: any) => <Text {...props} style={styles.text}>Clock</Text>,
          tabBarLabel: "Clock"
        }}
      />
      <Tabs.Screen 
        name="alarmsScreen" 
        options={{
          headerTitle: (props: any) => <Text {...props} style={styles.text}>Alarms</Text>,
          tabBarLabel: "Alarms"
        }}
      />
      <Tabs.Screen 
        name="stopWatchScreen" 
        options={{
          headerTitle: (props: any) => <Text {...props} style={styles.text}>Stop Watch</Text>,
          tabBarLabel: "Stop Watch"
        }}
      />
      <Tabs.Screen 
        name="timerScreen" 
        options={{
          headerTitle: (props: any) => <Text {...props} style={styles.text}>Timer</Text>,
          tabBarLabel: "Timer"
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "Lettera Mono",
    color: "#fff",
    textTransform: "uppercase"
  }
});