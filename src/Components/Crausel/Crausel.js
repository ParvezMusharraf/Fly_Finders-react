import FlightCityData from '../../flight_Data/flightData'
import { Link } from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './Crausel.css';

// import required modules
import { Navigation } from 'swiper/modules';

const filterdList = FlightCityData.map(a=><SwiperSlide id={a.id}>
  <Link className='link-img'><img className='imgInner' alt={a.city}  src={a.img}/>
  <div class="overlay">
  <div class="text">
    <h2>{a.city}</h2>
          </div>
  </div></Link>
  </SwiperSlide> )

export default function Crausel() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {filterdList}
      </Swiper>
    </>
  );
}
