import React, {Component} from 'react'
import './diff_match_patch.js';
import 'codemirror/lib/codemirror.css';
import 'codemirror/addon/merge/merge.css';
import 'codemirror/lib/codemirror.js';
import 'codemirror/addon/merge/merge.js';
import 'codemirror/mode/xml/xml.js';
import CodeMirror from 'codemirror';
import './index.css';

let highlight = true, connect = null, collapse = true;
class ReactDiffCode extends Component{
    constructor(props){
        super(props);
    }
    initUI() {
        var target = this.refs['react-diff-code-view'];
        target.innerHTML = "";
        CodeMirror.MergeView(target, Object.assign({}, {
            readOnly: true,
            value: this.props.newStr,
            orig: this.props.oldStr,
            lineNumbers: true,
            mode: "text/json",
            highlightDifferences: highlight,
            connect: connect,
            revertButtons: false,
            collapseIdentical: collapse
        }, this.props.options || {}));
    }
    componentDidMount() {
        this.initUI();
    }
    render (){
        return (
            <div className="react-diff-code-view">
                <div className="react-diff-code-view-header">
                    <div>{this.props.leftTitle}</div>
                    <div>{this.props.rightTitle}</div>
                </div>
                <div ref="react-diff-code-view"></div>
            </div>
        );
    }
}

export default ReactDiffCode;