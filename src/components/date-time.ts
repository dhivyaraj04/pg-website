export function Dat(timestamp) {
	const zone = new Date(timestamp);
	const date = zone.getDate();
	return date;
}
export function Month(timestamp) {
	const zone = new Date(timestamp);
	var months = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec"
	];
	const month = months[zone.getMonth()];
	return month;
}
export function Year(timestamp) {
	const zone = new Date(timestamp);
	const year = zone.getFullYear();
	return year;
}
export function Hour(timestamp) {
	const zone = new Date(timestamp);
	const hour = zone.getHours();
	return hour;
}
export function Minutes(timestamp) {
	const zone = new Date(timestamp);
	const minutes =
		zone.getMinutes().toString().length === 1
			? "0" + zone.getMinutes()
			: zone.getMinutes();
	return minutes;
}
export function Seconds(timestamp) {
	const time = new Date(timestamp);
	const seconds =
		time.getSeconds().toString().length === 1
			? "0" + time.getSeconds()
			: time.getSeconds();

	return seconds;
}
