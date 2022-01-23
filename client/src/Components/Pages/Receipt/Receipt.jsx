import React from 'react';
import './Receipt.css';
export function Receipt() {
  return <div className='Contain'>
      <div className='journey' style={{boxShadow:'5px 3px 5px 3px rgb(245, 238, 238)'}}>
          <h1>The Green House</h1>
          <h4 style={{color:'grey'}}>Sait Lake,East Kolkata,Kolkata</h4>
      </div>
      <div className='GuestDetails'style={{boxShadow:'5px 3px 5px 3px rgb(245, 238, 238)'}}>
          <h2 style={{marginLeft:'-440px'}}>Guest Details</h2>
          <p  style={{marginLeft:'-460px', color:'grey',fontWeight:'649'}}>Guest Name:</p>
          <p  style={{marginLeft:'407px',marginTop:'-6%',fontWeight:'649',color:'#43474b'}}>Tejshree Gund</p>
          <p  style={{marginLeft:'-475px', color:'grey',fontWeight:'649'}}>Phone no:</p>
          <p style={{marginLeft:'407px',marginTop:'-5%',fontWeight:'649',color:'#43474b'}}>9168105437</p>
      </div>
      <div style={{boxShadow:'5px 3px 5px 3px rgb(245, 238, 238)',height:'220px'}}>
          <h2 style={{marginLeft:'-410px'}}>Booking Summary</h2>
          <p style={{marginLeft:'-407px',color:'grey', fontSize: 'medium',fontWeight:'649'}}>Table Status - Confirmed </p>
          <p style={{marginLeft:'380px',marginTop:'-6%',marginBottom:'3%',fontWeight:'649',color:'#43474b'}}>your reservation is confirmed</p>
          <p></p>
          <p style={{marginLeft:'-480px',color:'grey', fontSize: 'medium',fontWeight:'649'}}>Date & Time</p>
          <p  style={{marginLeft:'380px',marginTop:'-6%',fontWeight:'649',color:'#43474b'}}>23 Jan 2022 at 05:00 PM</p>
          
          <p style={{marginLeft:'-520px',color:'grey', fontSize: 'medium',fontWeight:'649'}}>Guests</p>
          <p  style={{marginLeft:'380px',marginTop:'-6%',marginBottom:'3%',fontWeight:'649',color:'#43474b'}}>4 Guests</p>
        
          <p style={{marginLeft:'-520px',color:'grey', fontSize: 'medium',fontWeight:'649'}}>Name</p>
          <p  style={{marginLeft:'380px',marginTop:'-6%',marginBottom:'1%',fontWeight:'649',color:'#43474b'}}>Tejshree Gund</p>
        
          <p style={{marginLeft:'-540px',color:'grey', fontSize: 'medium',fontWeight:'649'}}>ID</p>
          <p  style={{marginLeft:'380px',marginTop:'-6%',marginBottom:'2%',fontWeight:'649',color:'#43474b'}}>DO13501014</p>
      </div>
  </div>;
}
