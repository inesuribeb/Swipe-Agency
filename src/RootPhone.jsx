import { Outlet, Link } from 'react-router-dom';
import SwipePhone from './components/swipe/SwipePhone';
import './RootPhone.css'

function RootPhone() {
 

  return (
    <>
      
      <header className="header-mobile">
        <nav className="nav-mobile">
          <ul className="nav-list-mobile">
            <li className="nav-item-mobile"><Link to="/sanders">Sanders</Link></li>
            <li className="nav-item-mobile"><Link to="/gloverall">Gloverall</Link></li>
            <li className="nav-item-mobile"><Link to="/moonstar_jp">Moonstar</Link></li>
            <li className="nav-item-mobile"><Link to="/ilBussetto">Il Bussetto</Link></li>
            <li className="nav-item-mobile"><Link to="/moonstar_810s">Moonstar 810s</Link></li>
            <li className="nav-item-mobile"><Link to="/shoesLikePottery">Shoes Like Pottery</Link></li>
          </ul>
        </nav>
      </header>

      <main className="main-mobile">
        
        <Outlet />
        
      </main>
      {/* <footer>© 2024 Swipe Agency</footer> */}
    </>
  );
}

export default RootPhone;