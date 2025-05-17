function RecipeList({ recipes }) {
  if (!Array.isArray(recipes) || recipes.length === 0) {
    return <p className="loading-text">No recipes to display.</p>;
  }

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.recipe_id} className="recipe-card">
          <img src={recipe.image_url} alt={recipe.title} />
          <h2>{recipe.title}</h2>
          <p>{recipe.publisher}</p>
          <a href={recipe.source_url} target="_blank" rel="noopener noreferrer">
            View Recipe
          </a>
        </div>
      ))}
    </div>
  );
}

export default RecipeList;
