import React from "react";
import Header from '../../component/header';
import Footer from '../../component/footer';
import HeroFAQ from '../../layout/FaqLayout/Herofaq'
import ContentFAQ from '../../layout/FaqLayout/faqContent'

const Index=()=>{
    return(
        <div>
            <Header/>
                <HeroFAQ/>
                <ContentFAQ/>
            <Footer/>
            
        </div>
    )
}

export default Index;