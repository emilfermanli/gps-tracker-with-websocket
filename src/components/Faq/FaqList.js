import 'rc-collapse/assets/index.css';
import Collapse, { Panel } from 'rc-collapse';
import React from "react"

function random() {
    return parseInt(Math.random() * 10, 10) + 1;
}

class FaqList extends React.Component {
    state = {
        time: random(),
        accordion: false,
        activeKey: ['1'],
    }

    onChange = (activeKey) => {
        this.setState({
            activeKey,
        });
    }

    getItems() {
        const items = [];
        for (let i = 0, len = 11; i < len; i++) {
            const key = i + 1;
            items.push(
                <Panel header={`Sual ${key}`} key={key}>
                    <p>test text</p>
                    {/* {text.repeat(this.state.time)} */}
                </Panel>
            );
        }


        return items;
    }


    toggle = () => {
        this.setState({
            accordion: !this.state.accordion,
        });
    }

    render() {
        const accordion = this.state.accordion;
        const activeKey = this.state.activeKey;
        return (
            <div style={{ margin: 20, width: 400 }}>
                <Collapse
                    accordion={accordion}
                    onChange={this.onChange}
                    activeKey={activeKey}
                >
                    {this.getItems()}
                </Collapse>
            </div>);
    }
}

export default FaqList