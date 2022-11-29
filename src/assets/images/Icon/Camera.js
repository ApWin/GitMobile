import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.006 3.242L5.834 5H5a3.333 3.333 0 00-3.333 3.333v5.834A3.333 3.333 0 005 17.5h10a3.333 3.333 0 003.334-3.333V8.333A3.333 3.333 0 0015 5h-.833l-1.172-1.758a1.667 1.667 0 00-1.387-.742H8.392c-.557 0-1.077.279-1.386.742zM12.5 11.25a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10 5.833a.833.833 0 100-1.666.833.833 0 000 1.666z"
        fill={props.color}
      />
    </Svg>
  );
}
SvgComponent.defaultProps = {
  color: '#fff',
  size: 20,
};

export default SvgComponent;
