import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';


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
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <StyledMenuContainer>
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

        <StyledMenuClassicLink
          activeClass='active'
          to='classic'
          spy={true}
          smooth={true}
          offset={-150}
          duration={500}
          onClick={handleClose}
        >
          <StyledMenuItem>
            <ListItemText primary='Classic Series' />
          </StyledMenuItem>
        </StyledMenuClassicLink>

        <StyledMenuFreshLemonLink
          activeClass='active'
          to='freshLemon'
          spy={true}
          smooth={true}
          offset={-150}
          duration={500}
          onClick={handleClose}
        >
          <StyledMenuItem>
            <ListItemText primary='Fresh Lemon Series' />
          </StyledMenuItem>
        </StyledMenuFreshLemonLink>

        <StyledMenuSaltedCheeseLink
          activeClass='active'
          to='saltedCheese'
          spy={true}
          smooth={true}
          offset={-150}
          duration={500}
          onClick={handleClose}
        >
          <StyledMenuItem>
            <ListItemText primary='Salted Cheese Series' />
          </StyledMenuItem>
        </StyledMenuSaltedCheeseLink>

        <StyledMenuFruitTeaLink
          activeClass='active'
          to='fruitTea'
          spy={true}
          smooth={true}
          offset={-150}
          duration={500}
          onClick={handleClose}
        >
          <StyledMenuItem>
            <ListItemText primary='Fruit Teas' />
          </StyledMenuItem>
        </StyledMenuFruitTeaLink>

        <StyledMenuSnackLink
          activeClass='active'
          to='snack'
          spy={true}
          smooth={true}
          offset={-150}
          duration={500}
          onClick={handleClose}
        >
          <StyledMenuItem>
            <ListItemText primary='Snack' />
          </StyledMenuItem>
        </StyledMenuSnackLink>

        <StyledMenuToppingsLink
          activeClass='active'
          to='toppings'
          spy={true}
          smooth={true}
          offset={-150}
          duration={500}
          onClick={handleClose}
        >
          <StyledMenuItem>
            <ListItemText primary='Toppings' />
          </StyledMenuItem>
        </StyledMenuToppingsLink>

      </StyledMenu>
    </StyledMenuContainer>
  );
}

const StyledMenuContainer = styled.div``;

const StyledMenuListTitle = styled.div`
  border: 2px solid rgb(144, 35, 2);;
  padding: 15px;
  border-radius: 10px;
  cursor: pointer;
  font-family: Righteous;
  color: rgb(144, 35, 2);;

  &:hover {
    background: rgb(144, 35, 2);
    color: rgb(254, 216, 0);
  }
`;

const StyledMenuDropdown = styled(ArrowDropDownIcon)`
  margin-left: 15px;
`;

const StyledMenuClassicLink = styled(LinkS)``;

const StyledMenuFreshLemonLink = styled(LinkS)``;

const StyledMenuSaltedCheeseLink = styled(LinkS)``;

const StyledMenuFruitTeaLink = styled(LinkS)``;

const StyledMenuSnackLink = styled(LinkS)``;

const StyledMenuToppingsLink = styled(LinkS)``;
