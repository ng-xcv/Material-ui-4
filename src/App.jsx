import Navbar from "./components/Navbar";
import { Grid, makeStyles } from "@material-ui/core";
import LeftBar from "./components/LeftBar";
import Feed from "./components/Feed";
import RightBar from "./components/RigthBar";
import Add from "./components/Add";

const useStyles = makeStyles((theme) => ({
   right: { [theme.breakpoints.down("sm")]: { display: "none" } },
}));

const App = () => {
   const classes = useStyles();

   return (
      <div>
         <Navbar />
         <Grid container>
            <Grid item sm={2} xs={2}>
               <LeftBar />
            </Grid>
            <Grid item sm={7} xs={10}>
               <Feed />
            </Grid>
            <Grid item sm={3} className={classes.right}>
               <RightBar />
            </Grid>
         </Grid>
         <Add />
      </div>
   );
};

export default App;
