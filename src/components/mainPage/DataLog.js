import React, { useState } from 'react';
import DataTable from './DataTable';
import DataPagination from './DataPagination';



const DataLog = () => {
    const [posts] = useState([
    {
        time: "2019-09-23 00:0047",
        lat: "49.54234",
        let: "49.54234",
        height: "0",
        speed: "19",
        status: "012312",
        odometr: "81312",
        valid: "true",
        enginehours: "34356",
        distance: "245.23",
        totaldistance: "12351233.05"
    },
    {
        time: "2019-09-14 00:0047",
        lat: "49.54234",
        let: "49.54234",
        height: "0",
        speed: "19",
        status: "012312",
        odometr: "81312",
        valid: "true",
        enginehours: "34356",
        distance: "245.23",
        totaldistance: "12351233.05"
    },
    {
        time: "2019-09-45 00:0048",
        lat: "49.54234",
        let: "49.54234",
        height: "0",
        speed: "19",
        status: "012312",
        odometr: "81312",
        valid: "true",
        enginehours: "34356",
        distance: "245.23",
        totaldistance: "12351233.05"
    },
    {
        time: "2019-09-76 00:0049",
        lat: "49.54234",
        let: "49.54234",
        height: "0",
        speed: "19",
        status: "012312",
        odometr: "81312",
        valid: "true",
        enginehours: "34356",
        distance: "245.23",
        totaldistance: "12351233.05"
    },
    {
        time: "2019-09-87 00:00450",
        lat: "49.54234",
        let: "49.54234",
        height: "0",
        speed: "19",
        status: "012312",
        odometr: "81312",
        valid: "true",
        enginehours: "34356",
        distance: "245.23",
        totaldistance: "12351233.05"
    },
    {
        time: "2019-09-19 00:00232",
        lat: "49.54234",
        let: "49.54234",
        height: "0",
        speed: "19",
        status: "012312",
        odometr: "81312",
        valid: "true",
        enginehours: "34356",
        distance: "245.23",
        totaldistance: "12351233.05"
    },
    {
        time: "2019-09-90 00:00534",
        lat: "49.54234",
        let: "49.54234",
        height: "0",
        speed: "19",
        status: "012312",
        odometr: "81312",
        valid: "true",
        enginehours: "34356",
        distance: "245.23",
        totaldistance: "12351233.05"
    },
]);
    const [loading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(4);


    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className='activi-table data-log-style'>
            <DataTable posts={currentPosts} loading={loading} />
            <DataPagination
                
                postsPerPage={postsPerPage}
                totalPosts={posts.length}
                paginate={paginate}
            />
        </div>
    );
};

export default DataLog;
