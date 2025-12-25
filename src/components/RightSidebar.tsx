
import {
  AddIcon,
  BellIconProfile,
  Circle,
  DotIcon,
  ProfileIcon2,
} from "../assets/Icons";
import ProfileImg from "../assets/RIghtPage/navimage.jpg";
import HistogramChart from "./HistogramChart";

const RightSidebar = () => {
  const Items = [
    {
      title: "Prashant Kumar singh",
      details: "software Developer",
      aciton: "Follow",
      img: ProfileImg,
    },
    {
      title: "Prashant Kumar singh",
      details: "software Developer",
      aciton: "Follow",
      img: ProfileImg,
    },
    {
      title: "Prashant Kumar singh",
      details: "software Developer",
      aciton: "Follow",
      img: ProfileImg,
    },
    {
      title: "Prashant Kumar singh",
      details: "software Developer",
      aciton: "Follow",
      img: ProfileImg,
    },
    {
      title: "Prashant Kumar singh",
      details: "software Developer",
      aciton: "Follow",
      img: ProfileImg,
    },
  ];

  return (
    <div
      className="ml-12 sm:m-0
        shadow-[0px_14px_42px_0px_#080F340F]
        py-6 sm:py-8
        px-0 sm:px-6
        flex flex-col
        gap-6
      "
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center ">
        <p className="font-inter font-medium text-navItems">Your Profile</p>
        {DotIcon}
      </div>

      {/* Profile Section */}
      <div className="text-center flex flex-col items-center gap-4">
        <div className="relative">{Circle}
       <div className="absolute sm:w-16 sm:h-16 top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">

          <img
            src={ProfileImg}
            alt="profile"
            className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover"
            />
            </div>
</div>
        <div>
          <p className="font-inter text-navItems font-medium text-sm sm:text-base">
            Good Morning Prashant
          </p>
          <p className="font-inter text-[#7E7E7E] text-[11px] sm:text-[12px]">
            continue your journey and achieve Your Target
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
          {BellIconProfile}
          {ProfileIcon2}
          {ProfileIcon2}
        </div>
      </div>

      {/* Chart */}
        <HistogramChart />

      {/* Mentor List */}
      <div className="flex flex-col gap-4  ">
        <div className="flex flex-col justify-center gap-2 sm:flex-row sm:justify-between items-center ">
          <p className="font-medium font-inter text-navItems">
            Your Mentor
          </p>
          {AddIcon}
        </div>
        <div className="flex flex-col justify-center px-2 sm:px-3">
          {Items.map((item, index) => (
            <div
              key={index}
              className={`
                flex flex-col sm:flex-row items-center gap-3 
                py-3
                border-b border-[#D8D8D8]
                ${index === Items.length - 1 ? "border-b-0" : ""}
              `}
            >
              <img
                src={item.img}
                alt="profile"
                className="object-cover w-8 h-8 sm:w-6 sm:h-6 rounded-full"
              />

              <div className="flex flex-col sm:flex-row text-center sm:text-start justify-between items-center  gap-4">
                <div className="">
                  <p className="font-inter font-medium text-[11px] sm:text-[10px] text-navItems">
                    {item.title}
                  </p>
                  <p className="font-inter font-normal text-[9px] sm:text-[8px] text-date">
                    {item.details}
                  </p>
                </div>

                <p className="bg-starComponent font-inter text-[9px] sm:text-[8px] font-medium text-bgNav py-1 px-3 rounded-xl whitespace-nowrap">
                  {item.aciton}
                </p>
              </div>
            </div>

          ))}
        </div>
        <p className="rounded-full py-2 px-3 text-starComponent bg-designation text-center font-inter text-[12px] font-medium cursor-pointer w-25 mx-auto sm:w-full ">
          See All
        </p>
      </div>
    </div>
  );
};

export default RightSidebar;



