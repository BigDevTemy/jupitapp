import '../../../assets/css/Roadmap/roadmap.css'
const Index = ()=>{
    return(
        <div className="roadmap" id="roadmap">
            <div className='newTitleOffer'>Roadmap</div>
            <div className='titleTextOffer'>
                Below we’ve provided a bit of information regarding our brand and operations. If you have any other questions, please get in touch.
            </div>

            <div className='roadmapDiv'>
                <section className='timeliner'>
                    <div className='timeline-line'>
                        <span className='timeline-innerline'>

                        </span>
                    </div>
                    <ul>
                        <li>
                            <span className='timeline-point'></span>
                            <span className='date'>Q2 2021</span>
                            <p>Development of user interface, Deployment of Testnet environment.<br/><br/></p>
                        </li>
                        <li>
                            <span className='timeline-point'></span>
                            <span className='date'>Q3 2021</span>
                            <p>Project Viability Research<br/><br/><br/><br/><br/></p>
                        </li>
                        <li>
                            <span className='timeline-point'></span>
                            <span className='date'>Q4 2021</span>
                            <p>Project start-up, Product conception, System architecture development</p>
                        </li>
                        <li>
                            <span className='timeline-point'></span>
                            <span className='date'>Q1 2022</span>
                            <p>Development of trading platform and the system’s core elements<br/><br/><br/></p>
                        </li>
                        
                        <li>
                            <span className='timeline-point'></span>
                            <span className='date'>Q3 2022</span>
                            <p>Deployment of PWA Trading Website<br/><br/><br/><br/></p>
                        </li>
                        <li>
                            <span className='timeline-point'></span>
                            <span className='date'>Q1 2023</span>
                            <p>Development of IOS and Android Mobile Applications<br/><br/><br/></p>
                        </li>
                    </ul>
                </section>
                <div className='buttonRoadMap'>
                        Roll With Us
                </div>
            </div>


        </div>
    )
}

export default Index;