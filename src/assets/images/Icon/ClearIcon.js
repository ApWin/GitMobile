import React from 'react';
import Svg, {Defs, Path, G, Mask, Use} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title, desc */

const SvgComponent = props => (
  <Svg width="16px" height="17px" viewBox="0 0 16 17" {...props}>
    <Defs>
      <Path
        d="M8,0 C12.424,0 16,3.576 16,8 C16,12.424 12.424,16 8,16 C3.576,16 0,12.424 0,8 C0,3.576 3.576,0 8,0 L8,0 Z M10.872,4 L8,6.872 L5.128,4 L4,5.128 L6.872,8 L4,10.872 L5.128,12 L8,9.128 L10.872,12 L12,10.872 L9.128,8 L12,5.128 L10.872,4 Z"
        id="path-1"
      />
    </Defs>
    <G id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
      <G id="anor-60" transform="translate(-326.000000, -108.000000)">
        <G id="Field" transform="translate(17.000000, 93.000000)">
          <G
            id="Icon/Close-Circle"
            transform="translate(309.000000, 15.382857)">
            <Mask id="mask-2" fill="white">
              <Use xlinkHref="#path-1" />
            </Mask>
            <Use
              id="Shape"
              fill="#000000"
              fillRule="evenodd"
              xlinkHref="#path-1"
            />
          </G>
        </G>
      </G>
    </G>
  </Svg>
);

export default SvgComponent;
