import React from 'react';
import './SearchPage.css';
import { Button } from "@material-ui/core";
import SearchResult from "../SearchResult/SearchResult";
import { useLocation } from "react-router-dom";

function SearchPage() {
    const location = useLocation();
    const place = location.state ? location.state.inputSearch ? location.state.inputSearch : '' : '';

    return (
        <div className='searchPage'>
            <div className='searchPage__info'>
                <p>62 stays · 26 october to 31 october · 2 guest</p>
                <h1>{place ? `Stays in ${place}` : "Stays nearby"}</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and beds</Button>
                <Button variant="outlined">More filters</Button>
            </div>

            <SearchResult
                img={require('../../images/rooms/room-1.jpg')}
                location={place ? `Private room in center of ${place}` : "Private room in center of Durban"}
                title="Stay at this spacious Edwardian House"
                description="1 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen · Free parking · Washing Machine"
                star={4.73}
                price="R30 / night"
                total="R117 total"
            />
            <SearchResult
                img={require('../../images/rooms/room-2.jpg')}
                location={place ? `Private room in center of ${place}` : "Private room in center of Durban"}
                title="Independant luxury studio apartment"
                description="2 guest · 3 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen"
                star={4.3}
                price="R40 / night"
                total="R157 total"
            />
            <SearchResult
                img={require('../../images/rooms/room-3.jpg')}
                location={place ? `Private room in center of ${place}` : "Private room in center of Durban"}
                title={place ? `${place} Studio Apartments` : "Durban Studio Apartments"}
                description="4 guest · 4 bedroom · 4 bed · 2 bathrooms · Free parking · Washing Machine"
                star={3.8}
                price="R35 / night"
                total="R207 total"
            />
            <SearchResult
                img={require('../../images/rooms/room-4.jpg')}
                location="Private room in center of Durban"
                title="30 mins to Oxford Street, South Beach"
                description="1 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen · Free parking · Washing Machine"
                star={4.1}
                price="R55 / night"
                total="R320 total"
            />
            <SearchResult
                img={require('../../images/rooms/room-5.jpg')}
                location={place ? `Private room in center of ${place}` : "Private room in center of Durban"}
                title="Spacious Peaceful Modern Bedroom"
                description="3 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Free parking · Dry Cleaning"
                star={5.0}
                price="R60 / night"
                total="R450 total"
            />
            <SearchResult
                img={require('../../images/rooms/room-6.jpg')}
                location={place ? `Private room in center of ${place}` : "Private room in center of Durban"}
                title={place ? `The Blue Room In ${place}` : "The Blue Room In Durban"}
                description="2 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Washing Machine"
                star={4.23}
                price="R65 / night"
                total="R480 total"
            />
            <SearchResult
                img={require('../../images/rooms/room-7.jpg')}
                location={place ? `Private room in center of ${place}` : "Private room in center of Durban"}
                title="5 Star Luxury Apartment"
                description="3 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen · Free parking · Washing Machine"
                star={3.85}
                price="R90 / night"
                total="R650 total"
            />
        </div>
    )
}

export default SearchPage;
