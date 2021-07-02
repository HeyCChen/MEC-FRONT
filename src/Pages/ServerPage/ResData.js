import React, { useEffect, useState } from 'react';
import { message } from 'antd';
import * as echarts from 'echarts';
import axios from 'axios';

const DataGraph = (props) => {
    useEffect(() => {
        let myChart = echarts.init(document.getElementById(props.id));
        let option = {
            title: {
                text: props.title,
                left: "center",
                bottom: "0",
                textStyle: {
                    color: "blue",
                    fontStyle: "normal",
                    fontWeight: "lighter",
                    fontSize: "15"
                }
            },
            tooltip: {
                trigger: "axis"
            },
            legend: {
                data: ["Normal", "Greedy", "Optimize"]
            },
            grid: {
                left: "3%",
                right: "4%",
                bottom: "50",
                containLabel: true
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: "category",
                boundaryGap: false,
                data: props.xAxis
            },
            yAxis: {
                type: "value"
            },
            series: props.series
        };
        myChart.setOption(option);
    }, [props.id, props.series, props.title, props.xAxis])
    return (
        <div>
            <div id={props.id} style={{ height: '500px', width: '600px', backgroundColor: 'white' }}></div>
        </div>
    );
}

const ResData = () => {
    const [graphData, setGraphData] = useState([]);

    useEffect(() => {
        axios.get('res.json')
            .then(res => { setGraphData(res.data) })
            .catch(err => { message.error(err) })
    }, []);

    return (
        <div style={{ width: '100%', backgroundColor: '#f6f5ec' }}>
            <div style={{ width: '99%', height: '100%', marginLeft: '10px', marginTop: '10px', backgroundColor: 'white' }}>
                {graphData.map((mydata, index) => {
                    return (
                        <div key={index} style={{ width: '100%', marginBottom: '30px' }}>
                            <h1 style={{ textAlign: 'center' }}>{mydata.type}</h1>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                {mydata.data.map((item, index) => {
                                    return (
                                        <DataGraph
                                            id={mydata.type + item.id}
                                            title={item.title}
                                            xAxis={item.xAxis}
                                            series={item.series}
                                            key={mydata.type + index}
                                        />
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default ResData;