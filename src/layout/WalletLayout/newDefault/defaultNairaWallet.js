import jupit from '../../../assets/images/utility/jupit.png'
import cardType from '../../../assets/images/utility/mastercard.png'
import { reactLocalStorage } from 'reactjs-localstorage'
const Index = ()=>{
    return(
        <div>
             <div className='VerveCover'>
                            <div className='verve cardBTC'>
                                
                            </div>
                            <div className='master'>
                                <div class="master-child">
                                <div className='card_section_a'>
                                        <div>
                                            <img src={jupit}/>
                                        </div>
                                        <div>
                                            **** **** **** 0808
                                        </div>

                                    </div>
                                    <div className='card_section_b'>
                                        <div className='card_section_main'>
                                            Naira Balance

                                        </div>
                                        <div className='card_section_balance'>
                                        &#8358;{reactLocalStorage.getObject('user').naira_wallet[0].balance.$numberDecimal}
                                        </div>
                                    </div>
                                    <div className='card_section_c'>
                                        <div>
                                            VALID THRU<br/>
                                            00/00
                                        </div>
                                        <div>
                                            CARD HOLDER<br/>
                                            {reactLocalStorage.getObject('user').username.toUpperCase()}
                                        </div>
                                        <div>
                                            <img src={cardType} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='visa cardUSDT'>
                                
                            </div>
                        </div>

                        <div class="btn_open_more">
                            <div className='btn_open_moreBTN cardNairaReplace'>
                                View More
                            </div>
                        </div>
        </div>
    )
}

export default Index;