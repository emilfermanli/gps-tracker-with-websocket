import React from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

const ActiveNote = () => {
    return (
        <div>
            <div className="my-2 rounded">
                <Toast>
                    <ToastHeader>
                        Açıqlama
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