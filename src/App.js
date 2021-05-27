import Header from './components/Header';
import Menu from './components/Menu';
import Content from './components/Content';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';

import './styles.css';
import 'react-toastify/dist/ReactToastify.css';

const App = () => (
  <div className="shop">
    <Header />
    <div className="body">
      <Menu />
      <Content />
    </div>
    <Footer />

    <ToastContainer />
  </div>
);

export default App;
