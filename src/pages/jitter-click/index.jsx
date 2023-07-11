import React from "react";
import { DashBoard } from "@/components/DashBoard/DashBoard";
import { Description } from "@/components/Description/Description";
import Modal from "@/components/Modal/Modal";
import Share from "@/components/share/index";
import MoreGame from "@/components/MoreGame";
import { Timer } from "@/components/Settings/Timer";
import useContext from "@/hooks/rootContext/useContext";
import useOperator from "@/hooks/rootContext/useOperator";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";

const Jitter = () => {
  const { data, open } = useContext();
  const { changeTimer, changeTestType, changeClickType, handelCloseDialog } =
    useOperator();

  const router = useRouter();

  return (
    <>
      <NextSeo
        title="Jitter Click Test - Mouse Speed Test"
        description="Jitter Click is a method used by gamers. Jitter Click is a technique of rapid arm movement to enhance the speed of mouse clicks"
        keywords={["Jitter Click Test"]}
        canonical="https://www.clickplay.pro/jitter-click"
      />
      <div style={{ width: "100%" }}>
        <div className="up AppMain">
          <div className="upText">
            <h1 className="fs-2 fw-bold mt-2">Jitter Speed Test</h1>
            <p style={{ fontSize: "1.1rem" }}>
              Test your Jitter speed per second!
            </p>
          </div>
          <div className="dashboard-container">
            <div className="clicker-container">
              <DashBoard />
              <button
                onClick={() => {
                  router.push("/cps");
                  window.scrollTo(0, 0);
                }}
                className="default-button click-speed-test-btn"
              >
                click speed test
              </button>
            </div>
            <Timer
              changeTimer={changeTimer}
              timer={data?.timer}
              type={data?.testType}
            />
          </div>
        </div>
        <Share />
        <Description type="Jitter" changeTestType={changeTestType} />
        <MoreGame changeTestType={changeTestType} />
        <Modal open={open} onClose={handelCloseDialog} data={data} />
      </div>
    </>
  );
};

export default Jitter;
