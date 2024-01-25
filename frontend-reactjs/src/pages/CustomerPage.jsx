import axios from "axios";
import React from "react";
import { Button, Form, Input } from "antd";
// Button,
export default function CustomerPage() {
  React.useEffect(() => {
    axios.get("http://localhost:9000/customers").then((response) => {
      console.log(response.data);
    });
  }, []);

  const onFinish = (values) => {
    console.log("success: ", values);
  };

  return (
    <div>
      {/* Form */}
      <Form
        name="create-customer"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        onFinish={onFinish}
      >
        {/* Họ */}
        <Form.Item
          label="Họ"
          name="firstName"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        {/* Tên */}

        <Form.Item
          label="Tên"
          name="lastName"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        {/* email */}
        <Form.Item
          label="Thư điện tử"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
            {
              type: "email",
              message: "Please input value email",
            },
          ]}
        >
          <Input />
        </Form.Item>

        {/* submit */}
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Lưu thông tin
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
