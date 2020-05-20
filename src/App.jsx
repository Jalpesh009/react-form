import React from 'react';
import { Form, Input, Select, Radio } from 'antd';
import './antd.css';
import './App.scss';

const FormItem = Form.Item;
const { Option } = Select;

function App() {
  const [form] = Form.useForm();

  const onFinish = values => {
    console.log('Received values of form: ', values);
  };
  return (
    <div className="auth d-md-flex align-items-center register-page">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-8 col-xl-8 auth-right bg-white">
            <h2 className="text-primary h4">React Form</h2>
            <Form form={form} name="form" onFinish={onFinish}>
              <div className="row">
                <Form.Item className="form-group col-md-12 pt-5" name="title" rules={[{ required: true, message: 'Title is required!' }]}>
                  <Select className="p-0 title" placeholder="Title">
                    <Option value="Mr">Mr</Option>
                    <Option value="Mrs">Mrs</Option>
                    <Option value="Miss">Miss</Option>
                  </Select>
                </Form.Item>
                <FormItem className="form-group col-md-12 pt-4" name="first_name" rules={[{ required: true, message: 'First Name is required!' }]}>
                  <Input className="form-control" placeholder="First Name" />
                </FormItem>
                <FormItem className="form-group col-md-12 pt-4 pb-4" name="last_name" rules={[{ required: true, message: 'Last Name is required!' }]}>
                  <Input className="form-control" placeholder="Last Name" />
                </FormItem>
                <label className="col-md-4 col-form-label">Gender</label>
                <FormItem className="form-group col-md-8" name="gender" rules={[{ required: true, message: 'Gender is required!' }]}>
                  <Radio.Group >
                    <Radio value={`Female`}>Female</Radio>
                    <Radio value={`Male`}>Male</Radio>
                  </Radio.Group>
                </FormItem>
                <FormItem className="col-md-12 mt-4">
                  <button type="submit" className="btn btn-secondary rounded-pill">
                    Submit
            </button>
                </FormItem>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
