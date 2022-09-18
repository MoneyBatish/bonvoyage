import { InputAdornment, makeStyles, TextField } from '@material-ui/core'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
const useStyle=makeStyles((theme)=>({
  cont:{
    width:'100%',
    height:'90vh',
    display:'flex',
    justifyContent:'center',
    marginTop:'70px'
  },
  img:{
    width:'100%',
    height:'400px',
    // border:'2px solid red',
    background:'url(../imgs/bg2.jpg)',
    backgroundRepeat:'no-repeat',
    backgroundPosition:'center',
    backgroundSize:'100% 400px',
    position:'absolute',
  },
  innerdiv:{
    width:'100%',
    height:'90vh',
    // border:'2px solid red',
    position:'absolute',
    display:'flex',
    flexDirection:'column',
    // justifyContent:'center',
    alignItems:'center',
    paddingTop:'25px',
    gap:'20px',
  },
  h2:{
    color:'white',
    fontWeight:'bold',
  },
  ticket:{
    width:'550px',
    height:'fit-content',
    paddingBottom:'50px',
    // border:'2px solid red',
    backgroundColor:'white',
    borderRadius:'35px',
    boxShadow: 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px',
    padding:'20px',
    [theme.breakpoints.down("xs")]:{
      width:'100%',
    }
  },
  btn:{
    backgroundColor:'rgb(255, 109, 56)',
    fontSize:'25px',
    textDecoration:'none',
    color:'white',
    padding:'15px',
    paddingLeft:'30px',
    paddingRight:'30px',
    fontWeight:'bold',
    borderRadius:'50px',
    position:'relative',
    top:'-50px',
    cursor:'pointer',
    transition:'all 1s',
    '&:hover':{
      backgroundColor:'rgb(255, 109, 56,0.7)',
      color:'white',
      transform:'scale(1.05)',
    }
  },
  radio_div:{
    position:'relative',
    display:'flex',
    alignItems:'center',
    flexDirection:'row',
    marginBottom:'30px',
    gap:'10px',
    order:'2',
  },
  radio:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    // backgroundColor:'rgb(22, 107, 211,0.2)',
    padding:'5px',
    paddingLeft:'10px',
    paddingRight:'10px',
    borderRadius:'20px',
    // color:'#166bd3',
    fontWeight:'bold',
    gap:'5px',
  },
  radio_selected:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'rgb(22, 107, 211,0.2)',
    padding:'5px',
    paddingLeft:'10px',
    paddingRight:'10px',
    borderRadius:'20px',
    color:'#166bd3',
    fontWeight:'bold',
    gap:'5px'
  },
  input:{
    display:'flex',
    flexDirection:'row',
    flexWrap:'wrap',
    gap:'40px'
  },
  date:{
    cursor:'pointer',
    width:'100%',
    border:'none',
    outline:'none',
    '&:focus':{
      outline:'none'
    },
    position:'relative',
    top:'-10px'
  },
  fielddiv:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  legend:{
    background:'white',
    width:'auto',
    paddingLeft:'10px',
    paddingRight:'10px',
    top:'-3px',
    left:'-3px',
  },
  helperText:{
    position:'relative',
    top:'-27px',
    marginTop:'5px'
  },
  adult_div:{
    position:'absolute',
    // border:'2px solid red',
    width:'300px',
    height:'200px',
    background:'white',
    zIndex:'1',
    display:'none',
  },
  adult_div_show:{
    position:'absolute',
    // border:'2px solid red',
    width:'400px',
    height:'250px',
    borderRadius:'20px',
    background:'white',
    zIndex:'2',
    top:'440px',
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
    // boxShadow: 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px',
    [theme.breakpoints.down("md")]:{
      position:'absolute',
    },
    [theme.breakpoints.down("sm")]:{
      position:'absolute',
      top:'430px',
      // left:'20px'
    }
  },
  adult_plus:{
    cursor:'pointer',
    '&:hover > i':{
      color:'#166bd3'
    }
  },
  adult_minus:{
    cursor:'pointer',
    '&:hover > i':{
      color:'rgb(255,0,0)'
    }
  },
  adult_minus_disabled:{
    color:'lightgrey'
  },
  outdiv:{
    // background:'red',
    position:'absolute',
    width:'35%',
    height:'350px',
    // border:'2px solid red',
    [theme.breakpoints.down("sm")]:{
      height:'400px',
      // border:'2px solid red',
      width:'70%',
      zIndex:'0',
    }
  },
  suggest:{
    backgroundColor:'white',
    padding:'20px',
    cursor:'pointer',
    border:'1px solid lightgrey',
    '&:hover':{
      backgroundColor:'rgb(22, 107, 211)',
      color:'white',
    }
  }
}))
const Hotel = () => {
  const [value,setvalue]=useState('local');
  const [inValue,setInValue]=useState('1 Adult');
  // const [selectedDate, setSelectedDate] = useState(new Date());
  const [checkIn,setCheckIn]=useState(new Date());
  const [checkOut,setCheckOut]=useState(new Date());
  const classes=useStyle();
  const [adult,setAdult]=useState(1);
  const [child,setChild]=useState(0);
  const [show,setShow]=useState(false);
  const [room,setRoom]=useState(1);
  const [apiData,setApiData]=useState();
  const [city,setCity]=useState('');
  const [div,setDiv]=useState(false);
  const [focus,setFocus]=useState(false);
  const [click,setClick]=useState(false);
  const config={
    headers:{
      'X-RapidAPI-Key':'bca27cf18cmshd91bd3acedb0156p15cde3jsn038b84731788',
      'X-RapidAPI-Host':'autocomplete-india.p.rapidapi.com'
    }
  }
  const fetchApi=async()=>{
    try{
    const {data}=await axios.get(`https://autocomplete-india.p.rapidapi.com/marketplace/autocomplete/india/cities/${city}`,config);
    setApiData(data);
    }
    catch(error)
    {
      console.log(error.message);
    }
  }
  // console.log(apiData);
  useEffect(()=>{
    fetchApi();
  },[city])
  useEffect(()=>{
    if(city==='')
    {
      setDiv(false);
    }
  })
  useEffect(()=>{
    if(child===0){
      setInValue(`${room} ${room>1?'Rooms':'Room'} | ${adult} ${adult>1?'Adults':'Adult'}`);
    }
    else
    {
      setInValue(`${room} ${room>1?'Rooms':'Room'} | ${adult} ${adult>1?'Adults':'Adult'} | ${child} ${child>1?'Children':'Child'}`);
    }
  })
  return (
    <div className={classes.cont}>
      <div className={classes.img}></div>
      <div className={classes.innerdiv}>
        <h2 className={classes.h2}>Book Hotels and Homestays</h2>
        <div className={classes.ticket}>
        <div className={classes.outdiv} onClick={()=>{setShow(false);setDiv(false)}}></div>
          <div>
            <div className={classes.radio_div}>
              <div className={value==='local'?classes.radio_selected:classes.radio}>
                <input type='radio' id='local' name='trip' value='local' checked={(value==='local')?'checked':''} onChange={()=>{setvalue('local')}}/>
                <label style={{cursor:'pointer'}} for='local'>India</label>
              </div>
              <div className={value==='international'?classes.radio_selected:classes.radio}>
                <input type='radio' id='international' name='trip' value='international' checked={(value==='international')?'checked':''} onChange={()=>{setvalue('international')}}/>
                <label style={{cursor:'pointer'}} for='international'>International</label>
              </div>
            </div>
            <div className={classes.input}>
            <TextField
            className={classes.dest}
            placeholder='e.g. - Area, Landmark or Property Name'
            style={{
              width:'100%',
            }}
            onFocus={()=>{setDiv(true)}}
            value={city}
            onChange={(e)=>{setCity(e.target.value);setDiv(true)}}
              id="input-with-icon-textfield"
              label="Where"
              InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </InputAdornment>
                  ),
              }}
            />
            <div
            style={{
              position:'absolute',
              width:'500px',
              height:'400px',
              // border:'2px solid red',
              top:'230px',
              zIndex:'2',
              display:div?'flex':'none',
              // justifyContent:'center',
              flexDirection:'column'
              // alignItems:'center',
            }}
            >
              {apiData?.Result.map((val)=>{
                return (
                  <div className={classes.suggest} onClick={()=>{setDiv(false);setCity(val)}}>
                    <i style={{marginRight:'10px'}} className='fa-sharp fa-solid fa-hotel'></i>
                    {val}
                  </div>
                )
              })}
            </div>
            <div
            style={{
              width:'80%',
              // border:'2px solid red',
              display:'flex',
              // justifyContent:'center',
              gap:'40px',
              alignItems:'center',
              flexDirection:'row'
            }}
            >
            <fieldset className={`border rounded-3 p-3 ${classes.fielddiv}`} style={{border:'1px solid grey',borderRadius:'5px',width:'150px',height:'55px',position:'relative',top:'-7px',
          display:'flex',
          justifyContent:'center'
          }} >
              <legend 
              className="float-none w-auto px-3"
              style={{
                fontSize:'18px',
                marginLeft:'10px',
                position:'relative',
                left:'-20px'
              }}>Check-in</legend>
              <DatePicker
               className={classes.date}
               selected={checkIn}
               onChange={(date)=>{setCheckIn(date)}}
               dateFormat='dd/MM/yyyy'
               minDate={new Date()}
               />
            </fieldset>
            <fieldset 
            className={`border rounded-3 p-3 ${classes.fielddiv}`}
            style={{
              width:'150px',
              height:'45px',
              display:'flex',
              border:'1px solid grey',
              borderRadius:'5px',
              cursor:'pointer',
              padding:'5px',
              position:'relative',
              top:'-8px',
              justifyContent:'center'
            }}>
              <legend className="float-none w-auto px-3" style={{fontSize:'18px',position:'relative',
                left:'-15px'}}>Check-out</legend>
               <DatePicker
               className={classes.date}
               selected={checkOut}
               onChange={(date)=>{setCheckOut(date)}}
               dateFormat='dd/MM/yyyy'
               minDate={new Date()}
               />
            </fieldset>
            </div>
            <div>
            <TextField value={inValue} variant='outlined'
            style={{
              width:'300px',
            }}
            label='Guests & Rooms'
            InputProps={{
              className:classes.travelinput
            }}
            FormHelperTextProps={{
              className:classes.helperText
            }}
            InputLabelProps={{
              className:classes.legend
            }}
            onFocus={()=>{
              setShow(true);
            }}
            />
            <div className={show?classes.adult_div_show:classes.adult_div}
            >
              <div style={{
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'center',
                height:'100%',
                gap:'20px'
               }}>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:'10%'}}>
                <span style={{marginRight:'25px'}}>Rooms :  </span> 
                  <div style={{
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    border:'2px solid lightgrey',
                    // backgroundColor:'lightgrey',
                    borderRadius:'12px'
                  }}>
                    <div 
                    className={classes.adult_plus}
                    style={{
                      width:'40px',
                      height:'30px',
                      display:'flex',
                      justifyContent:'center',
                      alignItems:'center',
                      textAlign:'center',
                      borderRight:'2px solid lightgrey'
                    }} onClick={()=>{setRoom(room+1)}}><i className="fa-solid fa-plus"></i>
                    </div>
                  <div 
                  style={{
                    paddingLeft:'10px',
                    paddingRight:'10px',
                  }}>
                    {room}
                  </div>
                  <div 
                  className={(room!=1)?classes.adult_minus:classes.adult_minus_disabled}
                  style={{
                      width:'40px',
                      height:'30px',
                      textAlign:'center',
                      borderLeft:'2px solid lightgrey',
                      display:'flex',
                      alignItems:'center',
                      justifyContent:'center'
                    }} onClick={()=>{if(room!=1){setRoom(room-1)}}}><i className="fa-solid fa-minus"></i>
                    </div>
                  </div>
                </div>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                  <span style={{marginRight:'25px'}}>Adults :  </span> 
                  <div style={{
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    border:'2px solid lightgrey',
                    // backgroundColor:'lightgrey',
                    borderRadius:'12px'
                  }}>
                    <div 
                    className={classes.adult_plus}
                    style={{
                      width:'40px',
                      height:'30px',
                      display:'flex',
                      justifyContent:'center',
                      alignItems:'center',
                      textAlign:'center',
                      borderRight:'2px solid lightgrey'
                    }} onClick={()=>{setAdult(adult+1)}}><i className="fa-solid fa-plus"></i>
                    </div>
                  <div 
                  style={{
                    paddingLeft:'10px',
                    paddingRight:'10px',
                  }}>
                    {adult}
                  </div>
                  <div 
                  className={(adult!=1)?classes.adult_minus:classes.adult_minus_disabled}
                  style={{
                      width:'40px',
                      height:'30px',
                      textAlign:'center',
                      borderLeft:'2px solid lightgrey',
                      display:'flex',
                      alignItems:'center',
                      justifyContent:'center'
                    }} onClick={()=>{if(adult!=1){setAdult(adult-1)}}}><i className="fa-solid fa-minus"></i>
                    </div>
                  </div>
                  
                </div>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                  <span style={{marginRight:'15px'}}>Children :  </span> 
                  <div style={{
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    border:'2px solid lightgrey',
                    // backgroundColor:'lightgrey',
                    borderRadius:'12px'
                  }}>
                    <div 
                    className={classes.adult_plus}
                    style={{
                      width:'40px',
                      height:'30px',
                      display:'flex',
                      justifyContent:'center',
                      alignItems:'center',
                      textAlign:'center',
                      borderRight:'2px solid lightgrey'
                    }} onClick={()=>{setChild(child+1)}}><i className="fa-solid fa-plus"></i>
                    </div>
                  <div 
                  style={{
                    paddingLeft:'10px',
                    paddingRight:'10px',
                  }}>
                    {child}
                  </div>
                  <div 
                  className={(child!=0)?classes.adult_minus:classes.adult_minus_disabled}
                  style={{
                      width:'40px',
                      height:'30px',
                      textAlign:'center',
                      borderLeft:'2px solid lightgrey',
                      display:'flex',
                      alignItems:'center',
                      justifyContent:'center'
                    }} onClick={()=>{if(child!=0){setChild(child-1)}}}><i className="fa-solid fa-minus"></i>
                    </div>
                  </div>
                  
                </div>
                <div
                style={{
                  display:'flex',
                  flexDirection:'column',
                  alignItems:'center'
                }}
                >
                </div>
              </div>
            </div>






            </div>
            </div>
          </div>
        </div>
        <a className={classes.btn}>SEARCH HOTELS</a>
      </div>
    </div>
  )
}

export default Hotel