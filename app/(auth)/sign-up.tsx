import React from 'react'
import { View, Text } from 'react-native'
import {Link} from "expo-router";

const SignUn = () => {
    return (
        <View>
            <Text>Onboarding</Text>
            <Link href="/(auth)/sign-in">Sign in</Link>
        </View>
    )
}

export default SignUn