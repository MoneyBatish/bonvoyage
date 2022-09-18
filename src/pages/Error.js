import React from 'react'
import { Link } from 'react-router-dom'
import '../CSS/Error.css'
const Error = () => {
  return (
    <div className='container'>
        <section className="page_404">
		<div className="contant_box_404">
            <h1
            style={{
                fontSize:'70px',
                textAlign:'center',
                fontFamily:'sans-serif',
                fontWeight:'bold',

            }}
            >404</h1>
		<h3
        style={{
            fontSize:'30px',
            fontFamily:'sans-serif',
            textAlign:'center',
        }}
        >
		Look like you're lost
		</h3>
        <div className='four_zero_four_bg'></div>
		<p
        style={{
            fontSize:'30px',
            fontFamily:'sans-serif',
            textAlign:'center'
        }}
        >The page you are looking for not available!</p>
		
		<Link to='/' className="gotohome">Back to Home</Link>
	</div>
    </section>
    </div>
  )
}

export default Error