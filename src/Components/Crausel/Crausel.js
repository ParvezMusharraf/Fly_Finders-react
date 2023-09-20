import FlightCityData from '../../flight_Data/flightData'
import { Link } from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import pune from '../../Images/Pune.avif'
import mumbai from '../../Images/Mumbai.jpg'
import hydrabad from '../../Images/Hydrabad.avif'
import chinnai from '../../Images/Chinnai.jpeg'
import delhi from '../../Images/delhi.jpg'
import nagpur from '../../Images/Nagpur.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './Crausel.css';

// import required modules
import { Navigation } from 'swiper/modules';

export default function Crausel() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <Link className='link-img'><img className='imgInner' src={pune}/>
          <div class="overlay">
          <div class="text">
            <h2>Pune</h2>
            <h6>Pune exemplifies an indigenous Marathi culture and ethos, in which education, arts and crafts, and theatres are given due prominence. It is the birthplace of the poet-saint Tukaram (in Dehu) and Jnaneshvara (in Alandi), the author of the well-known commentary 'Jnaneshwari',on the “Bhagavad Gita”.
</h6>
                  </div>
          </div></Link>
          </SwiperSlide>
        <SwiperSlide>
          <Link><img className='imgInner' src={mumbai}/>
          <div class="overlay">
          <div class="text">
            <h2>Mumbai</h2>
            <h6>Mumbai (formerly called Bombay) is a densely populated city on India’s west coast. A financial center, it's India's largest city. On the Mumbai Harbour waterfront stands the iconic Gateway of India stone arch, built by the British Raj in 1924. Offshore, nearby Elephanta Island holds ancient cave temples dedicated to the Hindu god Shiva. The city's also famous as the heart of the Bollywood film industry.</h6>
          </div>
          </div></Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link><img className='imgInner' src={hydrabad}/>
          <div class="overlay">
          <div class="text">
           <h2>hydrabad</h2>
           <h6>The city is noted for its monuments which includes the masterpiece of Charminar and the fort of Golconda. There are a multitude of masjids, temples, churches and bazaars in the city.</h6>
            </div>
          </div></Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link><img className='imgInner' src={chinnai}/>
          <div class="overlay">
          <div class="text">
            <h2>Chinnai</h2>
            <h6>Chennai is a culture-rich city with carnatic music, delicious food, serene beaches and popular temples. It is one of the most preferred tourist destinations in India. The city never fails to mesmerise its visitors as it offers a unique experience.</h6>
          </div>
          </div></Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link><img className='imgInner' src={delhi}/>
          <div class="overlay">
          <div class="text">
            <h2>Delhi</h2>
            <p>New Delhi is best known as the location of India's national government. New Delhi has great historical significance as it was home to powerful people, such as the Pāṇḍavas and the Mughals. The city has many historical monuments and tourist attractions as well as lively marketplaces and great food, such as chaat.</p>
          </div>
          </div></Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link><img className='imgInner' src={nagpur}/>
          <div class="overlay">
          <div class="text">
            <h2>Nagpur</h2>
            <h6>In addition to being the seat of annual winter session of Maharashtra state assembly “Vidhan Sabha”, Nagpur is also a major commercial and political center of the Vidarbha region of Maharashtra, and is also famous throughout the country as “Orange City” for being a major trade center of oranges that are cultivated in ...</h6>
          </div>
          </div></Link>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
