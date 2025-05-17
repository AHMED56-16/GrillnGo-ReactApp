import { useState, useEffect } from 'react';
import './App.css';
import RecipeList from './components/RecipeList.jsx';
import Footer from './components/Footer.jsx';

function FoodMenu() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRecipes = () => {
    setLoading(true);
    fetch('https://forkify-api.herokuapp.com/api/search?q=bbq')
      .then((res) => res.json())
      .then((data) => {
        console.log('API response:', data); 
        setRecipes(data.recipes || []); 
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching recipes:', error);
        setRecipes([]); 
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <div>
      <header className="hero-section">
        <div className="overlay">
          <h1 className="food-menu-title">GrillnGo</h1>
          <p className="tagline">Delicious grilled recipes from around the world!</p>
        </div>
      </header>

      <main className="content-section">
        {loading ? (
          <p className="loading-text">Loading recipes...</p>
        ) : (
          <RecipeList recipes={recipes} />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default FoodMenu;
