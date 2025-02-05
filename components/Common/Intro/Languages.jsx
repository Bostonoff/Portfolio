import { Progress } from "antd";
import { useEffect, useState } from "react";

const Languages = () => {
  const [rus, setRus] = useState(0);
  const [english, setEnglish] = useState(0);
  const [uzb, setUzbek] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (uzb < 100) {
        setUzbek((prevCount) => prevCount + 1);
      }
      if (rus < 97) {
        setRus((prevCount) => prevCount + 1);
      }
      if (english < 90) {
        setEnglish((prevCount) => prevCount + 1);
      }
    }, 44);

    return () => clearInterval(timer);
  }, [uzb, rus, english]);
  return (
    <div className="flex flex-col space-y-1 pt-6">
      <div className="flex flex-col gap-y-4">
        <span className="text-Snow text-xs font-bold">Languages</span>
        <div className="flex flex-row items-center justify-center space-x-6">
          <div className="flex flex-col items-center justify-center gap-y-2">
            <Progress
              strokeColor="#1fdf69"
              type="circle"
              percent={uzb}
              size={60}
            />
            <span className="text-xs font-bold text-Snow">Uzbek</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-y-2">
            <Progress
              strokeColor="#57f995"
              type="circle"
              percent={rus}
              size={60}
            />
            <span className="text-xs font-bold text-Snow">Russian</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-y-2">
            <Progress
              strokeColor="#85ffb4"
              type="circle"
              percent={english}
              size={60}
            />
            <span className="text-xs font-bold text-Snow">English</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Languages;
