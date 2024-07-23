import React, { useContext } from 'react'
import './Navbar.css'
import logo from '../../assets/cryptologo.jpeg'
import {Link} from 'react-router-dom'
import arrow from '../../assets/arrow_icon.png'
import { CoinContext } from '../../context/CoinContext'
function Navbar() {
    const {setCurrency}=useContext(CoinContext)

    const currencyHandler=(event)=>{
        switch(event.target.value){
            case "usd":{
                setCurrency({name:"usd",symbol:"$"});
                break;
            }
            case "eur":
        setCurrency({ name: "eur", symbol: "€" });
        break;
            case "inr":{
                setCurrency({name:"inr",symbol:"₹"});
                break;
            }
            default:{
                setCurrency({name:"usd",symbol:"$"});
                break;
            }
        }
    }
  return (
    <div className='mainnav' >
        <nav> 
            <div className='first'>
                <Link to='/'>
                <img src={logo} alt='Logo' style={{height:60,width:90}}/>
                </Link>
                <h1>CRYPTOSPHERE</h1>
                
            </div>
            <div className='first'>
                <div className='two'>
                    <Link to='/'>
                    <h2>Home</h2>
                    </Link>
                </div>
            </div>
            <div className='first-left'>
                <select onChange={currencyHandler}>
                    <option value='usd' >USD</option>
                    <option value='inr' >INR</option>
                    <option value='eur' >EUR</option>
                </select>
                <button className='x'>Sign Up <img src={arrow} alt='arrow icon' /></button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar