import IMAGE from "../assets/Navbar/navimage.jpg";

const Mentor = () => {
  const items = [
    {
      title: "Prashant Kumar Singh",
      img: IMAGE,
      date: "25/2/2023",
      course: "FRONTEND",
      course2: "Understanding Concept of React",
      actions: "SHOW DETAILS",
    },
    {
      title: "Prashant Kumar Singh",
      img: IMAGE,
      date: "25/2/2023",
      course: "FRONTEND",
      course2: "Understanding Concept of React",
      actions: "SHOW DETAILS",
    },
  ];

  return (
     <div className="">
      <div className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-between ">
        <p className="font-inter text-navItems font-medium">Your Mentor</p>
        <p className="font-inter text-seeALl text-[12px] underline font-normal">
          See All
        </p>
      </div>

      <div className=" py-5 px-6 shadow-[0px_14px_42px_0px_rgba(8,15,52,0.06)] rounded-[20px] ">
        <div className="hidden sm:flex justify-between ">
          <p className="font-inter text-[8px] font-semibold text-navheading">
            INSTRUCTOR NAME & DATE{" "}
          </p>
          <p className="font-inter text-[8px] font-semibold text-navheading">
            COURSE TYPE
          </p>
          <p className="font-inter text-[8px] font-semibold text-navheading">
            COURSE TITLE
          </p>
          <p className="font-inter text-[8px] font-semibold text-navheading">
            ACTIONS
          </p>
        </div>

        <div className="flex flex-col my-6 gap-6 ">
            {
                items.map((item, index)=>(
                    <div className="flex flex-col  items-center sm:items-start sm:flex-row  sm:justify-between " key={index} >
                        <div className="flex flex-col sm:flex-row text-center sm:text-start items-center gap-2">
                        <img src={item.img} alt="" className="w-6 h-6 object-cover rounded-full"/>

                        <div>
                            <p className="font-inter font-medium text-sm text-navItems">{item.title}</p>
                            <p className="font-inter font-normal text-[11px] text-date">{item.date}</p>
                        </div>
                        </div>
                        <p className="px-3 font-inter text-starComponent bg-designation rounded-lg h-3.75 text-[10px] font-normal">{item.course}</p>
                        <p className="font-inter text-[8px] sm:text-[12px] font-normal text-navItems">{item.course2}</p>
                        <p className="px-3 font-inter text-seeALl bg-[#3366CC33] rounded-lg h-3.75 text-[10px] font-normal">{item.actions}</p>
                    </div>
                ))
            }
        </div>

      </div>
    </div>
  )
};

export default Mentor;
