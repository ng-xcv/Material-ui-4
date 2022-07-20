import { Container, makeStyles, Typography } from "@material-ui/core";
import {
   Bookmark,
   ExitToApp,
   Home,
   ListAlt,
   Person,
   PhotoCamera,
   PlayCircleOutline,
   Settings,
   Storefront,
   TabletMac,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
   container: {
      marginTop: theme.spacing(5),
      paddingTop: theme.spacing(5),
      color: "white",
      height: "100vh",
      position: "sticky",
      top: 0,
      backgroundColor: theme.palette.primary.main,
      [theme.breakpoints.up("sm")]: {
         backgroundColor: "white",
         color: "#555",
         border: "1px solid #ece7e7",
      },
   },
   item: {
      display: "flex",
      alignItems: "center",
      marginBottom: theme.spacing(4),
      [theme.breakpoints.up("sm")]: {
         marginBottom: theme.spacing(3),
         cursor: "pointer",
      },
   },
   icon: {
      marginRight: theme.spacing(1),
      [theme.breakpoints.up("sm")]: {
         fontSize: "18px",
      },
   },
   text: {
      fontWeight: 500,
      [theme.breakpoints.down("sm")]: {
         display: "none",
      },
   },
}));

const LeftBar = () => {
   const classes = useStyles();

   return (
      <Container className={classes.container}>
         <div className={classes.item}>
            <Home className={classes.icon} />
            <Typography className={classes.text}>Accueil</Typography>
         </div>
         <div className={classes.item}>
            <Person className={classes.icon} />
            <Typography className={classes.text}>Friends</Typography>
         </div>
         <div className={classes.item}>
            <ListAlt className={classes.icon} />
            <Typography className={classes.text}>Lists</Typography>
         </div>
         <div className={classes.item}>
            <PhotoCamera className={classes.icon} />
            <Typography className={classes.text}>Photo</Typography>
         </div>
         <div className={classes.item}>
            <PlayCircleOutline className={classes.icon} />
            <Typography className={classes.text}>Vidéos</Typography>
         </div>
         <div className={classes.item}>
            <TabletMac className={classes.icon} />
            <Typography className={classes.text}>Apps</Typography>
         </div>
         <div className={classes.item}>
            <Bookmark className={classes.icon} />
            <Typography className={classes.text}>Collections</Typography>
         </div>
         <div className={classes.item}>
            <Storefront className={classes.icon} />
            <Typography className={classes.text}>Marketplace</Typography>
         </div>
         <div className={classes.item}>
            <Settings className={classes.icon} />
            <Typography className={classes.text}>Settings</Typography>
         </div>
         <div className={classes.item}>
            <ExitToApp className={classes.icon} />
            <Typography className={classes.text}>Logout</Typography>
         </div>
      </Container>
   );
};

export default LeftBar;
