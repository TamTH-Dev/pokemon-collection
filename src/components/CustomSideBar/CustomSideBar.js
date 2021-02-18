import React from 'react'
import { NavLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import {
  Drawer,
  Toolbar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core'

import routes from 'common/routes'

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  routeName: {
    marginLeft: theme.spacing(1),
  },
  routeIcon: {
    minWidth: 0,
  },
}))

const CustomSideBar = () => {
  const classes = useStyles()

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Toolbar />
      <div className={classes.drawerContainer}>
        <List>
          {routes
            .filter((route) => route.scope.includes('sideBar'))
            .map((route, index) => (
              <ListItem
                key={index}
                component={NavLink}
                to={route.path}
                activeClassName="Mui-selected"
                exact
                button
              >
                <ListItemIcon className={classes.routeIcon}>
                  {route.icon}
                </ListItemIcon>
                <ListItemText
                  className={classes.routeName}
                  primary={route.name}
                />
              </ListItem>
              // <NavLink className={classes.link} to={route.path} key={index}>
              //   <ListItem button>
              //     <ListItemIcon className={classes.routeIcon}>
              //       {route.icon}
              //     </ListItemIcon>
              //     <ListItemText
              //       className={classes.routeName}
              //       primary={route.name}
              //     />
              //   </ListItem>
              // </NavLink>
            ))}
        </List>
      </div>
    </Drawer>
  )
}

export default CustomSideBar
