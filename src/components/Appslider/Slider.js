import React, {useRef} from 'react'
import { Carousel } from 'antd';
import {  Col, Row, Divider, Button, List } from 'antd';
import Icon from '@ant-design/icons';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';
import './Slider.css';
import sliderimg from '../../assets/images/Backgroundreal.png';
import sliderimg1 from '../../assets/images/Backgroundreal1.png';
//import sliderimgtwo from '../../assets/images/homephoto.png'
import interfaceicon from '../../assets/images/interface.svg';
import hearticon from '../../assets/images/heart-icon.svg';
import Travelmap from '../../assets/images/Travelmap.png'
import arrowicon from '../../assets/images/right-arrowicon.png'
import arrownext from '../../assets/images/arrow-next.svg'
import arrowprev from '../../assets/images/arrow-previous.svg'


// const contentStyle = {
//     height: '660px',
//     color: '#fff',
//     lineHeight: '660px',
//     textAlign: 'center',
//     background: '#364d79',
// };

export const Slider = () => {
  const arrow = useRef(null);
    //  const onChange = (currentSlide) => {
    //     console.log(currentSlide);
    //   };
  return (
    <div className='main-slider-card'>
     <Button className='next-icon'  onClick={() => arrow.current.next()}><img src={arrownext} alt='' /></Button>
     <Carousel  ref={arrow} >
      <div >
        <div className='slide-main' style={{ backgroundImage: `url(${sliderimg1})`}} >
          <div className='slider-item'>
             {/* <img src={sliderimg} alt='' /> */}
            <div className='slider-content'>
            <Row>
            <Col span={8} xs={24} lg={8}>
            <div className='house-details'>
                  <div className='house-header'>
                      <div className='house-left'>
                         <Button className='small-grey-btn'>rent</Button>
                         <Button className='small-grey-btn black-color'>featured</Button>
                      </div>
                      <div className='house-right'>
                      <Button className='small-grey-btn'><img src={interfaceicon}  alt='interface icon' /></Button>
                         <Button className='small-grey-btn'><img src={hearticon}  alt='interface icon' /></Button>
                      </div>
                  </div>
                  <div className='house-body'>
                      <h4>Landland Village</h4>
                      <p className='d-flex'><span className='map-icon'><img src={Travelmap} alt='' /></span> Lorem ipsum dolor sit amet</p>
                      <p>beds: 3</p>
                      <p>bath: 2</p>
                      <p>sqft: 2400</p>
                   </div>
                  <div className='house-fooer'>
                    <h6>$2,600</h6> 
                    <a className='small-grey-btn black-color arrow-icon'>view details <RightOutlined /></a>
                  </div>
              </div>
            </Col>
            <Col span={16}>
            <div className='content-card'>
               <h2>Find your dream home</h2>
               <h4>This is where you can find a dream home of your choice without stress</h4>
            </div>
            </Col>
          </Row>
            </div>
         
          </div>
         
        </div>
      </div>
      <div>
        <div className='slide-main' style={{ backgroundImage: `url(${sliderimg1})`}} >
          <div className='slider-item'>
             {/* <img src={sliderimg} alt='' /> */}
            <div className='slider-content'>
            <Row>
            <Col span={8} xs={24} lg={8}>
            <div className='house-details'>
                  <div className='house-header'>
                      <div className='house-left'>
                         <Button className='small-grey-btn'>rent</Button>
                         <Button className='small-grey-btn black-color'>featured</Button>
                      </div>
                      <div className='house-right'>
                      <Button className='small-grey-btn'><img src={interfaceicon}  alt='interface icon' /></Button>
                         <Button className='small-grey-btn'><img src={hearticon}  alt='interface icon' /></Button>
                      </div>
                  </div>
                  <div className='house-body'>
                      <h4>Landland Village</h4>
                      <p className='d-flex'><span className='map-icon'><img src={Travelmap} alt='' /></span> Lorem ipsum dolor sit amet</p>
                      <p>beds: 3</p>
                      <p>bath: 2</p>
                      <p>sqft: 2400</p>
                   </div>
                  <div className='house-fooer'>
                    <h6>$2,600</h6> 
                    <a className='small-grey-btn black-color arrow-icon'>view details <RightOutlined /></a>
                  </div>
              </div>
            </Col>
            <Col span={16}>
            <div className='content-card'>
               <h2>Find your dream home</h2>
               <h4>This is where you can find a dream home of your choice without stress</h4>
            </div>
            </Col>
          </Row>
            </div>
         
          </div>
         
        </div>
      </div>
    </Carousel>
    <Button className='prev-icon' onClick={() => arrow.current.next()}><img src={arrowprev} alt='' /></Button>
  </div>
  )
}
export default Slider;
