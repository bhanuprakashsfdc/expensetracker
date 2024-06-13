import React, { useState } from 'react'
import './Navigation.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faSignOutAlt } from '@fortawesome/fontawesome-free-solid'
import {menuItems} from '../../utils/menuItems'

const Navigation = () => {
  const [active, setActive] = useState('');
  const handleClick = (name) => () => {
    setActive(name);
    console.log('Clicked !!!')
  };
  return (
    <div className='navbar'>
        <div className="user-con">
           <div className="navind">
               <FontAwesomeIcon icon={faUser} />
               <h2> Hello User </h2>
           </div>
           <ul className="menu-items">
           {menuItems.map((item) => (
            <li
              key={item.id}
              onClick={() => setActive(item.id)}
            >
            <div className={`navicontext ${active === item.id ? 'active' : ''}`} onClick={handleClick('companies')}>
              <div className='fonticon'>
                <FontAwesomeIcon icon={item.icon} />
              </div>
              <div className='tit'>
                <span>{item.title}</span>
                {active === item.id && (
                  <div />
                )}
              </div>
            </div>
          </li>
        ))}
           </ul>
           <div className="bottom-nav">
              <li>
                <FontAwesomeIcon icon={faSignOutAlt} /> Log Out
              </li>
           </div>
        </div>
    </div>
  )
}

export default Navigation