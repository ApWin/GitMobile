import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
    <Svg width={8} height={13} viewBox="0 0 8 13" fill="none" {...props}>
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.71 2.12L3.12 6.71l4.59 4.59-1.42 1.41-6-6 6-6 1.42 1.41z"
            fill="#1E1F20"
        />
    </Svg>
);

export default SvgComponent;
