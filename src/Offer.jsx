import React from 'react'
import './Offers.scss'

const Offer = (props) => {
  return (
    <>
    <li className="booking-card" style={{backgroundImage: `url(${props.link})`}}>
    <div className="book-container">
      <div className="content">
        <button className="btn">Claim</button>
      </div>
    </div>
    <div className="informations-container">
      <h2 className="title">{props.subject}</h2>
      <p className="sub-title">{props.detail}</p>
      <p className="price"><svg className="icon" style={{width:'24px',height:'24px'}} viewBox="0 0 24 24">
    <path fill="currentColor" d="M3,6H21V18H3V6M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M7,8A2,2 0 0,1 5,10V14A2,2 0 0,1 7,16H17A2,2 0 0,1 19,14V10A2,2 0 0,1 17,8H7Z" />
</svg>{props.cost}</p>
      <div className="more-information">
        <div className="info-and-date-container">
          <div className="box info">
            <svg className="icon" style={{width:'24px',height:'24px'}} viewBox="0 0 24 24">
      <path fill="currentColor" d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z" />
  </svg>
            <p>{props.info}</p>
          </div>
          <div className="box date">
            <svg className="icon" style={{width:'24px',height:'24px'}} viewBox="0 0 24 24">
      <path fill="currentColor" d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z" />
  </svg>
            <p>{props.date}</p>
          </div>
        </div>
        </div>
    </div>
  </li>
    </>
  )
}

export default Offer