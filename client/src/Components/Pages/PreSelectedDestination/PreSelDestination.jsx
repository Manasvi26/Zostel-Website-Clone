import { useState } from 'react'
import './PreSelDestination.css'
import { Footer } from '../SelectedDestination/Footer/Footer'
import { useNavigate } from 'react-router-dom';
import { SelectedDestination } from '../SelectedDestination/SelectedDest';

export const PreSelDestination = () => {

    const [showHide, setShowHide] = useState(false);
    const navigate = useNavigate();

    const navigteToDest = () => {
        navigate('/destination')
    }

    const typeOfZostel = [{
        pre_title: "ZOSTEL",
        title: "Zostel Manali",
        description: "Chill with us at Zostel Manali amidst panoramic Himalayan views, apple orchard and a gorgeous garden cafe. Located at the unbeatable location of Old Manali, our backpacker hostel is an ideal place to laze around with other backpackers.",
        image: "https://img.cdn.zostel.com/zostel/gallery/images/kR55bIDpRYC-2wYqnlT6jA/manali-20201112102605.jpg?w=700",
        price: "499"
    },
    {
        pre_title: "ZOSTEL HOME",
        title: "Zostel Home Burwa",
        description: "Stay with us in Manali at an offbeat location away from crowds in a peaceful, premium homestay. Enjoy the warm hospitality and activities and live the simple, rural life with the locals!",
        image: "https://img.cdn.zostel.com/zostel/gallery/images/DF_aaAWHSBmzAC2ZJVyedw/zostel-homes-burwa-20210716020158.jpg?w=700",
        price: "649"
    },
    {
        pre_title: "ZOSTEL HOME",
        title: "Zostel Home Shuru",
        description: "Boasting a bar, a garden as well as a terrace, Zostel Homes Shuru is situated in Manāli, within 6 km of Hidimba Devi Temple and 5 km of Tibetan Monastery.",
        image: "https://img.cdn.zostel.com/zostel/gallery/images/nBB732AKQAKxMvBy8uOuLw/shuru-manali-20201112105524.jpg?w=700",
        price: "4499"
    },
    {
        pre_title: "TRUSTED BY ZOSTEL",
        title: "GlampEco",
        description: "For the first time in India, you can experience a stay in Geodesic Domes Glamping tents which are perched at a height of over 2600 mt, with a splendid view of Dhauldhar ranges and Manali valley.",
        image: "https://img.cdn.zostel.com/zostel/gallery/images/e_SVFjxtRsOFJUggY84DGg/glampeco-20210316124546.jpg?w=700",
        price: "700"
    },
    ]

    const blogs=[{
        image:"https://img.cdn.zostel.com/blog_photo/ECO_WEBPAGE_BANNER-min.jpg",
        title:"great ways to be Environmental Friendly...",
        description:"With global warming and climate change becom...",
        name:"Ellie Coverdale"
    },
    {
        image:"https://img.cdn.zostel.com/blog_photo/old/River.jpg",
        title:"Manali Travelogue: Unexplored Old Manal...",
        description:"Offbeat places in Manali away from the noise of t...",
        name:"Siddharth Juneja"
    },
    {
        image:"https://img.cdn.zostel.com/blog_photo/old/rameshwaram.jpg",
        title:"6 Movies that show India as THE place to...",
        description:"Scenic locations that you saw in movies identified...",
        name:"Gaya"
    },
]

    const handleShowHide = () => {
        if (showHide) {
            setShowHide(false);
        } else {
            setShowHide(true);
        }
    }



    const StayPlanes = () => {
        return <>
            <div className='stay-plans-container'>
                <h2 className='s-p-title'>Stays at <span className='s-p-sub-title'>Manali</span></h2>
                <div className='stay-plans-parent'>
                    {typeOfZostel.map((el) => {
                        return <>
                            <div className='s-p-destination'>
                                <div className='s-p-left' style={{
                                    background: `url(${el.image})`,
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center",
                                    backgroundSize: "cover"
                                }}>
                                </div>
                                <div className='s-p-right'>
                                    <h4 className='s-p-d-pre-title'>{el.pre_title}</h4>
                                    <h2 className='s-p-d-title'>{el.title}</h2>
                                    <p className='s-p-d-description'>{el.description}</p>
                                    <div className='s-p-d-view'><span className='s-p-d-price'>Starting from ₹{el.price}</span><span className='s-p-d-view-btn-container'><button onClick={navigteToDest} className='s-p-d-view-btn'>{"view ->"}</button></span></div>
                                </div>
                            </div>
                        </>
                    })}
                </div>
            </div>
        </>
    }



    const LatestRead = () => {
        return <>
            <div className='l-r-blog-container'>
                <h1 className='l-r-blog-heading'>Latest Reads</h1>
                <div className='l-r-blog-parent'>
                    {blogs.map((el) => {
                        return <>
                            <div className='l-r-blog'>
                                <div className='l-r-blog-pic' style={{
                                    background: `url(${el.image})`,
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center",
                                    backgroundSize: "cover"
                                }}></div>
                                <div className='l-r-blog-info-rapper'>
                                    <div className='l-r-blog-info'>
                                        <h3 className='l-r-blog-title'>{el.title}</h3>
                                        <p className='l-r-blog-desp'>{el.description}</p>
                                        <div className='l-r-blod-logo-pName-container'>
                                            <span><img className='l-r-blog-person-logo' src="https://th.bing.com/th/id/R.f47072744c7be1e77b4e83c730069e6f?rik=Vxna0Aj42Z%2fUaA&riu=http%3a%2f%2fwww.clker.com%2fcliparts%2fZ%2fQ%2f1%2fQ%2f9%2fP%2fzombie-red-hi.png&ehk=kANqMDyeHa9lcgl0qPWongrlqYsDEbMNCAjNdyB%2fQUQ%3d&risl=&pid=ImgRaw&r=0" alt="" /></span>
                                            <span className='l-r-blog-person-name'>{el.name}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    })}
                </div>
            </div>
        </>
    }


    return <>
        <div className="preSel-container">
            <div className="poster-pic">
                <div className='poster-title-div'>
                    <h1 className='poster-title'>Manali</h1>
                </div>
            </div>


            <div className='title-about-div'>
                <h1 className='t-welcome'>Welcome to</h1>
                <h1 className='t-manali'>Manali</h1>
                <div className='m-about-div'>
                    <h3 className='m-about-t m-d-heading'>About</h3>
                    <div className='m-about-d'>
                        <p className='m-upper-d'>
                            Enthralling mountain views, snowfall in winters, cafes enhancing your leisure time, and a bundle of different experiences for travellers: what else could you possibly need from a mountain getaway? Pampering backpackers with fine hikes, travellers
                        </p>
                        <div style={showHide ? { display: "block" } : { display: "none" }} className='m-hide-unhide'>
                            <p>
                                with abundant snow, and dreamers with a variety of flowers, a star-filled sky, and the pleasantest weather, Manali is a popular travel destination that disappoints nobody. Come here for a hot plate of pasta amidst the mountains or an excursion in the wilderness, this town in Himachal Pradesh has you covered for it all.
                            </p>
                            <h3 className='m-d-heading'>
                                Why we Love Manali
                            </h3>
                            <p>
                                Manali is very well known for its posh cafes that serve cuisines ranging from Italian to Northeastern. A locally brewed rice beer called Lugdi takes a little time to develop a taste for, but once you do, you’ll thank us.
                            </p>
                            <p>
                                Calling out all true-blue hikers, Manali not only has so much to please your eyes, but also your thirst for adventure. A number of hikes cater to a plethora of travellers who are intrigued by the mighty mountains and nature’s glory. Among these, Jogini Waterfall Trek, Hampta Pass Trek, Patalsu Peak, Parashar lake are some of the famous ones.
                            </p>
                            <p>
                                The river Beas runs through this town, making every turn and narrow climb blissful. Soak your feet and submit to the cold waters of the river for hours at a time. And the best part, you won't have to go far for it.
                            </p>
                            <h3 className='m-d-heading'>Fun facts</h3>
                            <p>
                                The town is named after saint Manu, who came here to meditate and re-create human life after it was tragically washed out in the great Himalayan floods. The saint is a local legend and his temple is still revered by the locals.
                            </p>
                            <p>
                                It is said that every local family/resident in Manali owns at least one apple tree, amidst other vegetation. The soil here yields a high quality of fruits and vegetables, all thanks to the Beas River. In peak season, blossoms of cherry, apple, peach, and apricot trees bloom, painting the town delicate and mesmerising.
                            </p>
                            <p>
                                Unlike other places in India, where temples are made for Gods and their helpers alike, Manali happens to have a temple dedicated to a demon. The Goddess Hidimba was the demon wife of Bhima and has the Hidimba temple to her name.             f
                            </p>
                        </div>
                        <div className='m-set-hide-unhide' onClick={handleShowHide}>{showHide ? "show less" : "show more"}</div>
                    </div>
                </div>
            </div>
            <StayPlanes />
            <LatestRead />
            <Footer />
        </div>
    </>
}
