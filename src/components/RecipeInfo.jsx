let name = "Odia Simon Okhiria";
let time = "20 minuter";
let dish = "Bolognese";

function ReceptInfo () {
    return (
        <section>
            <h1>{dish}</h1>
            <p>Recept av {name}, {time}</p>
        </section>
    )
}

export default ReceptInfo