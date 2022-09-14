import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView } from "react-native";
import React from "react";
import FitnessTile from "../components/FitnessTile";

const HomeScreen = () => {
    return (
        <ScrollView style={{marginTop: 50}}>
            <View
                style={{
                    backgroundColor: "#A6E1FA",
                    padding: 10,
                    height: 200,
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
                            0
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
                            0
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
                            0
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

                <View style={{ justifyContent: "center", alignItems: "center"}}>
                    <Image 
                    style={{
                        width: "90%",
                        height: 120,
                        marginTop: 20,
                        borderRadius: 7,
                    }}
                    source={{
                        uri:"https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=400"
                    }}
                    />
                </View>
                <FitnessTile />
            </View>
        </ScrollView>
    );
};
export default HomeScreen;

const styles = StyleSheet.create({});

