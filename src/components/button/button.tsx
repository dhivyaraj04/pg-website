import React, { useMemo, ReactElement } from "react";
import { theme as t } from "../../theme";

export type ButtonProps = {
	children?: ReactElement | string;
	theme?: "primary" | "secondary" | "default";
	onClickEvent?: (event: React.MouseEvent) => void;
	buttonType?: "button" | "submit";
};

export function Button({
	children,
	theme = "primary",
	onClickEvent,
	buttonType = "button"
}: ButtonProps) {
	const containerStyle = useMemo(() => {
		return {
			backgroundColor: t[theme].color,
			border: "none",
			borderRadius: "4px",
			fontWeight: 500,
			cursor: "pointer"
		};
	}, [theme]);

	return (
		<button style={containerStyle} type={buttonType} onClick={onClickEvent}>
			{children}
		</button>
	);
}
export function ChatButton({
	children,
	onClickEvent,
	buttonType = "button"
}: ButtonProps) {
	const containerStyle = useMemo(() => {
		return {
			backgroundColor: "#000",
			border: "10px solid #009846",
			borderRadius: "50%",
			fontWeight: 500,
			cursor: "pointer",
			filter: "drop-shadow(0px 2px 10px #009846)",
			padding: "10px"
		};
	}, []);
	return (
		<button style={containerStyle} type={buttonType} onClick={onClickEvent}>
			{children}
		</button>
	);
}
