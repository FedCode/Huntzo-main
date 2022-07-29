import React, { useState } from 'react'
import { PageHeader, Layout, Col, Row, Button, Card } from 'antd';
import locimage from '../../assets/images/Location-img.png' ;
import arrowright from '../../assets/images/arrow-right.svg' ;
import './Findlocation.css'
import { Typography } from 'antd';

const { Title } = Typography;

const LocationData = [
    { 
     id: 1,
     image:`${locimage}`,
     title:'japan, tokyo',
     subtitle:'2 properties',
     arrowimg:`${arrowright}`,
    
   },
   { 
    id: 2,
    image:`${locimage}`,
    title:'japan, tokyo',
    subtitle:'2 properties',
    arrowimg:`${arrowright}`,
   
  },
  { 
    id: 3,
    image:`${locimage}`,
    title:'japan, tokyo',
    subtitle:'2 properties',
    arrowimg:`${arrowright}`,
   
  },
  { 
    id: 4,
    image:`${locimage}`,
    title:'japan, tokyo',
    subtitle:'2 properties',
    arrowimg:`${arrowright}`,
   
  },
  { 
    id: 5,
    image:`${locimage}`,
    title:'japan, tokyo',
    subtitle:'2 properties',
    arrowimg:`${arrowright}`,
   
  },
  { 
    id: 6,
    image:`${locimage}`,
    title:'japan, tokyo',
    subtitle:'2 properties',
    arrowimg:`${arrowright}`,
   
  }

 
 ]


 const Findlocation = () => {

  const [Locdata, setlocdata] = useState(LocationData);

  return (
    <div className='Explore-properties '>
    <Layout className='Eplore-property find-locations white-bg-color'>
        <PageHeader className="site-page-header">
                <Title level={3}  className='grey-heading'>Find By locations</Title>
                <p className='grey-title'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id ut et a integer eget. Viverra cursus dictumst phasellus odio dignissim pellentesque convallis phasellus sit.</p>
        </PageHeader>
        <div className='property-list-card card-top-space'>
              <div className='section-conatiner'>
                  <Row gutter={[24, 24]}>
                    {
                      Locdata.map((curElem) => {
                        const {image, title, subtitle, arrowimg } = curElem;
                               
                        return(
                          <Col span={8} xs={24} sm={12} lg={8}>
                            <Card className='explore-card find-location-card'>
                              <figure>
                                 <img src={image} alt='' />
                              </figure>
                              <div className='explore-body'>
                                <div className='explore-header'>
                                <div className='expolore-price'>
                                    <img src={arrowimg} />
                                    </div> 
                                <div className='explore-heading'>
                                      <Title level={5} >{title}</Title>
                                      <h6>{subtitle}</h6>
                                 </div> 
                                </div>
                               </div>
                             </Card>
                            </Col>
                        )
                       
                      })
                    }
                      
                     
                  </Row>
                  <div className='browse-category'>
                  <Button className='browse-btn'>browese more properties</Button>
                  </div>
              </div>
           </div>
   </Layout>
   </div>
  )
}

export default Findlocation;