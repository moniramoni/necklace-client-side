import Button from '@restart/ui/esm/Button';
import { Col, Row } from 'react-bootstrap';
import { NavLink, Switch, useRouteMatch, Route } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Header from '../../Shared/Header/Header';
import AddProducts from '../AddProducts/AddProducts';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageOrder from '../ManageOrders/ManageOrder/ManageOrder';
import ManageProduct from '../ManageProduct/ManageProduct';

const AdminDashBoard = () => {

    const {user, logout} = useAuth()
    let { path, url } = useRouteMatch();


    const activeStyle={ 
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px",  
    };

    return (
        <>
        <Header></Header>                
            <Row className="m-auto m-0 w-100">
                <Col xs={12} md={12} lg={3} className="bg-color-gray text-start px-5 py-5">
                   <div className="d-grid justify-content-between py-5 ">
                        <div >
                            <div className="my-1">
                                <NavLink className="menu-text fw-normal text-light bg-color-orange" to={`${url}/addProducts`} activeStyle={activeStyle}><Button className="menu-text fw-normal text-light w-100 bg-transparent border-0" variant="">Add Products</Button>
                                </NavLink>
                            </div>
                            <br className="" />
                            <div className="my-1 w-100">
                                <NavLink className="menu-text fw-normal text-light bg-color-orange" to={`${url}/manageOrders`} activeStyle={activeStyle}><Button className="menu-text bg-transparent border-0 fw-normal text-light w-100" variant="">Manage Orders</Button>
                                </NavLink>
                            </div>
                            <br className="" />
                            <div className="my-1">
                                <NavLink className="menu-text text-light fw-normal bg-color-orange" to={`${url}/ManageProduct`} activeStyle={activeStyle}><Button className="menu-text fw-normal text-light w-100 bg-transparent border-0" variant="">Manage Product</Button>
                                </NavLink>
                            </div>
                            <br className="" />
                            <div className="my-1 mb-5">
                                <NavLink className="menu-text fw-normal text-light bg-color-orange" to={`${url}/makeAdmin`} activeStyle={activeStyle}><Button className="menu-text fw-normal text-light w-100 bg-transparent border-0" variant="">Make Admin</Button>
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
                            <AddProducts></AddProducts>
                        </Route>
                        <Route exact path={`${path}/addProducts`}>
                            <AddProducts></AddProducts>
                        </Route>
                        <Route exact path={`${path}/manageOrders`}>
                            <ManageOrder></ManageOrder>
                        </Route>
                        <Route exact path={`${path}/ManageProduct`}>
                            <ManageProduct></ManageProduct>
                        </Route>
                        <Route exact path={`${path}/makeAdmin`}>
                            <MakeAdmin></MakeAdmin>
                        </Route>
                    </Switch>
                </Col>
            </Row> 
        </>
    );
};

export default AdminDashBoard;