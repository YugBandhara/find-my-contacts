import React from 'react';

const ToastMessage = ({ showToast, setShowToast, value }) => {
    return (
        showToast && (
            <div
                className="toast show position-fixed bottom-0 end-0 m-3 error-toast"
                role="alert"
                aria-live="assertive"
                aria-atomic="true"
            >
                <div className="toast-header error-toast-header">
                    <strong className="me-auto">Validation Error</strong>
                    <button
                        type="button"
                        className="btn-close error-toast-close"
                        aria-label="Close"
                        onClick={() => setShowToast(false)}
                    ></button>
                </div>
                <div className="toast-body">
                    <strong>Error:</strong> Please enter the <u>{value}</u> before searching.
                </div>
            </div>
        )
    );
};

export default ToastMessage;
