import React from 'react';
import './Receipt.css';
export function Receipt() {
  return <div className='Contain'>
      <div className='journey' style={{boxShadow:'5px 3px 5px 3px rgb(245, 238, 238)'}}>
          <h1>The Green House</h1>
          <h4 style={{color:'grey'}}>Sait Lake,East Kolkata,Kolkata</h4>
      </div>
      <div className='GuestDetails'style={{boxShadow:'5px 3px 5px 3px rgb(245, 238, 238)'}}>
          <h2 style={{marginLeft:'-407px'}}>Guest Details</h2>
          <p  style={{marginLeft:'-407px', color:'grey', fontSize: 'medium'}}>Guest Name:</p>
          <p  style={{marginLeft:'407px',marginTop:'-5%'}}>Tejshree Gund</p>
          <p  style={{marginLeft:'-407px', color:'grey', fontSize: 'medium'}}>Phone no:</p>
          <p style={{marginLeft:'407px',marginTop:'-5%'}}>9168105437</p>
      </div>
      <div style={{boxShadow:'5px 3px 5px 3px rgb(245, 238, 238)',height:'340px'}}>
          <h2 style={{marginLeft:'-407px'}}>Booking Summary</h2>
          <p style={{marginLeft:'-407px',color:'grey', fontSize: 'medium'}}>Table Status - Confirmed </p>
          <p style={{marginLeft:'380px',marginTop:'-8%'}}>your reservation is confirmed</p>
          <br/>
          <p style={{marginLeft:'-407px',color:'grey', fontSize: 'medium'}}>Date & Time</p>
          <p  style={{marginLeft:'380px',marginTop:'-8%'}}>23 Jan 2022 at 05:00 PM</p>
          <br/>
          <p style={{marginLeft:'-407px',color:'grey', fontSize: 'medium'}}>Guests</p>
          <p  style={{marginLeft:'380px',marginTop:'-8%'}}>4 Guests</p>
          <br/>
          <p style={{marginLeft:'-407px',color:'grey', fontSize: 'medium'}}>Name</p>
          <p  style={{marginLeft:'380px',marginTop:'-8%'}}>Tejshree Gund</p>
          <br/>
          <p style={{marginLeft:'-407px',color:'grey', fontSize: 'medium'}}>ID</p>
          <p  style={{marginLeft:'380px',marginTop:'-8%'}}>DO13501014</p>
      </div>
  </div>;
}
