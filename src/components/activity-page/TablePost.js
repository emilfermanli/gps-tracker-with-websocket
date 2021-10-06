import React from 'react';
import { Table } from "reactstrap"

const TablePost = ({ posts, loading }) => {
    if (loading) {
        return <h2>..</h2>;
    }

    return (
        <Table className="trousaction-table m-0">
            <thead>
                <tr style={{
                    background: "#d9e6f0",
                    color: "#85b5d6"
                }}>
                    <th>№</th>
                    <th>Date</th>
                    <th>Credit</th>
                    <th>Debit</th>
                    <th>Balova</th>
                    <th>İnfo</th>
                </tr>
            </thead>
            <tbody>
                {posts.map(post => (
                    <tr key={post.id}>
                        <th scope="row">{post.id}</th>
                        <td>{post.date}</td>
                        <td>{post.credit}</td>
                        <td>{post.debit}</td>
                        <td>{post.balova}</td>
                        <td>{post.info}</td>
                    </tr>
                ))}
            </tbody>
        </Table>

    );
};

export default TablePost;
