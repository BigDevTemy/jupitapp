import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../../assets/css/Auth/auth.css'
import logoArea from '../../assets/images/IMG.png'
import Jupit from '../../assets/images/logo.png'
import sendLogin from '../../context/actions/sendLogin'
import Loader from '../../utils/loader/loader'
import {GlobalContext} from '../../context/Provider'
import AlertDismissible from '../../utils/alert/alertDisplay'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {reactLocalStorage} from 'reactjs-localstorage';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Section1 from './section1'
import Section2 from './section2'
const Index=()=>{
    const {authDispatch,authState:{auth:{loading,data,error,errorAlert}}} = useContext(GlobalContext)
    const [section,setsection] = useState('Section1');
    const [emailSection,setEmailSection] = useState();
    const [passwordSection,setPasswordSection] = useState();
    const [check,setcheck] =useState(true)
    const [supportsPWA, setSupportsPWA] = useState(false);
  const [promptInstall, setPromptInstall] = useState(null);
  
  
  const onClick = evt => {
    evt.preventDefault();
    if (!promptInstall) {
      return;
    }
    promptInstall.prompt();
  };

    const _renderSection = ()=>{
        switch(section){
            case 'Section1':
                return <Section1 Next={setsection} 
                     
                    setUserEmail={setEmailSection}

                    setUserPassword={setPasswordSection}
                 
                 />
                break;
            case 'Section2':
                return <Section2 Next={setsection} userEmail={emailSection} userPassword={passwordSection}/>
                break;
            default:
                return null
        }
    }

    // useEffect(() => {
    //     console.log('ok')
    //     const handler = e => {
    //       e.preventDefault();
    //       console.log("we are being triggered :D");
    //       setSupportsPWA(true);
    //       setPromptInstall(e);
    //     };
    //     window.addEventListener("beforeinstallprompt", handler);
    
    //     return () => window.removeEventListener("transitionend", handler);
    //   }, []);


    return(
        <div className="auth">
            
            
            { loading && <Loader/>}
            <div className="logoArea">
                <img src={logoArea}/>
                
            </div>
            <div className="formarea">
                <div className="mobile-logo"><Link to='/'><img src={Jupit} /></Link></div>
                <div>{errorAlert && <AlertDismissible itemData={error} itemState={errorAlert}/>}</div>
                <div className="desktop-logo"><Link to='/'><img src={Jupit} /></Link></div>
               
                <div className="welcome-back">Welcome Back!</div>
                <div className="logincred">Kindly provide your login credentials.</div>
                <div>
                    {_renderSection()}
                </div>
               

            </div>
        </div>
    )
}

export default Index;