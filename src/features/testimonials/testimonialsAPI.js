const data = {
	testimonials: [
		{
			id: 'weroiufnmxmgjpsdkjs;kljlksjcvlkxcjvxv',
			name: 'Paul Simon',
			role: 'Founder, MegaCorp',
			comment:
				'Working with Digital Spaniel has been a breath of fresh air. Their approach and attitude kept me informed and included from the start. Super pleased with the end results too!',
			imageURLs: {
				fullSize: '/testimonials-images/testimonial_face03.png',
				mobile: '/testimonials-images/testimonial_face03.png',
			},
		},
		{
			id: 'oerutoierte',
			name: 'Johnny B. Goode',
			role: 'CEO, Getting Things Done',
			comment:
				'Advice and support from DigiSpan was second to none. Always willing to help and offer advice and solutions. A very good and rapid understanding of our requirements was key to this.',

			imageURLs: {
				fullSize: '/testimonials-images/testimonial_face01.png',
				mobile: '/testimonials-images/testimonial_face01.png',
			},
		},
		{
			id: 'oisdufoisudfosdufs',
			name: 'Mary Jane',
			role: 'CEO, Design Matters',
			comment:
				'We needed a creative and unique brand which could compete against established products. Digital Spaniel delivered in spades and we’ve seen a huge response to the product launch.',
			imageURLs: {
				fullSize: '/testimonials-images/testimonial_face02.png',
				mobile: '/testimonials-images/testimonial_face02.png',
			},
		},
	],
};

export function fetchTestimonials() {
	return new Promise((resolve) => setTimeout(() => resolve({ data }), 500));
}
