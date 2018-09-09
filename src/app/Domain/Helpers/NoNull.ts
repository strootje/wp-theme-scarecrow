export default function<T>( items: (T | null)[] ): T[] {
	const result: T[] = [];

	items.forEach(item => {
		if (item != null) {
			result.push(item);
		}
	});

	return result;
}
