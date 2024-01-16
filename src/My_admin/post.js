import React, { useState, useEffect } from 'react';
import {
    Typography,
    Button,
    TextField,
    TextareaAutosize,
    List,
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    IconButton,
    Container,
    Paper,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Navbar from './navbar';

const PostPage = () => {
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState({ title: '', content: '' });
    const [editPostIndex, setEditPostIndex] = useState(null);

    useEffect(() => {
        const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
        setPosts(storedPosts);
    }, []);

    useEffect(() => {
        localStorage.setItem('posts', JSON.stringify(posts));
    }, [posts]);

    const handleAddPost = () => {
        if (!newPost.title.trim() || !newPost.content.trim()) {
            alert('Title and content are required.');
            return;
        }

        if (editPostIndex !== null) {
            const updatedPosts = [...posts];
            updatedPosts[editPostIndex] = newPost;
            setPosts(updatedPosts);
            setEditPostIndex(null);
        } else {
            setPosts([...posts, newPost]);
        }

        setNewPost({ title: '', content: '' });
    };

    const handleEditPost = (index) => {
        const postToEdit = posts[index];
        setNewPost(postToEdit);
        setEditPostIndex(index);
    };

    const handleDeletePost = (index) => {
        const updatedPosts = [...posts];
        updatedPosts.splice(index, 1);
        setPosts(updatedPosts);
    };

    return (
        <>
            <Navbar />
            <Container component="main" maxWidth="md" sx={{ mt: 5 }}>

                <Paper elevation={3} sx={{ padding: '20px' }}>
                    <Typography variant="h4" gutterBottom>
                        Posts
                    </Typography>
                    <List>
                        {posts.map((post, index) => (
                            <ListItem key={index} disablePadding>
                                <ListItemText
                                    primary={<Typography variant="h5">{post.title}</Typography>}
                                    secondary={post.content}
                                />
                                <ListItemSecondaryAction>
                                    <IconButton edge="end" onClick={() => handleEditPost(index)}>
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton edge="end" onClick={() => handleDeletePost(index)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        ))}
                    </List>
                    <Typography variant="h5" sx={{ mt: 2 }}>
                        {editPostIndex !== null ? 'Edit Post' : 'Add New Post'}
                    </Typography>
                    <TextField
                        label="Title"
                        fullWidth
                        margin="normal"
                        value={newPost.title}
                        onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                    />
                    <TextareaAutosize
                        rowsMin={3}
                        placeholder="Content"
                        value={newPost.content}
                        onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                        style={{ width: '100%', marginTop: '10px' }}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleAddPost}
                        sx={{ mt: 2 }}
                    >
                        {editPostIndex !== null ? 'Update Post' : 'Add Post'}
                    </Button>
                </Paper>
            </Container>
        </>
    );
};

export default PostPage;
