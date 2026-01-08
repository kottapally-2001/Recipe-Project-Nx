export default function Burger() {
  return (
    <div className="page">
      <h1>Burger Recipe</h1>
      <p>Burgers are a classic favorite, perfect for any occasion.</p>

      <h2>Ingredients:</h2>
      <ul>
        <li>Ground beef</li>
        <li>Salt, pepper, garlic powder</li>
        <li>Buns & cheese</li>
        <li>Lettuce, tomato, onion</li>
      </ul>

      <h2>Instructions:</h2>
      <ol>
        <li>Mix and form patties.</li>
        <li>Grill 4–5 minutes each side.</li>
        <li>Melt cheese.</li>
        <li>Assemble with toppings.</li>
      </ol>

      <div className="image-row">
        <img src="/Images/203.jpg" />
        <img src="/Images/204.jpg" />
        <img src="/Images/205.jpeg" />
      </div>

      <footer>
        <p>© 2025 Burger Recipes. All rights reserved.</p>
      </footer>
    </div>
  );
}
