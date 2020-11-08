import React from 'react';
import './Home.css';
import Product from '../Product/Product';

function Home() {
   return (
   <div className="home">
      <img
         className="home__image"
         src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_FT_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB408004054_.jpg"
         alt="Home" />
      <div className="home__row">
         <Product
                  id="123"
                  title="iPhone 11"
                  price={1.25}
                  rating={5}
                  image="https://images-eu.ssl-images-amazon.com/images/G/02/img15/SeptEye19/AMZ_FamiyStripe_iPhone_11ProMax._CB436909305_.png"
         />
         <Product
                  id="123"
                  title="iPhone 11"
                  price={1.25}
                  rating={5}
                  image="https://images-eu.ssl-images-amazon.com/images/G/02/img15/SeptEye19/AMZ_FamiyStripe_iPhone_11ProMax._CB436909305_.png"
         />
      </div>

      <div className="home__row">
      <Product
                  id="123"
                  title="iPhone 11"
                  price={1.25}
                  rating={5}
                  image="https://images-eu.ssl-images-amazon.com/images/G/02/img15/SeptEye19/AMZ_FamiyStripe_iPhone_11ProMax._CB436909305_.png"
         />
         <Product
                  id="123"
                  title="iPhone 11"
                  price={1.25}
                  rating={5}
                  image="https://images-eu.ssl-images-amazon.com/images/G/02/img15/SeptEye19/AMZ_FamiyStripe_iPhone_11ProMax._CB436909305_.png"
         />
         <Product
                  id="123"
                  title="iPhone 11"
                  price={1.25}
                  rating={4}
                  image="https://images-eu.ssl-images-amazon.com/images/G/02/img15/SeptEye19/AMZ_FamiyStripe_iPhone_11ProMax._CB436909305_.png"
         />
      </div>

   </div>
   )
}

export default Home;
