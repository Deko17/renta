import { ListingGalleryImage } from "components/ListingImageGallery/utils/types";

export const PHOTOS: string[] = [
	require('images/1photo.png'),
	require('images/2photo.png'),
	require('images/3photo.png'),
	require('images/4photo.png'),
	require('images/5photo.png'),
	require('images/6photo.png'),
];

export const Amenities_demos = [
	{ name: "la-key", icon: "la-key" },
	{ name: "la-luggage-cart", icon: "la-luggage-cart" },
	{ name: "la-shower", icon: "la-shower" },
	{ name: "la-smoking", icon: "la-smoking" },
	{ name: "la-snowflake", icon: "la-snowflake" },
	{ name: "la-spa", icon: "la-spa" },
	{ name: "la-suitcase", icon: "la-suitcase" },
	{ name: "la-suitcase-rolling", icon: "la-suitcase-rolling" },
	{ name: "la-swimmer", icon: "la-swimmer" },
	{ name: "la-swimming-pool", icon: "la-swimming-pool" },
	{ name: "la-tv", icon: "la-tv" },
	{ name: "la-umbrella-beach", icon: "la-umbrella-beach" },
	{ name: "la-utensils", icon: "la-utensils" },
	{ name: "la-wheelchair", icon: "la-wheelchair" },
	{ name: "la-wifi", icon: "la-wifi" },
	{ name: "la-baby-carriage", icon: "la-baby-carriage" },
	{ name: "la-bath", icon: "la-bath" },
	{ name: "la-bed", icon: "la-bed" },
	{ name: "la-briefcase", icon: "la-briefcase" },
	{ name: "la-car", icon: "la-car" },
	{ name: "la-cocktail", icon: "la-cocktail" },
	{ name: "la-coffee", icon: "la-coffee" },
	{ name: "la-concierge-bell", icon: "la-concierge-bell" },
	{ name: "la-dice", icon: "la-dice" },
	{ name: "la-dumbbell", icon: "la-dumbbell" },
	{ name: "la-hot-tub", icon: "la-hot-tub" },
	{ name: "la-infinity", icon: "la-infinity" },
];

export const imageGallery: ListingGalleryImage[] = [...PHOTOS].map(
	(item, index): ListingGalleryImage => {
		return {
			id: index,
			url: item,
		};
	}
);
