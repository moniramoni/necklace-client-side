import Header from '../../Shared/Header/Header';
import { Col, Row, Button } from 'react-bootstrap';
import { NavLink, useRouteMatch, Switch, Route } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import MyOrders from '../MyOrders/MyOrders/MyOrders';
import Reviews from '../Reviews/Reviews';
import Payment from '../Payment/Payment';




const UserDashboard = () => {
    const {user, logout} = useAuth()
    let { path, url } = useRouteMatch();


    return (
        <>
        <Header></Header>                
            <Row className="m-auto m-0 w-100">
                <Col xs={12} md={12} lg={3} className="bg-color-gray text-start px-5 py-5">
                   <div className="d-grid justify-content-between py-5 ">
                        <div >
                            <div className="my-1 w-100">
                                <NavLink className="menu-text fw-normal text-light bg-color-orange" to={`${url}/myOrders`}><Button className="menu-text fw-normal text-light w-100" variant="">My Orders</Button>
                                </NavLink>
                            </div>
                            <br className="" />
                            <div className="my-1">
                                <NavLink className="menu-text text-light fw-normal bg-color-orange" to={`${url}/review`}><Button className="menu-text fw-normal text-light w-100" variant="">Add Review</Button>
                                </NavLink>
                            </div>
                            <br className="" />
                            <div className="my-1 mb-5">
                                <NavLink className="menu-text fw-normal text-light bg-color-orange" to={`${url}/payment`}><Button className="menu-text fw-normal text-light w-100" variant="">Payment</Button>
                                </NavLink>
                            </div>
                        </div>
                        <div className="mt-5">
                        {user?.email && 
                            <Button className="menu-text fw-normal text-light bg-color-orange" onClick={logout} variant="">LogOut</Button>
                        } 
                        </div>
                   </div>
                </Col>
                <Col xs={12} md={12} lg={9} className="border-top border-start-1">
                    <Switch>
                        
                        <Route exact path={path}>
                            <MyOrders></MyOrders>
                        </Route>
                        <Route exact path={`${path}/myOrders`}>
                            <MyOrders></MyOrders>
                        </Route>
                        <Route exact path={`${path}/review`}>
                            <Reviews></Reviews>
                        </Route>
                        
                        <Route exact path={`${path}/payment`}>
                            <Payment></Payment>
                        </Route>
                        
                    </Switch>
                </Col>
            </Row> 
        </>
    );
};

export default UserDashboard;

 


