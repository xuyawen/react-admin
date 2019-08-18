import React from 'react';
import { Card, Button, Radio } from 'antd';
import '../ui.less';

class Buttons extends React.Component {
  state = {
    buttonSize: 'small'
  }
  radioChange = (e) => {
    this.setState({
      buttonSize: e.target.value
    })
  }
  render() {
    return (
      <div>
        <Card title="基础按钮">
          <Button>Default</Button>
          <Button type="primary">Primary</Button>
          <Button type="dashed">Dashed</Button>
          <Button type="danger">Danger</Button>
          <Button disabled>Disabled</Button>
          <Button type="link">Link</Button>
        </Card>
        <Card title="图形按钮">
          <Button shape="circle" icon="search"></Button>
          <Button type="primary" icon="plus">Created</Button>
          <Button type="dashed" icon="download">Download</Button>
          <Button type="danger" icon="delete">Delete</Button>
          <Button disabled icon="edit">Edit</Button>
        </Card>
        <Card title="loading按钮">
          <Button shape="circle" icon="search" loading></Button>
          <Button type="primary" icon="plus" loading>Created</Button>
          <Button type="dashed" icon="download" loading>Download</Button>
          <Button type="danger" icon="delete" loading>Delete</Button>
          <Button disabled loading>Edit</Button>
          <Button type="link" loading>Link</Button>
        </Card>
        <Card title="按钮组">
          <Button.Group>
            <Button type="primary" icon="left" style={{ marginRight: 0 }}>L</Button>
            <Button type="primary" style={{ marginRight: 0 }}>M</Button>
            <Button type="primary" icon="right" style={{ marginRight: 0 }}>R</Button>
          </Button.Group>
          <Button.Group style={{ marginLeft: '10px' }}>
            <Button style={{ marginRight: 0 }}>L</Button>
            <Button style={{ marginRight: 0 }}>M</Button>
            <Button style={{ marginRight: 0 }}>R</Button>
          </Button.Group>
        </Card>
        <Card title="按钮尺寸">
          <Radio.Group onChange={this.radioChange} value={this.state.buttonSize}>
            <Radio value="small">小</Radio>
            <Radio value="default">中</Radio>
            <Radio value="large">大</Radio>
          </Radio.Group>
          <Button type="primary" icon="plus" size={this.state.buttonSize}>Created</Button>
          <Button type="dashed" icon="download" size={this.state.buttonSize}>Download</Button>
          <Button type="danger" icon="delete" size={this.state.buttonSize}>Delete</Button>
          <Button disabled size={this.state.buttonSize}>Edit</Button>
          <Button type="link" size={this.state.buttonSize}>Link</Button>
        </Card>
      </div>
    )
  }
}

export default Buttons;