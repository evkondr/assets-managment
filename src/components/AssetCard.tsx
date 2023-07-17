/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
  Button,
  Form,
  Input,
  Select,
  Col,
  Row,
} from 'antd';

const { Option } = Select;

const AssetCard = () => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const onEditHandler = () => {
    setIsEdit(!isEdit);
  };
  return (
    <>
      <Form
        layout="vertical"
        style={{ maxWidth: '350px' }}
        initialValues={{
          id: 5, type: 'Ноутбук', model: 'Lenovo ThinkPad x280', serialNumber: 'VNA3031A503', owner: null,
        }}
        disabled={!isEdit}
      >
        <Form.Item label="Модель" name="model">
          <Input />
        </Form.Item>
        <Form.Item label="Тип" name="type">
          <Input />
        </Form.Item>
        <Form.Item label="Серийный номер" name="serialNumber">
          <Input />
        </Form.Item>
        <Form.Item label="Расположение" name="owner">
          <Select>
            <Option value="red">Red</Option>
            <Option value="green">Green</Option>
            <Option value="blue">Blue</Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button disabled={false} onClick={onEditHandler}>{isEdit ? 'Сохранить' : 'Редактировать'}</Button>
        </Form.Item>
      </Form>
      <Row>
        <div>
          <h5>История</h5>
        </div>
      </Row>
    </>
  );
};

export default AssetCard;
