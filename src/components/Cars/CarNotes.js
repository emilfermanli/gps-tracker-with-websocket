import React from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

const ActiveNote = (props) => {
    return (
        <div>
            <div className="my-2 rounded">
                <Toast>
                    <ToastHeader>
                        {props.params}
                    </ToastHeader>
                    <ToastBody>
                        lorem ipsum dolor sit amet
                    </ToastBody>
                </Toast>
            </div>
        </div>
    );
};

export default ActiveNote;