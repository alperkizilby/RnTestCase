import React, { useEffect, useState } from 'react';
import { FlatList, Text } from 'react-native';
import { fetchPosts } from '../utils/api';
import { Post } from '../types';
import ListItem from '../components/ListItem';

const ListPage: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [refreshing, setRefreshing] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const data = await fetchPosts();
            setPosts(data);
        } catch (error) {
            setError('Failed to fetch posts');
        } finally {
            setLoading(false);
        }
    };

    const handleRefresh = async () => {
        setRefreshing(true);
        await fetchData();
        setRefreshing(false);
    };

    if (loading) {
        return <Text>Loading...</Text>;
    }

    if (error) {
        return <Text>{error}</Text>;
    }

    return (
        <FlatList
            data={posts}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <ListItem post={item} />}
            contentContainerStyle={{ padding: 16 }}
            refreshing={refreshing}
            onRefresh={handleRefresh}
        />
    );
};

export default ListPage;
