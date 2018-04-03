import * as React from 'react';
import { Table, Icon, Divider } from 'antd';

const columns = [{
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
}, {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
}, {
    title: 'Surname',
    dataIndex: 'surname',
    key: 'surname',
}, {
    title: 'Location',
    dataIndex: 'location',
    key: 'location',
}];

const data = [{
    key: '1',
    id: 1,
    name: 'John',
    surname: 'Brown',
    location: 'lublin'
}, {
    key: '2',
    id: 2,
    name: 'Jim',
    surname: 'Green',
    location: 'lublin'
}, {
    key: '3',
    id: 3,
    name: 'Joe',
    surname: 'Black',
    location: 'lublin'
}];

const UsersTable = () => (
    <>
        <div className="row">
            <div className="col-md-7 py-5 px-3 mx-auto" data-div="list">
                <Table columns={columns} dataSource={data} />
            </div>
        </div>
    </>

);

export default UsersTable;