import React, { useState } from 'react';
import './Howwork.css';
import icon1 from '../../assets/images/maps-location.svg';
import icon2 from '../../assets/images/people-svg.svg';
import icon3 from '../../assets/images/task-list-svg.svg';
import { PageHeader, Layout, Col, Row } from 'antd';
import { Typography } from 'antd';



const CardData = [
  {
    id: 1,
     title:'evaluate property',
     discription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id ut et a integer eget. Viverra cursus',
     icon: `${icon1}`

  } ,
  {
    id: 2,
     title:'meet your agent',
     discription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id ut et a integer eget. Viverra cursus',
     icon: `${icon2}`

  }, 
  {
    id: 3,
    title:'close the deal',
    discription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id ut et a integer eget. Viverra cursus',
    icon: `${icon3}`

  } 

]
const { Title } = Typography;
 const Howworks = () => {
  const [carddata, setcarddata] = useState (CardData);
  return (
    <div className='how-it-works'>
       <Layout className='it-works-layout'>
       <PageHeader className="site-page-header">
            <Title level={3} className='grey-heading'> how its works?</Title>
            <p  className='grey-title'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id ut et a integer eget. Viverra cursus dictumst phasellus odio dignissim pellentesque convallis phasellus sit.</p>
       </PageHeader>
        <div className='work-list-card'>
          <div className='section-conatiner'>
            <Row>
              {
                carddata.map((curElem)=>{
                  const {id, icon, title, discription} = curElem;
                    return(
                      <Col span={8} xs={24}   lg={8}>
                          <div className='single-card' key= {id}>
                            <span className='box-id'>
                              <small>{id}</small>
                            </span>
                            <div className='card-details'>
                            <Title level={3}><img src={icon} alt='wwww' /></Title>
                            <Title level={3}>{title}</Title>
                            <p>{discription}</p> 
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
export default Howworks;