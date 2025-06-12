import React from 'react';
import {View, StyleSheet, Image, Text} from "react-native";

export default function FancyCard(){
    return (
        <View>
            <Text style={styles.headingText}> LOL 선수를 알아보자 </Text>
            <View style={[styles.card, styles.cardElevated]}>
                <Image
                    source={{
                        uri : 'https://koreajoongangdaily.joins.com/data/photo/2023/04/11/0cc7763c-159d-4540-aa0c-8309c7ac7899.jpg'
                    }}
                    style={styles.cardImage}
                />
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}> The Unkillable Demon King</Text>
                    <Text style={styles.cardLabel}> The G.O.A.T Faker</Text>
                    <Text style={styles.cardDescription}> T1 Faker, 2023, 2024 Worlds Champions
                        {"\n"} The most famous e-sports player in the world
                    </Text>
                    <Text style={styles.cardFooter}> The Greatest Of All Time </Text>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    headingText: {
        fontSize : 24,
        fontWeight : 'bold',
        paddingHorizontal : 8, // 왼쪽 여백 추가
        marginTop : 8
    },
    card: {
        width : 350,
        height : 320,
        borderRadius : 6,
        marginVertical : 12,
        marginHorizontal : 16
    },
    cardElevated : {
        backgroundColor : '#FFFFFF',
        elevation : 6,
        shadowOffset : {
            width : 1,
            height : 1
        }
    },
    cardImage : {
        height : 180,
        marginBottom : 8,
        borderTopLeftRadius : 6,
        borderTopRightRadius : 6,
    },
    cardBody : {
        flex : 1,
        flexGrow : 1,
        paddingHorizontal : 12,
    },
    cardTitle : {
        color : 'red',
        fontSize : 22,
        fontWeight : 'bold',
        marginBottom : 6,
    },
    cardLabel : {
        color : 'blue',
        fontSize : 14,
        marginBottom : 6,
    },
    cardDescription : {
        color : '#242B2E',
        fontSize : 12,
        marginTop : 6,
        marginBottom : 12,
        flexShrink : 1,
    },
    cardFooter : {
        color : 'black'
    },
});