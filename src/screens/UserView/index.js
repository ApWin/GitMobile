import {View, Text, Image, TouchableOpacity} from 'react-native';
import React,{ useState, useEffect } from 'react';
import Components from 'components';
import styles from './styles';
import {get} from 'lodash';
import ArrowRight from 'assets/images/Icon/ArrowRight';
import { useDispatch, useSelector } from "react-redux";
import { Routines } from "services/api";

const UserView = props => {
  const {item} = props.route.params;
  const {userData} = useSelector(state => state.profile);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    getDetails()
  },[])

  const getDetails = () => {
    setLoading(false);
    Routines.user
      .getUserDetails(
        {
          request: {
            login: item.login,
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
  }
  return (
    <Components.Layout style={styles.container}>
      <Components.Header containerStyle={styles.header} />
      <Components.ScrollView>
        <View style={styles.contentContainerStyle}>
          <View style={styles.row}>
            <Image
              source={{uri: get(userData, 'avatar_url')}}
              style={styles.avatar}
            />
            <Text style={styles.name}>{get(userData, 'name')}</Text>
          </View>
          <View style={[styles.row, styles.additionalStyle]}>
            <Text>📍</Text>
            <Text style={{fontWeight: '700'}}>
              {get(userData, 'location','')}
            </Text>
          </View>
          <View style={[styles.row,{marginTop:10}]}>
            <View style={styles.row}>
              <Text>☆</Text>
              <Text style={{fontWeight: '700'}}>
                {get(userData, 'followers')}
              </Text>
              <Text> followers</Text>
            </View>
            <View style={[styles.row, {marginLeft: 20}]}>
              <Text>🖇</Text>
              <Text style={{fontWeight: '700'}}>
                {get(userData, 'following')}
              </Text>
              <Text> forks</Text>
            </View>
          </View>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.button}>
            <Text>📌 </Text>
            <View
              style={[styles.row, {flex: 1, justifyContent: 'space-between'}]}>
              <Text style={styles.buttonText}>Repositories</Text>
              <View style={styles.row}>
                <Text style={styles.buttonText}>
                  {get(userData, 'public_repos')}
                </Text>
                <ArrowRight color="#000" opacity={0.5} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, {borderBottomWidth: 0}]}>
            <Text>🔗 </Text>
            <View
              style={[styles.row, {flex: 1, justifyContent: 'space-between'}]}>
              <Text style={styles.buttonText}>Release</Text>
              <View style={styles.row}>
                <Text style={styles.buttonText}>
                  {get(item, 'open_issues')}
                </Text>
                <ArrowRight color="#000" opacity={0.5} />
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <Components.Spinner processing={loading} />
      </Components.ScrollView>
    </Components.Layout>
  );
};

export default UserView;
