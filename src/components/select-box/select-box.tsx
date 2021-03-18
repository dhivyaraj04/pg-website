import React from "react";
import { SelectTag } from "../small-component";
type SelectProp = {
	placeholder?: string;
	defaultValue?: string;
	options?: string[];
	onChangeEvent?: (e: React.ChangeEvent) => void;
};
export function SelectBox({
	placeholder,
	defaultValue,
	options,
	onChangeEvent
}: SelectProp): JSX.Element {
	console.log(defaultValue);

	return (
		<SelectTag
			placeholder={placeholder}
			defaultValue={defaultValue}
			onChange={onChangeEvent}
		>
			{options.map((option: string) => (
				<option value={option}>{option}</option>
			))}
		</SelectTag>
	);
}
