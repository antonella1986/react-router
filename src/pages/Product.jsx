import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export default function Product() {
  //product è la variabile che conterrà info del prodotto
  //setProduct cambia il valore di product
  //all'inizio il valore di product è null (nessun prodotto caricato inizialmente)
  const [product, setProduct] = useState(null)
  //con l'hook useParams ottengo l'id del prodotto dalla barra degli indirizzi
  const { id } = useParams()
  console.log(id);

  //questa funzione mi permette di navigare tra le pagine del sito senza ricaricarlo
  //lo userò per creare un pulsante per andare alla pagina precedente
  const navigate = useNavigate();


  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      //una volta ottenuti i dati, viene eseguita questa funzione
      .then(data => {
        //aggiorno la variabile product con i dati ottenuti del prodotto 
        setProduct(data)
      })
      .catch(err => {
        console.log('ERROR', err);
      })

  }, [])

  return (
    <>

      <main>

        {
          !product ? ('Loading ...')
            : (
              <>
               {/* creo una sezione con lo sfondo dell'immagine del prodotto */}
                <div style={{ minHeight: '50vh', backgroundImage: `url(${product.image})` }}></div>

                <section id="product_details" className="mt-5">
                  <div className="container">
                    <div className="row g-4">
                      <div className="col-12 col-md-5">
                        <img className="img-fluid" src={product.image} alt={product.title} />
                      </div>
                      <div className="col-12 col-md-7">
                        {/* creo un pulsante per andare alla pagina precedente */}
                        <button className="back" onClick={() => navigate(-1)}>
                          <i className="bi bi-arrow-left"></i>
                        </button>
                        <h1>Product: {product.title}</h1>
                        <p>{product.description}</p>
                        <div className="price fw-bold fs-2">${product.price}</div>
                      </div>
                    </div>
                  </div>
                </section>
              </>
            )
        }

      </main>

    </>
  )
}