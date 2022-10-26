import { useState, FC } from "react";
import { custBtn } from "../../variables/mainColors/custBtn";
import { Button, Checkbox, Form, Input, Select } from "antd";

const { Option } = Select;

interface LogFormProps {
  title: string;
  handleClick: (
    email: string,
    pass: string,
    userName: string,
    phone: number | string
  ) => void;
}

const LogForm: FC<LogFormProps> = ({ title, handleClick }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [userName, setUserName] = useState("");
  const [phone, setPhone] = useState("");

  const onFinish = (values: any) => {
    localStorage.setItem("user", JSON.stringify(values));
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
      </Form.Item>

      <Form.Item
        label="Name"
        name="userName"
        rules={[{ required: true, message: "Please input your name!" }]}
      >
        <Input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </Form.Item>
      <Form.Item
        label="Phone number"
        name="phone"
        rules={[{ required: true, message: "Please input your phone!" }]}
      >
        <Input
          type="tel"
          value={phone}
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          onChange={(e) => setPhone(e.target.value)}
        />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button
          type="primary"
          htmlType="submit"
          onClick={() => handleClick(email, pass, userName, phone)}
          style={custBtn}
        >
          {title}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LogForm;
