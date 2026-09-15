import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import "./App.css";

const produtos = [
  {
    id: 1,
    nome: "Processador Ryzen 5 5600",
    preco: 800,
    categoria: "Processadores",
    imagem: "https://img.terabyteshop.com.br/produto/g/processador-amd-ryzen-5-5600gt-36ghz-46ghz-turbo-6-cores-12-threads-cooler-wraith-stealth-am4-100-100001488box_186129.jpg",
    destaque: true
  },
  {
    id: 2,
    nome: "Placa de Vídeo RTX 3060",
    preco: 2500,
    categoria: "Placas de Vídeo",
    imagem: "https://img.terabyteshop.com.br/produto/g/placa-de-video-maxsun-nvidia-geforce-rtx-3060-12gb-gddr6-dlss-ray-tracing-ms-rtx3060-tr-12g-t0_243634.jpg",
    emOferta: true
  },
  {
    id: 3,
    nome: "Memória RAM Corsair Vengeance 16GB",
    preco: 500,
    categoria: "Memórias",
    imagem: "https://img.terabyteshop.com.br/produto/g/memoria-ddr4-corsair-vengeance-lpx-16gb-2x8gb-3200mhz-white-cmk16gx4m2e3200c16w_189098.png",
    destaque: true,
    emOferta: true
  },
  {
    id: 4,
    nome: "SSD Samsung 970 EVO Plus 1TB",
    preco: 700,
    categoria: "Armazenamento",
    imagem: "https://img.terabyteshop.com.br/produto/g/ssd-sandisk-optimus-gx-pro-8100-1tb-nvme-pcie-50-m2-2280-leitura-14900mbs-e-gravacao-11000mbs-sdsp82100tan-000e0_277085.jpg"
  },
  {
    id: 5,
    nome: "Fonte Corsair RM750x 750W",
    preco: 600,
    categoria: "Fontes de Alimentação",
    imagem: "https://img.terabyteshop.com.br/produto/g/fonte-corsair-rm750e-750w-cybenetics-gold-pcie-51-full-modular-preto-cp-9020295-br_243627.jpg"
  }
];

function App() {
  return (
    <>
      <Header />
      <main>
        <h1>Muski Shop</h1>
        <h2>A melhor loja online!</h2>
        {produtos.length === 0 ? (
          <h3>Não há produtos. Volte mais tarde.</h3>
        ) : (
          <div className="product-grid">
            {produtos.map((produto) => (
              <ProductCard
                key={produto.id}
                nome={produto.nome}
                preco={produto.preco}
                categoria={produto.categoria}
                imagem={produto.imagem}
                destaque={produto.destaque}
                emOferta={produto.emOferta}
              />
            ))}
          </div>
        )}

      </main>
    </>
  )
}

export default App;