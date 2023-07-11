import React from "react";
import { useRouter } from "next/router";
import { DashBoard } from "@/components/DashBoard/DashBoard";
import { Description } from "@/components/Description/Description";
import Modal from "@/components/Modal/Modal";
import Share from "@/components/share";
import MoreGame from "@/components/MoreGame";
import { Timer } from "@/components/Settings/Timer";
import useContext from "@/hooks/rootContext/useContext";
import useOperator from "@/hooks/rootContext/useOperator";
import { NextSeo } from "next-seo";

const Kohi = () => {
  const { data, open } = useContext();
  const { changeTimer, changeTestType, changeClickType, handelCloseDialog } =
    useOperator();
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <NextSeo
        title="Kohi Click Test - Ideal for Gamers"
        description="Kohi Click - Popular amongst the Minecraft pvp gamer. Perfect your clicking speed with the Kohi click test"
        keywords={["kohi click test"]}
        canonical="https://www.clickplay.pro/kohi-click-test"
      />
      <div style={{ width: "100%" }}>
        <div className="up AppMain">
          <div className="upText">
            <h1 className="fs-2 fw-bold mt-2">Kohi Speed Test</h1>
            <p style={{ fontSize: "1.1rem" }}>
              Test your Kohi speed per second!
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
        <Description type="Kohi" changeTestType={changeTestType} />
        <MoreGame changeTestType={changeTestType} />
        <Modal open={open} onClose={handelCloseDialog} data={data} />
      </div>
    </>
  );
};

export default Kohi;
