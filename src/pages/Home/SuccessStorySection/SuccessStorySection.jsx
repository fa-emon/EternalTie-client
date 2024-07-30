import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import "./SuccessStorySection.css";
import Rating from 'react-rating';
import { FaStar } from 'react-icons/fa';

const successStories = [
  {
    id: 1,
    image: 'https://i.ibb.co/4J2FTJ9/pexels-photo-2011858.jpg',
    date: '2023-01-01',
    stars: 5,
    story: 'We met through this website and are now happily married. The process was seamless and the platform made it easy to connect with my perfect match.',
  },
  {
    id: 2,
    image: 'https://i.ibb.co/Nt9GQpb/pexels-photo-3656518.jpg',
    date: '2023-02-14',
    stars: 4,
    story: 'Thanks to this website, I found my soulmate. The experience was wonderful and I couldn’t be happier with the service provided.',
  },
  {
    id: 3,
    image: 'https://i.ibb.co/Mpk375f/pexels-photo-1739580.jpg',
    date: '2023-03-30',
    stars: 5,
    story: 'An amazing platform that helped me find my life partner. The user-friendly interface and the quality of matches were impressive.',
  },
];

const SuccessStorySection = () => {
  const [sortedStories, setSortedStories] = useState([]);
  const [sortDirection, setSortDirection] = useState("asc");
  const [, setHoveredSlide] = useState(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    const sortStories = () => {
      const sortedData = [...successStories].sort((a, b) => {
        return sortDirection === "asc"
          ? new Date(a.date) - new Date(b.date)
          : new Date(b.date) - new Date(a.date);
      });
      setSortedStories(sortedData);
    };
    sortStories();
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
      <h1 className="text-3xl text-center mb-8">Success Story Section</h1>
      <div className="flex justify-end items-center my-2">
        <label htmlFor="sort-select" className="mr-2">
          Sort by marriage date:
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
          slidesPerView={3}
          spaceBetween={30}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 3000 }}
          className="mySwiper"
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
            1440: { slidesPerView: 3, spaceBetween: 50 },
          }}
        >
          {sortedStories.map((story, index) => (
            <SwiperSlide key={story.id}>
              <div
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                className="flex flex-col items-center p-4 relative"
              >
                <img
                  className="rounded-full border-4 border-solid border-[#C9AB81] w-36 h-36 object-cover mb-4"
                  src={story.image}
                  alt="Couple"
                  style={{ width: '150px', height: '150px' }}
                />
                <div className="flex items-center mb-4">
                  <p className="text-xl mr-4">{new Date(story.date).toLocaleDateString()}</p>
                  <Rating
                    initialRating={story.stars}
                    readonly
                    emptySymbol={<FaStar className="text-gray-300" />}
                    fullSymbol={<FaStar className="text-yellow-500" />}
                  />
                </div>
                <p className="text-base text-center w-3/4">{story.story}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SuccessStorySection;
