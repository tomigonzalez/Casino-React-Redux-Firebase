import Routes from "./routes/Routes";
import "./App.css";

import Layout from "./components/layout/Layout";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Layout>
        <Navbar />
        <Routes />
        <Footer />
      </Layout>
    </>
  );
}

export default App;
