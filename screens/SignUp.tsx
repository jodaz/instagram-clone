import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigate } from 'react-router-native';

export default function SignUp() {
    const navigate = useNavigate();

    return (
        <View style={styles.container}>
            <Text>SignUp</Text>

            <TouchableOpacity>
                <Text onPress={() => navigate(-1)}>Go back</Text>
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
