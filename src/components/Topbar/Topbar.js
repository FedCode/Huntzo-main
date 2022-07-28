import React from 'react';
import emailicon from '../../assets/images/email-icon.svg' ;
import phoneicon from '../../assets/images/phone.svg' ;
import facebookicon from '../../assets/images/facebook-logo1.svg';
import twitericon from '../../assets/images/TwitterLogo.svg';
import instagramicon from '../../assets/images/instagram-icon.svg';
import './Topbar.css'
import { Col, Row} from 'antd';

 const Topbar = () => {
  return (
       <div className='top-bar'>
        <div className='section-conatiner'>
           <Row>
            <Col span={12}>
                <div className='contact-details'>
                    <ul className='contact-list'>
                        <li><span className='contact-icon'><img src={emailicon} alt=''/></span><p>Needhelp@gmail.com</p></li>
                        <li><span className='contact-icon'><img src={phoneicon} alt=''/></span><p>+012 (345) 67 89</p></li>
                    </ul>
                </div>
            </Col>
            <Col span={12}>
                <div className='social-details'>
                    <ul className='contact-list'>
                        <li><a href='' ><img src={instagramicon} alt='facebook'/></a></li>
                        <li><a href='' ><img src={twitericon} alt='facebook'/></a></li>
                        <li><a href='' ><img src={facebookicon} alt='facebook'/></a></li>
                    </ul>
                </div>
            </Col>
           </Row>
        </div>
        </div>
    
  )
}
export default Topbar;