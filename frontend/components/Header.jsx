import FileCopyIcon from "@mui/icons-material/FileCopy";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import { AppBar, Avatar, Button, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const Header = ({ role, balance, connectedAccount }) => {
  const _connectedAccount = connectedAccount
    ? connectedAccount.substring(0, 7) + "..." + connectedAccount.substring(connectedAccount.length - 4)
    : "N/A";
  const _balance = balance ? `${balance} ETH` : "0 ETH";

  const [anchorEl, setAnchorEl] = React.useState(null);

  const copyToClipboard = () => {
    if (connectedAccount) {
      navigator.clipboard.writeText(connectedAccount);
    }
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "yellow", color: "skyblue" }}>
      <Toolbar sx={{ display: "flex" }}>
        <Avatar 
          alt="Pingsphere Logo" 
          src="/images/pingsphere-logo.png" 
          sx={{ width: 40, height: 40, marginRight: 2 }} 
        />
        <div className="header-ele" style={{ marginRight: '50px' }}>
          <div className="link-text">
            Role : {role}
          </div>
        </div>
        <div className="header-ele" style={{ marginRight: '50px' }}>
          <div className="header-ele-links">
            <Link
              href={{
                pathname: "/register",
                query: { connectedAccount, balance, role },
              }}
              className="link-text"
            >
              Change Role
            </Link>
          </div>
        </div>
        <div className="header-ele" style={{ marginRight: '50px' }}>
          <div className="header-ele-links">
            <Link
              href={{
                pathname: "/my-rides",
                query: { connectedAccount, balance, role },
              }}
              className="link-text"
            >
              My rides
            </Link>
          </div>
        </div>
        <div className="header-ele" style={{ flexGrow: 1 }}>
          <div className="header-ele-links">
            <div className="link-text">Balance : {_balance}</div>
          </div>
        </div>

        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleMenuOpen}
          sx={{ mr: 2 }}
        >
          <PersonIcon />
          <MenuIcon />
        </IconButton>

        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          keepMounted
          transformOrigin={{ vertical: "top", horizontal: "right" }}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>
            <Tooltip title={connectedAccount || ""}>
              <Typography sx={{ width: "100%" }}>
                My Profile: {_connectedAccount}
              </Typography>
            </Tooltip>
            <Tooltip title="Copy Account">
              <Button onClick={copyToClipboard}>
                <FileCopyIcon />
              </Button>
            </Tooltip>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link href="https://alchemy.com" passHref legacyBehavior>
              <Typography variant="inherit" component="a">Add Balance</Typography>
            </Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link href="/" passHref legacyBehavior>
              <Typography variant="inherit" component="a">Log Out</Typography>
            </Link>
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
