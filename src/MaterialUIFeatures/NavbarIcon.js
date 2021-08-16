import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import RoomIcon from '@material-ui/icons/Room';
import InfoIcon from '@material-ui/icons/Info';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { setNavbarBackground } from '../features/navbarBackgroundSlice';
import { useDispatch } from 'react-redux';


const useStyles = makeStyles({
  list: {
    width: 400,
  },
  fullList: {
    width: 'auto',
  },
});


export default function TemporaryDrawer() {
  const dispatch = useDispatch();

  const setNavBackground = () => {
    dispatch(setNavbarBackground(false));
  };

  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <NavbarContainer>
      <div
        className={clsx(classes.list, {
          [classes.fullList]: anchor === 'top' || anchor === 'bottom',
        })}
        role='presentation'
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <NavbarTitleContainer to='/'>
          <NavbarImage src='images/happy_lemon_logo.jpeg' />
        </NavbarTitleContainer>

        <List>
          <NavbarHome to='/' onClick={setNavBackground}>

            <NavbarListItem>
              <ListItem button>
                <NavbarListItemIcon>
                  <HomeIcon fontSize='large' />
                </NavbarListItemIcon>
                <NavbarListName>Home</NavbarListName>
              </ListItem>
            </NavbarListItem>
          </NavbarHome>
        </List>

        <List>
          <NavbarMenu to='menu' onClick={setNavBackground}>
            <NavbarListItem>
              <ListItem button>
                <NavbarListItemIcon><LabelImportantIcon fontSize='large' /></NavbarListItemIcon>
                <NavbarListName>Menu</NavbarListName>
              </ListItem>
            </NavbarListItem>
          </NavbarMenu>
        </List>

        <List>
          <NavbarLocation to='location' onClick={setNavBackground}>
            <NavbarListItem>
              <ListItem button>
                <NavbarListItemIcon><RoomIcon fontSize='large' /></NavbarListItemIcon>
                <NavbarListName>Location</NavbarListName>
              </ListItem>
            </NavbarListItem>
          </NavbarLocation>
        </List>

        <List>
          <NavbarAbout to='about' onClick={setNavBackground}>
            <NavbarListItem>
              <ListItem button>
                <NavbarListItemIcon><InfoIcon fontSize='large' /></NavbarListItemIcon>
                <NavbarListName>About</NavbarListName>
              </ListItem>
            </NavbarListItem>
          </NavbarAbout>
        </List>

        <List>
          <NavbarContact to='contact' onClick={setNavBackground}>
            <NavbarListItem>
              <ListItem button>
                <NavbarListItemIcon><RecentActorsIcon fontSize='large' /></NavbarListItemIcon>
                <NavbarListName>Contact</NavbarListName>
              </ListItem>
            </NavbarListItem>
          </NavbarContact>
        </List>
      </div>
    </NavbarContainer>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <NavbarIcon onClick={toggleDrawer(anchor, true)} fontSize='large'>
            {anchor}
          </NavbarIcon>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

const NavbarContainer = styled.div`
  height: 110px;
  background: rgb(254, 216, 0);
`;

const NavbarIcon = styled(MenuIcon)`
`;

const NavbarTitleContainer = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
  padding: 7px 30px;
`;

const NavbarHome = styled(Link)`
  color: #555;
  text-decoration: none;

  &:hover {
  color: #902302;
  }
`;

const NavbarMenu = styled(Link)`
  color: #555;
  text-decoration: none;

  &:hover {
  color: #902302;
  }
`;

const NavbarLocation = styled(Link)`
  color: #555;
  text-decoration: none;

  &:hover {
  color: #902302;
  }
`;

const NavbarAbout = styled(Link)`
  color: #555;
  text-decoration: none;

  &:hover {
  color: #902302;
  }
`;

const NavbarContact = styled(Link)`
  color: #555;
  text-decoration: none;

  &:hover {
  color: #902302;
  }
`;

const NavbarImage = styled.img`
  object-fit: contain;
  width: 100px;
  height: 80px;
  background: #fff;
  border-radius: 100%;
  padding: 8px;
  cursor: pointer;

  &:hover {
    animation: rotation 1s infinite linear;

    @keyframes rotation {
      from {
        transform: rotateZ(0deg);
      }
      to {
        transform: rotateZ(359deg);
      }
    }
  }
`;

const NavbarListItem = styled.div`
&:hover {
  color: rgb(254, 216, 0);
  background: #902302;
  text-transform: uppercase;
  }
`;

const NavbarListItemIcon = styled.div`
padding-right: 30px;

&:hover {
  color: rgb(254, 216, 0);
  background: #902302;
  }
`;

const NavbarListName = styled.p`
font-size: 20px;
line-height: 0px;
`;