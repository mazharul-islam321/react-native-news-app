import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";

export default function Home() {
    const [news, setNews] = useState([]);
    useEffect(() => {
        const uri = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=58c978c81f1a4eed8e09fca220bb594c`;
        fetch(uri)
            .then((res) => res.json())
            .then((data) => setNews(data.articles));
    }, []);
    // console.log(news);
    return (
        <View>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={news}
                renderItem={({ item }) => (
                    <View key={item?.source?.id} style={styles.section}>
                        <Text>{item?.title}</Text>
                        <Image
                            source={{ uri: `${item?.urlToImage}` }}
                            style={{ width: "100%", height: 200 }}
                        />
                        <Text>{item?.author}</Text>
                    </View>
                )}
            ></FlatList>
        </View>
    );
}

const styles = StyleSheet.create({
    section: {
        borderBottomWidth: 10,
        borderBottomColor: "gray",
    },
});
