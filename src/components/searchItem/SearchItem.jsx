import React from 'react'
import"./searchItem.css"

const SearchItem = () => {
  return (
    <div className='searchItem'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYNSIzYELFNL_iXWZDqlbZa-k318ytFjFUIA&usqp=CAU" alt="" className="siImg" />
        <div className="siDesc">
            <h1 className="siTitle">Tower Street Apartment</h1>
            <span className="siDistance">500m fron center</span>
            <span className="siTaxiOp">free airport taxi</span>
            <span className="siSubTitle">Studio Apartment with Air Conditioning</span>
            <span className="siFeatures">Entire Studio * 1bathroom * 21m2 1 full bed</span>
            <span className="siCancelOp">Free Cancellation</span>
            <span className="siCancelOpSubtitle">You can cancel later, so lock in this great rice today!</span>
        </div>
        <div className="siDetails">
          <div className="siRating">
            <span>Excellent</span>
            <button>8.9</button>
          </div>
          <div className="siDetailsTexts">
          <span className="siPrice">Rs. 700</span>
          <span className="siTaxiOp">Include taxes and fees</span>
          <button className="siCheckButton">See Availability</button>
        </div>
        </div>
    </div>
  )
}

export default SearchItem
