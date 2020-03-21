import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {CATEGORIES} from "../data/dummy-data";
import Colors from "../constants/Colors";

const CategoryMealScreen = props => {
    const catId = props.navigation.getParam('categoryId');

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
    return (
        <View style={styles.screen}>
            <Text> this is Category Meal Screen! </Text>
            <Text> {selectedCategory.title} </Text>
            <Button title="Go to Details" onPress={() => {
                props.navigation.navigate({
                    routeName: 'MealDetail'
                });
            }}/>
            <Button title="Go Back" onPress={() => {
                props.navigation.goBack();
            }}/>
        </View>
    )
};

CategoryMealScreen.navigationOptions = navigationData => {
    const catId = navigationData.navigation.getParam('categoryId');

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    return {
        headerTitle: selectedCategory.title
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoryMealScreen;