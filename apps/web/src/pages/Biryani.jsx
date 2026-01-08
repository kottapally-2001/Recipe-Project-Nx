export default function Biryani() {
  return (
    <div className="page">
      <h2>Biryani Recipe</h2>
      <p>Biryani is a flavorful Indian rice dish made with spices and meat.</p>

      <h3>Ingredients:</h3>
      <ul>
        <li>Basmati rice</li>
        <li>Chicken/mutton/beef</li>
        <li>Onions & tomatoes</li>
        <li>Spices & yogurt</li>
      </ul>

      <h3>Instructions:</h3>
      <ol>
        <li>Cook meat with spices.</li>
        <li>Layer with rice.</li>
        <li>Steam until done.</li>
      </ol>

      <div className="image-row">
        <img src="/Images/200.avif" />
        <img src="/Images/201.jpg" />
        <img src="/Images/202.jpeg" />
      </div>

      <footer>
        <p>© 2025 Odin Recipes. All rights reserved.</p>
      </footer>
    </div>
  );
}
