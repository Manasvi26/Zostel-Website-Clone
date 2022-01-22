import styled from "styled-components"
import "./UpperDescription.css";
import {MdWifi,MdRoomService,MdTerrain,MdSportsEsports,MdFreeBreakfast,MdAirlineSeatIndividualSuite,MdHotTub,MdCasino,MdLuggage,MdLocalLaundryService,MdLocalDrink,MdRestaurant,MdBathtub,MdLayers}  from "react-icons/md";
import {VscVm} from "react-icons/vsc"
import {HiLightBulb} from "react-icons/hi"


const Button=styled.button`
    --text-opacity: 1;
    color: rgba(241,88,36,var(--text-opacity));
    font-size: .875rem;
    font-weight: 500;
    padding: 0;
    line-height: inherit;
    cursor: pointer;
    background-color: transparent;
    background-image: none;
    -webkit-appearance: button;
    text-transform: none;
    overflow: visible;
    font-family: inherit;
    margin: 0;
    box-sizing: border-box;
    border: 0 solid #e2e8f0;
    text-rendering: auto;
    letter-spacing: normal;
    word-spacing: normal;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: center;
    align-items: flex-start;
    --bg-opacity: 1;
    font-weight: bolder;
    font-size: 16px;

`


    
  

export const UpperDescription=()=>{

    const handleShow=(e)=>{
        let init=document.getElementById("init");
        let final=document.getElementById("final");
        console.log(init);

        if (init.style.display==="block"){
            init.style.display="none";
            final.style.display="block";
        }
    }
    const handleShowv1=(e)=>{
        let init=document.getElementById("init");
        let final=document.getElementById("final");
        console.log(init);
        if (final.style.display==="block"){
            final.style.display="none";
            init.style.display="block";
        }
    }

    return (<div className="upperDesc-container">
         <div className="headerimg">
             <div className="subimg">
                 <img style={{borderRadius:"8px 0 0 8px"}} src="https://img.cdn.zostel.com/zostel/gallery/images/kR55bIDpRYC-2wYqnlT6jA/manali-20201112102605.jpg?w=946" alt="" />
             </div>
             <div className="subgp">
                 <div><img src="https://img.cdn.zostel.com/zostel/gallery/images/x7JkdsaZR-Se_PPX0NBN2g/manali-exterior-full-20201105110532.jpg?w=410" alt="" className="subgp1" /></div>
                 <div><img src="https://img.cdn.zostel.com/zostel/gallery/images/2B_i6AW9RTaNmY6d-2Bcmw/manali-board-20201105110533.jpg?w=410" alt="" className="subgp2" /></div>
                 <div><img src="https://img.cdn.zostel.com/zostel/gallery/images/15R001HDS2Cc_wCv97eAPQ/manali-garden-cafe-20201105110535.jpg?w=410" alt="" className="subgp3" />
                      <img style={{marginTop:"-25%",marginBottom:"8%",marginLeft:"40%"}} src="https://zostel-clone-kerrybli.vercel.app/static/media/viewPhoto.a3dbed0d.svg" alt=""/>
                 </div>
             </div>
         </div>
        <div style={{display: "flex",flexDirection:"row",border:"2px solid red",marginTop:"-80%"}}>
            <div  style={{marginLeft:"11%"}}>
                <h1 style={{color:"#f15824",  fontWeight:"bolder"}}>Zostel Manali</h1>
                <div id="init" style={{display:"block"}}>
                  <p style={{align:"center",fontStretch:"ultra-expanded",color:"#4d585b", fontSize:"18px", lineHeight:"1.5em",fontWeight:"bolder",overflow: "hidden", boxSizing: "border-box",border: "0 solid #e2e8f0"}}>
                  Zostel Manali is set amidst panoramic Himalayan views, apple orchards and a 
                  <br/>gorgeous garden cafe - at the unbeatable location of Old Manali. Manali calls out to <br />
                  the adventure and mountain lovers alike. With a gushing Beas river to augment its <br/> 
                  beauty, Manali is situated in a valley with views of high peaks all around. Proud of <br/> 
                  offering something for everybody, Manali is an old favourite among backpackers and <br/>
                  </p>
                 <Button type="button" onClick={handleShow}>Show More</Button>
                </div>
                         <div id="final" style={{display:"none"}}>
                         <p style={{align:"center",fontSize:"18px", fontSpacing:"50px",fontStretch:"expanded",color:"#4d585b",  lineHeight:"1.5em",fontWeight:"bolder",overflow: "hidden", boxSizing: "border-box",border: "0 solid #e2e8f0"}}>
                        Zostel Manali is set amidst panoramic Himalayan views, apple orchards and a 
                        <br/>gorgeous garden cafe - at the unbeatable location of Old Manali. Manali calls out to 
                        <br /> the adventure and mountain lovers alike. With a gushing Beas river to augment its <br/> 
                        beauty, Manali is situated in a valley with views of high peaks all around. Proud of <br/> 
                        offering something for everybody, Manali is an old favourite among backpackers and <br/>
                        tourists alike. The adventure activities including snowboarding, trekking, and<br/> 
                        paragliding set adrenaline rushing in adventure lovers and makes it their go-to <br/> 
                        destination all year round. Zostel Manali is located right at the heart of Old Manali, the <br/> 
                        hub of backpackers. In search of peace and breathtaking views of the mountains, we <br/>
                        went off-road and built the hostel in the village of Old Manali. The hostel also houses <br/> 
                        The Garden Café, which serves authentic Himachali food.
                        </p>
                         <Button type="button" onClick={handleShowv1}>Show less</Button>
                     </div>  
                   

            </div>
            <div style={{display: 'flex', flexDirection: 'row',border: '1px solid black',marginLeft:"2%",marginTop:"2%",paddingTop:"1%"}}>
                <ul style={{listStyleType:"none"}}>
                    <li><MdTerrain style={{width:"20px",height:"25px"}}/><span style={{color:"#4d585b",paddingBottom:"15px",verticalAlign:"Top"}}>&nbsp;<strong>Mountain View</strong></span></li>
                    <li><MdWifi style={{width:"20px",height:"25px"}}/><span style={{color:"#4d585b",paddingBottom:"15px",verticalAlign:"Top"}}>&nbsp;<strong>Free Wi-Fi</strong></span></li>
                    <li><MdRoomService style={{width:"20px",height:"25px"}}/><span style={{color:"#4d585b",paddingBottom:"15px",verticalAlign:"Top"}}>&nbsp;<strong>24/7 Reception</strong></span></li>
                    <li><MdSportsEsports style={{width:"20px",height:"25px"}}/><span style={{color:"#4d585b",paddingBottom:"15px",verticalAlign:"Top"}}>&nbsp;<strong> In-house Activities</strong></span></li>
                    <li><MdFreeBreakfast style={{width:"20px",height:"25px"}}/><span style={{color:"#4d585b",paddingBottom:"15px",verticalAlign:"Top"}}>&nbsp;<strong> Breakfast (Extra)</strong></span></li>
                    <li><MdAirlineSeatIndividualSuite style={{width:"20px",height:"25px"}}/><span style={{color:"#4d585b",paddingBottom:"15px",verticalAlign:"Top"}}>&nbsp;<strong> Linen Included</strong></span></li>
                </ul>
                <ul style={{listStyleType:"none"}}>
                    <li><MdHotTub style={{width:"20px",height:"25px"}}/><span style={{color:"#4d585b",paddingBottom:"15px",verticalAlign:"Top"}}>&nbsp;<strong> Hot water</strong></span></li>
                    <li><VscVm style={{width:"20px",height:"25px"}}/><span style={{color:"#4d585b",paddingBottom:"15px",verticalAlign:"Top"}}>&nbsp;<strong> Common Television</strong></span></li>
                    <li><MdCasino style={{width:"20px",height:"25px"}}/><span style={{color:"#4d585b",paddingBottom:"15px",verticalAlign:"Top"}}>&nbsp;<strong> Common hangout area</strong></span></li>
                    <li><HiLightBulb style={{width:"20px",height:"25px"}}/><span style={{color:"#4d585b",paddingBottom:"15px",verticalAlign:"Top"}}>&nbsp;<strong> Bedside Lamps</strong></span></li>
                    <li><MdLuggage style={{width:"20px",height:"25px"}}/><span style={{color:"#4d585b",paddingBottom:"15px",verticalAlign:"Top"}}>&nbsp;<strong> Storage Facility</strong></span></li>
                </ul>
                <ul style={{listStyleType:"none"}}>
                    <li><MdLocalLaundryService style={{width:"20px",height:"25px"}}/><span style={{color:"#4d585b",paddingBottom:"15px",verticalAlign:"Top"}}>&nbsp;<strong> Laundry Services (Extra)</strong></span></li>
                    <li><MdLocalDrink style={{width:"20px",height:"25px"}}/><span style={{color:"#4d585b",paddingBottom:"15px",verticalAlign:"Top"}}>&nbsp;<strong> Water Dispenser</strong></span></li>
                    <li><MdRestaurant style={{width:"20px",height:"25px"}}/><span style={{color:"#4d585b",paddingBottom:"15px",verticalAlign:"Top"}}>&nbsp;<strong> Cafe </strong></span></li>
                    <li><MdBathtub style={{width:"20px",height:"25px"}}/><span style={{color:"#4d585b",paddingBottom:"15px",verticalAlign:"Top"}}>&nbsp;<strong> Shower</strong></span></li>
                    <li><MdLayers style={{width:"20px",height:"25px"}}/><span style={{color:"#4d585b",paddingBottom:"15px",verticalAlign:"Top"}}>&nbsp;<strong> Towels on rent </strong></span></li>
                </ul>
            </div>
        </div>
    </div>)
}


