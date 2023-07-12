export function removeEmpty<T>(arr: Array<T | null | undefined> | undefined | null): Array<T> {
	if (!arr) return [];

	return arr.filter((m) => m !== null && m !== undefined) as Array<T>;
}
