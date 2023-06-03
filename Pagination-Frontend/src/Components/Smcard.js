import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import React from "react";

const SmCard = (props) => {
  let { id, Name, FatherName, Email, Age, height } = props;
  return (
    <Card elevation={8} sx={{ height }}>
      <CardContent>
        <Avatar className="my-1" sx={{ bgcolor: "red" }} aria-label="recipe">
          {id}
        </Avatar>

        <Typography className="my-1" variant="h5" color="text.primary">
          Name: {Name}
        </Typography>
        <Typography className="my-1"  variant="h6" color="text.secondary">
          Father Name : {FatherName}
        </Typography>
        <Typography className="my-1"  variant="h6" color="text.secondary">
          Email : {Email}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Age : {Age}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SmCard;
