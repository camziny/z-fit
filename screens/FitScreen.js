import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    Pressable,
} from "react-native";
import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

const FitScreen = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const [index, setIndex] = useState(0);
    const exercise = route.params.exercises;
    const current = exercise[index];
    return (
        <SafeAreaView>
            <Image
                style={{ width: "100%", height: 370 }}
                source={{ uri: current.image }}
            />
            <Text
                style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: 30,
                    fontSize: 30,
                    fontWeight: "bold",
                }}
            >
                {current.name}
            </Text>
            <Text
                style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: 30,
                    fontSize: 40,
                    fontWeight: "bold",
                }}
            >
                {current.sets}
            </Text>
            {index + 1 >= exercise.length ? (
                <Pressable
                    onPress={() => {
                        navigation.navigate("Home");
                    }}
                    style={{
                        backgroundColor: "#0E6BA8",
                        marginLeft: "auto",
                        marginRight: "auto",
                        marginTop: 20,
                        borderRadius: 10,
                        padding: 10,
                    }}
                >
                    <Text
                        style={{
                            textAlign: "center",
                            fontWeight: "bold",
                            fontSize: 20,
                            width: 120,
                            color: "white",
                        }}
                    >
                        Done
                    </Text>
                </Pressable>
            ) : (
                <Pressable
                    onPress={() => {
                        navigation.navigate("Rest");
                        setTimeout(() => {
                            setIndex(index + 1);
                        }, 2000);
                    }}
                    style={{
                        backgroundColor: "#0E6BA8",
                        marginLeft: "auto",
                        marginRight: "auto",
                        marginTop: 20,
                        borderRadius: 10,
                        padding: 10,
                    }}
                >
                    <Text
                        style={{
                            textAlign: "center",
                            fontWeight: "bold",
                            fontSize: 20,
                            width: 120,
                            color: "white",
                        }}
                    >
                        Complete
                    </Text>
                </Pressable>
            )}

            <Pressable
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: 60,
                }}
            >
                <Pressable
                    disabled={index === 0}
                    onPress={() => {
                        navigation.navigate("Rest")
                        setTimeout(() => {
                            setIndex(index - 1)
                        }, 2000)
                    }}
                    style={{
                        backgroundColor: "#21325E",
                        padding: 15,
                        borderRadius: 30,
                        marginHorizontal: 40,
                        width: 100,
                    }}
                >
                    <Text
                        style={{
                            color: "white",
                            fontWeight: "bold",
                            textAlign: "center",
                        }}
                    >
                        Back
                    </Text>
                </Pressable>
                {index + 1 >= exercise.length ? (
                    <Pressable
                    onPress={() => {
                        navigation.navigate("Home");
                    }}
                        style={{
                            backgroundColor: "#21325E",
                            padding: 15,
                            borderRadius: 30,
                            marginHorizontal: 40,
                            width: 100,
                        }}
                    >
                        <Text
                            style={{
                                color: "white",
                                fontWeight: "bold",
                                textAlign: "center",
                            }}
                        >
                            Next
                        </Text>
                    </Pressable>
                ) : (
                    <Pressable
                    onPress={() => {
                        navigation.navigate("Rest");
                        setTimeout(() => {
                            setIndex(index + 1);
                        }, 2000);
                    }}
                        style={{
                            backgroundColor: "#21325E",
                            padding: 15,
                            borderRadius: 30,
                            marginHorizontal: 40,
                            width: 100,
                        }}
                    >
                        <Text
                            style={{
                                color: "white",
                                fontWeight: "bold",
                                textAlign: "center",
                            }}
                        >
                            Next
                        </Text>
                    </Pressable>
                )}
            </Pressable>
        </SafeAreaView>
    );
};

export default FitScreen;

const styles = StyleSheet.create({});
