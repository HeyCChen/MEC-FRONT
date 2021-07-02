import React from 'react';
import { Menu, Layout } from 'antd';
import { UserOutlined, LaptopOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import ServerMap from '../ServerPage/ServerMap';
import ServerExp from '../ServerPage/ServerExp';
import ServerData from '../ServerPage/ServerData';
import ResData from '../ServerPage/ResData';
import UserData from '../UserPage/UserData';
import UserMap from '../UserPage/UserMap';
import UserExp from '../UserPage/UserExp';

const Sider = () => {
    const { SubMenu } = Menu;
    const { Sider } = Layout;
    return (
        <>
            <Layout>
                <Router>
                    <Sider
                        breakpoint="lg"
                        collapsedWidth="0"
                        style={{ backgroundColor: '#2c3e50' }}
                    >
                        <Menu
                            theme='dark'
                            style={{ width: 200, backgroundColor: '#2c3e50', color: 'white' }}
                            mode="inline"
                            defaultOpenKeys={['sub1', 'sub2']}
                        // defaultSelectedKeys={['1']}
                        >
                            <SubMenu style={{ backgroundColor: '#2c3e50' }} icon={<LaptopOutlined />} key="sub1" title="服务部署">
                                <Menu.Item key="1"><Link to='/'>实验环境</Link></Menu.Item>
                                <Menu.Item key="2"><Link to='/ServerExp'>仿真实验</Link></Menu.Item>
                                <Menu.Item key="3"><Link to='/ServerData'>数据统计</Link></Menu.Item>
                                <Menu.Item key="7"><Link to='/ResData'>数据统计2</Link></Menu.Item>
                            </SubMenu>
                            <SubMenu style={{ backgroundColor: '#2c3e50' }} icon={<UserOutlined />} key="sub2" title="用户分配">
                                <Menu.Item key="4"><Link to='/UserMap'>实验环境</Link></Menu.Item>
                                <Menu.Item key="5"><Link to='/UserExp'>仿真实验</Link></Menu.Item>
                                <Menu.Item key="6"><Link to='/UserData'>数据统计</Link></Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Switch>
                        <Route path='/' exact component={ServerMap} />
                        <Route path='/ServerExp' component={ServerExp} />
                        <Route path='/ServerData' component={ServerData} />
                        <Route path='/UserMap' component={UserMap} />
                        <Route path='/UserExp' component={UserExp} />
                        <Route path='/UserData' component={UserData} />
                        <Route path='/ResData' component={ResData} />
                    </Switch>
                </Router>
            </Layout>
        </>
    );
}

export default Sider;