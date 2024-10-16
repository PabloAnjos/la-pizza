import "../Cards-Pizza/Cards.scss"


export function Cards({ src, alt, nomeDaPizza, sobrePizza, preco }) {
    return (
        <>
            <div className="container-card">
                    <div className="card">
                            <img src={src} alt={alt} />

                            <h1>{nomeDaPizza}</h1>
                            <p>{sobrePizza}</p>
                            <span>{preco}</span>

                            <button>COMPRAR AGORA</button>
                    </div>
            </div>
        </>
    )
}