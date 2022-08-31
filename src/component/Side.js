import React from "react";
import { supp } from "../utils/constants";
import { useTheContext } from "../context/context";
import { AiFillFileText } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { AiOutlineFileText } from "react-icons/ai";
import { HiOutlinePlus } from "react-icons/hi";

const Side = () => {
  const { side_open, openSide, closeSide } = useTheContext();

  return (
    <section className={`side ${side_open && "show-side"}`}>
      <div className={`file ${!side_open && "show-file"}`} onClick={openSide}>
        <AiFillFileText />
      </div>
      <div className="side-content">
        <div className="side-head">
          <h2>الملحق</h2>
          <IoClose className="close" onClick={closeSide} />
        </div>
        <div className="side-body">
          {supp.map((item) => (
            <div className="item" key={item.id}>
              <div className="icon">
                <AiOutlineFileText className="file-text_icon" />
                <h4>{item.title}</h4>
              </div>
              <HiOutlinePlus className="plus" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Side;
