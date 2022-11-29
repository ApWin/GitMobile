import * as React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from 'prop-types';

function SvgComponent(props) {
    return (
        <Svg width={30} height={14} viewBox="0 0 30 14" fill="none" {...props}>
            <Path
                d="M0.252068 7.6072L6.40447 13.7484C6.74059 14.0839 7.28555 14.0839 7.62167 13.7484C7.95779 13.4129 7.95779 12.869 7.62167 12.5335L2.93827 7.85901H29.1394C29.6147 7.85901 30 7.47442 30 7C30 6.52558 29.6147 6.14099 29.1394 6.14099H2.93827L7.62167 1.4665C7.95779 1.13102 7.95779 0.587093 7.62167 0.251612C7.28555 -0.0838699 6.74059 -0.0838699 6.40447 0.251612L0.252068 6.3928C0.0906754 6.55382 0 6.77224 0 7C0 7.22776 0.0906754 7.44618 0.252068 7.6072Z"
                fill={props.color}
            />
        </Svg>
    );
}

SvgComponent.propTypes = {
    color: PropTypes.string
};
SvgComponent.defaultProps = {
    color:'white'
};

export default SvgComponent;
