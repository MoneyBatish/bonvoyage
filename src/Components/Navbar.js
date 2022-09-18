import { Avatar, makeStyles } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
const useStyle=makeStyles((theme)=>({
  nav:{
    position:'fixed',
    top:'0px',
    zIndex:'3',
    width:'100%',
  },
  nav_list:{
    marginTop:'5px',
    display:'flex',
    flexDirection:'row',
    gap:'20px',
    [theme.breakpoints.down('sm')]:{
      display:'none',
    }
  },
  nav_list2:{
    marginTop:'5px',
    display:'flex',
    flexDirection:'column',
    gap:'40px',
    position:'absolute',
    top:'65px',
    // backgroundColor:'white',
    width:'60%',
    height:'90vh',
    justifyContent:'center',
    alignItems:'center',
    // border:'5px solid #166bd3',
    backgroundColor: 'rgba(255, 255, 255,0.5)',
    // backgroundColor:'#D3D3D3',
    webkitBackdropFilter: 'blur(30px)',
    backdropFilter: 'blur(30px)',
    animation:`$slide 300ms ${theme.transitions.easing.easeOut}`,
    animationFillMode:'forwards'
  },
  nav_list3:{
    marginTop:'5px',
    display:'flex',
    flexDirection:'column',
    gap:'40px',
    position:'absolute',
    top:'65px',
    // backgroundColor:'white',
    width:'60%',
    height:'90vh',
    justifyContent:'center',
    alignItems:'center',
    // border:'5px solid #166bd3',
    backgroundColor: 'rgba(255, 255, 255,0.5)',
    // backgroundColor:'#D3D3D3',
    webkitBackdropFilter: 'blur(30px)',
    backdropFilter: 'blur(30px)',
    animation:`$slideout 700ms ${theme.transitions.easing.easeOut}`,
    animationFillMode:'forwards'
  },
  nav_item:{
    textDecoration:'none',
    padding:'10px',
      paddingLeft:'20px',
      paddingRight:'20px',
      borderRadius:'25px',
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'white',
      border:'2px solid #166bd3',
      cursor:'pointer',
    '&:hover':{
      backgroundColor:'#166bd3',
    },
    '&:hover $icon':
    {
      color:'white'
    },
    '&:hover $icon2':{
      color:'white'
    },
    '&:hover $btn_title':{
      color:'white'
    }
  },
  nav_item_selected:{
    textDecoration:'none',
    padding:'10px',
      paddingLeft:'20px',
      paddingRight:'20px',
      borderRadius:'25px',
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'#166bd3',
      border:'2px solid #166bd3',
      cursor:'pointer',
  },
  icon:
  {
    color:'#166bd3',
    marginRight:'5px',
    transform:'rotate(-35deg)'
  },
  icon_selected:
  {
    color:'white',
    marginRight:'5px',
    transform:'rotate(-35deg)'
  },
  icon2:
  {
    color:'#166bd3',
    marginRight:'6px',
  },
  icon2_selected:
  {
    color:'white',
    marginRight:'6px',
  },
  btn_title:{
    color:'#166bd3',
    fontFamily:'20px'
  },
  btn_title_selected:{
    color:'white',
    fontFamily:'20px'
  },
  logindiv:{
    border:'1.5px solid #166bd3',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    gap:'5px',
    borderRadius:'10px',
    padding:'8px',
    position:'absolute',
    right:'30px',
    cursor:'pointer',
    [theme.breakpoints.down('sm')]:{
      display:'none',
    }
  },
  logindiv2:{
    border:'1.5px solid #166bd3',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    gap:'5px',
    borderRadius:'10px',
    padding:'8px',
    position:'absolute',
    top:'75vh',
    cursor:'pointer'
  },
  hamburger:{
    display:'none',
    [theme.breakpoints.down("sm")]:{
      display:'block',
    },
    border:'2px solid lightgrey',
    padding:'5px',
    paddingLeft:'10px',
    paddingRight:'10px',
    borderRadius:'10px',
    fontSize:'20px',
    cursor:'pointer',
    '&:hover':{
      color:'#166bd3',
    },
    position:'absolute',
    right:'40px',
    width:'40px',
    height:'38px',
  },
  '@keyframes slide':{
    '0%':{
      left:'-200px',
    },
    '100%':{
      left:'0px'
    }
  },
  '@keyframes slideout':{
    '0%':{
      left:'0px',
    },
    '100%':{
      left:'-100%',
    }
  }
}));
const Navbar = () => {
  const history=useNavigate();
  const classes=useStyle();
  const [selected,setSelected]=useState({});
  const [count,setCount]=useState(0);
  const [show,setShow]=useState(false);
  useEffect(()=>{
    const location=window.location.href;
    const arr=location.split('/');
    setSelected(arr[3]);
    // console.log(selected);
  });
  return (
    <div>
        <nav className={`navbar navbar-light ${classes.nav}`}
        style={{
            backgroundColor:'white',
            height:'70px',
            boxShadow: 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px'
        }}
        >
        <div
        style={{
          display:'flex',
          alignItems:'center',
          justifyContent:'flex-start',
          flexDirection:'row',
          gap:'30px',
          width:'100%',
        }}
        >
            <span style={{
              marginLeft:'35px',
              color:'rgb(250, 110, 12)',
              fontSize:'28px',
              fontWeight:'800',
              cursor:'pointer',
            }}
            onClick={()=>{history('/')}}
            >bon<span
            style={{
              color:'#166bd3'
            }}
            >voyage</span></span>
            <div
            className={classes.nav_list}
            >
              <a
              className={selected==='flights'?classes.nav_item_selected:classes.nav_item}
              onClick={()=>{history('/flights')}}
              >
              <i
              className={`fa-solid fa-plane ${selected==='flights'?classes.icon_selected:classes.icon}`}></i>
              <span
              className={selected==='flights'?classes.btn_title_selected:classes.btn_title}
              >Flights</span>
              </a>
              <a
              className={selected==='hotels'?classes.nav_item_selected:classes.nav_item}
              onClick={()=>{history('/hotels')}}
              >
              <i
              className={`fa-sharp fa-solid fa-hotel ${selected==='hotels'?classes.icon2_selected:classes.icon2}`}></i>
              <span
              className={selected==='hotels'?classes.btn_title_selected:classes.btn_title}
              >Hotels</span>
              </a>
              <a
              className={selected==='forex'?classes.nav_item_selected:classes.nav_item}
              onClick={()=>{history('/forex')}}
              >
              <i
              className={`fa-solid fa-sack-dollar ${selected==='forex'?classes.icon2_selected:classes.icon2}`}></i>
              <span
              className={selected==='forex'?classes.btn_title_selected:classes.btn_title}
              >Forex</span>
              </a>
            </div>
            <div
            className={show?classes.nav_list2:classes.nav_list3}
            style={{
              // display:show?'flex':'none',
            }}
            >
              <a
              className={selected==='flights'?classes.nav_item_selected:classes.nav_item}
              onClick={()=>{history('/flights');setShow(false);}}
              >
              <i
              className={`fa-solid fa-plane ${selected==='flights'?classes.icon_selected:classes.icon}`}></i>
              <span
              className={selected==='flights'?classes.btn_title_selected:classes.btn_title}
              >Flights</span>
              </a>
              <a
              className={selected==='hotels'?classes.nav_item_selected:classes.nav_item}
              onClick={()=>{history('/hotels');setShow(false);}}
              >
              <i
              className={`fa-sharp fa-solid fa-hotel ${selected==='hotels'?classes.icon2_selected:classes.icon2}`}></i>
              <span
              className={selected==='hotels'?classes.btn_title_selected:classes.btn_title}
              >Hotels</span>
              </a>
              <a
              className={selected==='forex'?classes.nav_item_selected:classes.nav_item}
              onClick={()=>{history('/forex');setShow(false);}}
              >
              <i
              className={`fa-solid fa-sack-dollar ${selected==='forex'?classes.icon2_selected:classes.icon2}`}></i>
              <span
              className={selected==='forex'?classes.btn_title_selected:classes.btn_title}
              >Forex</span>
              </a>
              <div className={classes.logindiv2}>
              <Avatar style={{
                width:'25px',
                height:'25px',
                backgroundColor:'rgb(22, 107, 211,0.6)'
              }} />
              <span style={{fontSize:'10px',color:'#166bd3',fontWeight:'bold'}}>LOGIN / SIGNUP &nbsp;<i className="fa-solid fa-caret-down"></i></span>
            </div>
            </div>
            <div className={classes.hamburger}
              onClick={()=>{
              if(show)
              {
                setShow(false)
              }
              else
              {
                setShow(true);
              }
            }}
            >
              <i style={{
                position:'absolute',
                top:'7px',
                left:show?'12px':'10px',
              }} className={show==false?"fa-solid fa-bars":"fa-solid fa-xmark"}></i>
            </div>
            <div className={classes.logindiv}>
              <Avatar style={{
                width:'25px',
                height:'25px',
                backgroundColor:'rgb(22, 107, 211,0.6)'
              }} />
              <span style={{fontSize:'10px',color:'#166bd3',fontWeight:'bold'}}>LOGIN / SIGNUP &nbsp;<i className="fa-solid fa-caret-down"></i></span>
            </div>
        </div>
    </nav>
    </div>
  )
}

export default Navbar