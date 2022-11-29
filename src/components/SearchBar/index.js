import React, {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import SearchIcon from 'assets/images/Icon/SearchIcon';
import ClearIcon from 'assets/images/Icon/ClearIcon';

const SearchBar = ({
  disabled,
  onBlur,
  onFocus,
  onPress,
  title,
  onSubmit,
  onClear,
  style,
}) => {
  const [value, setValue] = useState('');
  return (
    <SafeAreaView style={[styles.container, style]}>
      {disabled ? (
        <TouchableOpacity style={styles.wrapper} onPress={onPress}>
          <SearchIcon color={'black'} />
          <Text style={styles.textInput}>{title}</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.wrapper}>
          <SearchIcon color={'black'} />
          <TextInput
            onFocus={() => {
              onFocus();
            }}
            onBlur={() => {
              onBlur();
            }}
            value={value}
            onChangeText={text => {
              setValue(text);
            }}
            autoFocus={false}
            onSubmitEditing={event => {
              onSubmit(event.nativeEvent.text);
            }}
            style={styles.textInput}
            placeholder={title}
          />
          {value ? (
            <TouchableOpacity
              onPress={() => {
                if (value) {
                  onClear();
                  setValue('');
                }
              }}
              style={styles.close}>
              <ClearIcon />
            </TouchableOpacity>
          ) : null}
        </View>
      )}
    </SafeAreaView>
  );
};
SearchBar.propTypes = {
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onChangeText: PropTypes.func,
  title: PropTypes.string,
};
SearchBar.defaultProps = {
  onFocus: () => {},
  onPress: () => {},
  onBlur: () => {},
  onClear: () => {},
  onSubmit: () => {},
  disabled: false,
  title: '',
  value: '',
  style: {},
};
export default SearchBar;
