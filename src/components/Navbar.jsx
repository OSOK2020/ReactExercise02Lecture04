const LinkTexts = ["Hem", "Recept", "Kontakt"];

function Navbar() {
    return(
        <nav>
           {LinkTexts.map((link, index) => {
            return <a href="#" key={index}>| {link} |</a>
           })}
        </nav>
    )

}

export default Navbar