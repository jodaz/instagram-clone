import * as React from 'react'
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';

export default function App() {
    const [state, setState] = React.useState(0)

    const add  = () => {
        setState(state + 1)
    }

    const substract  = () => {
        setState(state - 1)
    }

    const reset  = () => {
        setState(0)
    }

    return (
        <View style={styles.container}>
            <Text style={{ color: 'black' }}>Hola mundo</Text>
            <Text style={{ color: 'black' }}>{state}</Text>

            <StatusBar style="auto" />
            <TouchableOpacity
                onPress={() => add()}
            >
                <Text style={{ fontSize: 25 }}>Add</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => substract()}
            >
                <Text style={{ fontSize: 25 }}>Substract </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => reset()}
            >
                <Text style={{ fontSize: 25 }}>reset </Text>
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
