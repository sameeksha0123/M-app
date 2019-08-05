
import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';

function ErrorMsgSnackbar(props) {

    return (
        <div>
            {/* <Button onClick={handleClick}>Open simple snackbar</Button> */}
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}

                ContentProps={{
                    'aria-describedby': 'message-id',
                }}
                message={<span id="message-id">Required</span>}
            />
        </div>
    );
}
export default ErrorMsgSnackbar;