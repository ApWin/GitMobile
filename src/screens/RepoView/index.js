import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Components from 'components';
import styles from './styles';
import {get} from 'lodash';
import ArrowRight from 'assets/images/Icon/ArrowRight';

const RepoView = props => {
  const {item} = props.route.params;

  return (
    <Components.Layout style={styles.container}>
      <Components.Header containerStyle={styles.header} />
      <Components.ScrollView>
        <View style={styles.contentContainerStyle}>
          <View style={styles.row}>
            <Image
              source={{uri: get(item, 'owner.avatar_url')}}
              style={styles.avatar}
            />
            <Text>{get(item, 'owner.login')}</Text>
          </View>
          <Text style={styles.name}>{get(item, 'name')}</Text>
          <Text style={styles.description}>{get(item, 'description')}</Text>
          <View style={[styles.row, {marginTop: 15}]}>
            <View style={styles.row}>
              <Text>☆</Text>
              <Text style={{fontWeight: '700'}}>
                {' '}
                {get(item, 'stargazers_count')}
              </Text>
              <Text> stars</Text>
            </View>
            <View style={[styles.row, {marginLeft: 20}]}>
              <Text>🖇</Text>
              <Text style={{fontWeight: '700'}}>
                {' '}
                {get(item, 'forks_count')}
              </Text>
              <Text> forks</Text>
            </View>
          </View>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.button}>
            <Text>📍 </Text>
            <View
              style={[styles.row, {flex: 1, justifyContent: 'space-between'}]}>
              <Text style={styles.buttonText}>Issues</Text>
              <View style={styles.row}>
                <Text style={styles.buttonText}>
                  {get(item, 'open_issues_count')}
                </Text>
                <ArrowRight color="#000" opacity={0.5} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>📌 </Text>
            <View
              style={[styles.row, {flex: 1, justifyContent: 'space-between'}]}>
              <Text style={styles.buttonText}>Pull Requests</Text>
              <View style={styles.row}>
                <Text style={styles.buttonText}>
                  {get(item, 'open_issues')}
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
      </Components.ScrollView>
    </Components.Layout>
  );
};

export default RepoView;
