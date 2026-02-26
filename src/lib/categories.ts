interface Category {
	name: string;
	description: string;
}

const categories = {
	'pilot-report': {
		name: 'Pilot Report',
		description: "Information from the Pilot's Log team about the school."
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
