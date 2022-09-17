import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";

const RestScreen = () => {
    const navigation = useNavigation();
    let timer = 0;
    const [timeRemaining, settimeRemaining] = useState(10);
    const startTime = () => {
        setTimeout(() => {
            if (timeRemaining <= 0) {
                navigation.goBack();
                clearTimeout(timer);
            }
            settimeRemaining(timeRemaining - 1);
        }, 1000);
    };

    useEffect(() => {
        startTime();
        return () => clearTimeout(timer);
    });

    return (
        <SafeAreaView>
            <Pressable
                onPress={() => {
                    navigation.navigate("Home");
                }}
                style={{
                    backgroundColor: "#21325E",
                    padding: 15,
                    borderRadius: 30,
                    width: 100,
                    marginLeft: "auto",
                    marginRight: "auto",
                }}
            >
                <Text
                    style={{
                        textAlign: "center",
                        fontWeight: "bold",
                        fontSize: 20,
                        width: 70,
                        color: "white",
                    }}
                >
                    Home
                </Text>
            </Pressable>
            <Image
                source={{
                    uri: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_500:300,c_fit/dpr_2/image/carefit/bundle/CF01032_magazine_2.png",
                }}
                style={{ width: "100%", height: 420, marginTop: 20 }}
            />

            <Text
                style={{
                    fontSize: 30,
                    fontWeight: "900",
                    marginTop: 50,
                    textAlign: "center",
                }}
            >
                Rest
            </Text>
            <Text
                style={{
                    fontSize: 80,
                    fontWeight: "900",
                    marginTop: 50,
                    textAlign: "center",
                }}
            >
                {timeRemaining}
            </Text>
            <Pressable
                onPress={() => {
                    setTimeout(() => {
                            
                            settimeRemaining(0)
                        })
                }}
                style={{
                    backgroundColor: "#21325E",
                    padding: 15,
                    borderRadius: 30,
                    width: 100,
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: 20,
                }}
            >
                <Text
                    style={{
                        textAlign: "center",
                        fontWeight: "bold",
                        fontSize: 20,
                        width: 70,
                        color: "white",
                    }}
                >
                    Skip
                </Text>
            </Pressable>
        </SafeAreaView>
    );
};

export default RestScreen;

const styles = StyleSheet.create({});
