import React, { useState } from 'react'
import { PageHeader, Layout, Col, Row, Button, List, Card } from 'antd';
import propimg from '../../assets/images/properties-img.png' ;
import bedicon from '../../assets/images/bedicon.png';
import bathicon from '../../assets/images/bathicon.svg';
import areaicon from '../../assets/images/areaicon.svg';
import locicon from '../../assets/images/mapicons.svg';
import './Properties.css'
import { Typography } from 'antd';


const ExploreData = [
   { 
    id: 1,
    image:`${propimg}`,
    title:'Sale',
    subtitle:'bluebell real estate',
    price: '$4600',
    beds: '2 Beds',
    bath: '4 baths',
    area: '740sqft',
    location:'goda, drulere zagos',
    button:'view',
    bedicon:`${bedicon}`,
    bathicon:`${bathicon}`,
    areaicon:`${areaicon}`,
    locationicon:`${locicon}`
  },
  { 
    id: 1,
    image:`${propimg}`,
    title:'Sale',
    subtitle:'bluebell real estate',
    price: '$4600',
    beds: '2 Beds',
    bath: '4 baths',
    area: '740sqft',
    location:'goda, drulere zagos',
    button:'view',
    bedicon:`${bedicon}`,
    bathicon:`${bathicon}`,
    areaicon:`${areaicon}`,
    locationicon:`${locicon}`
  },
  { 
    id: 1,
    image:`${propimg}`,
    title:'Sale',
    subtitle:'bluebell real estate',
    price: '$4600',
    beds: '2 Beds',
    bath: '4 baths',
    area: '740sqft',
    location:'goda, drulere zagos',
    button:'view',
    bedicon:`${bedicon}`,
    bathicon:`${bathicon}`,
    areaicon:`${areaicon}`,
    locationicon:`${locicon}`
  },
  { 
    id: 1,
    image:`${propimg}`,
    title:'Sale',
    subtitle:'bluebell real estate',
    price: '$4600',
    beds: '2 Beds',
    bath: '4 baths',
    area: '740sqft',
    location:'goda, drulere zagos',
    button:'view',
    bedicon:`${bedicon}`,
    bathicon:`${bathicon}`,
    areaicon:`${areaicon}`,
    locationicon:`${locicon}`
  },
  { 
    id: 1,
    image:`${propimg}`,
    title:'Sale',
    subtitle:'bluebell real estate',
    price: '$4600',
    beds: '2 Beds',
    bath: '4 baths',
    area: '740sqft',
    location:'goda, drulere zagos',
    button:'view',
    bedicon:`${bedicon}`,
    bathicon:`${bathicon}`,
    areaicon:`${areaicon}`,
    locationicon:`${locicon}`
  },
  { 
    id: 1,
    image:`${propimg}`,
    title:'Sale',
    subtitle:'bluebell real estate',
    price: '$4600',
    beds: '2 Beds',
    bath: '4 baths',
    area: '740sqft',
    location:'goda, drulere zagos',
    button:'view',
    bedicon:`${bedicon}`,
    bathicon:`${bathicon}`,
    areaicon:`${areaicon}`,
    locationicon:`${locicon}`
  }

]

const { Title } = Typography;

export const Properties = () => {

  const [Expdata, setExpdata] = useState(ExploreData);

  return (
    <div className='Explore-properties'>
            <Layout className='Eplore-property bg-light-color'>
            <PageHeader className="site-page-header">
                <Title level={3} className='white-heading'>explore good places</Title>
                <p className='white-title'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id ut et a integer eget. Viverra cursus dictumst phasellus odio dignissim pellentesque convallis phasellus sit.</p>
           </PageHeader>
           <div className='property-list-card card-top-space'>
              <div className='section-conatiner'>
                  <Row gutter={[24, 24]}>
                    {
                      Expdata.map((curElem) => {
                        const {image, title, subtitle, price, beds, bath, area , location, button, bedicon, bathicon, areaicon,locationicon } = curElem;      
                        return(
                          <Col span={8} xs={24} sm={12} lg={8}>
    
                            <Card className='explore-card'>
                              <figure>
                                 <img src={image} alt='' />
                              </figure>
                              <div className='explore-body'>
                                <div className='explore-header'>
                                   <div className='explore-heading'>
                                      <Title level={5}>{title}</Title>
                                      <h6>{subtitle}</h6>
                                    </div> 
                                   <div className='expolore-price'>{price}</div> 
                                </div>
                                <div className='explore-middle-content'>
                                   <ul className='conetnt-listing'>
                                      <li><span className='icon-bg'><img src={bedicon} alt='' /></span> {beds}</li>
                                      <li><span className='icon-bg'><img src={bathicon} alt='' /></span> {bath}</li>
                                      <li><span className='icon-bg'><img src={areaicon} alt='' /></span> {area}</li>
                                   </ul>
                                </div>
                                <div className='explore-footer'>
                                  <button className='view-btn'>View</button>
                                  <p><img src={locationicon} alt='' /> {location} </p>
                                </div>
                              </div>
                            
                            </Card>
                            
                            
                            </Col>
                        )
                       
                      })
                    }
                      
                     
                  </Row>
                  <div className='browse-category'>
                  <button className='browse-btn'>browese more properties</button>
                  </div>
              </div>
           </div>
            </Layout>
        
    </div>
  )
}
export default Properties;