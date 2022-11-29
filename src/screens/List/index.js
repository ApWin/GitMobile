import React, {
  useCallback,
  useEffect,
  useMemo,
  useState
} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {get} from 'lodash';
import {FlashList} from '@shopify/flash-list';
import Components from 'components';
import styles from './styles';
import ClosedIcon from 'assets/images/Icon/ClearIcon';
import SearchIcon from 'assets/images/Icon/SearchIcon';
import {Routines} from 'services/api';

const tabs = [
  {
    title: 'Repositories',
    link: 'repositories',
    id: 1,
  },
  {
    title: 'Users',
    link: 'users',
    id: 2,
  }
];

const List = ({navigation}) => {
  const {users, repositories} = useSelector(state => state.profile);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState('');
  const [active, setActive] = useState(tabs[0]);
  const dispatch = useDispatch();

  useEffect(() => {
    onChangeText('', active);
  }, []);

  const getList = useCallback(
    (text, active) => {
      setValue(text);
      if (text) {
        Routines.user
          .getList(
            {
              request: {
                link: active.link,
                query: text,
              },
            },
            dispatch,
          )
          .then(
            successPayload => {
              setLoading(false);
            },
            failurePayload => {
              setLoading(false);
            },
          );
      } else {
        dispatch({type: 'CLEAR'});
        setLoading(false);
      }
    },
    [active],
  );

  const onChangeText = (text, active) => {
    setLoading(true);
    getList(text, active);
  };

  const renderSearch = useMemo(
    () => (
      <View style={styles.searchBar}>
        <View style={styles.icon}>
          <SearchIcon color="#000" opacity={0.3} />
        </View>
        <TextInput
          value={value}
          onChangeText={text => onChangeText(text, active)}
          placeholder="Search..."
          placeholderTextColor={'#C4C4C4'}
          style={styles.input}
        />
        {value.length > 0 && (
          <TouchableOpacity
            onPress={() => onChangeText('', active)}
            style={styles.icon}>
            <ClosedIcon color="#000" opacity={0.3} />
          </TouchableOpacity>
        )}
      </View>
    ),
    [value, active],
  );

  const renderTabs = useMemo(
    () => (
      <View style={styles.tabs}>
        {tabs.map((item, index) => (
          <TouchableOpacity
            onPress={() => {
              setActive(item);
              onChangeText(value, item);
            }}
            style={[
              styles.tabButton,
              active.id === item.id && styles.activeTab,
            ]}
            key={index.toString()}>
            <Text
              style={[
                styles.buttonText,
                active.id === item.id && styles.activeText,
              ]}>
              {item.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    ),
    [active, value],
  );

  const renderItem = ({item}) => {
    if (active.id === 1) {
      return (
        <TouchableOpacity
          onPress={() => navigation.navigate('repoView', {item})}
          style={styles.renderItem}>
          <View>
            <View style={[styles.row, {marginBottom: 15}]}>
              <Image
                source={{uri: get(item, 'owner.avatar_url')}}
                style={styles.avatar}
              />
              <Text style={styles.repoOwner}>{get(item, 'owner.login')}</Text>
            </View>
            <View style={styles.column}>
              <Text style={styles.repoTitle}>{get(item, 'full_name')}</Text>
              <Text style={styles.repoText}>{get(item, 'description')}</Text>
            </View>
            <View style={[styles.row, {marginTop: 10}]}>
              <View style={styles.row}>
                <Text>⭐️{get(item, 'stargazers_count')}</Text>
              </View>
              <View style={[styles.row, {marginLeft: 20}]}>
                <Text>🟡{item.language}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      );
    }
    if (active.id === 2) {
      return (
        <TouchableOpacity
          style={styles.renderItem}
          onPress={() => navigation.navigate('userView', {item})}
        >
          <View style={styles.row}>
            <Image
              source={{uri: get(item, 'avatar_url')}}
              style={styles.avatar}
            />
            <Text>{get(item, 'login')}</Text>
          </View>
        </TouchableOpacity>
      );
    }
    return null;
  };

  const ListEmptyComponent = () => {
    return (
      <View style={styles.emptyCon}>
        <Text style={styles.emptyTitle}>Find your stuff</Text>
        <Text style={styles.emptyText}>
          Search all of GutHub for People,Repositories
        </Text>
      </View>
    );
  };

  return (
    <Components.Layout style={styles.container}>
      <SafeAreaView style={styles.header}>
        <Text style={styles.headerTitle}>Explore</Text>
      </SafeAreaView>
      {renderSearch}
      {renderTabs}
      <View style={{flex: 1}}>
        <Components.Spinner processing={loading} />
        <FlashList
          keyExtractor={(e, i) => i.toString()}
          showsVerticalScrollfndicator={false}
          contentContainerStyle={styles.contentContainerStyle}
          data={active.id === 1 ? repositories : users}
          renderItem={renderItem}
          estimatedItemSize={200}
          ListEmptyComponent={ListEmptyComponent}
        />
      </View>
    </Components.Layout>
  );
};

export default List;
