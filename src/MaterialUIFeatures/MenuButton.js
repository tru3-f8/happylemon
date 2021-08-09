import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


import * as Scroll from 'react-scroll';
import { Link as LinkS, animateScroll as scroll } from 'react-scroll';
import Toppings from '../Components/Toppings';



const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  
  return (
    <div>
      <StyledMenuListTitle
        aria-controls='customized-menu'
        aria-haspopup='true'
        variant='contained'
        color='primary'
        onClick={handleClick}
      >
        Menu List
        <StyledMenuDropdown />
      </StyledMenuListTitle>
      <StyledMenu
        id='customized-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <ListItemMenuLink to='menu'>
            <ListItemText primary='Classic Series' />
          </ListItemMenuLink>
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText primary='Fresh Lemon Series' />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText primary='Salted Cheese Series' />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText primary='Fruit Teas' />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText primary='Snack' />
        </StyledMenuItem>
        <StyledMenuToppingsLink
            activeClass="active"
            to="toppings"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
        >
        <StyledMenuItem>
          <ListItemText primary='Toppings' />
        </StyledMenuItem>
        </StyledMenuToppingsLink>
      </StyledMenu>
    </div>
  );
}

const StyledMenuListTitle = styled.div`
  border: 2px solid rgb(254, 216, 0);
  padding: 15px;
  border-radius: 10px;
  cursor: pointer;
  font-family: Righteous;
  color: rgb(254, 216, 0);

  &:hover {
    background: rgb(254, 216, 0);
    color: rgb(144, 35, 2);
  }
`;

const StyledMenuDropdown = styled(ArrowDropDownIcon)`
  margin-left: 15px;
`;

const ListItemMenuLink = styled(Link)`
  color: #000;
  text-decoration: none;
`;

const StyledMenuToppingsLink = styled(LinkS)``;
