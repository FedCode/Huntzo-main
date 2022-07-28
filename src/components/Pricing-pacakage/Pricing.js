import React, { useState } from 'react'
import './Pricing.css'
import sucessicon from '../../assets/images/success.svg' ;
import { PageHeader, Layout, Col, Row, Button, List } from 'antd';

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
                <h3 className='grey-heading'>See Our Packages</h3>
                <p className='grey-title'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id ut et a integer eget. Viverra cursus dictumst phasellus odio dignissim pellentesque convallis phasellus sit.</p>
            </PageHeader>
           <div className='price-card-list card-top-space'>
            <div className='section-conatiner'>
             <Row gutter={[24, 24]}>
                    {
                        pricingdata.map((curElem)=>{
                        
                            const {id, price, title, currency, icons, listone, listtwo, listthree, listtfour, buttontext } = curElem;

                            return(
                                <Col span={8} xs={24} lg={8}>
                                    <div className='pricing-cards' key={id}>
                                        <div className='price-header'>
                                            <h2><span className='currency-symbol'> {currency}</span>  {price}</h2>
                                            <h3>{title}</h3>
                                        </div>
                                        <div className='price-body'>
                                            <ul className='feature-list'>
                                                <li>
                                                    <p>{listone}</p>
                                                    <span><img src={icons} alt='' /></span>
                                                </li>
                                                <li>
                                                    <p>{listtwo}</p>
                                                    <span><img src={icons} alt='' /></span>
                                                </li>
                                                <li>
                                                    <p>{listthree}</p>
                                                    <span><img src={icons} alt='' /></span>
                                                </li>
                                                <li>
                                                    <p>{listtfour}</p>
                                                    <span><img src={icons} alt='' /></span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className='price-footer'>
                                            <Button className='choose-plan-btn browse-btn'>{buttontext}</Button>
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
export default Pricing;
