import { useState, FC } from "react";
import { custBtn } from "../../variables/mainColors/custBtn";
import { Button, Checkbox, Form, Input, Select } from "antd";

const { Option } = Select;

interface LogInFormProps {
  title: string;
  handleClick: (email: string, pass: string) => void;
}

const LogInForm: FC<LogInFormProps> = ({ title, handleClick }) => {
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

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button
          type="primary"
          htmlType="submit"
          onClick={() => handleClick(email, pass)}
          style={custBtn}
        >
          {title}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LogInForm;
