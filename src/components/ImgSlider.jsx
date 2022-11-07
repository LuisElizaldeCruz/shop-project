import React from 'react'
import "../assets/css/ImgSlider.css"
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
/*
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}*/


export default function ImgSlider() {
  return (
    <>
      {/* <!-- Slideshow container --> */}
      <div className="slideshow-container">

        {/* <!-- Full-width images with number and caption text --> */}
        <div className="mySlides fade">
          <div className="numbertext">1 / 3</div>
          <img src={img1}  alt=""/>
          <div className="text">Caption Text</div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">2 / 3</div>
          <img src={img2}  alt=""/>
          <div className="text">Caption Two</div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">3 / 3</div>
          <img src={img3} alt=""/>
          <div className="text">Caption Three</div>
        </div>

        {/* <!-- Next and previous buttons --> */}
        <button className="prev">&#10094;</button>
        <button className="next">&#10095;</button>
      </div>
      <br />

      {/* <!-- The dots/circles --> */}
      <div>
        <span className="dot" ></span>
        <span className="dot" ></span>
        <span className="dot" ></span>
      </div>
    </>

  )
};