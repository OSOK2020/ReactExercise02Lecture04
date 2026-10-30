import IngredientItem from "./ingredientItem";

const ingredientsList = ["Kaffe", "Yoghurt", "ost", "protein"];

function Ingredients () {
    return(
        <section className="ingredients">
            <h2>Ingredienser</h2>
            <ul>
                <IngredientItem
                    array={ingredientsList}
                />
            </ul>
        </section>
    )
}

export default Ingredients