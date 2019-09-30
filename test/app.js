import React from 'react';
import ReactDOM from 'react-dom';
import ReactDiffCode from '../src/index.js'
import {Row, Col, Input, Form, Switch, InputNumber}from 'antd'
import 'antd/dist/antd.css';
const newStr = '{\n a: 1 \n}';
const oldStr = '{\n a: 2, \n b: 2 \n}';

const {TextArea}  = Input;
const FormItem = Form.Item;

class Demo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
                <div style={{padding: '10px'}}>
                    <Row gutter={16}>
                        <Col span={12}>
                            <FormItem label="old_data">
                                <TextArea rows={12} defaultValue={oldStr}/>
                            </FormItem>
                        </Col>
                        <Col span={12}>
                            <FormItem label="new_data">
                                <TextArea rows={12} defaultValue={newStr}/>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <ReactDiffCode oldStr={oldStr} newStr={newStr} leftTitle="当前数据" rightTitle="旧数据"/>
                    </Row>
                </div>
        );
    }
}

ReactDOM.render(<Demo/>, document.querySelector('#app'));
