import React from 'react'
// import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import "./list.css"
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from 'react-date-range'
import SearchItem from '../../components/searchItem/SearchItem';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBed } from "@fortawesome/free-solid-svg-icons"
import { faPlane } from "@fortawesome/free-solid-svg-icons"
import { faCar } from "@fortawesome/free-solid-svg-icons"
import { faTaxi } from "@fortawesome/free-solid-svg-icons"

const List = () => {

  const location= useLocation();
  const [destination,setDestination]=useState(location.state.destination)
  
  const [date,setDate]=useState(location.state.date)
  const [options,setOptions]=useState(location.state.options)
  const [openDate,setOpenDate]=useState("false")
  console.log(location)
  return (
    <div>
      <Navbar/>
      {/* <Header type="list"/> */}
       <div className= "headerContainer_listMode">
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
        
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}`}
              </span>
              {openDate && (
              <DateRange 
              onChange={(item)=>setDate([item.selection])} 
              minDate={new Date()}
              range={date}
              />
            )}
            </div>

            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
              <div className="lsOptionItem">
                <span className="lsOptionText">Min Price<small>per night</small></span>
                <input type="number" min={0} className="isOptionInput" />
              </div>

              <div className="lsOptionItem">
                <span className="lsOptionText">Max Price<small>per night</small></span>
                <input type="number" min={0} className="isOptionInput" />
              </div>

              <div className="lsOptionItem">
                <span className="lsOptionText">Adult</span>
                <input type="number" min={1} className="isOptionInput" placeholder={options.adult} />
              </div>

              <div className="lsOptionItem">
                <span className="lsOptionText">Children</span>
                <input type="number" min={0} className="isOptionInput" placeholder={options.children}/>
              </div>

              <div className="lsOptionItem">
                <span className="lsOptionText">Room</span>
                <input type="number" min={1} className="isOptionInput" placeholder={options.room}/>
              </div>

              </div>
            </div>
            <button>Search</button>
          </div>

            <div className="listResult">
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default List
