
import { makeStyles } from '@material-ui/core'
import React from 'react'
import Footer from '../Components/Footer'
import Offers from '../Offers'
const useStyle=makeStyles((theme)=>({
  home:{
    width:'100%',
    height:'100%',
    // position:'fixed',
    background:'url(../imgs/home.jpg)',
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover',
    backgroundPosition:'center',
    backgroundAttachment:'fixed'
  },
  cont:{
    width:'70vw',
    // border:'2px solid red',
    borderRadius:'20px',
    boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
    boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px',
  },
  img:{
    height:'70vh',
    borderRadius:'20px',
    [theme.breakpoints.down("sm")]:{
      height:'50vh',
    },
    [theme.breakpoints.down("xs")]:{
      height:'40vh'
    }
  },
  div:{
    width:'100%',
    height:'90vh',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    paddingTop:'40px',
    [theme.breakpoints.down("sm")]:{
      flexDirection:'column',
      // paddingTop:'150px',
    }
  },
  wel:{
    fontSize:'100px',
    position:'absolute',
    textAlign:'center',
    zIndex:'1',
    fontWeight:'bold',
    color:'#166bd3',
    WebkitTextStroke:'5px #fff',
    [theme.breakpoints.down("sm")]:{
      position:'relative'
    },
    [theme.breakpoints.down("xs")]:{
      fontSize:'80px'
    }
  },
  come:{
    color:'rgb(250, 110, 12)',
  },
  h:{
    marginTop:'40px',
    display:'flex',
    justifyContent:'center',
    flexDirection:'column',
    background:'url(../imgs/home.jpg)',
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover',
    backgroundPosition:'center',
    backgroundAttachment:'fixed'
  }
}))
const Home = () => {
  const classes=useStyle();
  return (
    <>
    {/* <div className={classes.home}></div> */}
    <div className={classes.h}>
      <div className={classes.div}>
        <span className={classes.wel}>Wel<span className={classes.come}>Come</span></span>
      <div>
    <div id="carouselExampleIndicators" className={`carousel slide ${classes.cont}`} data-bs-ride="carousel" data-interval='50ms'
    style={{margin:'20px'
    }}>
  <div className="carousel-indicators" >
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
  <div className="carousel-inner" >
    <div className="carousel-item active">
      <img src="../imgs/2.jpeg" className={`d-block w-100 carl ${classes.img}`} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="../imgs/1.jpeg" className={`d-block w-100 carl ${classes.img}`} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="../imgs/3.jpeg" className={`d-block w-100 carl ${classes.img}`} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="../imgs/4.jpeg" className={`d-block w-100 carl ${classes.img}`} alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
    </div>
    <div>
      <div style={{display:'flex',justifyContent:'center',color:'white',fontSize:'50px',fontFamily:'comic sans ms',fontWeight:'800',WebkitTextStroke:'3px #166bd3',}}>Offers</div>
      {/* <img src='../imgs/home.jpg' className={classes.home}></img> */}
      <Offers/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
    </>
  )
}

export default Home