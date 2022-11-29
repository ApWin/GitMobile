import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import PropTypes from 'prop-types';
import colors from "../../../assets/styles/colors";

const ListFooter = ({loading, containerStyle, size, color}) => {
  if (!loading) return null;

  return (
    <View style={containerStyle}>
      <ActivityIndicator animating size={size} color={color} />
    </View>
  );
};

ListFooter.propTypes = {
  loading: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'large']),
  containerStyle: PropTypes.object
};

ListFooter.defaultProps = {
  loading: false,
  size: 'large',
  containerStyle: {
    paddingVertical: 20,
    borderColor: '#CCC'
  },
  color: colors.midnightBlue
};

export default ListFooter;
