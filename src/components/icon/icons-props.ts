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
	rightarrow = "rightarrow",
	knowledge = "knowledge",
	icBaselineSecurity = "icBaselineSecurity",
	nounQuality = "nounQuality",
	chat = "chat",
	paperplan = "paperplan",
	send = "send",
	upload = "upload",
	creditcard = "creditcard",
	messager = "messager",
	uparrow = "uparrow",
	adduser = "adduser",
	additional = "additional",
	earnmobile = "earnmobile",
	doubt = "doubt"
}
export type IconProps = {
	name: Icons;
} & IconDimensionsProps;

export type IconDimensionsProps = {
	color?: string;
};
