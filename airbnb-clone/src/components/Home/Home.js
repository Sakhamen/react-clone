import React from 'react';
import './Home.css';
import Card from '../Card/Card';
import Banner from '../Banner/Banner';

function Home() {
  return (
    <div className="home">
      <Banner />

      <div className='home__section'>
        <Card
            title="Online Experiences"
            description="Unique activities we can do together, led by a world of hosts."
            imageUrl={require('../../images/explore/explore-1.jpg')}
        />
        <Card
            title="Unique stays"
            description="Spaces that are more than just a place to sleep."
            imageUrl={require('../../images/explore/explore-2.jpg')}
        />
        <Card
            title="Entire homes"
            description="Comfortable private places, with room for friends or family."
            imageUrl={require('../../images/explore/explore-3.jpg')}
        />
      </div>
      <div className='home__section'>
        <Card
            title="3 Bedroom Flat in Bournemouth"
            description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
            price="R130/night"
            imageUrl={require('../../images/homes/home-1.jpg')}
        />
        <Card
            title="Penthouse in London"
            description="Enjoy the amazing sights of London with this stunning penthouse"
            price="R350/night"
            imageUrl={require('../../images/homes/home-2.jpg')}
        />
        <Card
            title="1 Bedroom apartment"
            description="Superhost with great amenities and a fabolous shopping complex nearby"
            price="R70/night"
            imageUrl={require('../../images/homes/home-3.jpg')}
        />
      </div>

    </div>
  );
}

export default Home;
