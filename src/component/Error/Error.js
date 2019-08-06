
import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';

const errorMsgSnackbar =(props)=> {

    return (
        <div className="errorMsg" style={{background:'red',height:'20px'}}>
            {/* <Button onClick={handleClick}>Open simple snackbar</Button> */}
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}

                ContentProps={{
                    'aria-describedby': 'message-id',
                }}
                message={<span style={{color:'white'}} id="message-id">Required</span>}
            />
        </div>
    );
}
export default errorMsgSnackbar;