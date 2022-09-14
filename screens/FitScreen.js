import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    Pressable,
} from "react-native";
import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";

const FitScreen = () => {
    const route = useRoute();
    const [index, setIndex] = useState(0);
    const excersises = route.params.excersises;
    const current = excersises[index];
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
                {" "}
                {current.name}{" "}
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
            <Pressable
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
        </SafeAreaView>
    );
};

export default FitScreen;

const styles = StyleSheet.create({});
