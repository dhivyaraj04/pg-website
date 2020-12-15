export enum Icons {
	search = "search",
	hamburger = "hamburger",
	lawyer = "lawyer",
	fitness = "fitness",
	gst = "gst",
	career = "career",
	yoga = "yoga",
	doctor = "doctor",
	diet = "diet",
	accountant = "accountant",
	mentalhealth = "mentalhealth",
	weightloss = "weightloss",
	dermatologist = "dermatologist",
	ayruvedu = "ayruvedu",
	righttick = "righttick",
	eye = "eye",
	star = "star",
	backarrow = "backarrow",
	rightarrow = "rightarrow"
}
export type IconProps = {
	name: Icons;
} & IconDimensionsProps;

export type IconDimensionsProps = {
	color?: string;
};
