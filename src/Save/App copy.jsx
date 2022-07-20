import { Person, Alarm, Delete } from "@material-ui/icons";
import { Button, IconButton, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
   button: {
      color: "white",
      backgroundColor: theme.palette.danger.main,
   },
   icon: {
      color: theme.palette.primary.main,
   },
}));

const App = () => {
   const classes = useStyles();

   return (
      <div>
         <Button
            variant="contained"
            size="small"
            color="primary"
            startIcon={<Person />}
         >
            Material UI
         </Button>
         <Button variant="outlined" size="medium" href="#">
            outlined Button
         </Button>
         <IconButton
            size="medium"
            href="#"
            color="secondary"
            aria-label="alarm icon"
         >
            <Alarm />
         </IconButton>
         <br />
         <Button className={classes.button} variant="contained">
            <Delete />
            makeStyles Button
         </Button>
         <br />
         <Button className={classes.icon} size="medium" aria-label="Card">
            <Person />
         </Button>
      </div>
   );
};

export default App;
