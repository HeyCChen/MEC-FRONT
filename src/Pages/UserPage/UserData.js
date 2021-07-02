import React, { useEffect } from 'react';
import * as echarts from 'echarts';

const UserData = () => {
    useEffect(() => {
        let myChart1 = echarts.init(document.getElementById('1'));
        let myChart2 = echarts.init(document.getElementById('2'));
        let option1 = {
            xAxis: {
                type: "category",
                data: ["random", "greedy", "optimize"]
            },
            yAxis: {
                type: "value"
            },
            series: [
                {
                    data: [120, 200, 50],
                    type: "bar",
                    showBackground: true,
                    color: 'red',
                }
            ]
        };

        let option2 = {
            xAxis: {
                type: "category",
                data: ["random", "greedy", "optimize"]
            },
            yAxis: {
                type: "value"
            },
            series: [
                {
                    data: [50, 60, 90],
                    type: "bar",
                    showBackground: true,
                    color: "blue"
                }
            ]
        };

        myChart1.setOption(option1);
        myChart2.setOption(option2);
    }, [])

    return (
        <div style={{ width: '100%', height: '1000px', backgroundColor: '#f6f5ec' }}>
            <div style={{ width: '99%', height: '100%', marginLeft: '10px', marginTop: '10px', backgroundColor: 'white' }}>
                <h1 style={{ textAlign: 'center' }}><a href='ex_data.json' target='_blank'>点击下载实验数据</a></h1>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
                        <div id="1" style={{ width: '600px', height: '600px' }}></div>
                        <h2>不同算法下的服务器资源消耗</h2>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
                        <div id="2" style={{ width: '600px', height: '600px' }}></div>
                        <h2>不同算法下的用户分配比例</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserData;