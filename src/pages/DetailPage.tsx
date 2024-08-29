import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity,Image } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { getRequest } from '../utils/api';
import { Post, User } from '../types';
import { styles } from '../styles/DetailPageStyles';
import { Linking } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Material Icons kullanıyoruz

type DetailPageRouteProp = RouteProp<{ params: { postId: number } }, 'params'>;

const DetailPage: React.FC = () => {
    const route = useRoute<DetailPageRouteProp>();
    const { postId } = route.params;
    const [post, setPost] = useState<Post | null>(null);
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPostAndUser = async () => {
            try {
                const postData = await getRequest<Post>(`/posts/${postId}`);
                setPost(postData);
                const userData = await getRequest<User>(`/users/${postData.userId}`);
                setUser(userData);
            } catch (error) {
                setError('Failed to fetch post or user details');
            } finally {
                setLoading(false);
            }
        };
        fetchPostAndUser();
    }, [postId]);

    const handlePressPhone = (phone: string) => {
        Linking.openURL(`tel:${phone}`);
    };

    const handlePressEmail = (email: string) => {
        Linking.openURL(`mailto:${email}`);
    };

    const handlePressWebsite = (website: string) => {
        Linking.openURL(`https://${website}`);
    };

    const handlePressAddress = (address: User['address']) => {
        const query = `${address.street}, ${address.suite}, ${address.city}, ${address.zipcode}`;
        const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
        Linking.openURL(url);
    };

    if (loading) {
        return <Text>Loading...</Text>;
    }

    if (error) {
        return <Text>{error}</Text>;
    }

    return (
        <ScrollView style={styles.container}>
        {post && (
            <>
                <Text style={styles.title}>{post.title}</Text>
                <Text style={styles.body}>{post.body}</Text>
            </>
        )}
            {user && (
                <View style={styles.userCard}>
                      <View style={styles.userHeader}>
                        
                        <Text style={styles.userName}>{user.userName}</Text>
                    </View>
                    <View style={styles.sectionRow}>
                        <Icon name="person" size={24} color="#007BFF" />
                        <Text style={styles.sectionTitle}>User Details</Text>
                    </View>

                    <TouchableOpacity style={styles.row} onPress={() => handlePressEmail(user.email)}>
                        <Icon name="email" size={24} color="#007BFF" />
                        <Text style={styles.link}> {user.email}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.row} onPress={() => handlePressPhone(user.phone)}>
                        <Icon name="phone" size={24} color="#007BFF" />
                        <Text style={styles.link}> {user.phone}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.row} onPress={() => handlePressWebsite(user.website)}>
                        <Icon name="language" size={24} color="#007BFF" />
                        <Text style={styles.link}> {user.website}</Text>
                    </TouchableOpacity>

                    <View style={styles.sectionRow}>
                        <Icon name="map" size={24} color="#007BFF" />
                        <Text style={styles.sectionTitle}>Address</Text>
                    </View>

                    <TouchableOpacity style={styles.addressRow} onPress={() => handlePressAddress(user.address)}>
                        <Text style={styles.addressLabel}>Street: </Text>
                        <Text style={styles.addressText}>{user.address.street}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.addressRow} onPress={() => handlePressAddress(user.address)}>
                        <Text style={styles.addressLabel}>Suite: </Text>
                        <Text style={styles.addressText}>{user.address.suite}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.addressRow} onPress={() => handlePressAddress(user.address)}>
                        <Text style={styles.addressLabel}>City: </Text>
                        <Text style={styles.addressText}>{user.address.city}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.addressRow} onPress={() => handlePressAddress(user.address)}>
                        <Text style={styles.addressLabel}>Zipcode: </Text>
                        <Text style={styles.addressText}>{user.address.zipcode}</Text>
                    </TouchableOpacity>

                    <View style={styles.sectionRow}>
                        <Icon name="business" size={24} color="#007BFF" />
                        <Text style={styles.sectionTitle}>Company</Text>
                    </View>
                    <Text style={styles.userDetail}>Name: {user.company.name}</Text>
                    <Text style={styles.userDetail}>Catch Phrase: {user.company.catchPhrase}</Text>
                    <Text style={styles.userDetail}>Business: {user.company.bs}</Text>
                </View>
            )}
        </ScrollView>
    );
};

export default DetailPage;
