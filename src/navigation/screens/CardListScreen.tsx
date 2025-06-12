import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import {sampleCards} from "../../component/SampleCard";
import CustomCard from "./CustomCard";


const CardListScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FlatList
                data={sampleCards}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <CustomCard
                        theme={item.theme as 'white' | 'dark'}
                        title={item.title}
                        description={item.description}
                        imageUrl={item.imageUrl}
                        btnLabel={item.btnLabel}
                        onPress={item.onPress}
                    />
                )}
            />
        </SafeAreaView>
    );
};

export default CardListScreen;
