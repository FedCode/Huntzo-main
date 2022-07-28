import React from 'react'
import { Layout, Col, Row, Divider, Button, List } from 'antd';
import Icon from '@ant-design/icons';
import './footer.css';
import footerlogo from '../../assets/images/white-logo.svg';
import googlepay from '../../assets/images/google-play.svg';
import applestore from '../../assets/images/App-store.svg';
import facebookicon from '../../assets/images/facebook-logo1.svg';
import twitericon from '../../assets/images/TwitterLogo.svg';
import instagramicon from '../../assets/images/instagram-icon.svg';

 const Bootom = () => {
  return (
    <div className='footer-wrapper'>
       <Layout className="">
        <Row className='desktop-padding padd-top'>
       <Col span={12} xs={24} md={12} >
        <h3>want to become a real estate agent?</h3>
       <p>we’ll help you to grow your careere and growth</p>
       </Col>
       <Col span={12} justify="end" className='signup-btn-card' >
       <Button orientation="right" push >signUp today</Button>
       </Col>
       </Row>
       <Divider />
       <Row className='desktop-padding'>
        <Col span={7} xs={24} md={7}>
          <div className='footer-col'>
          <img src={footerlogo} />
             <p>collins street wst, victoria 8223, australia.</p>
             <p>+1 234-567-8900</p>
             <p>info@help.com</p>
          </div>
        </Col>
        <Col span={4} xs={24} md={4}>
          <h4>navigations</h4>
          <List itemLayout="vertical ">
            <List.Item.Meta title={<a href="https://ant.design">About us</a>}/>
            <List.Item.Meta title={<a href="https://ant.design">faqs</a>}/>
            <List.Item.Meta title={<a href="https://ant.design">contact</a>}/>
            <List.Item.Meta title={<a href="https://ant.design">blog</a>}/>
         </List>
        </Col>
        <Col span={4} xs={24} md={4}>
        <h4>the highlights</h4>
        <List itemLayout="vertical ">
            <List.Item.Meta title={<a href="">apartment</a>}/>
            <List.Item.Meta title={<a href="">my houses</a>}/>
            <List.Item.Meta title={<a href="">condos</a>}/>
            <List.Item.Meta title={<a href="">villas</a>}/>
         </List>
        </Col>
        <Col span={4} xs={24} md={4}>
        <h4>agent & agency</h4>
         <List itemLayout="vertical ">
            <List.Item.Meta title={<a href="">agency list</a>}/>
            <List.Item.Meta title={<a href="">agency details</a>}/>
            <List.Item.Meta title={<a href="">agents list</a>}/>
            <List.Item.Meta title={<a href="">agent details</a>}/>
         </List>
        </Col>
        <Col span={1}></Col>
        <Col span={4} xs={24} md={4}>
        <h4>download apps</h4>
       <div className='footer-app-store'>
       <img src={googlepay} alt='' style={{margin:' 0 0 1.5rem'}}/>
        <img src={applestore} alt='' />
       </div>
     
        </Col>

       </Row>
       <Divider />
       <Row className='desktop-padding padd-bottom'>
       <Col span={12} xs={24} md={12} >
       <p>2022 huntzo. all rights reserved </p>
       </Col>
       <Col span={12} xs={24} md={12} justify="end" >
       <List className='footer-list' >
       <List.Item>
         <a href='' ><img src={facebookicon} alt='facebook'/></a>
       </List.Item>
       <List.Item>
       <a href='' ><img src={twitericon} alt='facebook'/></a>
       </List.Item>
       <List.Item>
       <a href='' ><img src={instagramicon} alt='facebook'/></a>
       </List.Item>
       </List>
       </Col>
       </Row>
       
     
       </Layout>
    </div>
  )
}
export default Bootom;