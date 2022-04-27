// import './App.css';
import data from './components/data';
import Content from './components/content'
import Products from './components/products'
import Footer from './components/footer'
import Cart from './components/Cart'
import { useState } from 'react';

function App() {
  let spec = data;
  const [items, setItems] = useState([])
  const [total, setTotal] = useState(0)

  let addcart = (item) => {
    setItems([...items, item]);
    setTotal(total + item.price);
  }

  let handleremove = (item) => {
    let indexs = items.some(obj => obj.id === item.id)
    let newcart = items.splice(indexs, 1);
    setItems([...newcart])
    setTotal(total - item.price)
  }
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container px-4 px-lg-5">
          <a className="navbar-brand" href="/">Start Bootstrap</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li className="nav-item"><a class="nav-link active" aria-current="page" href="/">Home</a></li>
              <li className="nav-item"><a class="nav-link" href="/">About</a></li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="navbarDropdown" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="/">All Products</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="/">Popular Items</a></li>
                  <li><a className="dropdown-item" href="/">New Arrivals</a></li>
                </ul>
              </li>
            </ul>
            <div className='col-sm-12 col-md-4 col-lg-2'>
              <ol class="list-group list-group-numbered container"><br></br><br></br>
                {/* <div className='text-center fw-bolder fs-1 '>Cart</div> */}
                <form class="d-flex">
                  <button class="btn btn-outline-dark" type="submit">
                    <i class="bi-cart-fill me-1"></i>
                    Cart Total
                    <span class="badge bg-dark text-white ms-1 rounded-pill">{total}</span>
                  </button>
                </form>
                {items.map((itemdata) => {
                  return <Cart data={itemdata} handle={handleremove} />
                })}
              </ol>
              {/* <div className='fw-bolder fs-5'>Total:${total}</div> */}
            </div>
          </div>
        </div>
      </nav>
      <Content />
      <div className='row'>
        <div className='col-sm-12 col-md-8 col-lg-10'>
          <section class=" py-5">
            <div class="container px-4 px-lg-5 mt-5">
              <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center flex-wrap-wrap">
                {spec.map((data) => {
                  return <Products data={data} buttonclick={addcart} cart={items} />
                })}
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;