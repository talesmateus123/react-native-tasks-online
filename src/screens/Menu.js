import React from 'react'
import { ScrollView } from 'react-native'
import { DrawerItems } from 'react-navigation-drawer'

export default props => (
    <ScrollView>
        <DrawerItems {...props} />
    </ScrollView>
)
