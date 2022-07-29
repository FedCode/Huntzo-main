import React, { useState } from 'react'
import './Pricing.css'
import sucessicon from '../../assets/images/success.svg' ;
import { PageHeader, Layout, Col, Row, Card, List } from 'antd';
import { Typography } from 'antd';

const { Title } = Typography;

const PricingDertails = [
    {
      id: 1,
      title:     '5+ listings',
      icons:`${sucessicon}`
    
    },
    {
        id: 2,
        title:     'contact with agent',
        icons:`${sucessicon}`
      
      },
      {
        id: 3,
        title:     '3 month validity',
        icons:`${sucessicon}`
      
      },
      {
        id: 4,
        title:     '7x24 full support',
        icons:`${sucessicon}`
      
      }


]


const PricingData = [
    {
      id:1,
      price: 199,
      currency:'$', 
      title: 'standard package',
      icons:`${sucessicon}`,
      listone: '5+ listings',
      listtwo: 'contact with agent',
      listthree: '3 month validity',
      listtfour: '7x24 full support',
      buttontext:  'choose plan'
    },
    {
        id: 2,
        price: 99,
        currency:'$', 
        title: 'platinum package',
        icons:`${sucessicon}`,
        listone: '5+ listings',
        listtwo: 'contact with agent',
        listthree: '3 month validity',
        listtfour: '7x24 full support',
        buttontext:  'choose plan'
    },
    {
        id: 3,
        price: 49,
        currency:'$', 
        title: 'basic package',
        icons:`${sucessicon}`,
        listone: '5+ listings',
        listtwo: 'contact with agent',
        listthree: '3 month validity',
        listtfour: '7x24 full support',
        buttontext:  'choose plan'
    }

]


const Pricing = () => {

const [pricingdata, setpricingdata] = useState(PricingData);

  return (
     <div className='Pricing-card'>
          <Layout className='pricing-section white-bg-color'>
             <PageHeader className="site-page-header">
                <Title level={3} className='grey-heading'>See Our Packages</Title>
                <p className='grey-title'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id ut et a integer eget. Viverra cursus dictumst phasellus odio dignissim pellentesque convallis phasellus sit.</p>
            </PageHeader>
           <div className='price-card-list card-top-space'>
            <div className='section-conatiner'>
             <Row gutter={[24, 24]}>
                    {
                        pricingdata.map((curElem)=>{
                        
                            const {id, price, title, currency, icons, listone, listtwo, listthree, listtfour, buttontext } = curElem;

                            return(
                                <Col span={8} xs={24} sm={12} lg={8}>
                                    <Card className='pricing-cards' key={id}>
                                        <div className='price-header'>
                                            <h2><span className='currency-symbol'> {currency}</span>  {price}</h2>
                                            <h3>{title}</h3>
                                        </div>
                                        <div className='price-body'>
                                            <List size="large"
                                             dataSource={PricingDertails}
                                             renderItem={item => <List.Item><p>{item.title}</p> <span className='icon'><img src={item.icons} /></span> </List.Item>}
                                            />
                                        </div>
                                        <div className='price-footer'>
                                            <button className='choose-plan-btn browse-btn'>{buttontext}</button>
                                        </div>
                                    </Card>
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
export default Pricing;
