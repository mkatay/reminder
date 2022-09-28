import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

export const List = ({ people }) => {
  console.log(people);
  return (
    <>
      <div className="row justify-content-center">
        {people.map((obj) => (
          <div className="mt-2 col-md-4 col-6 ">
            <Card sx={{ maxWidth: 345 }} className="border border-danger">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={obj.image}
                  alt={obj.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {obj.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    age:{obj.age}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  delete
                </Button>
              </CardActions>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};
