import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const WelcomeScreen = ({ navigation }) => {
	return (
		<View style={{ flex: 1, alignItems: "center" }}>
			<Image
				source={require("../../assets/images.jpg")}
				style={{ marginTop: 60, width: 250, height: 250, borderRadius: 100 }}
			/>
			<Text
				style={{
					fontSize: 30,
					fontWeight: "bold",
					color: "red",
					marginTop: 44,
					marginBottom: 40,
				}}
			>
				Cuisinez comme un chef
			</Text>

			<TouchableOpacity
				onPress={() => navigation.navigate("RecipeList")}
				style={{
					marginTop: 45,
					backgroundColor: "#f96163",
					borderRadius: 18,
					paddingVertical: 18,
					width: "80%",
					alignItems: "center",
				}}
			>
				<Text style={{ fontSize: 25, color: "#fff", fontWeight: "800" }}>
					Commencer
				</Text>
			</TouchableOpacity>
		</View>
	);
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
