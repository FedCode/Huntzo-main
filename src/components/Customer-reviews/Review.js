import React, { useState } from 'react'
import './Review.css'
import { PageHeader, Layout, Col, Row, Button, List } from 'antd';
import propimg from '../../assets/images/properties-img.png' ;
import stars from '../../assets/images/stars.svg' ;


const CustomerData = [
    { 

     id: 1,
     csimage:`${propimg}`,
     title:'Kim williams',
     subtitle:'Ceo of apple ',
     feedback:'This is where you can find a dream home of your choice without stThis is where you can find a dream home of your choice without stressresschoice without stThis is where you can find ',
     ratingimg:`${stars}`

    },
    { 

        id: 1,
        csimage:`${propimg}`,
        title:'Kim williams',
        subtitle:'Ceo of apple ',
        feedback:'This is where you can find a dream home of your choice without stThis is where you can find a dream home of your choice without stressresschoice without stThis is where you can find ',
        ratingimg:`${stars}`
   
       },
       { 

        id: 1,
        csimage:`${propimg}`,
        title:'Kim williams',
        subtitle:'Ceo of apple ',
        feedback:'This is where you can find a dream home of your choice without stThis is where you can find a dream home of your choice without stressresschoice without stThis is where you can find ',
        ratingimg:`${stars}`
   
       }

]
 const Review = () => {

const [reviewData, setreviewData] = useState(CustomerData)
  return (
    <div className='customer-review '>
        <Layout className='bg-light-color section-tbm-space'>
            <PageHeader className="site-page-header">
                <h3 className='white-heading'>good reviews by customers</h3>
                <p className='white-title'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id ut et a integer eget. Viverra cursus dictumst phasellus odio dignissim pellentesque convallis phasellus sit.</p>
            </PageHeader>
            <div className='customer-list-card card-top-space'>
              <div className='section-conatiner'>
                  <Row gutter={[24, 24]}>
                    {
                      reviewData.map((curElem) => {
                        //const {image, title, subtitle,  } = curElem;      
                        return(
                          <Col span={8} xs={24} lg={8}>
                            <div className='explore-card customer-card'>
                               <div className='explore-body'>
                                 <figure>
                                   <img src={curElem.csimage} alt='' />
                                 </figure>
                                 <div className='explore-header'>
                                      <div className='explore-heading'>
                                          <div className='review-title'>
                                               <h5>{curElem.title}</h5>
                                               <h6>{curElem.subtitle}</h6>
                                          </div>
                                          <div className='star-img'>
                                              <img src={curElem.ratingimg} />
                                          </div>
                                          
                                      </div> 
                                    <div className='expolore-price'>
                                        <p>{curElem.feedback}</p>
                                    </div> 
                                  </div>
                                 </div>
                             </div>
                            
                            
                            </Col>
                        )
                       
                      })
                    }
                      
                     
                  </Row>
                 
              </div>
           </div>
        </Layout>
   </div>
  )
}
  
export default Review; 