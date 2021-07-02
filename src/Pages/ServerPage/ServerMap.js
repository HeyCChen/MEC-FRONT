import React, { useState, useEffect } from 'react';
import { Map, APILoader, Polyline, Circle, PointCollection } from '@uiw/react-baidu-map';
import axios from 'axios';
import { message } from 'antd';

const ServerMap = () => {
    const [circleList, setCircleList] = useState([]);
    const [markerList, setMarkerList] = useState([]);
    const [polylineList, setPolylineList] = useState([[{ lng: 116.404, lat: 39.915 }, { lng: 116.405, lat: 39.92 }, { lng: 116.423493, lat: 39.907445 }]]);

    const shuffle = (a) => {
        let len = a.length;
        for (let i = 0; i < len; i++) {
            let end = len - 1;
            let index = (Math.random() * (end + 1)) >> 0;
            let t = a[end];
            a[end] = a[index];
            a[index] = t;
        }
        return a;
    }

    useEffect(() => {
        const arr1 = [];
        const arr2 = [];
        axios.get('server.json').then(res => {
            let sum = 100;
            let a = shuffle(res.data);
            for (const server of a) {
                if (sum < 0) break;
                sum = sum - 1;
                let id = server.id;
                let center = {
                    lng: server.longitude,
                    lat: server.latitude,
                };
                let marker = [server.longitude, server.latitude, 1]
                let radius = server.coverage;
                let item = {
                    id: id,
                    center: center,
                    radius: radius
                };
                arr1.push(item);
                arr2.push(marker);
            }
            setCircleList(arr1);
            setMarkerList(arr2);
        }).catch(err => { message.error(err) })
    }, [])

    useEffect(() => {
        axios.get("trajectory.json").then(res => {
            setPolylineList(res.data);
        }).catch(err => { message.error(err) })
    }, [])

    return (
        <div style={{ height: '1000px', width: '100%', backgroundColor: '#f6f5ec' }}>
            <div style={{ width: '98%', height: '95%', marginLeft: '10px', marginTop: '10px' }}>
                <APILoader akay="NpDy11mACsGYcnjPS6Bt1G56k2tF7NA8">
                    <Map
                        enableScrollWheelZoom={true}
                        center={{ lng: 116.35176, lat: 39.98483 }}
                        zoom={14}
                        widget={[
                            {
                                name: 'NavigationControl',
                                options: (BMap) => {
                                    return {
                                        offset: new BMap.Size(10, 10),
                                        showZoomInfo: false,
                                        enableGeolocation: true,
                                    }
                                }
                            }
                        ]}
                    >
                        {circleList.map((item, index) => {
                            return (
                                <Circle
                                    key={item.id + index}
                                    visiable={true}
                                    center={item.center}
                                    radius={item.radius}
                                    strokeColor='red'
                                    strokeOpacity='0.5'
                                    strokeWeight='1'
                                />
                            )
                        })}
                        {polylineList.map((item, index) => {
                            return (
                                <Polyline
                                    visiable={true}
                                    strokeOpacity='0.5'
                                    strokeColor='blue'
                                    strokeWeight='3'
                                    key={index}
                                    path={item}
                                />
                            )
                        })}
                        <PointCollection
                            visiable={true}
                            color='red'
                            styles={{ shape: 1 }}
                            points={[...markerList]}
                        />
                    </Map>
                </APILoader>
            </div>
        </div>
    );
}

export default ServerMap;