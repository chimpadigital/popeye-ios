import React from "react";
import Svg, { Path } from "react-native-svg";

export const Prev = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="150"
      height="150"
      fill="#0F50A7"
      class="bi bi-chevron-compact-left"
      viewBox="0 0 80 80"
    >
      <Path
        fill-rule="evenodd"
        d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"
      />
    </Svg>
  );
};
