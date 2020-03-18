import React, { useState, useRef, useEffect } from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The Game is over!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default GameOverScreen;