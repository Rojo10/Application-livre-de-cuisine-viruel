import { StyleSheet, View, Text,TextInput,TouchableOpacity, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import SearchFilter from "../components/SearchFilter";
import CategoriesFilter from "../components/CategoriesFilter";
import Suppcard from "../components/Suppcard";

const RecipeListScreen = ({ navigation }) => {
	return (
		<SafeAreaView style={{ flex: 1, marginHorizontal: 16 }}>
			
            <TextInput style={{height: 50, backgroundColor: '#333', paddingLeft: 8, fontSize: 16, color: "#fff",marginTop: 50 }}>
	
			</TextInput>
            <TouchableOpacity 
			
						onPress={() => navigation.navigate("")}
						style={{
							backgroundColor :'#f96163', 
							padding : 10, width : 190, 
							alignSelf:'center', marginBottom: 5, 
							borderRadius: 10,
                            marginTop: 10,
							}}>
							<Text style={{ color : 'white', fontSize: 24,textAlign:'center', fontWeight:'bold'}}>Ajouter</Text>
						</TouchableOpacity>
			{/* Recipe List Filter */}

			<View style={{ marginTop: 22, flex: 1 }}>
				<Text style={{ fontSize: 22, fontWeight: "bold" }}>Recettes</Text>
				{/* Recipes list */}

				<Suppcard />
			</View>
		</SafeAreaView>
	);
};

export default RecipeListScreen;

const styles = StyleSheet.create({});

