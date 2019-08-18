import React from 'react';
import { Card, Button, Table, Modal, Form, Select, Radio } from 'antd';
import API from '../../request';
import Utils from '../../utils/utils';

const FormItem = Form.Item;
const Option = Select.Option;
class City extends React.Component {
  state = {
    cityList: [],
    isShowOpenCity: false
  }
  params = {
    page: 1
  }
  componentDidMount() {
    this.getCityList();
  }
  getCityList = async () => {
    let res = await API.request({
      url: '/open_city',
      params: { page: this.params.page }
    })
    const { result: { item_list: list } } = res;
    let cityList = list.map((v, i) => {
      v.key = i;
      return v;
    })
    this.setState({
      cityList
    })
  }
  handleSubmit = () => {
    console.log('handleSubmit')
  }
  
  render() {
    const columns = [
      {
        title:'城市ID',
        dataIndex:'id'
      }, {
        title: '城市名称',
        dataIndex: 'name'
      }, {
        title: '用车模式',
        dataIndex: 'mode',
        render(mode){
        return +mode ===1 ?'停车点':'禁停区';
      }
      }, {
        title: '营运模式',
        dataIndex: 'op_mode',
        render(op_mode) {
        return +op_mode === 1 ? '自营' : '加盟';
      }
      }, {
        title: '授权加盟商',
        dataIndex: 'franchisee_name'
      }, {
        title: '城市管理员',
        dataIndex: 'city_admins',
        render(arr){
        return arr.map((item)=>{
        return item.user_name;
        }).join(',');
      }
      }, {
        title: '城市开通时间',
        dataIndex: 'open_time'
      }, {
        title: '操作时间',
        dataIndex: 'update_time',
        render: Utils.formateDate
      }, {
        title: '操作人',
        dataIndex: 'sys_user_name'
      }
      ]
    return (
      <div>
        <Card>
          <FilterForm />
        </Card>
        <Card style={{ marginTop: 10 }}>
          <Button type="primary" onClick={() => this.setState({isShowOpenCity: true})}>开通城市</Button>
        </Card>
        <div className="content-wrap">
          <Table
            bordered
            columns={columns}
            dataSource={this.state.cityList}
          />
        </div>
        <Modal
          title="开通城市"
          visible={this.state.isShowOpenCity}
          onCancel={() => this.setState({isShowOpenCity: false})}
          onOk={this.handleSubmit}
          okText="提交"
          cancelText="取消"
        >
          <OpenCityForm />
        </Modal>
      </div>
    )
  }
}

class FilterForm extends React.Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Form layout="inline">
          <FormItem label="城市">
            {
              getFieldDecorator('city_id')(
                <Select style={{ width: 100 }} placeholder="全部">
                  <Option value="">全部</Option>
                  <Option value="1">北京市</Option>
                  <Option value="2">天津市</Option>
                  <Option value="3">深圳市</Option>
                </Select>
              )
            }
          </FormItem>
          <FormItem label="城市">
            {
              getFieldDecorator('mode')(
                <Select style={{ width: 150 }} placeholder="全部">
                  <Option value="">全部</Option>
                  <Option value="1">指定停车点模式</Option>
                  <Option value="2">禁停区模式</Option>
                </Select>
              )
            }
          </FormItem>
          <FormItem label="营运模式">
            {
              getFieldDecorator('op_mode')(
                <Select style={{ width: 80 }} placeholder="全部">
                  <Option value="">全部</Option>
                  <Option value="1">自营</Option>
                  <Option value="2">加盟</Option>
                </Select>
              )
            }
          </FormItem>
          <FormItem label="加盟商授权状态">
            {
              getFieldDecorator('op_mode')(
                <Select style={{ width: 100 }} placeholder="全部">
                  <Option value="">全部</Option>
                  <Option value="1">已授权</Option>
                  <Option value="2">未授权</Option>
                </Select>
              )
            }
          </FormItem>
          <FormItem>
            <Button type="primary" style={{ margin: '0 20px' }}>查询</Button>
            <Button>重置</Button>
          </FormItem>
        </Form>
      </div>
    )
  }
}
FilterForm = Form.create({name: 'FilterForm'})(FilterForm);

class OpenCityForm extends React.Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        span: 5
      },
      wrapperCol: {
        span: 19
      }
    }
    return (
      <div>
        <Form layout="horizontal">
          <FormItem label="选择城市" {...formItemLayout}>
            {
              getFieldDecorator('city_id', {
                initialValue: '1'
              })(
                <Select style={{ width: 100 }} placeholder="全部">
                  <Option value="">全部</Option>
                  <Option value="1">北京市</Option>
                  <Option value="2">天津市</Option>
                </Select>
              )
            }
          </FormItem>
          <FormItem label="营运模式" {...formItemLayout}>
            {
              getFieldDecorator('op_mode', {
                initialValue: '1'
              })(
                <Radio.Group style={{ width: 200 }}>
                  <Radio value="1">加盟</Radio>
                  <Radio value="2">自营</Radio>
                </Radio.Group>
              )
            }
          </FormItem>
          <FormItem label="用车模式" {...formItemLayout}>
            {
              getFieldDecorator('use_mode', {
                initialValue: '1'
              })(
                <Radio.Group style={{ width: 200 }}>
                  <Radio value="1">指定停车点</Radio>
                  <Radio value="2">禁停区</Radio>
                </Radio.Group>
              )
            }
          </FormItem>
        </Form>
      </div>
    )
  }
}
OpenCityForm = Form.create({name: 'OpenCityForm'})(OpenCityForm)

export default City;