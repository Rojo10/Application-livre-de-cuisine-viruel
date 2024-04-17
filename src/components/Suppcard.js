import {
	FlatList,
	StyleSheet,
	Text,
	View,
	Image,
    TouchableOpacity,
	Pressable,
} from "react-native";
import React from "react";
import { colors, recipeList } from "../Suppdetail";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Suppcard = () => {
	const navigation = useNavigation();
	return (
		<View>
			<FlatList
				data={recipeList}
				renderItem={({ item }) => (
					<Pressable
						onPress={() => navigation.navigate("RecipeDetail", { item: item })}
						style={{
							backgroundColor: colors.COLOR_LIGHT,
							shadowColor: "#000",
							shadowOffset: { width: 0, height: 4 },
							shadowOpacity: 0.1,
							shadowRadius: 7,
							borderRadius: 16,
							marginVertical: 16,
							alignItems: "center",
							paddingHorizontal: 8,
							paddingVertical: 26,
						}}
					>
						<Image
							source={item.image}
							style={{ width: 150, height: 150, resizeMode: "center" }}
						/>
						<Text>{item.name}</Text>
						<View style={{ flexDirection: "row", marginTop: 8 }}>
                        <TouchableOpacity 
					
						style={{
							backgroundColor :'#f96163', 
							padding : 10, width : 150, 
							alignSelf:'center', marginBottom: 20, 
							borderRadius: 10,
							}}>
							<Text style={{color : 'white', fontSize: 15,textAlign:'center', fontWeight:'bold'}}>{item.time}</Text>
                            </TouchableOpacity>
							<View style={{ flexDirection: "row" }}>
								<Text style={{ marginRight: 4 }}>{item.rating}</Text>
								
							</View>
						</View>
					</Pressable>
				)}
				numColumns={2}
				columnWrapperStyle={{
					justifyContent: "space-between",
				}}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	);
};

export default Suppcard;

const styles = StyleSheet.create({});
