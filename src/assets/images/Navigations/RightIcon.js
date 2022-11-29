import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 20 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M16.17 6l-2.58 2.59L15 10l5-5-5-5-1.41 1.41L16.17 4H0v2h16.17z"
        fill={props.color}
      />
    </Svg>
  );
}

SvgComponent.defaultProps = {
  size: 20,
  color: '#fff',
};
export default SvgComponent;
