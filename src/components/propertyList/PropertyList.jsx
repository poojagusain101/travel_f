import React from 'react'
import "./propertyList.css"

const PropertyList = () => {
  return (
    <div className='pList'>
        <div className="pListItem">
            <img src="https://static.independent.co.uk/2023/03/24/09/Best%20New%20York%20boutique%20hotels.jpg?width=1200" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Hotels</h1>
                <h2>233 hotels</h2>
            </div>
        </div>

        <div className="pListItem">
            <img src="https://www.udr.com/globalassets/corporate/homepage/homepage_4_1274towson.jpg" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Apartments</h1>
                <h2>233 hotels</h2>
            </div>
        </div>

        <div className="pListItem">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/53/2f/c4/sun-hotel-resort.jpg?w=700&h=-1&s=1" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Resorts</h1>
                <h2>233 hotels</h2>
            </div>
        </div>


        <div className="pListItem">
            <img src="https://media-cdn.tripadvisor.com/media/vr-splice-j/09/f8/37/f3.jpg" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Villas</h1>
                <h2>233 hotels</h2>
            </div>
        </div>

        <div className="pListItem">
            <img src="https://www.familyhandyman.com/wp-content/uploads/2018/02/handcrafted-log-home.jpg" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Cabins</h1>
                <h2>233 hotels</h2>
            </div>
        </div>
    </div>
  )
}

export default PropertyList
