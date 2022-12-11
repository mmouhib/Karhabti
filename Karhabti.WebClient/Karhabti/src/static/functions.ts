/**
 * Returns a list of items starting from min and ending with max.
 *
 * @param min - The minimum dropdown list item
 * @param max - The maximum dropdown list item
 * @returns a list of integers containing items starting
 * from min and ending with max
 */
export function dropdownContentLister(min: number, max: number): string[] {
	let list: string[] = [];
	for (let index = min; index < max; index++) {
		list.push(index + '');
	}
	return list;
}

/*
 * Formats the date string to the wanted one. in order to submit it, the date should be like the
 * following format: "2019-01-06T17:16:40" so this functions takes the day, month and year and formats it
 */
export function dateFormatter(
	year: string,
	month: string,
	day: string
): string {
	let localDay: string;
	let localMonth: string;

	day.length == 1 ? (localDay = '0' + day) : (localDay = day);
	month.length == 1 ? (localMonth = '0' + month) : (localMonth = month);
	return `${year}-${localMonth}-${localDay}T17:16:40`;
}
