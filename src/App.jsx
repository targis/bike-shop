import { ContextProvider as Provider } from 'containers/context'

import Header from "./containers/header"
import Product from "./containers/product"
import Posts from "./containers/posts"
import Order from "./containers/order"
import Footer from "./containers/footer"

function App() {
  return <Provider>
    <Header />
    <Product />
    <Posts />
    <Order />
    <Footer />
  </Provider>
}

export default App
