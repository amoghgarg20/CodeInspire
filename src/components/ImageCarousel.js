import React from "react";
import img1 from "../assets/ImageCorousel/image-corousel-bg6.jpg";
import img2 from "../assets/ImageCorousel/image-corousel-bg2.png";
import img3 from "../assets/ImageCorousel/image-corousel-bg3.jpg";


const ImageCarousel = () => {

  return(
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={img1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={img2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={img3} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  )
    
//   return (
//     <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
//   <div className="carousel-indicators">
//     <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
//     <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
//     <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
//   </div>
//   <div className="carousel-inner">
//     <div className="carousel-item active">
//       <img src={img1} className="d-block w-100 " alt="..."/>
//       <div className="carousel-caption d-none d-md-block">
//         <h1 className = "animate__animated animate__fadeInUp">First slide label</h1>
//         <p className ="animate__animated animate__fadeInUp">Some representative placeholder content for the first slide.</p>
//       </div>
//     </div>
//     <div className="carousel-item">
//       <img src={img2} className="d-block w-100" alt="..."/>
//       <div className="carousel-caption d-none d-md-block">
//         <h1 className ="animate__animated animate__fadeInUp">Second slide label</h1>
//         <p  className ="animate__animated animate__fadeInUp">Some representative placeholder content for the second slide.</p>
//       </div>
//     </div>
//     <div className="carousel-item">
//       <img src={ img3} className="d-block w-100" alt="..."/>
//       <div className="carousel-caption d-none d-md-block">
//         <h1   className ="animate__animated animate__fadeInUp">Third slide label</h1>
//         <p   className ="animate__animated animate__fadeInUp">Some representative placeholder content for the third slide.</p>
//       </div>
//     </div>
//   </div>
//   <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
//     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span className="visually-hidden">Previous</span>
//   </button>
//   <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
//     <span className="carousel-control-next-icon" aria-hidden="true"></span>
//     <span className="visually-hidden">Next</span>
//   </button>
// </div>
//   );
};

export default ImageCarousel;

