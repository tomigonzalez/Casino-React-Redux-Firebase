import Routes from "./routes/Routes";
import "./App.css";

import Layout from "./components/layout/Layout";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Layout>
        <Navbar />
        <Routes />
      </Layout>
    </>
  );
}

export default App;
