import './Footer.css'


export const Footer=()=>{

    return <>
        <div className="footer-container">
            <div className='footer-parent'>
                <div className='about-zostel'>
                    <div>
                        <img className='logo-img' src="https://www.linkpicture.com/q/Screenshot-20_1.png" alt="" />
                    </div>
                    <div className='text-div'>
                        <p className='about-text'>Explore with Zostel - oldest & the biggest backpacker hostel brand of India. Travel India & Nepal on budget while having fun at our quirky, activity-led hostels.</p>
                    </div>
                </div>
                <div className='import-links'>
                    <div className='link-parent'><span className='link-title'>IMPORTANT LINKS</span></div>
                    <div className='imp-link'>
                        <a href=""><p>Careers</p></a>
                        <a href=""><p>COVID-19 FAQs</p></a>
                        <a href=""><p>Guest Policy</p></a>
                        <a href=""><p>Privacy Policy</p></a>
                        <a href=""><p>Terms</p></a>
                    </div>
                </div>
            </div>
            <div className='copyright'>Zostel © 2022. All Rights Reserved</div>
        </div>
    </>
}