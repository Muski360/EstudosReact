type ProductCardProps = {
    nome: string;
    preco: number;
    categoria: string;
    imagem: string;
    destaque?: boolean;
    emOferta?: boolean;
};

function ProductCard({ nome, preco, categoria, imagem, destaque = false, emOferta = false }: ProductCardProps) {
    return (

        <article className={`product-card ${destaque ? "is-featured" : ""} ${emOferta ? "is-sale" : ""}`}>
            <div className="product-image-wrapper">
                <img src={imagem} alt={nome} />
                <div className="product-badges" aria-label="Classificações do produto">
                    {destaque && <span className="product-badge featured-badge">Destaque</span>}
                    {emOferta && <span className="product-badge sale-badge">Oferta</span>}
                </div>
            </div>
            <h3>{nome}</h3>
            <p className="product-category">{categoria}</p>
            <p className="product-price">R$ {preco.toLocaleString("pt-BR")}</p>

            <div className="product-actions">
                <button className="add-to-cart-button" type="button" aria-label={`Adicionar ${nome} ao carrinho`}>
                    🛒
                </button>
                <button className="favorite-button" type="button" aria-label={`Favoritar ${nome}`}>
                    ⭐
                </button>
            </div>
        </article>
    )
}
export default ProductCard;