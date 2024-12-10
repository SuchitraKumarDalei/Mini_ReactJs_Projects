import { Card, CardActions, CardContent, Typography,Button } from "@mui/material";

export default function TodoItem({ todo,fetchDetailOfCurrTodo }) {
    return (
        <Card sx={{
            mixWidth: "350",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            backgroundColor: "black",
            marginTop:"20px",
            borderRadius:"7px",
            padding:"10px"
        }}>
            <CardContent >
                <Typography variant="h5" color={"white"}>
                    {todo.todo}
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={()=>{fetchDetailOfCurrTodo(todo.id)}} sx={{
                    backgroundColor: 'red',
                    color: 'white',
                    opacity: '0.80',
                    '&:hover': {
                        backgroundColor: 'red',
                        color: 'white',
                        opacity: '1',
                    },
                }}>Details</Button>
            </CardActions>
        </Card>
    );
}
