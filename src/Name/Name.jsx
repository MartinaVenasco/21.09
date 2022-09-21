import "./index.css";
import { memo } from "react";

const Name = ({ nameData }) => {
  let {username} = nameData;

  return (
    <div>
        <p>{username}</p>
      </div>

  );
};

export default memo(Name);
