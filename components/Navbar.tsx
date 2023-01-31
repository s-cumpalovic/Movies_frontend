"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="default" position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="secondary"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography color="secondary" variant="h6" component="div" sx={{ flexGrow: 1 }}>
            W-Movies
          </Typography>
          <Button href="/movies" color="secondary">
            Movies
          </Button>
          <Button href="/movies/create" color="secondary">
            Create
          </Button>
          <Button href="/login" color="secondary">
            Login
          </Button>
          <Button href="/register" color="secondary">
            Register
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
