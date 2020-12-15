import React from "react";
import {
	CenterTag,
	BoxContainer,
	Subtext,
	FooterTag
} from "../../components/small-component";

export function Footer() {
	return (
		<BoxContainer background="#0E254D" borderRadius="0px">
			<CenterTag>
				<Subtext fontSize="16px" color="#fff" fontWeight="500">
					All rights reserved 2020
				</Subtext>
			</CenterTag>
		</BoxContainer>
	);
}
