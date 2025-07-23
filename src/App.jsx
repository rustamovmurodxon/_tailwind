import Community from "./components/community/Community";
import Customers from "./components/customers/Customers";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Product from "./components/product/Product";
import Stay from "./components/stay/Stay";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Customers />
      <Product />
      <Community />
      <Stay/>
      <Footer />
    </>
  );
}

export default App;
