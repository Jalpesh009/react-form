import React from 'react';
import { Form, Input, Button, Select, Radio } from 'antd';
import './antd.css';
import './App.scss';

const FormItem = Form.Item;
const { Option } = Select;

function App() {
  return (
    <div className="container">
      <Form>
        <div className="row">
        <label className="col-md-1 col-form-label">Title</label>
          <Form.Item className="form-group col-md-3 pr-0" name="title" rules={[{ required: true, message: 'Please select your country!' }]}>
            <Select className="p-0 phone_prefix">
              <Option value="Mr">Mr</Option>
              <Option value="Mrs">Mrs</Option>
              <Option value="Miss">Miss</Option>
            </Select>
          </Form.Item>
          <FormItem className="form-group col-md-12" name="first_name" rules={[{ required: true, message: 'First Name is required!' }]}>
            <Input className="form-control" placeholder="First Name" />
          </FormItem>
          <FormItem className="form-group col-md-12" name="last_name" rules={[{ required: true, message: 'Last Name is required!' }]}>
            <Input className="form-control" placeholder="Last Name" />
          </FormItem>
          <label className="col-md-4 col-form-label">Gender</label>
          <FormItem className="form-group col-md-8">
            <Radio.Group >
              <Radio value={1}>Female</Radio>
              <Radio value={2}>Male</Radio>
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
  );
}

export default App;
