// MainComponent.js
import React from 'react';
import Chat from './chat_env';

const MainComponent = ({ userRole, roomId }) => {
    return (
        <div>
            <h1>Chat and Video Call</h1>
            <Chat roomId={roomId} />
        </div>
    );
};

export default MainComponent;
