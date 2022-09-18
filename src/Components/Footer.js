import { makeStyles } from "@material-ui/core";
import React from "react";
const useStyle=makeStyles((theme)=>({
    home:{
        paddingTop:'20px',
        background:'white',
        [theme.breakpoints.down("sm")]:{
            paddingLeft:'20px',
            paddingRight:'20px'
        }
    },
    cmp_list:{
        display:'flex',
        flexDirection:'column',
        '& > li > a':{
            fontSize:'13px',
            fontWeight:'bold',
            textDecoration:'none',
            color:'black',
            '&:hover':{
                color:'#166bd3'
            }
        }
    },
    f_div:{
        '&':{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'column',
            gap:'20px',
        },
        '&>div>a':{
            fontSize:'25px',
            color:'black'
        },
        '&>div:nth-child(1),&>div:nth-child(4)':{
            '&>a:hover':{
                color:'red',
            }
        },
        '&>div:nth-child(2),&>div:nth-child(3)':{
            '&>a:hover':{
                color:'#166bd3'
            }
        }
    }
}))
const Footer = () => {
    const classes=useStyle();
    return(
            <div className={`Container ${classes.home}`}>
                <div className="row">
                    <div className="col-12 col-lg-10 mx-auto">
                        <div className="row">
                        <div className="col-6 col-lg-3">
                                <h2>Our Products</h2>
                                <ul className={classes.cmp_list}>
                                    <li>
                                        <a href="#">Domestic Hotels</a>
                                    </li>
                                    <li>
                                        <a href="#">International Hotels</a>
                                    </li>
                                    <li>
                                        <a href="#">International Flights</a>
                                    </li>
                                    <li>
                                        <a href="#">Route Planner</a>
                                    </li>
                                    <li>
                                        <a href="#">Cheap Flights</a>
                                    </li>
                                    <li>
                                        <a href="#">Hotels in India</a>
                                    </li>
                                    <li>
                                        <a href="#">Hotels near me</a>
                                    </li>
                                    <li>
                                        <a href="#">Popular Airlines</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-6 col-lg-3">
                                <h2>Company</h2>
                                <ul className={classes.cmp_list}>
                                    <li>
                                        <a href="#">About Us</a>
                                    </li>
                                    <li>
                                        <a href="#">Terms & Conditions</a>
                                    </li>
                                    <li>
                                        <a href="#">User Aggrement</a>
                                    </li>
                                    <li>
                                        <a href="#">Privacy</a>
                                    </li>
                                    <li>
                                        <a href="#">Customer Support</a>
                                    </li>
                                    <li>
                                        <a href="#">FAQ's</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-6 col-lg-3">
                                <h2>Trending Hotel Cities</h2>
                                <ul className={classes.cmp_list}>
                                    <li>
                                        <a href="#">Hotels in Goa</a>
                                    </li>
                                    <li>
                                        <a href="#">Hotels in Delhi</a>
                                    </li>
                                    <li>
                                        <a href="#">Hotels in Mumbai</a>
                                    </li>
                                    <li>
                                        <a href="#">Hotels in Bangalore</a>
                                    </li>
                                    <li>
                                        <a href="#">Hotels in Pune</a>
                                    </li>
                                    <li>
                                        <a href="#">Hotels in Agra</a>
                                    </li>
                                    <li>
                                        <a href="#">Hotels in Chennai</a>
                                    </li>
                                    <li>
                                        <a href="#">Hotels in Kolkata</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-6 col-lg-3"
                            style={{
                                textAlign:'center'
                            }}
                            >
                                <h2>Follow Us</h2>
                               <div className={`row ${classes.f_div}`}>
                                <div className="col-3 mx-auto">
                                    <a href="#">
                                        <i className="fab fa-instagram fontawesome-style"></i>
                                    </a>
                                </div>
                                <div className="col-3 mx-auto">
                                    <a href="#">
                                        <i className="fab fa-twitter fontawesome-style"></i>
                                    </a>
                                </div>
                                <div className="col-3 mx-auto">
                                    <a href="#">
                                        <i className="fab fa-facebook fontawesome-style"></i>
                                    </a>
                                </div>
                                <div className="col-3 mx-auto">
                                    <a href="#">
                                        <i className="fab fa-youtube fontawesome-style"></i>
                                    </a>
                                </div>
                               </div>
                            </div>
                        </div>
                        <hr />
                        <div className="mt-5">
                            <p className="main-hero-para text-center w-100">
                                Copyright @ 2022 BonVoyage . All rights Reserved
                            </p>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Footer;