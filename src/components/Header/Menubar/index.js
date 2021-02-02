import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import { useHistory } from 'react-router-dom';

import './menubar.css';

const Menubar = () => {
  const history = useHistory();
  const [state, setState] = useState(false);
  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState(open);
  };
  return (
    <div className="menubar">
      <Button onClick={toggleDrawer(true)}>
        <MenuIcon />
      </Button>
      <SwipeableDrawer
        anchor="right"
        open={state}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        transitionDuration={{ enter: 300, exit: 200 }}
      >
        <div
          style={{ width: '600px' }}
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          Hello
          <ListItem>
            {' '}
            <ListItemText
              primary="store"
              onClick={() =>
                setTimeout(() => {
                  history.push('/store');
                }, 250)
              }
            />
          </ListItem>
        </div>
      </SwipeableDrawer>
    </div>
  );
};

export default Menubar;
