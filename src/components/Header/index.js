import React, {useState} from 'react';
import {SafeAreaView, TouchableOpacity, Text, View} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import HeaderIcon from 'assets/images/Navigations/HeaderBackIcon';
import NavigationService from 'navigators/NavigationService';
import colors from 'assets/styles/colors';

const NavigationHeader = props => {
  return (
    <SafeAreaView style={[props.containerStyle]}>
      <View style={[styles.container, props.style]}>
        {props.leftIcon ? (
          <TouchableOpacity
            style={[styles.iconWrapper, props.leftStyle]}
            onPress={props.onLeftPressed}>
            {props.leftIcon}
          </TouchableOpacity>
        ) : (
          <View style={styles.headerWithTitle}>
            {props.showLeft ? (
              <>
                <TouchableOpacity
                  onPress={props.onLeftPressed}
                  style={styles.iconWrapper}>
                  <HeaderIcon color={props.color} />
                </TouchableOpacity>
                {!props.showCenter ? (
                  <Text style={[styles.title, props.titleStyle]}>
                    {props.title}
                  </Text>
                ) : null}
              </>
            ) : (
              <View style={styles.iconWrapper} />
            )}
          </View>
        )}

        {/*{*/}
        {/*     props.showCenter ? (*/}
        {/*         <TouchableOpacity disabled={true} style={[styles.centerIcon, props.isFavorite ? styles.favoriteCenter : null]}>*/}
        {/*             <CenterLogo width={52} height={17}/>*/}
        {/*         </TouchableOpacity>*/}
        {/*     ) : null*/}
        {/*}*/}
        {props.renderRight ? (
          props.renderRight(props)
        ) : (
          <TouchableOpacity onPress={props.onRightPressed} style={styles.right}>
            {props.rightIcon ? props.rightIcon : null}
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};
NavigationHeader.propTypes = {
  style: PropTypes.object,
  titleStyle: PropTypes.object,
  title: PropTypes.string,
};
NavigationHeader.defaultProps = {
  containerStyle: {},
  style: {},
  titleStyle: {},
  leftStyle: {},
  title: '',
  onLeftPressed: () => {
    NavigationService.goBack();
  },
  onRightPressed: () => {},
  favoritePressed: () => {},
  renderRight: null,
  leftIcon: null,
  rightIcon: null,
  showLeft: true,
  showCenter: false,
  color: colors.midnightBlue,
  isFavorite: false,
};
export default NavigationHeader;
