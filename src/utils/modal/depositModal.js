import {useState,useEffect} from 'react'
import React from 'react'
import '../../assets/css/Modal/modal.css'
import {IoClose} from 'react-icons/io5'
import QRcode from 'qrcode'
import { reactLocalStorage } from 'reactjs-localstorage'
import {CopyToClipboard} from 'react-copy-to-clipboard';
const Index = ({closeModalDeposit})=>{
    
    const [src,setSrc]= useState('')
    const [address, setAddress] = useState();
    const [copied,setCopied] = useState(false)
    const randomNumberInRange =(min, max)=> {
        // 👇️ get number between min (inclusive) and max (inclusive)
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

    
    useEffect(()=>{
        
    },[])
    return (
        <div className="modalBackground">
            <div className='modalContainer'>
                <div className='modalHeader'>
                    <div className='modalText'>
                        <div className='receiveText'>
                            Deposit Funds To Virtual Account
                        </div>
                        
                        <IoClose size={25} onClick={()=>{closeModalDeposit(false)}} />
                    </div>
                    
                    <div><hr/></div>
                </div>
                
                <div className='modalbody'>
                    <div>
                        <p className="vacct">
                            Dear {reactLocalStorage.getObject('user').username}<br/>
                            Kindly transfer your Naira fund to your virtual account details as display below.
                        </p>
                        <p className="vacctII">
                            Virtual Account Number: {reactLocalStorage.getObject('user').virtual_account}<br/>
                            Bank: Providus Bank<br/>
                            Narration: {randomNumberInRange(1,1000000)}/{reactLocalStorage.getObject('user').username} <br/>
                            Account name: {reactLocalStorage.getObject('user').firstname} {reactLocalStorage.getObject('user').lastname}
                        </p>
                        <p className="vacct">
                            <i>Pls note, fund transferred to your virtual account hits your Naira Wallet in a shortwhile</i>
                        </p>
                        

                    </div>
                    
                </div>
                <div className='modalFooter'>
                    
                    
                </div>
                {/* <div className='modalClose' >
                    <input type="submit" value="Close" onClick={()=>{closeModalDeposit(false)}}/>
                </div> */}
            </div>
        </div>
    )
}

export default Index;