import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigate } from 'react-router-native';

export default function Main() {
    const navigate = useNavigate()

    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Text onPress={() => navigate('/login')}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text onPress={() => navigate('/signup')}>signup</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
