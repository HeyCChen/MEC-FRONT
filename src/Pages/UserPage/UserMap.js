import React from 'react';

const UserMap = () => {
    return (
        <div style={{ height: '1000px', width: '100%', backgroundColor: '#f6f5ec' }}>
            <div style={{ width: '99%', height: '100%', marginLeft: '10px', marginTop: '10px', backgroundColor: 'white' }}>
                <iframe width='100%' height='1000px' src="http://localhost:8000/env" title='实验环境' ></iframe>
            </div>
        </div>
    );
}

export default UserMap;