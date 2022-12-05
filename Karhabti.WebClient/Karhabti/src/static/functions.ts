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
