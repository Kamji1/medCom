import React, { useEffect, useState } from 'react';
import {
    Typography,
    Container,
    Paper,
    List,
    ListItem,
    ListItemText,
    Divider,
} from '@mui/material';

const DisplayPostsPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
        setPosts(storedPosts);
    }, []);

    return (
        <Container component="main" maxWidth="md" sx={{ mt: 5 }}>
            <Paper elevation={3} sx={{ padding: '20px' }}>
                <Typography variant="h4" gutterBottom>
                    Health Info
                </Typography>
                <List>
                    {posts.map((post, index) => (
                        <React.Fragment key={index}>
                            <ListItem disablePadding>
                                <ListItemText
                                    primary={<Typography variant="h5">{post.title}</Typography>}
                                    secondary={post.content}
                                />
                            </ListItem>
                            {index < posts.length - 1 && <Divider />}
                        </React.Fragment>
                    ))}
                </List>
            </Paper>
        </Container>
    );
};

export default DisplayPostsPage;
