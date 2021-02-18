import React from "react";
import Image from "next/image";

import { makeStyles, Theme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    maxWidth: 345,
    padding: theme.spacing(1),
    margin: theme.spacing(2, 0, 2, 0),
  },
  media: {
    height: 140,
  },
}));

export default function StatusCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Image
          layout="intrinsic"
          src={`https://source.unsplash.com/${640}x${426}/?carpenter`}
          width={345}
          height={200}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Ongoing Projects
          </Typography>
          <Typography variant="body2" color="textPrimary" component="p">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
            expedita voluptas in corporis. Laudantium iusto accusamus, velit
            illum itaque commodi. Blanditiis eligendi inventore modi. Quasi
            autem quos ea magni maiores.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Open Project
        </Button>
      </CardActions>
    </Card>
  );
}
