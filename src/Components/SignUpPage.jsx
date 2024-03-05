import { Form, Input, Select, DatePicker, Button, Row, Col, Checkbox } from 'antd';
import React from 'react';
import logo from './Assets/logo.png';
import './SignUpPage.css';
import moment from 'moment';


const { Option } = Select;

const SignUpPage = () => {
  
  const onFinish = (values) => {
    
    console.log('Received values of form: ', values);
  };

  const validateAge = (rule, value) => {
    const age = moment().diff(value, 'years');
    
    if (age < 18) {
      throw new Error('You must be 18 years or older.');
    }
  };



  const countryCodes = [
    { label: '+1 (United States)', value: '1' },
    { label: '+44 (United Kingdom)', value: '44' },
  ];
  

  return (
    <div className="registration-form-container">
      <div className="registration-form-inner-container">
        <img src={logo} alt="Logo" className="registration-form-logo" />
        <h1 className="registration-form-title">Create your profile</h1>
        <Form name="registration" onFinish={onFinish} layout="vertical">
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="name"
                label={<span style={{ color: 'gray' }}>Name</span>}
                rules={[{ required:true,  message: 'Please input your name!' }]}
              >
                <Input className="registration-form-input" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="lastName"
                label={<span style={{ color: 'gray' }}>Last Name</span>}
                rules={[{ required:true, message: 'Please input your last name!' }]}
              >
                <Input className="registration-form-input" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="gender"
                label={<span style={{ color: 'gray' }}>Gender</span>}
                rules={[{ required:true,  message: 'Please select your gender!' }]}
              >
                <Select className="registration-form-input custom-select" placeholder="Gender" >
            
                  <Option value="male">Male</Option>
                  <Option value="female">Female</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="birthdate"
                label={<span style={{ color: 'gray' }}>Birthdate</span>}
                rules={[{ required:true,  message: 'Please enter your birthdate!' },
              {validator: validateAge, message:'You must be 18 years old or older'}
              ]}
              >
                <DatePicker format="MM-DD-YYYY" className="registration-form-input" placeholder='mm-dd-yyyy'       disabledDate={(current) => current && current > moment().endOf('day')}/> 
              </Form.Item>
            </Col>
          </Row>

          <Form.Item
            name="email"
            label={<span style={{ color: 'gray' }}>Email</span>}
            rules={[
              {  required:true, message: 'Please input your email!' },
              { type: 'email', message: 'Please input a valid email!' },
            ]}
            
          >
            <Input className="registration-form-input" />
          </Form.Item>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="password"
                label={<span style={{ color: 'gray' }}>Password</span>}
                rules={[{ required:true, message: 'Please input your password!' }]}
              >
                <Input.Password className="registration-form-input" />
              </Form.Item>
            </Col>
            
            <Col span={12}>
              <Form.Item
                name="password"
                label={<span style={{ color: 'gray' }}>Confirm Password</span>}
                rules={[{ required:true, message: 'Please confirm your password!' }]}
              >
                <Input.Password className="registration-form-input" />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item
            name="telephoneContact"
            label={<span style={{ color: 'gray' }}>Telephone contact</span>}
            rules={[
              {  required:true, message: 'Please input your telephone contact!' },
            ]}
          >
            <Select
              className="registration-form-input custom-select"
              defaultValue="1"
              style={{ textAlign: 'left' }}
            >
            {countryCodes.map((code) => (
              <Option key={code.value} value={code.value}>
                {code.label}
              </Option>
           ))}
          </Select>
          </Form.Item>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="address"
                label={<span style={{ color: 'gray' }}>Address (Street and Number)</span>}
                rules={[{ required:true, message: 'Please input your address!' }]}
              >  
                <Input className="registration-form-input" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="country"
                label={<span style={{ color: 'gray' }}>Country</span>}
                rules={[{ required:true,  message: 'Please select your country!' }]}
              >
                <Select className="registration-form-input custom-select" placeholder="Country">
                  <Option value="" disabled hidden>
                    Select your country
                   </Option>
                    <Option value="us">United States</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="timezone"
                label={<span style={{ color: 'gray' }}>Timezone</span>}
                rules={[{ required:true,  message: 'Please select your timezone!' }]}
              >
                <Select className="registration-form-input custom-select" placeholder="Timezone">
                  <Option value="gmt-5">GMT-5 (Eastern Time)</Option>
                  <Option value="gmt-8">GMT-8 (Pacific Time)</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="acceptTerms"
                valuePropName="checked"
                rules={[
                  { required: true, message: 'Please accept the terms and conditions!' },
                ]}
              >
                <Checkbox>
                  I accept the <span style={{ color: 'blue' }}>terms and conditions</span>
                </Checkbox>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Row justify="end">
                <Col>
                  <Form.Item>
                    <Button type="primary" htmlType="submit" className="registration-form-button">
                      Following
                    </Button>
                  </Form.Item>
                </Col>
              </Row>
            </Col>
          </Row>

        </Form>
      </div>
    </div>
  );
};

export default SignUpPage;


