import React from 'react'
import {View} from 'react-native'
import Placeholder, { Line, Box } from "rn-placeholder";
import PropTypes from 'prop-types';
import styles from './styles'

const News = () => (
    <View style={styles.container}>
        <Placeholder
            isReady={false}
            animation="fade"
            renderRight={() => <Box color={"#E6EAF0"} height={78} width={78} style={{borderRadius: 5}}/>}
        >
            <Line color={"#E6EAF0"} width="70%" style={{marginTop: 10}}/>
            <Line color={"#E6EAF0"} width="30%" style={{marginTop: 10}}/>
        </Placeholder>
    </View>
);
News.propTypes = {

};
News.defaultProps = {

};
export default News
