import { makeStyles, SwipeableDrawer} from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import axios  from 'axios'
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
    background:'url(../imgs/bg3.jpg)',
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
    textAlign:'center',
    fontWeight:'bold',
  },
  ticket:{
    width:'fit-content',
    height:'300px',
    // border:'2px solid red',
    backgroundColor:'white',
    borderRadius:'35px',
    boxShadow: 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px',
    padding:'20px',
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
  input:{
    paddingLeft:'10px',
    height:'80%',
    '&:focus':{
        outline:'none'
    },
    border:'none',
    borderTopLeftRadius:'10px',
    borderBottomLeftRadius:'10px',
    width:'60%',
    borderRight:'2px solid grey',
  },
  wrap:{
    width:'250px',
    height:'50px',
    border:'1px solid grey',
    borderRadius:'10px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    transition:'transform 0.5s',
    '&:focus-within':{
      border:'1px solid #166bd3',
      transform:'scale(1.05)'
    }
  },
  select:{
    width:'40%',
    border:'none',
    // border:'2px solid red',
    height:'100%',
    borderTopRightRadius:'10px',
    borderBottomRightRadius:'10px',
    textAlign:'center',
    '&:focus':{
      outline:'none',
    }
  },
  exchange:{
    position:'absolute',
    // border:'1px solid grey',
    padding:'7px',
    paddingLeft:'10px',
    paddingRight:'10px',
    borderRadius:'10px',
    border:'1px solid lightgrey',
    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
  },
  exicon:{
    color:'#166bd3',
    cursor:'pointer',
  }
}))
const Forex = () => {
    const [apiData,setApiData]=useState();
    const [apiData2,setApiData2]=useState();
    const [curr1,setCurr1]=useState('INR');
    const [curr2,setCurr2]=useState('USD');
    const [rate,setRate]=useState(0);
    const [input1,setInput1]=useState(1);
    const [input2,setInput2]=useState();
    const fetchApi=async()=>{
      const {data}=await axios.get(`https://api.exchangerate-api.com/v4/latest/${curr1}`);
      const map=Object.entries(data.rates);
      // console.log(data.rates[curr2]);
      setApiData(map);
      setRate(data.rates[curr2]);
    }
    const fetchApi2=async()=>{
      const {data}=await axios.get(`https://api.exchangerate-api.com/v4/latest/${curr2}`);
      const map=Object.entries(data.rates);
      // console.log(data.rates[curr2]);
      // setRate(data.rates[curr2]);
      setApiData2(map);
    }
    useEffect(()=>{
      fetchApi();
    },[curr1,curr2]);
    useEffect(()=>{
      fetchApi2();
    },[curr2,curr1])
    const exchange=()=>{
      const temp=curr1;
      setCurr1(curr2);
      setCurr2(temp);
    }
    const classes=useStyle();
  return (
    <div className={classes.cont}>
      <div className={classes.img}></div>
      <div className={classes.innerdiv}>
        <h2 className={classes.h2}>Buy or Sell Foreign Currency Notes</h2>
        <div className={classes.ticket}>
            <div style={{
                width:'100%',
                height:'250px',
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
              }}>
                <div
                className={classes.wrap}
                id='div'
                style={{
                  marginRight:'60px'
                }}
                >
                    <input type='number' 
                    value={input1}
                    min='0'
                    onChange={(e)=>{
                      if(e.target.value<0)
                      {
                        setInput1(e.target.value*-1);
                      }
                      else
                      {
                        setInput1(e.target.value);
                      }
                    }}
                    className={classes.input}/>
                    <select name='curr1' id='curr1'
                    value={curr1}
                    onChange={(e)=>{
                      const arr=e.target.value.split(',');
                      // console.log(arr[1]);
                      setCurr1(arr[0]);
                    }}
                    className={classes.select}
                    >
                    {apiData?.map(([curr,val])=>{
                        return <option value={[curr,val]}>{curr}</option>
                      })}
                    </select>
                </div>
                <div className={classes.exchange}
                onClick={()=>{exchange()}}
                >
                <i className={`fa-solid fa-right-left ${classes.exicon}`}></i>
                </div>
                <div
                className={classes.wrap}
                >
                    <input type='number'
                    disabled
                    min='0'
                    value={(input1*rate).toFixed(4)}
                    className={classes.input}/>
                    <select name='curr2' id='curr2'
                    value={curr2}
                    onChange={(e)=>{
                      const arr=e.target.value.split(',');
                      // console.log(arr[0]);
                      setCurr2(arr[0]);
                      setRate(arr[1]);
                    }}
                    className={classes.select}
                    >
                    {apiData2?.map(([curr,val])=>{
                        return <option value={[curr,val]}>{curr}</option>
                      })}
                    </select>
                </div>
              </div>
        </div>
        <a className={classes.btn}>EXCHANGE CURRENCY</a>
      </div>
    </div>
  )
}

export default Forex