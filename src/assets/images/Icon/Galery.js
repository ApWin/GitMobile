import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M24.619 3.2H7.38a4.181 4.181 0 00-4.18 4.181v17.244a4.181 4.181 0 004.18 4.181h17.244a4.181 4.181 0 004.181-4.18V7.38a4.186 4.186 0 00-4.187-4.18zM11.594 8.006a2.136 2.136 0 012.269 2.27 2.137 2.137 0 01-1.988 1.987 2.136 2.136 0 01-2.269-2.269 2.127 2.127 0 011.988-1.988zm14.175 16.97H6.23a.9.9 0 01-.9-.9v-.688c0-.35.138-.688.388-.938l6.219-6.219a1.222 1.222 0 011.725 0l4.206 4.207 2.337-2.338a1.222 1.222 0 011.725 0l4.35 4.35c.25.25.388.588.388.938v.687a.9.9 0 01-.9.9z"
        fill={props.color}
      />
    </Svg>
  );
}

SvgComponent.defaultProps = {
  color: '#CBA672',
  size: 20,
};

export default SvgComponent;
