import React from "react";
import { DashBoard } from "@/components/DashBoard/DashBoard";
import { Description } from "@/components/Description/Description";
import Modal from "@/components/Modal/Modal";
import Share from "@/components/share/index";
import MoreGame from "@/components/MoreGame";
import { Timer } from "@/components/Settings/Timer";
import useContext from "@/hooks/rootContext/useContext";
import useOperator from "@/hooks/rootContext/useOperator";
import { NextSeo } from "next-seo";

const Typing = () => {
  const { data, open } = useContext();
  const { changeTimer, changeTestType, changeClickType, handelCloseDialog } =
    useOperator();

  return (
    <>
      <NextSeo
        title="Typing Speed Test - How Fast Can You Type?"
        description="Test your typing speed with this mobile friendly speed checker. Boost your typing speed and improve your skikks."
        keywords={["typing speed test"]}
        canonical="https://www.clickplay.pro/typing-speed-test"
      />
      <div style={{ width: "100%" }}>
        <div className="up AppMain">
          <div className="upText">
            <h1 className="fs-2 fw-bold mt-2">Typing Speed Test</h1>
            <p style={{ fontSize: "1.1rem" }}>
              Take the speed typing test challenge!
            </p>
          </div>
          <div className="dashboard-container">
            <DashBoard />
            <Timer
              changeTimer={changeTimer}
              timer={data.timer}
              type={data?.testType}
            />
          </div>
        </div>
        <Share />
        <Description type="Typing" changeTestType={changeTestType} />
        <MoreGame changeTestType={changeTestType} />
        <Modal open={open} onClose={handelCloseDialog} data={data} />
      </div>
    </>
  );
};

export default Typing;
