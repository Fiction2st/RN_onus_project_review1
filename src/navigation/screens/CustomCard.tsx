import React from 'react';
import {FontAwesome} from "@expo/vector-icons";
import theme from "../../constraint/theme";
import {useGetMovies} from "../../api/useQueries";
import {
    Text,
    Image,
    Dimensions,
    FlatList,
    Platform,
    StyleSheet,
    TouchableOpacity,
    View,
    ScrollView,
    Button,
    SafeAreaView
} from "react-native";



type Props = {
    theme: 'white' | 'dark';
    title: string;
    description?: string;
    imageUrl?: string;
    btnLabel?: string;
    onPress?: () => void;
};

const CustomCard = ({ theme, title, description, imageUrl, btnLabel, onPress }: Props) => {
    const isDark = theme === 'dark';

    return (
        <View style={[styles.card, isDark ? styles.dark : styles.white]}>
            {imageUrl ? (
                <Image source={{ uri: imageUrl }} style={styles.image} />
            ) : (
                <View style={styles.placeholder}>
                    <Text style={[styles.placeholderText, isDark && { color: '#ccc' }]}>이미지가 없습니다</Text>
                </View>
            )}

            <View style={styles.textContainer}>
                <Text style={[styles.title, isDark && { color: '#fff' }]}>{title}</Text>
                {description && <Text style={[styles.description, isDark && { color: '#ddd' }]}>{description}</Text>}
            </View>

            {btnLabel && onPress && (
                <View style={styles.buttonContainer}>
                    <Button title={btnLabel} onPress={onPress} color={isDark ? '#888' : '#007AFF'} />
                </View>
            )}
        </View>
    );
};

export default CustomCard;

const styles = StyleSheet.create({
    card: {
        borderRadius: 12,
        margin: 10,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 3,
    },
    white: {
        backgroundColor: '#fff',
    },
    dark: {
        backgroundColor: '#222',
    },
    image: {
        width: '100%',
        height: 150,
    },
    placeholder: {
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#444',
    },
    placeholderText: {
        color: '#aaa',
        fontSize: 14,
    },
    textContainer: {
        padding: 12,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        color: '#111',
    },
    description: {
        marginTop: 4,
        fontSize: 14,
        color: '#444',
    },
    buttonContainer: {
        padding: 10,
    },
});