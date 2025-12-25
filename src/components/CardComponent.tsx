import { ArrowICons, ProgressIcon } from "../assets/Icons";
import IMG1 from "../assets/RIghtPage/image1.jpg";
import IMG2 from "../assets/RIghtPage/image2.png";
import IMG3 from "../assets/RIghtPage/image3.jpg";
import PROFILE from "../assets/RIghtPage/navimage.jpg";

const CardComponent = () => {
  const items = [
    {
      img: IMG1,
      title: "Beginner’s Guide to becoming a professional frontend developer",
      designation: "FRONTEND",
      img2: PROFILE,
      userName: "Prashant Kumar singh",
      userDetails: "Software Developer",
    },
    {
      img: IMG2,
      title: "Beginner’s Guide to becoming a professional frontend developer",
      designation: "FRONTEND",
      img2: PROFILE,
      userName: "Prashant Kumar singh",
      userDetails: "Software Developer",
    },
    {
      img: IMG3,
      title: "Beginner’s Guide to becoming a professional frontend developer",
      designation: "FRONTEND",
      img2: PROFILE,
      userName: "Prashant Kumar singh",
      userDetails: "Software Developer",
    },
  ];

  return (
    <div className="my-5">
      <div className="flex justify-between items-center">
        <p className="font-inter font-medium text-navItems">
          Continue watching
        </p>
        {ArrowICons}
      </div>

      <div className="flex flex-col sm:flex-row text-center sm:text-start ">
        {items.map((item, index) => (
          <div className="shadow-[0px_14px_42px_0px_#080F340F] p-3 rounded-[20px] flex-1 " key={index}>
            <div className="flex flex-col gap-2.5 items-center sm:items-start">
              <img src={item.img} alt="" className="rounded-xl " />
              <p className="font-inter px-3 bg-designation text-starComponent w-17 rounded-xl text-[8px] font-normal ">
                {item.designation}
              </p>
              <p className="text-sm text-navItems font-inter">{item.title}</p>
              {ProgressIcon}

              <div className="flex gap-2 items-center ">
                <img
                  src={item.img2}
                  alt=""
                  className="object-cover w-6 h-6 rounded-full "
                />
                <div>
                  <p className="text-[10px] text-navItems font-medium font-inter">{item.userName}</p>
                  <p className="text-[8px] text-navItems font-inter font-normal">{item.userDetails}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardComponent;
