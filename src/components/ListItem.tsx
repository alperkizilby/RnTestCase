import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Animated, Image, Easing } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Post } from '../types';
import { styles } from '../styles/ListItemStyles';
import Icon from 'react-native-vector-icons/Feather';

type ListItemProps = {
    post: Post;
};

const ListItem: React.FC<ListItemProps> = ({ post }) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const navigation = useNavigation();
    const rotationValue = new Animated.Value(0);

    const toggleExpand = () => {
        Animated.timing(rotationValue, {
            toValue: isExpanded ? 0 : 1,
            duration: 300,
            easing: Easing.linear,
            useNativeDriver: true,
        }).start();
        setIsExpanded(!isExpanded);
    };

    const rotation = rotationValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '180deg'],
    });

    return (
        <TouchableOpacity onPress={toggleExpand} activeOpacity={0.7}>
            <View style={styles.card}>
                <View style={styles.header}>
                    <Image // Kullanıcı profil resmi (örnek)
                        source={{ uri: 'https://via.placeholder.com/30' }}
                        style={styles.userIcon} 
                    />
                    <Text style={styles.userName}>kullanici_adi</Text>
                </View>
                <Image 
                    source={{ uri: 'https://picsum.photos/150/150' }}
                    style={styles.image} 
                />
                <View style={styles.titleRow}>
                    <Text style={styles.title}>{post.title}</Text>
                    <TouchableOpacity 
                        style={styles.detailButton} 
                        onPress={() => navigation.navigate('DetailPage', { postId: post.id })}
                    >
                        <Icon name="more-horizontal" size={24} color="gray" />
                    </TouchableOpacity>
                </View>
                {isExpanded && (
                    <Text style={styles.body}>{post.body}</Text>
                )}
            </View>
        </TouchableOpacity>
    );
};

export default ListItem;
