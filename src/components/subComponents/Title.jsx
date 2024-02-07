import React, { useContext, useState } from "react";
import "../styles/Title.css";
import { ChatContext } from "../../context/chatsContext";

export const getTitleHeader = (title) => {
  const titleArray = title?.split(" ");
  const header = titleArray?.map((v) => v[0]).join("");
  return header?.slice(0, 2);
};
const Title = ({ title, color, index }) => {
  const {selected, setSelected} = useContext(ChatContext);
  const [focused, setFocused] = useState(false)
  return (
    <div
      className={`title_container ${(focused || selected===index) && "selected"}`}
      onMouseEnter={() => setFocused(true)}
      onMouseLeave={() => setFocused(false)}
      onClick={()=>setSelected(index)}
    >
      <span style={{ background: `${color}` }}>{getTitleHeader(title)}</span>
      <h2>{title}</h2>
    </div>
  );
};

export default Title;
