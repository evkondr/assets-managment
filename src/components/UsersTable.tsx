import React from 'react';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { UnorderedListOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import { User } from '../db';

interface UsersTableProps{
  users:User[]
}
const UsersTable = ({ users }:UsersTableProps) => {
  const columns:ColumnsType<User> = [
    {
      title: 'Фамилия',
      dataIndex: 'surname',
    },
    {
      title: 'Имя',
      dataIndex: 'name',
    },
    {
      title: 'Отчество',
      dataIndex: 'secondName',
    },
    {
      title: 'Почта',
      dataIndex: 'email',
    },
    {
      title: 'Город',
      dataIndex: 'city',
    },
    {
      title: 'Обородование',
      dataIndex: 'id',
      render: (record) => <NavLink to={`/user/${record}/assets`}><UnorderedListOutlined /></NavLink>,
    },
  ];
  return (
    <Table columns={columns} dataSource={users} />
  );
};

export default UsersTable;
