import React, { useEffect, useState } from "react";
import Logo from "../Assets/Logo.svg";
import { BsCart2 } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import {
  Box,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import HeartBrokenRoundedIcon from "@mui/icons-material/HeartBrokenRounded";
import Search from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import AdminPanel from "../Pages/AdminPanel";
import ShoppingCart from "../Pages/ShoppingCart";
import { FaUserShield } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import Profile from '../Pages/Profile';
import CartItem from "../Pages/CartItem";

const NavBar = () => {
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = jwtDecode(token);
      setRole(decoded.role);
    } else {
      setRole("");
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/LoginForm");
  };
  const displaySearch = () => {
    
  };

  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    { text: "Home", icon: <HomeIcon /> },
    { text: "About", icon: <InfoIcon /> },
    { text: "Testimonials", icon: <CommentRoundedIcon /> },
    { text: "Contact", icon: <PhoneRoundedIcon /> },
    { text: "Cart", icon: <ShoppingCartRoundedIcon /> },
    { text: "WishList", icon: <HeartBrokenRoundedIcon /> },
  ];

  return (
    <div>
      <nav>
        <div className="nav-logo-container">
          <img src={Logo} alt="logo" />
        </div>
        <div className="navbar-links-container">
          <a onClick={() => navigate("/")}>Home</a>
          <a onClick={() => navigate("/About")}>About</a>
          <a onClick={() => navigate("/Testimonial")}>Testimonials</a>
          <a onClick={() => navigate("/Contact")}>Contact</a>
          <a href="" target="_self" onClick={displaySearch()} aria-disabled="true"><BsSearch/></a> 
          
          {role === "USER"  && (
            <>
              <a onClick={() => navigate("/CartItem")}>
                <BsCart2 className="navbar-cart-icon" />
              </a>

              <a href="hh">
                <BsHeart className="navbar-cart-icon" />
              </a>

                      <a onClick={() => navigate("/Profile")}>
                    <FaUser />
                    </a>
            </>
          )}

{role === ""  && (
            <>
              <a onClick={() => navigate("/")}>
                <BsCart2 className="navbar-cart-icon" />
              </a>

              <a href="hh">
                <BsHeart className="navbar-cart-icon" />
              </a>

                       
            </>
          )}

          {role === "ADMIN" && (
             <a onClick={() => navigate("/AdminPanel")}>
             <FaUserShield />
           </a>
          )}

          {role !== "" && (
            <button className="primary-button" onClick={handleLogout}>
              Logout
            </button>
          )}

          {role === "" && (
            <button
              className="primary-button"
              onClick={() => {
                navigate("/LoginForm");
              }}
            >
              Login Now
            </button>
            
          )}
        </div>
        <div className="navbar-menu-container">
          <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
        </div>
        <Drawer
          open={openMenu}
          onClose={() => setOpenMenu(false)}
          anchor="right"
        >
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={() => setOpenMenu(false)}
            onKeyDown={() => setOpenMenu(false)}
          >
            <List>
              {menuOptions.map((item) => (
                <ListItem key={item.text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider />
          </Box>
        </Drawer>
        
      </nav>
      
    </div>
  );
};

export default NavBar;
