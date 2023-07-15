import Main from "./components/main/Main.jsx";
import Drawer from "./components/drawer/Drawer.jsx";
import { ProductProvider } from "./components/main/ProductContext";

function App() {
  return (
    <>
      <ProductProvider>
        <Main />
        <Drawer />
      </ProductProvider>
    </>
  );
}

export default App;
