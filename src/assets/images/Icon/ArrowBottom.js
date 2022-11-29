import React from "react";
import Svg, { G, Path } from "react-native-svg";
import PropTypes from 'prop-types';
/* SVGR has dropped some elements not supported by react-native-svg: title, desc */

const SvgComponent = props => (
    <Svg width={props.width} height={props.height}  viewBox="0 0 11 7" {...props}>
        <G id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
            <G
                id="uzbegim-17-copy"
                transform="translate(-317.000000, -655.000000)"
                fill={props.color}
            >
                <G id="Group-2" transform="translate(20.000000, 281.000000)">
                    <G id="Group-2-Copy-3" transform="translate(0.000000, 23.000000)">
                        <G id="Group-4">
                            <Path
                                d="M305.294013,349.215428 C305.020302,348.928191 304.579013,348.928191 304.305302,349.215428 L299.663389,354.086731 C299.445537,354.315348 299.445537,354.684652 299.663389,354.913269 L304.305302,359.784572 C304.579013,360.071809 305.020302,360.071809 305.294013,359.784572 C305.567724,359.497335 305.567724,359.034239 305.294013,358.747002 L301.249795,354.497069 L305.299599,350.247136 C305.567724,349.965761 305.567724,349.496803 305.294013,349.215428 Z"
                                id="Path-Copy"
                                transform="translate(302.500000, 354.500000) rotate(-90.000000) translate(-302.500000, -354.500000)"
                            />
                        </G>
                    </G>
                </G>
            </G>
        </G>
    </Svg>
);
SvgComponent.propTypes = {
    color:PropTypes.string
};
SvgComponent.defaultProps = {
    width: 20,
    height: 20,
    color:'white'
};
export default SvgComponent;
