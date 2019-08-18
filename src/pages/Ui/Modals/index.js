import React from 'react';
import { Card, Button } from 'antd';
import '../ui.less'

class Modals extends React.Component {
  render() {
    return (
      <div>
        <Card title="基础模态框">
          <Button>Open</Button>
        </Card>
      </div>
    )
  }
}

export default Modals;