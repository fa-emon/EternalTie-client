import './SectionTitle.css'

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className='mt-20 mb-[40px]'>
      <p className="text-center subHeading-font">{subHeading}</p>
      <p className="text-center heading-font">{heading}</p>
      <div className="flex items-center justify-center w-full">
                <img className="wobble-hor-bottom" style={{ height: '16vh', width: '18vh', objectFit: 'contain' }} src="https://i.ibb.co/Njk17zG/vecteezy-line-art-floral-and-leaf-11003396.png" alt="" />
            
                <img
                    className="wobble-and-rotate"
                    style={{
                        height: '16vh',
                        width: '18vh',
                        objectFit: 'contain',
                        transform: 'scaleX(-1)',
                    }}
                    src="https://i.ibb.co/Njk17zG/vecteezy-line-art-floral-and-leaf-11003396.png"
                    alt=""
                />
            </div>
    </div>
  );
};

export default SectionTitle;
