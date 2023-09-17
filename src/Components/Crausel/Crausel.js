import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


const Crausel = () => {


  const handleDragStart = (e) => e.preventDefault();

const items = [
  <img className='img-fluid' src="https://picsum.photos/id/1018/1000/600/" onDragStart={handleDragStart} role="presentation" />,
  <img className='img-fluid'  src="https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVsaGl8ZW58MHx8MHx8fDA%3D&w=1000&q=80/" onDragStart={handleDragStart} role="presentation" />,
  <img className='img-fluid'  src="https://picsum.photos/id/1019/1000/600/" onDragStart={handleDragStart} role="presentation" />,
];

   
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];
  return (
    <div style={{
      width:'100vw',
    }} className='container h-25'  >
        <AliceCarousel mouseTracking items={items} />
  </div>
)
}
export default Crausel
