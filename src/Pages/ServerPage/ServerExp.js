import React from 'react';
import { Form, Button, Input, InputNumber } from 'antd';
import 'antd/dist/antd.css';

const ServerExp = () => {
    const [form] = Form.useForm();
    const onReset = () => {
        form.resetFields();
    }
    return (
        <div style={{ height: '1000px', width: '100%', backgroundColor: '#f6f5ec' }}>
            <div style={{ width: '99%', height: '100%', marginLeft: '10px', marginTop: '10px', backgroundColor: 'white' }}>
                <h1 style={{ textAlign: 'center', paddingTop: '40px' }}>实验参数配置</h1>
                <Form
                    form={form}
                    name="serverExp"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 8 }}
                >
                    <Form.Item
                        label="最小用户数量"
                        name="minUserCount"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <InputNumber style={{ width: '100%' }} />
                    </Form.Item>
                    <Form.Item
                        label="最大用户数量"
                        name="maxUserCount"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <InputNumber style={{ width: '100%' }} />
                    </Form.Item>
                    <Form.Item
                        label="最小服务器数量"
                        name="minServerCount"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <InputNumber style={{ width: '100%' }} />
                    </Form.Item>
                    <Form.Item
                        label="最大服务器数量"
                        name="maxServerCount"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <InputNumber style={{ width: '100%' }} />
                    </Form.Item>
                    <Form.Item
                        label="最小覆盖范围"
                        name="minArea"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="最大覆盖范围"
                        name="maxArea"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="最小资源数"
                        name="minSource"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <InputNumber style={{ width: '100%' }} />
                    </Form.Item>
                    <Form.Item
                        label="最大资源数"
                        name="maxSource"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <InputNumber style={{ width: '100%' }} />
                    </Form.Item>
                    <Form.Item
                        label="实验重复次数"
                        name="repeatCount"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <InputNumber style={{ width: '100%' }} />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button style={{ marginLeft: '5%' }} type="primary" htmlType="submit">
                            提交实验
                        </Button>
                        <Button style={{ marginLeft: '10%' }} type="primary" htmlType="button" onClick={onReset}>
                            重置参数
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}

export default ServerExp;