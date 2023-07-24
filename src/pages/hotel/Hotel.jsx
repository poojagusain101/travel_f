import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
// import Header from '../../components/header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import "./hotel.css"
import MailList from '../../components/mailList/MailList'
import { faBed } from "@fortawesome/free-solid-svg-icons"
import { faPlane } from "@fortawesome/free-solid-svg-icons"
import { faCar } from "@fortawesome/free-solid-svg-icons"
import { faTaxi } from "@fortawesome/free-solid-svg-icons"
import Footer from '../../components/footer/Footer'

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const photos = [
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHu3d4dGYsZmHdREy5V6dghkW4X3nyfgNCd1e3ACNTLLITg-OKM82Ol05Bth3FkJrpCPQ&usqp=CAU" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3La045IvvyHj5Bj2emxLN3ZeLPWWVcjb-aMALJFftk5VKm_kqKrs0vzzVPIiqCJ8lm_A&usqp=CAU" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwTsVZbt3LR4RPmai0YSCbiLWIyz-vSiMOXIcfdMEq5Ar5V3NT_u-iPs03TyQbc88_Ndc&usqp=CAU" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7sH4JE7v80RyeukDh_tzJkOQcYc_UYLQv_CvXQl2b_lWC7z6rea5HVsfamSFfdvLPzK8&usqp=CAU" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYiXroO7noPUk03meeE19yWDKZcmLjqoVHkPW2Qk23MtSxLwKs2RQsNEZ_qpAmQ3umLHo&usqp=CAU" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSENigcl7w0ZSQIiMNphAHilLiUGPWkIuUs5XBvVeQjfxLWuGYKWVYWkXa_MuDEBNnL-YA&usqp=CAU" },
    // {src:"https://www.marmomac.com/wp-content/uploads/2020/12/Ritz-Carlton-bathroom-1.jpeg"},
    // {src:"https://i.insider.com/60fee7fef350d5001958f4cd?width=1000&format=jpeg&auto=webp"},
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);

  }

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    }
    else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }
    setSlideNumber(newSlideNumber)
  }

  return (
    <div>
      <Navbar />
      {/* <Header type="list"/> */}
      <div className="headerContainer_listMode">
        <div className="headerList-1">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span> Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span> Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span> Car Rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span> Attractions</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span> Airport taxis</span>
          </div>
        </div>
      </div>

      <div className="hotelContainer">
        {open && (<div className="slider">
          <FontAwesomeIcon icon={faCircleXmark} className='close' onClick={() => setOpen(false)} />
          <FontAwesomeIcon icon={faCircleArrowLeft} className='arrow' onClick={() => handleMove("l")} />
          <div className="sliderWrapper">
            <img src={photos[slideNumber].src} alt="" className="sliderImg" />
          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className='arrow' onClick={() => handleMove("r")} />
        </div>
        )}
        <div className="hotelWrapper">
          <button className='bookNow'>Reserve or Book now!</button>
          <h1 className="hotelTitle">
            Grand Hotel
          </h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Street Kailash 125 SriNagar</span>
          </div>
          <span className="hotelDistance">
            Excallent location 500m from center
          </span>
          <span className="hotelPriceHighLight">
            Book a stay over Rs.899 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img height={250} onClick={()=>handleOpen(i)} src={photo.src} alt="" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of Jammu</h1>
              <p className="hotelDesc">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis totam eius expedita, deleniti perferendis sit, autem nemo eveniet corporis dolorem est. Fugiat, laborum eius. Unde aliquam magnam commodi omnis in.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex quas eum quis laborum quo nesciunt in. Laboriosam dolorum nulla, temporibus id saepe aspernatur nostrum, velit totam ipsam accusamus atque veritatis.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfecr for a 3-night stay!</h1>
              <span>
                Located in the real heart of Jammu, this property has an excellent location score of 9.78!

              </span>
              <h2>
                <b>Rs. 1899</b>(3 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  )
}

export default Hotel
