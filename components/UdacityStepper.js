import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome, Entypo } from "@expo/vector-icons";
import { purple, white, gray } from "../utils/color";
import { Platform } from "react-native";

export default function UdacityStepper({
  max,
  unit,
  step,
  value,
  onIncrement,
  onDecrement,
}) {
  return (
    <View style={[styles.row, { justifyContent: 'space-between' }]}>
      {Platform.OS ==='ios'?
      (<View style={{flexDirection : 'row'}}>
        <TouchableOpacity
          style={[styles.iosBtn, {borderTopRightRadius:0, borderBottomRightRadius:0}]}
          onPress={onDecrement}>
          <Entypo name="minus" size={30} color={purple} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.iosBtn, {borderTopLeftRadius:0, borderBottomLeftRadius:0}]}
          onPress={onIncrement}>
          <Entypo name="plus" size={30} color={purple} />
        </TouchableOpacity>
      </View>)
      :
        (
          <View style={{flexDirection : 'row'}}>
          <TouchableOpacity
            style={[styles.andriodBtn, {borderTopRightRadius:0, borderBottomRightRadius:0}]}
            onPress={onDecrement}>
            <FontAwesome name="minus" size={30} color={white} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.andriodBtn, {borderTopLeftRadius:0, borderBottomLeftRadius:0}]}
            onPress={onIncrement}>
            <FontAwesome name="plus" size={30} color={white} />
          </TouchableOpacity>
        </View>
             )
            }
        <View style={styles.metricCounter}>
          <Text style={{fontSize:24, textAlign:'center'}}>{value}</Text>
          <Text style={{fontSize:18, color:gray}}>{unit}</Text>
        </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flex: 1,
    alignItems:'center'
  },

  iosBtn: {
    backgroundColor: white,
    borderColor: purple,
    borderWidth: 1,
    borderRadius: 3,
    margin: 4,
    padding: 5,
    paddingLeft: 25,
    paddingRight:25,
  },
  andriodBtn: {
    margin: 5,
    backgroundColor: purple,
    padding: 10,
    borderRadius:2
  },
  metricCounter: {
    width: 85,
    justifyContent: "center",
    alignItems:'center'
  }
})
