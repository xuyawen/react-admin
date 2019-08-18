import React from 'react';
import { Form, Card, Input, Button, Message, Icon, Checkbox } from 'antd';


const FormItem = Form.Item;
class FormLogin extends React.Component {

  handleSubmit = () => {
    let userInfo = this.props.form.getFieldsValue();
    console.log(userInfo);
    this.props.form.validateFields((err, values) => {
      console.log(values);
      if (!err) {
        Message.success(`${userInfo.userName}登录成功`);
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Card title="登录行内表单">
          <Form layout="inline">
            <FormItem>
              <Input placeholder="请输入用户名" prefix={<Icon type="user" />}></Input>
            </FormItem>
            <FormItem>
              <Input type="password" placeholder="请输入密码" prefix={<Icon type="lock" />}></Input>
            </FormItem>
            <FormItem>
              <Button type="primary">登录</Button>
            </FormItem>
          </Form>
        </Card>
        <Card title="登录水平表单">
          <Form layout="vertical" style={{ width: '30%' }}>
            <FormItem>
            {
              getFieldDecorator('userName', {
                initialValue: '',
                rules: [
                  {required: true, message: '用户名不能为空'},
                  {pattern: new RegExp(/^\w+$/g), message: '用户名必须为字母或者数字组合'},
                  {min: 3, max: 10, message: '用户名长度有误'}
                ]
              })(
                <Input placeholder="请输入用户名" prefix={<Icon type="user" />}></Input>
              )
            }
          </FormItem>
          <FormItem>
            {
                getFieldDecorator('password', {
                  initialValue: '',
                  rules: [
                  {required: true, message: '密码不能为空'}
                ]
                })(
                  <Input type="password" placeholder="请输入密码" prefix={<Icon type="lock" />}></Input>
                )
              }
          </FormItem>
          <FormItem>
            {
                getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: false
                })(
                  <Checkbox>记住密码</Checkbox>
                )
              }
              <Button type="link" style={{ float: 'right', margin: 0 }}>忘记密码</Button>
          </FormItem>
          <FormItem style={{ textAlign: 'center' }}>
            <Button type="primary" onClick={this.handleSubmit}>登录</Button>
          </FormItem>
          </Form>
        </Card>
      </div>
    )
  }
}

export default Form.create({name: 'login'})(FormLogin);