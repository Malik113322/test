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
    <div className="w-full">
      {/* Header */}
      <div className="flex justify-between mb-4">
        <p className="font-inter text-navItems font-medium">Your Mentor</p>
        <p className="font-inter text-seeALl text-[12px] underline font-normal cursor-pointer">
          See All
        </p>
      </div>

      {/* Table */}
      <div className="py-5 px-4 sm:px-6 shadow-[0px_14px_42px_0px_rgba(8,15,52,0.06)] rounded-lg">
        {/* Column Headings */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
          <p className="font-inter text-[8px] font-semibold text-navheading">
            INSTRUCTOR NAME & DATE
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

        {/* Rows */}
        <div className="flex flex-col gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 items-center"
            >
              {/* Instructor */}
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <img
                  src={item.img}
                  alt="mentor"
                  className="w-8 h-8 sm:w-6 sm:h-6 object-cover rounded-full"
                />
                <div>
                  <p className="font-inter font-medium text-sm text-navItems">
                    {item.title}
                  </p>
                  <p className="font-inter font-normal text-[11px] text-date">
                    {item.date}
                  </p>
                </div>
              </div>

              {/* Course Type */}
              <p className="w-fit px-3 font-inter text-starComponent bg-designation rounded-lg h-[15px] text-[10px] font-normal">
                {item.course}
              </p>

              {/* Course Title */}
              <p className="font-inter text-[12px] font-normal text-navItems">
                {item.course2}
              </p>

              {/* Action */}
              <p className="w-fit px-3 font-inter text-seeALl bg-[#3366CC33] rounded-lg h-[15px] text-[10px] font-normal cursor-pointer">
                {item.actions}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mentor;
