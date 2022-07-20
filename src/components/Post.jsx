import {
   Button,
   Card,
   CardActionArea,
   CardActions,
   CardContent,
   CardMedia,
   Container,
   makeStyles,
   Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
   card: {
      marginBottom: theme.spacing(2),
   },
   media: {
      height: "250px",
      [theme.breakpoints.down("sm")]: {
         height: "150px",
      },
   },
}));

const Post = () => {
   const classes = useStyles();

   return (
      <Container className={classes.container}>
         <Card className={classes.card}>
            <CardActionArea>
               <CardMedia
                  className={classes.media}
                  image="https://images.pexels.com/photos/12452728/pexels-photo-12452728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  title="My Post"
               />
               <CardContent>
                  <Typography variant="h5">My First Post</Typography>
                  <Typography variant="body">
                     Lorem Ipsum is simply dummy text of the printing and
                     typesetting industry. Lorem Ipsum has been the industry's
                     standard dummy text ever since the 1500s, when an unknown
                     printer took a galley of type and scrambled it to make a
                     type specimen book.
                  </Typography>
               </CardContent>
            </CardActionArea>
            <CardActions>
               <Button size="small" color="primary">
                  Share
               </Button>
               <Button size="small" color="primary">
                  Learn More
               </Button>
            </CardActions>
         </Card>
      </Container>
   );
};

export default Post;
