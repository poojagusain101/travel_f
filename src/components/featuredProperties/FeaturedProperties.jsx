import React from 'react'
import"./featuredProperties.css"

const FeaturedProperties = () => {
  return (
    <div className="fp">
    <div className="fpItem">
        <img src="https://hips.hearstapps.com/hmg-prod/images/apartment-living-room-design-ideas-hbx040122nextwave-013-1656001210.jpg" alt="" className="fpImg" />
      <span className="fpName">Apartment Kailash</span>
      <span className="fpCity">Srinagar</span>
      <span className="fpPrice">Starting fron Rs.699</span>
      <div className="fpRating">
        <button>8.9</button>
        <span>Excellent</span>
      </div>
    </div>
    <div className="fpItem">
    <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/288176551.jpg?k=0370b6af8e3bf736431170faa21014695ba5c901127248c1a3ccfdcddbde4cc2&o=&hp=1" alt="" className="fpImg" />
  <span className="fpName">Apartment Kailash</span>
  <span className="fpCity">Srinagar</span>
  <span className="fpPrice">Starting fron Rs.699</span>
  <div className="fpRating">
    <button>8.9</button>
    <span>Excellent</span>
  </div>
</div>
<div className="fpItem">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLZamoOzNQ5zXmIzhxQgZFwqW1sDcWVB_DTs_GESz0cn4jT2TdfLDDIsLA6FkPq-wPDDI&usqp=CAU" alt="" className="fpImg" />
      <span className="fpName">Apartment Kailash</span>
      <span className="fpCity">Srinagar</span>
      <span className="fpPrice">Starting fron Rs.699</span>
      <div className="fpRating">
        <button>8.9</button>
        <span>Excellent</span>
      </div>
    </div>
    </div>
  )
}

export default FeaturedProperties
