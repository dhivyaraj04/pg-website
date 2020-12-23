import { IconProps } from "./icons-props";
import { SearchIcon } from "./icons/search-icon";
import { HamburgerIcon } from "./icons/hamburger-icon";
import { YogaIcon } from "./icons/yoga-icon";
import { WeightLossIcon } from "./icons/weightloss-icon";
import { MentalHealthIcon } from "./icons/mentalhealth-icon";
import { AccountantIcon } from "./icons/accountant-icon";
import { AryuveduIcon } from "./icons/ayruvedu-icon";
import { CareerIcon } from "./icons/career-icon";
import { DermatologistIcon } from "./icons/dermatologist-icon";
import { DietIcon } from "./icons/diet-icon";
import { DoctorIcon } from "./icons/doctor-icon";
import { FitnessIcon } from "./icons/fitness-icon";
import { GstIcon } from "./icons/gst-icon";
import { LawyerIcon } from "./icons/lawyer-icon";
import { RightTickIcon } from "./icons/right-tick-icon";
import { EyeIcon } from "./icons/eye-icon";
import { StarIcon } from "./icons/star-icon";
import { BackArrowIcon } from "./icons/backArrow-icon";
import { RightArrowIcon } from "./icons/rightArrow-icon";
import { NounQualityIcon } from "./icons/noun_quality-icon";
import { IcBaselineSecurityIcon } from "./icons/IcBaselineSecurity-icon";
import { KnowledgeIcon } from "./icons/knowledge-icon";

export const IconMapping = {
	search: SearchIcon,
	hamburger: HamburgerIcon,
	yoga: YogaIcon,
	weightloss: WeightLossIcon,
	mentalhealth: MentalHealthIcon,
	accountant: AccountantIcon,
	ayruvedu: AryuveduIcon,
	career: CareerIcon,
	dermatologist: DermatologistIcon,
	diet: DietIcon,
	doctor: DoctorIcon,
	fitness: FitnessIcon,
	gst: GstIcon,
	lawyer: LawyerIcon,
	righttick: RightTickIcon,
	eye: EyeIcon,
	star: StarIcon,
	backarrow: BackArrowIcon,
	rightarrow: RightArrowIcon,
	knowledge: KnowledgeIcon,
	icBaselineSecurity: IcBaselineSecurityIcon,
	nounQuality: NounQualityIcon
};

export function Icon({ name, color }: IconProps) {
	return IconMapping[name]({ color });
}
