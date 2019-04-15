import React from 'react';
import Botones from '../Botones';
import  './index.css';
class Header extends React.Component {
    render(){
        return (
            <div className="header">
                <p>Hostal Paca</p>
                <Botones/>
            </div>
        )
    }
}
export default Header;
