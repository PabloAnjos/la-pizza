import './App.css'
import { Cards } from './components/Cards-Pizza/Cards'
import { Header } from './components/Header/Header'
import imgLaCuma from './images/la-cuma.png'
import imgLaMenta from './images/la-menta.png'
import imgLaQueijo from './images/la-queijo.png'
import imgLaToca from './images/la-toca.png'
import imgPaisagem from './images/image.png'


function App() {
  return (
    <>
          <Header />

          <section className='mais-vendidas'>
                  <div className='container-cards'>
                        <Cards 
                        src={imgLaCuma}
                        alt={"Imagem Pizza La Cuma"}
                        nomeDaPizza={"La Cuma"}
                        sobrePizza={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                        preco={"R$ 29,90"}
                        />
                        <Cards 
                        src={imgLaMenta}
                        alt={"Imagem Pizza La Menta"}
                        nomeDaPizza={"La Menta"}
                        sobrePizza={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                        preco={"R$ 25,50"}
                        />
                        <Cards 
                        src={imgLaQueijo}
                        alt={"Imagem Pizza La Formaggio"}
                        nomeDaPizza={"La Formaggio"}
                        sobrePizza={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                        preco={"R$ 26,00"}
                        />
                        <Cards 
                        src={imgLaToca}
                        alt={"Imagem Pizza La Toca"}
                        nomeDaPizza={"La Toca"}
                        sobrePizza={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                        preco={"R$ 23,80"}
                        />
                  </div>
          </section>

          <section className='sobre'>
                  <div className='container-sobre'>
                        <img src={imgPaisagem} alt="Imagem loja La Pizza" />

                        <div className='content-sobre'> 
                              <h1>Sobre La P<span className='yellow'>i</span><span className='red'>z</span><span className='green'>z</span>a</h1>
                              <p>Bem-vindo ao "La Pizza", o seu refúgio acolhedor para uma experiência de pizzaria autêntica. Em nosso pequeno oásis italiano, 
                                cada pedaço de pizza é uma obra-prima artesanal. Sinta-se em casa enquanto o aroma sedutor de massa fresca assa no forno,
                                criando as pizzas mais deliciosas da cidade.
                              </p>
                              <button>LER MAIS SOBRE</button>
                        </div>
                  </div>
          </section>
    </>
  )
}

export default App
