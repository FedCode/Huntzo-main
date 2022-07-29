import React, { Component } from 'react';
import LeftMenu from './LeftMenu'
import RightMenu from './RightMenu'
import { Drawer, Button } from 'antd';
import logo from '../../assets/images/header-logo.svg';
import mobileburger from '../../assets/images/burger-menumob.svg'
import closeicon from '../../assets/images/close.svg'
import { Row, Col } from 'antd';

import './Header.css';

class Navbar extends Component {




	state = {
		current: 'mail',
		visible: false
	}
	showDrawer = () => {
		this.setState({
			visible: true,
		});
	};

	onClose = () => {
		this.setState({
			visible: false,
		});
	};

	render() {
		return (
			<div className='header-wrapper'>
               <div className='section-conatiner'>
		    	<nav className="menuBar">
                <div className="menuCon">
				<Row>
					<Col span={4}>
					<div className='logo'><a href=''><img src={logo} alt='Logo' /></a></div>
					</Col>
					<Col span={13}>
					<div className="leftMenu">
						<LeftMenu />
					</div>
					</Col>
					<Col span={7}>
					<div className="rightMenu">
						<RightMenu />
					</div>
					</Col>

				</Row>
					
					
					<Button className="barsMenu" onClick={this.showDrawer}>
						<span className=""> <img src={mobileburger} alt='Logo' /></span>
					</Button>
					<Drawer
						placement="right"
						closable={false}
						onClose={this.onClose}
						visible={this.state.visible}
					>
						<button onClick={this.onClose} className='close-icon'><img src={closeicon} alt='' /></button>
						<LeftMenu />
						<RightMenu />
					</Drawer>

				</div>
			</nav>
			</div>
			</div>
		);
	}
}

export default Navbar;