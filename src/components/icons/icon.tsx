import { IconProps } from "./icons-props";
import { MapIcon } from "./icon/map-icon";
import { WomenIcon } from "./icon/women-icon";
import { WomenGroupIcon } from "./icon/women-group-icon";
import { WhatsAppIcon } from "./icon/whatsapp-icon";
import { BedIcon } from "./icon/bed-icon";
import { SofaIcon } from "./icon/sofa-icon";
import { FaceBookIcon } from "./icon/facebook-icon";
import { InstagramIcon } from "./icon/instagram-icon";
import { LinkedInIcon } from "./icon/linkedin-icon";
import { InternetIcon } from "./icon/internet-icon";
import { PowerIcon } from "./icon/power-icon";
import { MaintanceIcon } from "./icon/maintance-icon";
import { HouseKeepingIcon } from "./icon/house-keeping-icon";
import { SearchIcon } from "./icon/search-icon";
import { FoodIcon } from "./icon/food-icon";
import { LiftIcon } from "./icon/lift-icon";
import { RightIcon } from "./icon/right-icon";
import { LeftIcon } from "./icon/left-icon";
import { MenuIcon } from "./icon/menu-icon";
import { DownArrowIcon } from "./icon/down-arrow-icon";

export const IconMapping = {
	map: MapIcon,
	women: WomenIcon,
	womenGroup: WomenGroupIcon,
	whatsapp: WhatsAppIcon,
	bed: BedIcon,
	sofa: SofaIcon,
	facebook: FaceBookIcon,
	instagram: InstagramIcon,
	linkedIn: LinkedInIcon,
	internet: InternetIcon,
	power: PowerIcon,
	maintance: MaintanceIcon,
	housekeeping: HouseKeepingIcon,
	search: SearchIcon,
	food: FoodIcon,
	lift: LiftIcon,
	left: LeftIcon,
	right: RightIcon,
	menu: MenuIcon,
	downArrow: DownArrowIcon
};
export function Icon({ name }: IconProps) {
	return IconMapping[name]();
}
