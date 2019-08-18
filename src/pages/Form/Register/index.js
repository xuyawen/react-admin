import React from 'react';
import { Card, Form, Input, Checkbox, Radio, Select, Switch, DatePicker, Upload, Icon, Button, InputNumber, Message } from 'antd';
import Moment from 'moment';

const FormItem = Form.Item;
const Option = Select.Option;
const InputTextArea = Input.TextArea;
function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

class Register extends React.Component {
  state = {
    loading: false,
    userImg: ''
  }
  handleChange = info => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          userImg: imageUrl,
          loading: false,
        }),
      );
    }
  }
  handleSubmit = () => {
    let userInfo = this.props.form.getFieldsValue();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        Message.success(`${userInfo.userName}恭喜您，注册成功.`)
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: 24,
        sm: 4
      },
      wrapperCol: {
        xs: 24,
        sm: 20
      }
    }
    const offsetlayout = {
      wrapperCol: {
        xs: 24,
        sm: {
          span: 12,
          offset: 4
        }
      }
    }
    const rowObject = {
      minRows: 4,
      maxRows: 6
    }
    return (
      <div>
        <Card title="注册表单">
          <Form loyout="horizontal" style={{ width: '50%' }} {...formItemLayout}>
            <FormItem label="用户名">
              {
                getFieldDecorator('userName', {
                  initialValue: '',
                  rules: [
                    {required: true, message: '请输入用户名'}
                  ]
                })(
                  <Input placeholder="请输入用户名"></Input>
                )
              }
            </FormItem>
            <FormItem label="密码" {...formItemLayout}>
              {
                getFieldDecorator('password', {
                  initialValue: '',
                  rules: [
                    {required: true, message: '请输入密码'}
                  ]
                })(
                  <Input placeholder="请输入密码" type="password"></Input>
                )
              }
            </FormItem>
            <FormItem label="性别" {...formItemLayout}>
              {
                getFieldDecorator('gender', {
                  initialValue: 1
                })(
                  <Radio.Group>
                    <Radio value={1}>男</Radio>
                    <Radio value={0}>女</Radio>
                  </Radio.Group>
                )
              }
            </FormItem>
            <FormItem label="年龄" {...formItemLayout}>
              {
                getFieldDecorator('age', {
                  initialValue: 18
                })(
                  <InputNumber></InputNumber>
                )
              }
            </FormItem>
            <FormItem label="当前状态" {...formItemLayout}>
              {
                getFieldDecorator('state', {
                  initialValue: 0
                })(
                  <Select>
                    <Option value={0}>学生</Option>
                    <Option value={1}>在职</Option>
                    <Option value={2}>待业</Option>
                  </Select>
                )
              }
            </FormItem>
            <FormItem label="爱好" {...formItemLayout}>
              {
                getFieldDecorator('hobby', {
                  initialValue: ['0', '1', '2']
                })(
                  <Select mode="multiple">
                    <Option value="0">游戏</Option>
                    <Option value="1">阅读</Option>
                    <Option value="2">音乐</Option>
                    <Option value="3">电影</Option>
                  </Select>
                )
              }
            </FormItem>
            <FormItem label="是否已婚" {...formItemLayout}>
              {
                getFieldDecorator('isMarried', {
                  valuePropName: 'checked',
                  initialValue: true
                })(
                  <Switch />
                )
              }
            </FormItem>
            <FormItem label="生日" {...formItemLayout}>
              {
                getFieldDecorator('birthday', {
                  initialValue: Moment(new Date())
                })(
                  <DatePicker style={{ width: '100%' }} format="YYYY-MM-DD HH:mm:ss" />
                )
              }
            </FormItem>
            <FormItem label="联系地址" {...formItemLayout}>
              {
                getFieldDecorator('address', {
                  initialValue: ''
                })(
                  <InputTextArea autosize={rowObject}></InputTextArea>
                )
              }
            </FormItem>
            <FormItem label="头像" {...formItemLayout}>
              {
                getFieldDecorator('userImg', {
                  initialValue: ''
                })(
                  <Upload
                    name="avatar"
                    listType="picture-card"
                    className="avatar-uploader"
                    showUploadList={false}
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    onChange={this.handleChange}
                  >
                    {this.state.userImg ? <img  style={{ height: '88px' }} src={this.state.userImg} alt="userImg" /> : <Icon type="plus"></Icon>}
                  </Upload>
                )
              }
            </FormItem>
            <FormItem {...offsetlayout}>
              {
                getFieldDecorator('userAgree', {
                  valuePropName: 'checked',
                  rules: [
                    {required: true, message: '请阅读用户协议'}
                  ]
                })(
                  <Checkbox>我已阅读过<Button type="link" style={{ padding: 0 }}>用户协议</Button></Checkbox>
                )
              }
            </FormItem>
            <FormItem {...offsetlayout}>
              <Button type="primary" onClick={this.handleSubmit}>注册</Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    )
  }
}

export default Form.create({name: 'register'})(Register);