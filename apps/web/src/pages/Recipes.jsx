export default function Recipes() {
  return (
    <div className="page">
      <h1>Odin Recipes</h1>
      <p>Welcome to the Odin Recipes page! Here you can find a variety of delicious recipes to try at home.</p>
      <p>From appetizers to desserts, we have something for every taste and occasion.</p>
      <p>Explore our collection and discover new favorites!</p>

      <div className="image-row">
        <img src="/Images/100_f.jpg" />
        <img src="/Images/101_f.jpg" />
        <img src="/Images/102_f.jpg" />
      </div>

      <h2>Featured Recipes</h2>
      <ul>
        <li>Biryani</li>
        <li>Pizza</li>
        <li>Burger</li>
      </ul>

      <footer>
        <p>© 2025 Odin Recipes. All rights reserved.</p>
      </footer>
    </div>
  );
}
