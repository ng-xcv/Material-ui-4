import { Container, makeStyles } from "@material-ui/core";
import Post from "./Post";

const useStyles = makeStyles((theme) => ({
   container: {
      marginTop: theme.spacing(5),
      paddingTop: theme.spacing(5),
      backgroundColor: "white",
   },
}));

const Feed = () => {
   const classes = useStyles();

   return (
      <Container className={classes.container}>
         <Post />
         <Post />
         <Post />
         <Post />
         <Post />
      </Container>
   );
};

export default Feed;
