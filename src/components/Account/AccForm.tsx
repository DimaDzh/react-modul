import { useState, useRef } from "react";
import { useAuth } from "../../hooks/useAuth";
import { removeUser } from "../../store/slices/userSlice";
import { useNavigate } from "react-router-dom";

import { useAppDispatch } from "../../hooks/redux-hooks";

import { Form, Input } from "antd";
import FormItem from "antd/es/form/FormItem";

const FormDisabledDemo = () => {
  const dispatch = useAppDispatch();
  const { email } = useAuth();
  const navigate = useNavigate();
  const accInputRef = useRef(null);
  return (
    <>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
      >
        <h2>Личные данные</h2>
        <Form.Item label="Имя">
          <Input ref={accInputRef} />
        </Form.Item>
        <Form.Item label="Фамилия">
          <Input />
        </Form.Item>
        <Form.Item label="Адресс">
          <Input />
        </Form.Item>
        <FormItem>
          <button
            onClick={() => {
              dispatch(removeUser());
              navigate("/");
            }}
          >
            Выйти из аккаунта {email}
          </button>
        </FormItem>
      </Form>
    </>
  );
};

export default FormDisabledDemo;
