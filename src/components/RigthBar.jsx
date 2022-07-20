import {
   Avatar,
   Container,
   Divider,
   ImageList,
   ImageListItem,
   Link,
   makeStyles,
   Typography,
} from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
   container: {
      marginTop: theme.spacing(5),
      paddingTop: theme.spacing(5),
      position: "sticky",
      top: 0,
   },
   title: {
      fontSize: 16,
      fontWeight: 500,
      color: "#555",
   },
   link: {
      marginRight: theme.spacing(2),
      color: "#555",
      fontSize: 16,
   },
}));

const RightBar = () => {
   const classes = useStyles();

   return (
      <Container className={classes.container}>
         <Typography className={classes.title} gutterBottom>
            Online friends
         </Typography>
         <AvatarGroup max={6}>
            <Avatar
               alt="Remy Sharp"
               src="https://material-ui.com/static/images/avatar/1.jpg"
            />
            <Avatar
               alt="Travis Howard"
               src="https://material-ui.com/static/images/avatar/2.jpg"
            />
            <Avatar
               alt="Cindy Baker"
               src="https://material-ui.com/static/images/avatar/3.jpg"
            />
            <Avatar
               alt="Cindy Baker"
               src="https://material-ui.com/static/images/avatar/3.jpg"
            />
            <Avatar alt="Agnes Walker" src="" />
            <Avatar
               alt="Trevor Henderson"
               src="https://material-ui.com/static/images/avatar/5.jpg"
            />
            <Avatar
               alt="Trevor Henderson"
               src="https://material-ui.com/static/images/avatar/5.jpg"
            />
         </AvatarGroup>
         <Typography
            className={classes.title}
            style={{ marginTop: "25px" }}
            gutterBottom
         >
            Gallery
         </Typography>
         <ImageList rowHeight={100} className={classes.imageList} cols={3}>
            <ImageListItem>
               <img src="https://v4.mui.com/static/images/image-list/honey.jpg" />
            </ImageListItem>
            <ImageListItem>
               <img src="https://v4.mui.com/static/images/image-list/mushroom.jpg" />
            </ImageListItem>
            <ImageListItem>
               <img src="https://v4.mui.com/static/images/image-list/star.jpg" />
            </ImageListItem>
            <ImageListItem>
               <img src="https://v4.mui.com/static/images/image-list/bike.jpg" />
            </ImageListItem>
            <ImageListItem>
               <img src="https://v4.mui.com/static/images/image-list/vegetables.jpg" />
            </ImageListItem>
            <ImageListItem>
               <img src="https://v4.mui.com/static/images/image-list/olive.jpg" />
            </ImageListItem>
         </ImageList>
         <Typography
            className={classes.title}
            style={{ marginTop: "25px" }}
            gutterBottom
         >
            Others links
         </Typography>
         <Link href="#" className={classes.link} variant="body2">
            Categories
         </Link>
         <Link href="#" className={classes.link} variant="body2">
            Sport
         </Link>
         <Link href="#" className={classes.link} variant="body2">
            Life
         </Link>
         <Divider flexItem style={{ marginBottom: 5 }} />
         <Link href="#" className={classes.link} variant="body2">
            Movies
         </Link>
         <Link href="#" className={classes.link} variant="body2">
            Science
         </Link>
         <Link href="#" className={classes.link} variant="body2">
            Musique
         </Link>
      </Container>
   );
};

export default RightBar;
