import {
	Image,
	SafeAreaView,
	StyleSheet,
	Text,
	View,
	Pressable,
	TouchableOpacity,
	Dimensions,
	ScrollView,
} from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const RecipeDetailsScreen = ({ navigation, route }) => {
	const { item } = route.params;

	console.log(item);
	return (
		<View style={{ backgroundColor: item.color, flex: 1 }}>
			<SafeAreaView style={{ flexDirection: "row", marginHorizontal: 16 }}>
				<Pressable style={{ flex: 1 }} onPress={() => navigation.goBack()}>
					<FontAwesome name={"arrow-circle-left"} size={28} color="white" />
				</Pressable>

				<FontAwesome name={"heart-o"} size={28} color="white" />
			</SafeAreaView>
			<View
				style={{
					backgroundColor: "#fff",
					flex: 1,
					marginTop: 140,
					borderTopLeftRadius: 56,
					borderTopRightRadius: 56,
					alignItems: "center",
					paddingHorizontal: 16,
				}}
			>
				<View
					style={{
						// backgroundColor: "red",
						height: 300,
						width: 300,
						position: "absolute",
						top: -150,
						// marginBottom: 130,
					}}
				>
					<Image
						source={item.image}
						style={{
							width: "100%",
							height: "100%",
							resizeMode: "contain",
						}}
					/>
				</View>

				{/* Recipe Name */}
				<Text style={{ marginTop: 150, fontSize: 28, fontWeight: "bold" }}>
					{item.name}
				</Text>

				<View style={{ flex: 1 }}>
					<ScrollView showsVerticalScrollIndicator={false}>
						
						{/* Recipe Ingredients  */}

						<View style={{ alignSelf: "flex-start", marginVertical: 22 }}>
							<Text
								style={{ fontSize: 22, fontWeight: "600", marginBottom: 6 }}
							>
								Ingredients:
							</Text>

							{item.ingredients.map((ingredient, index) => {
								return (
									<View
										style={{
											flexDirection: "row",
											alignItems: "center",
											marginVertical: 4,
										}}
										key={index}
									>
										<View
											style={{
												backgroundColor: "red",
												height: 10,
												width: 10,
												borderRadius: 5,
											}}
										></View>
										<Text style={{ fontSize: 18, marginLeft: 6 }}>
											{ingredient}
										</Text>
									</View>
								);
							})}
						</View>

						{/* Recipe steps */}

						<View style={{ alignSelf: "flex-start", marginVertical: 22 }}>
							<Text
								style={{ fontSize: 22, fontWeight: "600", marginBottom: 6 }}
							>
								Etapes:
							</Text>

							{item.steps.map((step, index) => {
								return (
									<Text
										key={index}
										style={{ fontSize: 18, marginLeft: 6, marginVertical: 6 }}
									>{`${index + 1} ) ${step}`}</Text>
								);
							})}
						</View>
						<TouchableOpacity 
						onPress={() => navigation.navigate("Login")}
						style={{
							backgroundColor :'orange', 
							padding : 15, width : 150, 
							alignSelf:'center', marginBottom: 20, 
							borderRadius: 10,
							}}>
							<Text style={{color : 'white', fontSize: 24,textAlign:'center', fontWeight:'bold'}}>Modifier</Text>
						</TouchableOpacity>
					</ScrollView>
				</View>
			</View>
		</View>
	);
};

export default RecipeDetailsScreen;

const styles = StyleSheet.create({});
