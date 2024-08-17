import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import "./PremiumMember.css";
import "./Responsive.css";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";

const PremiumSection = () => {
  const [sortedBiodata, setSortedBiodata] = useState([]);
  const [sortDirection, setSortDirection] = useState("asc");
  const [hoveredSlide, setHoveredSlide] = useState(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/biodata/premium?limit=6&ageOrder=${sortDirection}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setSortedBiodata(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
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
      <SectionTitle heading={"Premium Section"} />
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
                  src={data.profile_image}
                  alt=""
                />
                {hoveredSlide === index && (
                  <div className="absolute bottom-0 w-full bg-pink-500 bg-opacity-75 text-white p-4 flex flex-col items-center justify-center h-1/2 animated-background rounded-t-3xl">
                    <p className="text-lg">Biodata Id: {data.biodata_id}</p>
                    <p className="text-lg">Biodata Type: {data.biodata_type}</p>
                    <p className="text-lg">
                      Division: {data.permanent_division}
                    </p>
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
