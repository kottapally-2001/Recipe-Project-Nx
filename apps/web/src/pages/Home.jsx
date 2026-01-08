export default function Home() {
  return (
    <div className="page">
      <h1>Welcome to Odin Recipes</h1>
      <p>This is a simple recipe website to help you find delicious recipes.</p>
      <p>Explore our collection of recipes and start cooking today!</p>

      <div className="image-row">
        <img src="/Images/340_f.jpg" />
        <img src="/Images/310_f.jpg" />
        <img src="/Images/320_f.jpg" />
      </div>

      <h2>Featured Recipes</h2>
      <p>Discover a variety of recipes that are easy to follow and perfect for any occasion.</p>
      <p>From quick weeknight meals to special occasion dishes, we have something for everyone.</p>
      <p>Check out our featured recipes for some inspiration!</p>

      <h2>Get Started</h2>
      <p>Ready to start cooking? Browse our recipes, find your favorites, and get cooking!</p>
      <p>Don't forget to share your culinary creations with us on social media!</p>

      <div className="image-row">
        <img src="/Images/100_f.jpg" />
        <img src="/Images/101_f.jpg" />
        <img src="/Images/102_f.jpg" />
      </div>

      <footer>
        <p>© 2025 Odin Recipes. All rights reserved.</p>
      </footer>
    </div>
  );
}
