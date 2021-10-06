import React from 'react';
import { Table } from "reactstrap"

const DataTable = ({ posts, loading }) => {
    if (loading) {
        return <h2>..</h2>;
    }

    return (
        <Table className="trousaction-table data-log-table m-0">
            <thead>
                <tr>
                    <th>Zaman</th>
                    <th>Uzunluq</th>
                    <th>Enlik</th>
                    <th>Hündürlük</th>
                    <th>Sürət</th>
                    <th>Status</th>
                    <th>Odometer</th>
                    <th>Valid</th>
                    <th>Mühərrik</th> 
                    <th>Məsafə</th>
                    <th>Ümumi məsafə</th>
                </tr>
            </thead>
            <tbody>
                {
                posts.map(post => (
                    <tr key={post.time}>
                        <td>{post.time}</td>
                        <td>{post.lat}</td>
                        <td>{post.let}</td>
                        <td>{post.height}</td>
                        <td>{post.speed}</td>
                        <td>{post.status}</td>
                        <td>{post.odometr}</td>
                        <td>{post.valid}</td>
                        <td>{post.enginehours}</td>
                        <td>{post.distance}</td>
                        <td>{post.totaldistance}</td>
                    </tr>
                ))}
            </tbody>
        </Table>

    );
};

export default DataTable;
