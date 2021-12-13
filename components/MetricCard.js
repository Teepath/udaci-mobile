import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import DateHeader from './DateHeader';
import { getMetricMetaInfo } from '../utils/helpers';
import { gray } from '../utils/color';

export default function MetricCard({ date, metrics }) {
    return (
        <View>
            {
                date && <DateHeader date={date} />}
                {Object.keys(metrics).map((metric) => {
                    const { getIcon, displayName, unit, backgroundColor } = getMetricMetaInfo(metric);

                    return (
                        <View style={styles.metric} key={metric}>
                        <View >
                            {getIcon()}
                            </View>
                            <View style={{flex:2, marginLeft: 10}}>
                        <Text style={{fonstSize:20}}>
                            {displayName}
                            </Text>
                            <Text style={{fontSize:16, color:gray}}>
                                {metric[metric]}{unit}
                                </Text>
                                </View>
                            </View>
                    )
                })}
            
            
        </View>
    )
}


const styles = StyleSheet.create({
    metric: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop:12,
    }

})