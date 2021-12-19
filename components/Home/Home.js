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
                    <View style={styles.section}>
                        <Text style={styles.headerColor}>{item?.title}</Text>
                        <Image
                            source={{ uri: `${item?.urlToImage}` }}
                            style={{ width: "100%", height: 200 }}
                        />
                        <Text style={styles.auther}>
                            Auther: {item?.author}
                        </Text>
                        <Text style={styles.time}>{item?.publishedAt}</Text>
                        <Text style={styles.description}>
                            {item?.description}
                        </Text>
                        <Text style={styles.content}>{item?.content}</Text>
                    </View>
                )}
                keyExtractor={(item, index) => `${item?.source?.id}` + index}
            ></FlatList>
        </View>
    );
}

const styles = StyleSheet.create({
    section: {
        borderTopWidth: 10,
        borderTopColor: "gray",
        paddingLeft: 10,
        paddingRight: 10,
    },
    headerColor: {
        fontSize: 16,
        paddingTop: 10,
        paddingBottom: 10,
        fontWeight: "bold",
    },
    auther: {
        fontWeight: "bold",
    },
    time: {
        paddingTop: 4,
    },
    description: {
        paddingTop: 4,
        paddingBottom: 4,
    },
    content: {
        paddingBottom: 5,
    },
});
