import { Equal, Expect } from '../helpers/type-utils';

type Generic<T> = unknown;

interface User {
	id: number;
	name: string;
	address: {
		city: string;
		country: string;
	};
	contact: {
		email: string;
		phone?: string;
	};
}

const user1: Generic<Omit<User, 'contact'>> = {
	id: 20,
	name: 'John Doe',
	address: {
		city: 'tashkent city',
		country: 'Wonderland',
	},
};
const user2: Generic<Omit<User, 'name'>> = { id: 20 };

type tests = [
	Expect<
		Equal<
			typeof user1,
			{ id?: number; name?: string; address?: { city?: string; country?: string } }
		>
	>,
	Expect<
		Equal<
			typeof user2,
			{
				id?: number;
				address?: { city?: string; country?: string };
				contact?: Generic<{ email: string; phone?: string }>;
			}
		>
	>
];
