import { makeStyles, TextField } from '@material-ui/core'
import zIndex from '@material-ui/core/styles/zIndex';
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
  date:{
    cursor:'pointer',
    width:'100%',
    border:'none',
    outline:'none',
    '&:focus':{
      outline:'none'
    },
    position:'relative',
    top:'-10px',
  },
  img:{
    width:'100%',
    height:'400px',
    // border:'2px solid red',
    background:'url(../imgs/wave.png)',
    backgroundRepeat:'no-repeat',
    backgroundPosition:'center',
    backgroundSize:'100% 400px',
    position:'absolute',
  },
  innerdiv:{
    width:'100%',
    height:'90vh',
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
    textAlign:'center'
  },
  ticket:{
    width:'85vw',
    height:'fit-content',
    // border:'2px solid red',
    backgroundColor:'white',
    borderRadius:'35px',
    boxShadow: 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px',
    padding:'20px',
    [theme.breakpoints.down("md")]:{
      height:'100%'
    },
    [theme.breakpoints.down("sm")]:{
      width:'100%',
      // height:'700px',
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
    display:'flex',
    alignItems:'center',
    flexDirection:'row',
    marginBottom:'30px',
    position:'relative'
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
    gap:'5px',
    // color:'#166bd3',
    fontWeight:'bold',
  },
  radio_selected:{
    display:'flex',
    gap:'5px',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'rgb(22, 107, 211,0.2)',
    padding:'5px',
    paddingLeft:'10px',
    paddingRight:'10px',
    borderRadius:'20px',
    color:'#166bd3',
    fontWeight:'bold',
  },
  input:{
    display:'flex',
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'flex-start',
    gap:'40px',
    [theme.breakpoints.down("sm")]:{
      flexDirection:'column',
      gap:'30px',
      marginBottom:'30px',
      // alignItems:'center',
    },
  },
  fielddiv:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  inrtxt:{
    fontSize:'8px',
    lineHeight:'12px',
    width:'100%',
    overflow:'hidden'
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
    right:'150px',
    top:'235px',
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
    // boxShadow: 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px',
    [theme.breakpoints.down("sm")]:{
      position:'absolute',
      top:'500px',
      left:'20px'
    }
  },
  outdiv:{
    // background:'red',
    position:'absolute',
    width:'85%',
    height:'300px',
    // border:'2px solid red',
    [theme.breakpoints.down("sm")]:{
      height:'100%',
      // border:'2px solid red',
      width:'97%',
      zIndex:'0',
    }
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
  exchange:{
    position:'relative',
    // border:'1px solid grey',
    padding:'7px',
    paddingLeft:'10px',
    paddingRight:'10px',
    height:'40px',
    borderRadius:'10px',
    border:'1px solid lightgrey',
    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
    [theme.breakpoints.down("md")]:{
      // top:'230px'
      width:'40px',
      textAlign:'center',
      alignSelf:'center',
    }
  },
  exicon:{
    color:'#166bd3',
    cursor:'pointer',
  },
  fromto:{
    // border:'1px solid red',
    display:'flex',
    // justifyContent:''
    gap:'20px'
  },
  farediv:{
    // position:'relative',
    width:'100%',
    display:'flex',
    justifyContent:'flex-start',
    alignItems:'center',
    // marginLeft:'30px',
    [theme.breakpoints.down("md")]:{
      position:'relative',
      marginLeft:'0px',
      top:'-20px',
      flexDirection:'column',
      alignItems:'normal',
      gap:'10px',
    },
  },
  radio_fare_selected:{
    height:'100%',
    padding:'10px',
    backgroundColor:'rgb(22, 107, 211,0.2)',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    borderRight:'3px solid white',
  },
  radio_fare:{
    height:'100%',
    padding:'10px',
    backgroundColor:'rgb(211,211,211,0.5)',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    borderRight:'3px solid white',
  },
  fare_radio_div:{
    display:'flex',
    // justifyContent:'center',
    alignItems:'center',
    justifyContent:'center',
    width:'fit-content',
    zIndex:'1',
    borderRadius:'10px',
    // border:'2px solid red',
    height:'60px',
  },
  cal:{
    position:'absolute',
    zIndex:'2'
  }
}))
const Flight = () => {
  const [ret,setRet]=useState(false);
  const [value,setvalue]=useState('one-way');
  const [adult,setAdult]=useState(1);
  const [child,setChild]=useState(0);
  const [show,setShow]=useState(false);
  const [inValue,setInValue]=useState('1 Adult');
  const classes=useStyle();
  const [cValue,setCValue]=useState('economy');
  const [fValue,setFValue]=useState('Regular');
  const [dep,setDep]=useState(new Date());
  useEffect(()=>{
    if(child===0){
    setInValue(`${adult} Adult`);
    }
    else
    {
      setInValue(`${adult} Adults,${child} Children`);
    }
  })
  return (
    <div className={classes.cont}>
      <div className={classes.img}></div>
      <div className={classes.innerdiv}>
        <h2 className={classes.h2}>Book Domestic and International Flight Tickets</h2>
        <div className={classes.ticket}>
        <div className={classes.outdiv} onClick={()=>{setShow(false)}}></div>
          <div>
          <div className={classes.radio_div}>
              <div className={value==='one-way'?classes.radio_selected:classes.radio}>
                <input type='radio' id='one-way' name='trip' value='one-way' checked={(value==='one-way')?'checked':''} onChange={()=>{setvalue('one-way')}}/>
                <label for='one-way'>One Way</label>
              </div>
              <div className={value==='round-trip'?classes.radio_selected:classes.radio}>
                <input type='radio' id='round-trip' name='trip' value='round-trip' checked={(value==='round-trip')?'checked':''} onChange={()=>{setvalue('round-trip')}}/>
                <label for='round-trip'>Round-trip</label>
              </div>
              <div className={value==='multi-city'?classes.radio_selected:classes.radio}>
                <input type='radio' id='multi-city' name='trip' value='multi-city' checked={(value==='multi-city')?'checked':''} onChange={()=>{setvalue('multi-city')}}/>
                <label for='multi-city'>Multi-city</label>
              </div>
            </div>
            <div className={classes.input}>
              <div
              className={classes.fromto}
              >
            <TextField
              id="outlined-required"
              label="From"
              variant="outlined"
              InputLabelProps={{
                className:classes.legend
              }}
            />
            <div className={classes.exchange}
                onClick={()=>{}}
                >
                <i className={`fa-solid fa-right-left ${classes.exicon}`}></i>
                </div>
            <TextField
              id="outlined-required"
              label="To"
              variant="outlined"
              InputLabelProps={{
                className:classes.legend
              }}
            />
            </div>
            <fieldset style={{border:'1px solid grey',borderRadius:'5px',width:'180px',height:'62px',position:'relative',top:'-8px',
          display:'flex',
          justifyContent:'center'
          }} 
          className={`border rounded-3 p-3 ${classes.fielddiv}`}
          >
              <legend style={{
                marginLeft:'10px',
                fontSize:'15px',
                position:'relative',
                left:'-20px'
              }}
              className="float-none w-auto px-3"
              >Departure</legend>
            {/* <input className={classes.date} style={{border:'none',borderRadius:'10px',padding:'5px'}} type="date" name="date"></input>
             */}
             <DatePicker
               className={classes.date}
               selected={dep}
               onChange={(date)=>{setDep(date)}}
               dateFormat='dd/MM/yyyy'
               minDate={new Date()}
               popperClassName={classes.cal}
               />
            </fieldset>
            <fieldset 
            className={`border rounded-3 p-3 ${classes.fielddiv}`}
            style={{
              width:'150px',
              height:'43px',
              display:'flex',
              border:'1px solid grey',
              borderRadius:'5px',
              cursor:'pointer',
              padding:'5px',
              position:'relative',top:'-9px',
              paddingTop:'10px',
              paddingLeft:'10px',
              marginBottom:'10px',
            }}
            onClick={()=>{setRet(true)}}
            >
              <legend className="float-none w-auto px-3"
              style={{
                position:'relative',
                left:'-12px',
                fontSize:'15px',
              }}
              >{ret?
              <div>
                <span>Added</span>
                <i 
                style={{
                  color:'green',
                  fontSize:'20px',
                  marginLeft:'5px',
                  marginRight:'5px',
                }}
                className="fa-solid fa-circle-check"></i>
              </div>
              :<span>Return</span>}</legend>
              <span className={classes.inrtxt} style={{fontSize:'12px',position:'relative',top:'-5px'}}>Click to add a return flight for better discounts</span>
            </fieldset>
            <TextField value={inValue} variant='outlined'
            label='Travellers & Class'
            helperText={cValue.toUpperCase()}
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
                <span>Travel Class : </span>
                <div className={classes.radio_div}>
              <div className={cValue==='economy'?classes.radio_selected:classes.radio}>
                <input type='radio' id='economy' name='trip2' value='economy' checked={(cValue==='economy')?'checked':''} onChange={()=>{setCValue('economy')}}/>
                <label for='economy'>Economy</label>
              </div>
              <div className={cValue==='business'?classes.radio_selected:classes.radio}>
                <input type='radio' id='business' name='trip2' value='business' checked={(cValue==='business')?'checked':''} onChange={()=>{setCValue('business')}}/>
                <label for='business'>Bussiness</label>
              </div>
              <div className={cValue==='first-class'?classes.radio_selected:classes.radio}>
                <input type='radio' id='first-class' name='trip2' value='first-class' checked={(cValue==='first-class')?'checked':''} onChange={()=>{setCValue('first-class')}}/>
                <label for='first-class'>First Class</label>
              </div>
            </div>
                </div>
              </div>
            </div>
            {/* Fare Type */}
            <div 
            className={classes.farediv}>
              <div style={{
                width:'70px',
                fontSize:'13px',
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                gap:'5px',
              }}>
                <span>Select A Fare Type</span>
                <span style={{fontSize:'20px'}}>:</span>
              </div>
              {/* fare type radio button */}
              <div
              className={classes.fare_radio_div}
              >
              {["Regular","Armed Forces","Senior Citizen","Student","Doctors & Nurses"].map((val)=>{
                return (
                  <div className={fValue===val?classes.radio_fare_selected:classes.radio_fare}
                  style={{
                    borderTopLeftRadius:val==='Regular'?'10px':'0px',
                    borderBottomLeftRadius:val==='Regular'?'10px':'0px',
                    borderTopRightRadius:val==='Doctors & Nurses'?'10px':'0px',
                    borderBottomRightRadius:val==='Doctors & Nurses'?'10px':'0px',
                    gap:'10px',
                  }}
                  >
                      <input type='radio' id={val} name='trip3' value={val} checked={(fValue===val)?'checked':''} onChange={()=>{setFValue(val)}}/>
                      <label style={{cursor:'pointer'}} for={val}>{val}</label>
                  </div>
                )
              })}
              </div>
            </div>

            <div>
            </div>
            </div>
          </div>
        </div>
        <a className={classes.btn}>SEARCH FLIGHTS</a>
      </div>
    </div>
  )
}

export default Flight