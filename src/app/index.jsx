import React from 'react'

import { View, Text } from 'react-native'

import Inventory from "./Inventory"
import Profile from "./Profile"
import LearnList from "./LearnList"
import EtudeState from "./EtudeState"

const index = () => {
  return (
    <View>
      {/* <Inventory /> */}
      {/* <Profile /> */}
      {/* <LearnList /> */}
      <EtudeState />
    </View>
  )
}

export default index