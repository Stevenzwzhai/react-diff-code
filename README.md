# react-diff-code
A react component diff code

## Install
```sh
npm install react-diff-code
```

## Usage
```sh
import {Component} from 'react';
import ReactDiffCode from 'react-diff-code';

class Demo extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <div>
                <ReactDiffCode oldStr={oldStr} newStr={newStr} leftTitle="当前数据" rightTitle="旧数据"/>
            </div>
        )
    }
}

export default Demo;
``` 

## Test Demo
```sh
git cloen xxx
npm i
npm run dev
```
![demo](https://github.com/Stevenzwzhai/react-diff-code/blob/master/test/demo.png)
