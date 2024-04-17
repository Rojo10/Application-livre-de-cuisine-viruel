import { LearnMoreLinks } from "react-native/Libraries/NewAppScreen";
import { DrawerLayoutAndroidComponent } from "react-native";

export const colors = {
	COLOR_PRIMARY: "#f96163",
	COLOR_LIGHT: "#fff",
	COLOR_DARK: "#000",
	COLOR_DARK_ALT: "#262626",
};

//  Data for categories filter

export const categories = [
	{
		id: "01",
		category: "déjeuner",
	},
	{
		id: "02",
		category: "Desserts",
	},
	{
		id: "03",
		category: "Entrée",
	},
	
];

export const recipeList = [
	{
		id: "01",
		name: "Pizza de maisson facile",
		image: require("../assets/fito.jpg"),
		time: "supprimer",
		color: "#006A4E",
		ingredients: [
			"500g de farine.",
			"250 ml d'eau tiède",
			"1 sachet de levure de boulanger déshydratée.",
			"1 cuillère à soupe d'huile d'olive.",
			"1 cuillère àafé de sel et 250 mlde saue tomate",
			"2 boule de mozzarella",
			"100g de jambone et 1 poivret vert.",
			"olives noires.",
			"100g viandes haché.",
		],
		steps: [
			"Faire cuire les nouilles de riz selon les instructions sur l'emballage.",
			"Découper le poivron rougeen ine lamelles.,",
			"Emincer l'oignon et l'ail.",
			"Faire chauffer l'huille et lail.",
			"Faire chauffer l'huile d'olive dans un wok ou une grande poele.",
		],
	},
	{
		id: "02",
		name: "Mi sao simple",
		image: require("../assets/roa.jpg"),
		time: "supprimer",
		color: "#f39c12",
		ingredients: [
			"250g de nouilles de riz.",
			"200g de viandes hachée.",
			"100g de crevettes decortiquées.",
			"1poivron rouge et 1 oignon puis 1gousses d'ail.",
			"2 cuillères à soupe d'huile d'oliveet 2 cuillères à soupe de gigimbrefrais  rapé.",
			"sel et poivre.",
		],
		steps: [
			"Faire cuire les nouilles de riz selon les instructions sur l'emballage.",
			"Découper le poivron rougeen ine lamelles.,",
			"Emincer l'oignon et l'ail.",
			"Faire chauffer l'huille et lail.",
			"Faire chauffer l'huile d'olive dans un wok ou une grande poele.",
			"faire revenir l'oignon et l'ail peandant 2 minutes.",
			"Ajouter aviande hachée etfaire cuire jusqu'à ce qu'elle soit dorée.",
			"Ajouter les crevettes et le poivron rouge et faire cuire pendant 2 mnutes supplementaires.",
			"Ajouter les  nuoilles de riz cuite,le gigembbre frais et la sauce soja.",
			"Mélanger le tout et faire sauter sauter pendant 2 minutes.", 
			"Saler et poivrer au gout et servir immédiatement.",
		],
	},
	{
		id: "03",
		name: "Omelette aux fines herbes",
		image: require("../assets/fito.jpg"),
		time: "supprimer",
		color: "#FF0000",
		// description, etapes pour la preparation
		ingredients: [
			"2 oeufs et 1 cuillère à soupe de lait.",
			"1cuillère à soupe de ciboulette ciselée.",
			"1 cuillère à soupedepersil ciselé.",
			"1 noix de beurre et sel puis poivre",
		],
		steps: [
			"Fouetter les oeufs avec le lait, la ciboulette, le persil, le sel et le poivre.",
			"Faire fondre le beurre dans une poele et laisse cuire 1 à 2 minutes. sans remuer",
			"Lorsque le dessus e l'omelette est encore humide mais que le dessousest cuuit, plier l'omelette en deux et servir immédiatement.",
		],
	},
	{
		id: "04",
		name: "Gateau au moelleux au yaourt",
		image: require("../assets/telo.jpg"),
		time: "supprimer",
		color: "#d35400",
		ingredients: [
			"1 pot de yaourt nature.",
			"2 pots de farine et 1pot de sucre.",
			"1/2 pot d'huile et 3 oeufs.",
			"1 sachet de levure chimique.",
		],
		steps: [
			"Préchauffer le four à 180c.",
			"Dans un saladier, melanger le yaourt et le sauce.",
			"Ajouter les oeufs et fouetter jusqu'à obenir un mélange homogène.",
			"Incorporer l'huile petit à petit en continuant de fouetter.",
			"Tamiser la farine et a levure chimique et les ajouter au mélange.",
			"Mélanger jusqu'à obtenir une pate lisse et homogène.",
			"Verser lapate dans un  moule à gateau beure et fariné.",
			"Enfourer pour 30 à 40 minutes jusqu'à ce que le gateau soit bien doré.",,
			"Demouler le gateau et lisse refroidir sur une grille avant  de déguster.",
		],
	},
	{
		id: "05",
		name: "Citron suh",
		image: require("../assets/efatra.jpg"),
		time: "supprimer",
		color: "#8d4004",
		ingredients: [
			"1 citron bio.",
			"200g de sucre.",
			"100g de farine.",
			"100ml d'eau.",
		],
		steps: [
			"Laver le citron bion et le couper en quartiers.",
			"Retirer les pépins.",
			"Couper les quartiers de citron en fines lamelles.",
			"Dans une casserole, méanger le  sucre et l'eau.",
			"Portet à ébullition à feu moyen.",
			"Ajouter les lamelles de citron et laiser mijoter à feu doux pendant 30 minutes.",
			"Laisser sécher à l'air libre pendant 24 heures.",
			"Conserver les citrons conflits au sucre dans un bcal hermétique à  temperature ambiate.",
		],
	},
];
