import React from 'react';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { IHistory } from '../../types';

interface tableProps {
  history: IHistory[]
}
const HistoryTable = ({ history }:tableProps) => {
  const columns: ColumnsType<IHistory> = [
    {
      title: 'Дата',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Место положение',
      dataIndex: 'owner',
      key: 'owner',
    },
    {
      title: 'Комментарий',
      dataIndex: 'comments',
      key: 'comments',
    },
    {
      title: 'Ответственный',
      dataIndex: 'lastModified',
      key: 'lastModified',
    },
  ];
  return (
    <Table columns={columns} dataSource={history} />
  );
};

export default HistoryTable;
