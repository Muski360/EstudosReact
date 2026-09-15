import logo from '../assets/logo.png';

function Header() {
    return (
        <>
            <header>
                <nav>
                    <img src={logo} alt="Logo Muski"/>
                    <p>MuskiShop</p>
                    <button type="button">Começar a comprar!</button>
                </nav>
            </header>
        </>
    )
}

export default Header;