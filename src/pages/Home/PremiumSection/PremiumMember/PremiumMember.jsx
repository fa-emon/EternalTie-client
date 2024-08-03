import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import "./PremiumMember.css";
import "./Responsive.css";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";

const biodata = [
  {
    id: 1,
    type: "Male",
    profileImage: "https://i.ibb.co/SBf2NB2/pexels-photo-1898555.jpg",
    division: "Dhaka",
    age: 23,
    occupation: "Student",
  },
  {
    id: 2,
    type: "Female",
    profileImage: "https://i.ibb.co/SBf2NB2/pexels-photo-1898555.jpg",
    division: "Chattagram",
    age: 27,
    occupation: "Job",
  },
  {
    id: 3,
    type: "Male",
    profileImage: "https://i.ibb.co/SBf2NB2/pexels-photo-1898555.jpg",
    division: "Rangpur",
    age: 40,
    occupation: "House wife",
  },
  {
    id: 4,
    type: "Female",
    profileImage: "https://i.ibb.co/SBf2NB2/pexels-photo-1898555.jpg",
    division: "Barisal",
    age: 30,
    occupation: "Job",
  },
  {
    id: 5,
    type: "Male",
    profileImage: "https://i.ibb.co/SBf2NB2/pexels-photo-1898555.jpg",
    division: "Khulna",
    age: 29,
    occupation: "Student",
  },
  {
    id: 6,
    type: "Female",
    profileImage: "https://i.ibb.co/SBf2NB2/pexels-photo-1898555.jpg",
    division: "Maymansign",
    age: 45,
    occupation: "House wife",
  },
];

const PremiumSection = () => {
  const [sortedBiodata, setSortedBiodata] = useState([]);
  const [sortDirection, setSortDirection] = useState("asc");
  const [hoveredSlide, setHoveredSlide] = useState(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    const sortBiodata = () => {
      const sortedData = [...biodata].sort((a, b) => {
        return sortDirection === "asc" ? a.age - b.age : b.age - a.age;
      });
      setSortedBiodata(sortedData);
    };
    sortBiodata();
  }, [sortDirection]);

  const handleSortChange = (e) => {
    setSortDirection(e.target.value);
  };

  const handleMouseEnter = (index) => {
    swiperRef.current.swiper.autoplay.stop();
    setHoveredSlide(index);
  };

  const handleMouseLeave = () => {
    swiperRef.current.swiper.autoplay.start();
    setHoveredSlide(null);
  };

  return (
    <div>
      <SectionTitle
        heading={'Premium Section'}
      ></SectionTitle>
      <div className="flex justify-end items-center my-2">
        <label htmlFor="sort-select" className="mr-2">
          Sort by age:
        </label>
        <select
          id="sort-select"
          className="p-2"
          value={sortDirection}
          onChange={handleSortChange}
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
      <div>
        <Swiper
          ref={swiperRef}
          slidesPerView={4}
          spaceBetween={30}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 3000 }}
          className="mySwiper"
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 4, spaceBetween: 20 },
            1440: { slidesPerView: 4, spaceBetween: 50 },
          }}
        >
          {sortedBiodata.map((data, index) => (
            <SwiperSlide key={data.id}>
              <div
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                className="relative"
              >
                <img
                  className="object-contain transform transition-transform duration-300 brightness-75"
                  src={data.profileImage}
                  alt=""
                />
                {hoveredSlide === index && (
                  <div className="absolute bottom-0 w-full bg-pink-500 bg-opacity-75 text-white p-4 flex flex-col items-center justify-center h-1/2 animated-background rounded-t-3xl">
                    <p className="text-lg">Biodata Id: {data.id}</p>
                    <p className="text-lg">Biodata Type: {data.type}</p>
                    <p className="text-lg">Division: {data.division}</p>
                    <p className="text-lg">Age: {data.age}</p>
                    <p className="text-lg">Occupation: {data.occupation}</p>
                    <button className="btn mt-4">View Profile</button>
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PremiumSection;
