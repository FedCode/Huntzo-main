import React from 'react';
import emailicon from '../../assets/images/email-icon.svg' ;
import phoneicon from '../../assets/images/phone.svg' ;
import facebookicon from '../../assets/images/facebook-logo1.svg';
import twitericon from '../../assets/images/TwitterLogo.svg';
import instagramicon from '../../assets/images/instagram-icon.svg';
import './Topbar.css'
import { Col, Row, List} from 'antd';

const SocialMedia = [

    {
       id: 1,
       socialicon: `${instagramicon}` 
       
    },
    
    {
        id: 2,
        socialicon: `${twitericon}` 
     },

     {
        id: 3,
        socialicon: `${facebookicon}` ,
       
     }

]


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
            <Col span={12} >
                <div className='social-details'>
                   <List size="small" className='contact-list'
                       dataSource={SocialMedia}
                        renderItem={item => <List.Item ><a href='' ><img src={item.socialicon} /></a> </List.Item>}
                     />
                </div>
            </Col>
           </Row>
        </div>
        </div>
    
  )
}
export default Topbar;