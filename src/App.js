import './App.css';
import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'

export default function App() {
  return (
    <>
      <Navbar />
      <ItemDetailContainer />
      <ItemListContainer />
    </>
  );
}
