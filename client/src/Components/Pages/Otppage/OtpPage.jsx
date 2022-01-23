import React from 'react';
import "./OtpPage.css"
function OtpPage() {
  return <div className="page">
      <h3 style={{marginTop:'20px'}}>Enter OTP to confirm</h3>
      <div className="info">
      <img className="imgs" src="https://img.cdn.zostel.com/zostel/gallery/images/s40gOMmTTraGlABTpUKs1w/superior-2-bed-mixed-dorm-with-shared-bathr_23DXLDc.jpg?w=64" alt=""/>
      <h4 className='ghouse'style={{marginTop:'0%'}}>The Green House</h4>
      <h5 className='lake'>Sait Lake</h5>
      <p className='guest'style={{color:'grey'}}>2 Guests</p>
      </div>
      <h6 className='otp'>Enter OTP sent to 915888500</h6>
      <input required id="inp"  className="input2"type="text" name="OTP"  placeholder='oooooo' />
    
      <button className='buttons'>confirm</button>
  </div>;
}

export {OtpPage};
