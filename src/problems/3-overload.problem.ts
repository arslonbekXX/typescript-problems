{
	type ReduceCallback<T, U> = (accumulator: U, currentValue: T, index: number, array: T[]) => U;

	//  your code here
	function myReducer<T, U>(array: T[], callback: ReduceCallback<T, U>, initialValue?: U): U {
		let accumulator: U;

		if (initialValue === undefined) {
			if (array.length === 0) {
				throw new TypeError('Reduce of empty array with no initial value');
			}
			accumulator = array[0] as unknown as U;
			for (let i = 1; i < array.length; i++) {
				accumulator = callback(accumulator, array[i], i, array);
			}
		} else {
			accumulator = initialValue;
			for (let i = 0; i < array.length; i++) {
				accumulator = callback(accumulator, array[i], i, array);
			}
		}

		return accumulator;
	}

	const numbers: number[] = [1, 2, 3, 4, 5];

	const sum = myReducer(numbers, (acc, value) => acc + value);
	console.log(sum); // 15

	const strings: string[] = ['Hello', ' ', 'world', '!'];
	const concatenated = myReducer(strings, (acc, value) => acc + value, '');
	console.log(concatenated);
}
