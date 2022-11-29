import React, {useState, useMemo} from 'react';
import {Platform, View} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import {withTranslation} from 'react-i18next';
import RBSheet from 'react-native-raw-bottom-sheet';
import Components from '../../index';
import DatePick from 'react-native-date-picker';
import i18next from 'i18next';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const DatePicker = props => {
  const {getRef, onConfirm, t, onCancel} = props;
  const [date, setDate] = useState(new Date());
  const insets = useSafeAreaInsets();

  const renderButtons = useMemo(
    () => (
      <View
        style={[
          styles.buttons,
          {marginBottom: Platform.OS === 'android' ? 20 : insets.bottom},
        ]}>
        <Components.Button onPress={onCancel} style={[styles.btn, styles.btn1]}>
          <Components.Text>{t('Ortga qaytish')}</Components.Text>
        </Components.Button>
        <Components.Button
          onPress={() => {
            onConfirm(date);
            onCancel();
          }}
          style={styles.btn}>
          <Components.Text>{t('Ozgartirish')}</Components.Text>
        </Components.Button>
      </View>
    ),
    [],
  );

  return (
    <RBSheet
      ref={getRef}
      height={370}
      duration={250}
      closeOnDragDown
      customStyles={{container: styles.bottomSheetContainer}}>
      <Components.Text size={18} style={styles.title}>
        {t('Vaqtni tanlash')}
      </Components.Text>
      <View style={styles.container}>
        <DatePick
          mode="date"
          textColor="#fff"
          androidVariant="iosClone"
          date={date}
          locale={i18next.language}
          style={styles.dateStyle}
          maximumDate={new Date()}
          onDateChange={setDate}
          fadeToColor="none"
        />
        {renderButtons}
      </View>
    </RBSheet>
  );
};
DatePicker.propTypes = {
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func,
};
DatePicker.defaultProps = {
  onConfirm: () => {},
  onCancel: () => {},
  getRef: () => {},
};
export default withTranslation('main')(DatePicker);
