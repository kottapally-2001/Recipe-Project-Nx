export default function Pizza() {
  return (
    <div className="page">
      <h1>Pizza Recipe</h1>
      <p>
        Pizza is a popular Italian dish consisting of a round, flat base of leavened dough topped with tomatoes, cheese, and other ingredients.
      </p>

      <h2>Ingredients:</h2>
      <ul>
        <li>2 cups all-purpose flour</li>
        <li>1 tsp salt</li>
        <li>1 tsp sugar</li>
        <li>1 packet yeast</li>
        <li>3/4 cup warm water</li>
        <li>1 tbsp olive oil</li>
        <li>1 cup pizza sauce</li>
        <li>2 cups shredded mozzarella</li>
      </ul>

      <h2>Instructions:</h2>
      <ol>
        <li>Prepare dough and let rise.</li>
        <li>Preheat oven to 475°F (245°C).</li>
        <li>Roll dough into pizza shape.</li>
        <li>Spread sauce, add cheese & toppings.</li>
        <li>Bake for 12–15 minutes.</li>
      </ol>

      <div className="image-row">
        <img src="/Images/206.jpg" />
        <img src="/Images/207.jpg" />
        <img src="/Images/208.jpg" />
      </div>
      <footer>
        <p>© 2025 Odin Recipes. All rights reserved.</p>
      </footer>
    </div>
  );
}
