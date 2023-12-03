/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/component/footer/*.{js,jsx,ts,tsx}"], // pour qu'il ne s'applique qu'au footer car sinon remplace tout le css des autres components!
  theme: {
    extend: {},
  },
  plugins: [],
}

