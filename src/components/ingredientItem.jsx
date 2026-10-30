function IngredientItem ({array}) {
    return(
        array.map((item, index) => {
            return <li key={index}>{item}</li>
        })
    )
}

export default IngredientItem