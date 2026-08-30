/* Must load synchronously, immediately after the Tailwind CDN script (see index.html head). */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        cream: '#F4EAD8', paper: '#EFE3C8', kraft: '#E6CFA6', kraftdark: '#C9A876',
        wood: '#7C4A26', wooddark: '#5D3418', wooddeep: '#402412',
        cocoa: '#3E2A1B', rust: '#B4552D', rustdark: '#93401F',
        mustard: '#D9A13B', olive: '#6B6B4A', sage: '#8A8B6C',
      },
      fontFamily: {
        display: ['Fraunces', 'serif'], hand: ['Caveat', 'cursive'],
        type: ['"Special Elite"', 'monospace'], sans: ['Karla', 'sans-serif'],
      },
    },
  },
};