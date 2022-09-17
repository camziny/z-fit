import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, StatusBar } from "react-native";
import React, { useContext } from "react";
import FitnessTile from "../components/FitnessTile";
import { FitnessItems } from "../Context";

const HomeScreen = () => {
    const {
        workout,
        minutes,
        calories,
    } = useContext(FitnessItems);
    return (
        <View style={{padding: 10, flex: 1}}>
        <ScrollView style={{flex: 5, marginTop: 50, backgroundColor: "#E8E8E8"}}>
            <View
                style={{
                    backgroundColor: "#E8E8E8",
                    padding: 10,
                    height: 1100,
                    width: "100%",
                }}
            >
                <Text
                    style={{
                        color: "#21325E",
                        fontWeight: "bold",
                        fontSize: 18,
                    }}
                >
                    Home
                </Text>

                <View style={{ justifyContent: "center", alignItems: "center"}}>
                    <Image 
                    style={{
                        width: "90%",
                        height: 120,
                        marginTop: 20,
                        borderRadius: 7,
                    }}
                    source={{
                        uri: "https://i.postimg.cc/3JQjnL97/zfit.png",
                    }}
                    />
                </View>

                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginTop: 20,
                    }}
                >
                    <View>
                        <Text
                            style={{
                                textAlign: "center",
                                color: "#21325E",
                                fontSize: 18,
                            }}
                        >
                            {workout}
                        </Text>
                        <Text
                            style={{
                                color: "#3E497A",
                                fontSize: 16,
                                marginTop: 6,
                            }}
                        >
                            Workouts
                        </Text>
                    </View>

                    <View>
                        <Text
                            style={{
                                textAlign: "center",
                                color: "#21325E",
                                fontSize: 18,
                            }}
                        >
                            {calories}
                        </Text>
                        <Text
                            style={{
                                color: "#3E497A",
                                fontSize: 16,
                                marginTop: 6,
                            }}
                        >
                            Calories
                        </Text>
                    </View>

                    <View>
                        <Text
                            style={{
                                textAlign: "center",
                                color: "#21325E",
                                fontSize: 18,
                            }}
                        >
                            {minutes}
                        </Text>
                        <Text
                            style={{
                                color: "#3E497A",
                                fontSize: 16,
                                marginTop: 6,
                            }}
                        >
                            Minutes
                        </Text>
                    </View>
                </View>
                <FitnessTile/>
            </View>
        </ScrollView>
    </View>
    );
};
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 10,
      paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
        flex: 1, marginTop: 50, backgroundColor: "#E8E8E8"
    },
    text: {
      fontSize: 42,
    },
  });

