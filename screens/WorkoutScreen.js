import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    Pressable,
    ScrollView,
} from "react-native";
import React, { useContext } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { FitnessItems } from "../Context";
import { AntDesign } from '@expo/vector-icons'

const WorkoutScreen = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const {
        completed,
        setCompleted,
    } = useContext(FitnessItems);
    return (
        <>
            <ScrollView
                showVerticalScrollIndicator={false}
                style={{ backgroundColor: "#E8E8E8", marginTop: 50 }}
            >
                <Image
                    style={{ width: "100%", height: 170 }}
                    source={{ uri: route.params.image }}
                />
                <Ionicons
                    onPress={() => navigation.goBack()}
                    style={{ position: "absolute", top: 50, left: 20 }}
                    name="arrow-back-outline"
                    color="white"
                    size={30}
                />

                {route.params.exercises.map((item, index) => (
                    <Pressable
                        style={{
                            margin: 10,
                            flexDirection: "row",
                            alignItems: "center",
                        }}
                        key={index}
                    >
                        <Image
                            style={{ width: 90, height: 90 }}
                            source={{ uri: item.image }}
                        />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ fontSize: 16, fontWeight: "bold", width: 200 }}>
                                {item.name}
                            </Text>
                            <Text style={{ marginTop: 4, fontSize: 20 }}>
                                {item.sets} reps
                            </Text>
                        </View>
                        {completed.includes(item.name) ? (
                            <AntDesign name="checkcircle" size={24} color="#0E6BA8" />
                        ) : (
                            null
                        )}
                    </Pressable>
                ))}
            </ScrollView>

            <Pressable
                onPress={() => {
                    navigation.navigate("Fit", {
                        exercises: route.params.exercises,
                    })
                    setCompleted([])
                }}
                style={{
                    backgroundColor: "#0E6BA8",
                    padding: 10,
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginVertical: 30,
                    borderRadius: 10,
                    width: 120,
                }}
            >
                <Text
                    style={{
                        textAlign: "center",
                        color: "white",
                        fontSize: 15,
                        fontWeight: "700",
                    }}
                >
                    START
                </Text>
            </Pressable>
        </>
    );
};

export default WorkoutScreen;

const styles = StyleSheet.create({});
