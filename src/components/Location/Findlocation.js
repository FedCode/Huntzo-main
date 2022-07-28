import React, { useState } from 'react'
import { PageHeader, Layout, Col, Row, Button, List } from 'antd';
import locimage from '../../assets/images/Location-img.png' ;
import arrowright from '../../assets/images/arrow-right.svg' ;
import './Findlocation.css'

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
                <h3 className='grey-heading'>Find By locations</h3>
                <p className='grey-title'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id ut et a integer eget. Viverra cursus dictumst phasellus odio dignissim pellentesque convallis phasellus sit.</p>
        </PageHeader>
        <div className='property-list-card card-top-space'>
              <div className='section-conatiner'>
                  <Row gutter={[24, 24]}>
                    {
                      Locdata.map((curElem) => {
                        const {image, title, subtitle, arrowimg } = curElem;
                               
                        return(
                          <Col span={8} xs={24} lg={8}>
                            <div className='explore-card find-location-card'>
                              <figure>
                                 <img src={image} alt='' />
                              </figure>
                              <div className='explore-body'>
                                <div className='explore-header'>
                                <div className='expolore-price'>
                                    <img src={arrowimg} />
                                    </div> 
                                <div className='explore-heading'>
                                      <h5>{title}</h5>
                                      <h6>{subtitle}</h6>
                                 </div> 
                                </div>
                               </div>
                             </div>
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