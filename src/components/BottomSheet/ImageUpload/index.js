import React, {useRef, useEffect, useCallback} from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import {withTranslation} from 'react-i18next';
import RBSheet from 'react-native-raw-bottom-sheet';
import Components from '../../index';
import GaleryIcon from 'assets/images/Icon/Galery';
import CameraIcon from 'assets/images/Icon/Camera';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

let options = {
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

const AddImage = ({onImageSelected, getRef, t, showImg, renderShowImg}) => {
  const RBSheetImage = useRef(null);
  useEffect(() => {
    getRef(RBSheetImage.current);
  }, []);

  const selectedImage = useCallback(res => {
    if (res.didCancel) {
      console.log('User cancelled image picker');
    } else if (res.error) {
      console.log('ImagePicker Error: ', res.error);
    } else if (res.customButton) {
      console.log('User tapped custom button: ', res.customButton);
    } else {
      let file = res.assets[0];
      const image = {path: file.uri, name: file.fileName, type: file.type};
      const sizeInMb = file.fileSize / 1000000;
      RBSheetImage.current.close();
      onImageSelected(image, sizeInMb);
    }
  }, []);

  const camereOpen = useCallback(() => {
    launchCamera(options, res => {
      selectedImage(res);
    });
  }, []);

  const galeryOpen = useCallback(() => {
    launchImageLibrary(options, res => {
      selectedImage(res);
    });
  }, []);

  return (
    <RBSheet
      ref={RBSheetImage}
      height={230}
      duration={250}
      closeOnDragDown
      customStyles={{container: styles.bottomSheetContainer}}>
      <Components.Text size={18} style={styles.title}>
        {t('Rasm yuklash')}
      </Components.Text>
      <View style={styles.container}>
        {!renderShowImg && (
          <TouchableOpacity onPress={showImg} style={styles.button}>
            <Text style={styles.buttonText}>{t('Rasmni korish')}</Text>
          </TouchableOpacity>
        )}
        <View style={styles.buttonCon}>
          <TouchableOpacity onPress={camereOpen} style={styles.button}>
            <CameraIcon color="#CBA672" size={30} />
          </TouchableOpacity>
          <Components.Text size={12} style={styles.text}>
            {t('Kamera')}
          </Components.Text>
        </View>
        <View style={styles.buttonCon}>
          <TouchableOpacity onPress={galeryOpen} style={styles.button}>
            <GaleryIcon size={30} />
          </TouchableOpacity>
          <Components.Text size={12} style={styles.text}>
            {t('Galereya')}
          </Components.Text>
        </View>
      </View>
    </RBSheet>
  );
};
AddImage.propTypes = {
  onImageSelected: PropTypes.func,
  getRef: PropTypes.func,
};
AddImage.defaultProps = {
  onImageSelected: () => {},
  getRef: () => {},
  renderShowImg: true,
};
export default withTranslation('main')(AddImage);
