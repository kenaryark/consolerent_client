import React, { useState } from "react";
import { Settings, Logout } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Typography,
  Avatar,
  Menu,
  ListItemIcon,
  Divider,
  MenuItem,
  Tabs,
  Tab,
  IconButton,
} from "@mui/material";
import { AuthContext } from "../context/AuthContext";

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const value = useState();

  // Use AuthContext
  const { user, dispatch } = React.useContext(AuthContext);
  const isLoggedIn = Boolean(user);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleTabs = () => {};

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    setAnchorEl(null);
  };

  const handleLogin = () => {
    navigate("/login");
  };
  console.log(user);

  const getInitials = (user) => {
    return user.charAt(0).toUpperCase();
  };

  return (
    <AppBar position="static" className="bg-blue-600">
      <Toolbar className="flex justify-between">
        <Box
          sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
          <img
            src="/src/assets/consolerent_logo.jpg"
            alt="Consolerent Logo"
            className="w-16 h-auto "
          />
          <Typography variant="h6" className="font-bold">
            Consolerent
          </Typography>
        </Box>
        {isLoggedIn && (
          <Tabs
            value={value}
            onChange={handleTabs}
            aria-label="nav tabs example"
            role="navigation"
            sx={{
              "& .MuiTab-root": {
                color: "white",
              },
            }}>
            <Tab label="Page One" href="/" />
            <Tab label="Page Two" href="/" />
            <Tab label="Page Three" href="/" />
          </Tabs>
        )}
        <Box
          sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
          {!isLoggedIn ? (
            <Button
              variant="contained"
              color="primary"
              onClick={handleLogin}
              sx={{ ml: 2 }}>
              Login
            </Button>
          ) : (
            <>
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}>
                <Avatar sx={{ bgcolor: "secondary.main" }}>
                  {getInitials(user?.username)}
                </Avatar>
              </IconButton>

              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                slotProps={{
                  paper: {
                    elevation: 0,
                    sx: {
                      overflow: "visible",
                      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                      mt: 1.5,
                      "& .MuiAvatar-root": {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      "&::before": {
                        content: '""',
                        display: "block",
                        position: "absolute",
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: "background.paper",
                        transform: "translateY(-50%) rotate(45deg)",
                        zIndex: 0,
                      },
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}>
                <MenuItem onClick={handleClose}>
                  <Avatar /> Profile
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  Settings
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
