import "./HowItWorksSection.css";

const HowItWorksSection = () => {
  return (
    <div>
      <h1 className="text-3xl text-center">How It Works Section</h1>
      <div className="flex justify-center w-full">
        <div className="">
          {/* {icon part} */}
          <div className="pb-[50px] flex justify-end pr-[70px]">
            <img
              style={{ height: "128px", width: "128px" }}
              src="https://i.ibb.co/RBTF56F/wedding-rings.png"
              alt=""
            />
          </div>
          {/* {Find your match} */}
          <div className="pb-[50px] flex justify-end pr-[70px]">
            <div className="w-full text-right">
              <h1>Find your match</h1>
              <p className="uppercase">Timing: 6.00pm</p>
              <p className="inline-block w-1/3 text-justify">
                Create your profile by filling in the necessary details, upload
                your photo, and start connecting with potential matches!
              </p>
            </div>
          </div>
          {/* {Couple bird part} */}
          <div className="pb-[50px] flex justify-end pr-[70px]">
            <img
              style={{ height: "128px", width: "128px" }}
              src="https://i.ibb.co/SmrQ9k4/bird.png"
              alt=""
            />
          </div>
          {/* {Get Profile Information} */}
          <div className="pb-[50px] flex justify-end pr-[70px]">
            <div className="w-full text-right">
              <h1>Get Profile Information</h1>
              <p className="uppercase">Timing: 6.00pm</p>
              <p className="inline-block w-1/3 text-justify">
                Create your profile by filling in the necessary details, upload
                your photo, and start connecting with potential matches!
              </p>
            </div>
          </div>
          {/* {Couple meetup part} */}
          <div className="pb-[50px] flex justify-end pr-[70px]">
            <img
              style={{ height: "128px", width: "128px" }}
              src="https://i.ibb.co/93BjBvx/coffee.png"
              alt=""
            />
          </div>
          {/* {Getting Marriage} */}
          <div className="pb-[50px] flex justify-end pr-[70px]">
            <div className="w-full text-right">
              <h1>Getting Marriage</h1>
              <p className="uppercase">Timing: 6.00pm</p>
              <p className="inline-block w-1/3 text-justify">
                Create your profile by filling in the necessary details, upload
                your photo, and start connecting with potential matches!
              </p>
            </div>
          </div>
        </div>
        <div className="border"></div>
        <div className="">
          {/* {Register part} */}
          <div className="w-1/2 pb-[50px] flex justify-end pl-[70px]">
            <div>
              <h1>Register</h1>
              <p className="uppercase">Timing: 6.00pm</p>
              <p>
                Create your profile by filling in the necessary details, upload
                your photo, and start connecting with potential matches!
              </p>
            </div>
          </div>
          {/* {Couple icon part} */}
          <div className="pb-[50px] flex justify-start pl-[70px]">
            <img
              style={{ height: "128px", width: "128px" }}
              src="https://i.ibb.co/SQnxFgF/couple.png"
              alt=""
            />
          </div>
          {/* {Send Interest part} */}
          <div className="w-1/2 pb-[50px] flex justify-end pl-[70px]">
            <div>
              <h1>Send Interest</h1>
              <p className="uppercase">Timing: 6.00pm</p>
              <p>
                Create your profile by filling in the necessary details, upload
                your photo, and start connecting with potential matches!
              </p>
            </div>
          </div>
          {/* {Couple connection part} */}
          <div className="pb-[50px] flex justify-start pl-[70px]">
            <img
              style={{ height: "128px", width: "128px" }}
              src="https://i.ibb.co/BnZVVPg/lovely.pnghttps://i.ibb.co/93BjBvx/coffee.png"
              alt=""
            />
          </div>
          {/* {Start Meetup part} */}
          <div className="w-1/2 pb-[50px] flex justify-end pl-[70px]">
            <div>
              <h1>Start Meetups</h1>
              <p className="uppercase">Timing: 6.00pm</p>
              <p>
                Create your profile by filling in the necessary details, upload
                your photo, and start connecting with potential matches!
              </p>
            </div>
          </div>
          {/* {Married Icon part} */}
          <div className="pb-[50px] flex justify-start pl-[70px]">
            <img
              style={{ height: "128px", width: "128px" }}
              src="https://i.ibb.co/Jm2J1L4/wedding-couple-1.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;
