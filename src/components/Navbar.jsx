import {
   alpha,
   AppBar,
   Avatar,
   Badge,
   InputBase,
   makeStyles,
   Toolbar,
   Typography,
} from "@material-ui/core";
import { Cancel, Mail, Notifications, Search } from "@material-ui/icons";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
   logoLg: {
      display: "none",
      [theme.breakpoints.up("sm")]: {
         display: "block",
      },
   },
   logoSm: {
      display: "none",
      [theme.breakpoints.down("sm")]: {
         display: "block",
      },
   },

   toolbar: {
      display: "flex",
      justifyContent: "space-between",
   },

   search: {
      display: "flex",
      alignItems: "center",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      "&:hover": {
         backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      width: "50%",
      [theme.breakpoints.down("sm")]: {
         display: (props) => (props.open ? "flex" : "none"),
         width: "70%",
      },
   },
   searchIcon: {
      marginLeft: theme.spacing(1),
   },
   searchButton: {
      [theme.breakpoints.up("sm")]: {
         display: "none",
      },
   },
   input: {
      color: "white",
      marginLeft: theme.spacing(1),
      [theme.breakpoints.up("sm")]: {
         display: "none",
      },
   },
   icons: {
      display: (props) => (props.open ? "none" : "flex"),
      alignItems: "center",
   },
   badge: {
      marginLeft: theme.spacing(2),
   },
   avatar: {
      marginLeft: theme.spacing(2),
   },
   cancel: {
      display: (props) => (props.open ? "flex" : "none"),
   },
}));

const Navbar = () => {
   const [open, setOpen] = useState(false);
   const classes = useStyles({ open });

   return (
      <AppBar>
         <Toolbar className={classes.toolbar}>
            <Typography variant="h6" className={classes.logoLg}>
               Material UI
            </Typography>
            <Typography variant="h6" className={classes.logoSm}>
               {" "}
               MUI
            </Typography>
            <div className={classes.search}>
               <Search className={classes.searchIcon} />
               <InputBase placeholder="Search ..." className={classes.input} />
               <Cancel
                  className={classes.cancel}
                  onClick={() => setOpen(false)}
               />
            </div>
            <div className={classes.icons}>
               <Search
                  className={classes.searchButton}
                  onClick={() => setOpen(true)}
               />
               <Badge
                  badgeContent={3}
                  color="secondary"
                  className={classes.badge}
               >
                  <Mail />
               </Badge>
               <Badge
                  badgeContent={2}
                  color="secondary"
                  className={classes.badge}
               >
                  <Notifications />
               </Badge>
               <Avatar
                  className={classes.avatar}
                  alt="Ahmadou Ngary Faye"
                  src="/images/profil.jpg"
               />
            </div>
         </Toolbar>
      </AppBar>
   );
};

export default Navbar;
