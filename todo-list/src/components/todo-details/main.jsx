import { Fragment } from "react";
import { Dialog,DialogTitle,DialogActions,Button,Typography } from "@mui/material";


export default function TodoDetail({todoDetails,openDialog,setOpenDialog,setTodoDetails}){
    return (
        <Fragment>
            <Dialog onClose={()=>setOpenDialog(false)} open={openDialog}>
                <DialogTitle>
                  {todoDetails?.todo} 
                </DialogTitle>
                <DialogActions>
                    <Button onClick={()=>{setTodoDetails(null); setOpenDialog(false)}}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    );
}