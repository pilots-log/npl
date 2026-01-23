interface Category {
	name: string;
	description: string;
}

const categories = {
	'pilot-report': {
		name: 'Pilot Report',
		description: "Regularly scheduled updates from the Pilot's Log team"
	},
	advice: {
		name: 'Advice',
		description: 'Advice from Ladyglittersparkles'
	},
	'book-of-the-month': {
		name: 'Book of The Month',
		description: ''
	},
	'pop-culture': {
		name: 'Pop Culture',
		description: ''
	}
} as const satisfies Record<string, Category>;

export default new Map<string, Category>(Object.entries(categories));
