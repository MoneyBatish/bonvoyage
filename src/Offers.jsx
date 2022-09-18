import React from 'react'
import './Offers.scss'
import Offer from './Offer'
import { makeStyles } from '@material-ui/core'
const useStyles=makeStyles((theme)=>({
        home:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        position:'relative',
          width:'100%',
          flexDirection:'row',
          flexWrap:'wrap',
          [theme.breakpoints.down("md")]:{
            flexDirection:'column',
          },
        }
}))

const Offers = () => {
        const classes=useStyles();
  return (
    <div 
    className={classes.home}
    id='offers'>
        <ul
        style={{
                display:'flex',
                justifyContent:'center',
        }}
        >
        <Offer link='https://media.istockphoto.com/photos/commercial-jet-flying-over-clouds-picture-id155380716?k=20&m=155380716&s=612x612&w=0&h=MlVD8PFPPat21yCmZY4KBLLaV0koQrc_Sn-I2Ar5LoI='
                subject="International Flights" detail="Save upto $1499 on flights to Canada and USA"
                cost="INR 1,50,000-2,50,000" info="CODE: IMMIGRANT22" date="Upto DEC 2022"/>
        <Offer link='https://media.sciencephoto.com/f0/34/75/96/f0347596-800px-wm.jpg'
                subject="National Flights" detail="Save upto Rs.11999 on flights to Delhi and Mumbai"
                cost="INR 1,50,000-2,50,000" info="CODE: IMMIGRANT22" date="Upto DEC 2022"/>
        <Offer link='https://images.news18.com/ibnlive/uploads/2021/07/1626947255_aeroplane.png?im=FitAndFill,width=1200,height=1200'
                subject="International Flights" detail="Save upto $1199 on flights to Canada and USA"
                cost="INR 1,50,000-2,50,000" info="CODE: IMMIGRANT22" date="Upto DEC 2022"/>
        <Offer link='https://cdn.shopify.com/s/files/1/0061/7735/7891/articles/airplanes-actuators_17389e9d-f144-4f38-8d51-f8632a63c39c_1024x.jpg?v=1585138977'
                subject="National Flights" detail="Save upto Rs.9999 on flights to Chandigarh and Delhi"
                cost="INR 1,50,000-2,50,000" info="CODE: IMMIGRANT22" date="Upto DEC 2022"/>
        <Offer link='https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/orlandofl/5900_pool_b92df465-0c67-4161-b8bb-67f9fc301094.jpg'
                subject="Chandigarh Hotels" detail="Save upto Rs.15000 on Advance Booking Room"
                cost="INR 1,50,000-2,50,000" info="CODE: IMMIGRANT22" date="Upto DEC 2022"/>
        <Offer link='https://content.r9cdn.net/himg/c3/f2/88/leonardo-1153331-standard-hotel-high-line-guest-rooms-corner-view_O-570050.jpg'
                subject="Delhi Hotels" detail="Save upto Rs.10000 on Advance Booking Room"
                cost="INR 1,50,000-2,50,000" info="CODE: IMMIGRANT22" date="Upto DEC 2022"/>
        <Offer link='http://photos.demandstudios.com/getty/article/99/203/455671219.jpg'
                subject="Mumbai Hotels" detail="Save upto Rs.12000 on Advance Booking Room"
                cost="INR 1,50,000-2,50,000" info="CODE: IMMIGRANT22" date="Upto DEC 2022"/>
        <Offer link='https://assets.tivolihotels.com/image/upload/q_auto,f_auto,c_limit,w_1378/media/minor/tivoli/images/brand_level/footer/1920x1000/thr_aboutus1_1920x1000.jpg'
                subject="Pune Hotels" detail="Save upto Rs.14000 on Advance Booking Room"
                cost="INR 1,50,000-2,50,000" info="CODE: IMMIGRANT22" date="Upto DEC 2022"/>
    </ul>
    </div>
  )
}

export default Offers