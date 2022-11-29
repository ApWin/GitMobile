import * as React from "react";
import Svg, { Path, Mask, G, Rect } from "react-native-svg";
import PropTypes from 'prop-types'

function SvgComponent(props) {
    return (
        <Svg width={props.width} height={props.height} viewBox="0 0 21 20" fill="none" {...props}>
            <Path
                d="M13.5833 10.5834L8.58334 15.5834C8.41667 15.75 8.25001 15.8334 8.00001 15.8334C7.75001 15.8334 7.58334 15.75 7.41667 15.5834C7.08334 15.25 7.08334 14.75 7.41667 14.4167L11.8333 10L7.41667 5.58335C7.08334 5.25002 7.08334 4.75002 7.41667 4.41669C7.75001 4.08335 8.25001 4.08335 8.58334 4.41669L13.5833 9.41669C13.9167 9.75002 13.9167 10.25 13.5833 10.5834Z"
                fill={props.color}
            />
            <Mask
                id="mask0"
                mask-type="alpha"
                maskUnits="userSpaceOnUse"
                x={7}
                y={4}
                width={7}
                height={12}
            >
                <Path
                    d="M13.5833 10.5834L8.58334 15.5834C8.41667 15.75 8.25001 15.8334 8.00001 15.8334C7.75001 15.8334 7.58334 15.75 7.41667 15.5834C7.08334 15.25 7.08334 14.75 7.41667 14.4167L11.8333 10L7.41667 5.58335C7.08334 5.25002 7.08334 4.75002 7.41667 4.41669C7.75001 4.08335 8.25001 4.08335 8.58334 4.41669L13.5833 9.41669C13.9167 9.75002 13.9167 10.25 13.5833 10.5834Z"
                    fill={props.color}
                />
            </Mask>
            <G mask="url(#mask0)">
                <Rect x={0.5} width={20} height={20} fill="white" />
            </G>
        </Svg>
    );
}
SvgComponent.propTypes = {
    color:PropTypes.string
};
SvgComponent.defaultProps = {
    width: 20,
    height: 20,
    color:'white'
};
export default SvgComponent;
