import React from 'react'
// import list from "../../public/list.json"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import axios from "axios";
import { useEffect, useState } from 'react'
// rfce

function Freebook() {

  const [book,setBook] =useState([])
  useEffect(() => {
    const getBook = async() => {
      try {
       const res = await axios.get("http://localhost:4001/book");
       
       const data = res.data.filter((data) => data.cateogary === "Free");
       console.log(data);
       setBook(data)
      } catch (error) {
        console.log(error)
      }
    }
    getBook();
  },[])

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };

    
    return (
        <>

        <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
            <div>
            <h1 className="font-semibold text-xl pb-2">Free Offerred Course</h1>
            <p>
            Explore our extensive collection of free books available on the website,
             offering a wealth of knowledge and resources at no cost to support your learning and career growth.
            </p>
            </div>
       

        <div >
      <Slider {...settings}>
            {book.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
      </Slider>
    </div>
    </div>

        </>
    )
}

export default Freebook
