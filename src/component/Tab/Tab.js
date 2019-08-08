// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
// import Tabs from "@material-ui/core/Tabs";
// import Tab from "@material-ui/core/Tab";
// import { Link, Route, BrowserRouter, Switch } from "react-router-dom";
// import SuperAdmin from "../../containers/Dashboard/SuperAdmin/SuperAdminTab";
// import Admin from "../../containers/Dashboard/AdminTab/AdminTab";
// import User from "../../containers/Dashboard/UserTab/UserTab";

// const useStyles = makeStyles({
//   root: {
//     flexGrow: 1
//   }
// });

// export default function CenteredTabs(props) {
//   const classes = useStyles();
//   const [value, setValue] = React.useState(0);

//   function handleChange(event, newValue) {
//     setValue(newValue);
//   }
//   console.log("tab item", props.tabInfo);
//   var labelItem = props.tabInfo;
//   console.log("Tab render");
//   return (
//     <Paper className={classes.root}>
//       <Tabs
//         value={value}
//         onChange={handleChange}
//         indicatorColor="primary"
//         textColor="primary"
//         centered
//       >
//         {labelItem.map((item, index) => (
//           <Link to={`/${item.link}`}>
//             <Tab key={item.id} label={item.label} />
//           </Link>
//         ))}
//         {/* <Tab label="ITEM1" component={Link} to="/User" />
//         <Tab label="ITEM1" component={Link} to="/Admin" />
//         <Tab label="ITEM1" component={Link} to="/SuperAdmin" /> */}
//       </Tabs>

//       <Switch>
//         <Route path="/SuperAdmin" component={SuperAdmin} />
//         <Route path="/User" component={User} />
//         <Route path="/Admin" component={Admin} />
//       </Switch>
//     </Paper>
//   );
// }

import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import SuperAdmin from "../../containers/Dashboard/SuperAdmin/SuperAdminTab";
import Admin from "../../containers/Dashboard/AdminTab/AdminTab";
import User from "../../containers/Dashboard/UserTab/UserTab";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      {...other}
    >
      <Box div={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <User />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Admin />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <SuperAdmin />
      </TabPanel>
    </div>
  );
}
