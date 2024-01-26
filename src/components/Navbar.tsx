import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, Toolbar, Typography, styled } from "@mui/material"
import { Icon } from '@iconify/react';
import { deepOrange } from "@mui/material/colors";
import { useState } from "react";

const Navbar = () => {

    const MenuTopBar = styled(Toolbar)({
        display: "flex",
        justifyContent: "space-between"
    });

    const SearchBar = styled(Box)(({ theme }) => ({
        padding: "0px 10px",
        width: '40%',
        borderRadius: theme.shape.borderRadius
    }))

    const IconsContainer = styled(Box)(({ theme }) => ({
        display: 'none',
        gap: '20px',
        alignItems: 'center',
        [theme.breakpoints.up('sm')]: {
            display: 'flex'
        }
    }));

    const UserContainer = styled(Box)(({ theme }) => ({
        display: 'flex',
        gap: '10px',
        alignItems: 'center',
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        }
    }));

    const [open, setOpen] = useState(false);

    const handleMenu = () => {
        setOpen(!open);
    }

    return (
        <AppBar position="sticky">
            <MenuTopBar>
                <Typography
                    variant="h6"
                    sx={{
                        display: { xs: 'none', sm: 'block' }
                    }}
                >
                    WILLS
                </Typography>
                <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                    <Icon icon="grommet-icons:google-wallet" />
                </Box>

                <SearchBar bgcolor={'background.default'}>
                    <InputBase sx={{ backgroundColor: 'background.default', color:'text.primary'}} placeholder="Search...." fullWidth />
                </SearchBar>

                <IconsContainer>
                    <Badge badgeContent={4} color="error">
                        <Icon width={18} icon="grommet-icons:mail-option" />
                    </Badge>
                    <Badge badgeContent={4} color="error">
                        <Icon width={18} icon="grommet-icons:notification" />
                    </Badge>
                    <Avatar onClick={handleMenu} sx={{ width: 30, height: 30, bgcolor: deepOrange[500] }}>
                        <Typography variant="body2">NF</Typography>
                    </Avatar>
                </IconsContainer>

                <UserContainer onClick={handleMenu}>
                    <Avatar sx={{ width: 30, height: 30, bgcolor: deepOrange[500] }}>
                        <Typography variant="body2">NF</Typography>
                    </Avatar>
                    <Typography variant="body2">Nsini Franc</Typography>
                </UserContainer>
            </MenuTopBar>
            <Menu
                id="basic-menu"
                open={open}
                onClose={handleMenu}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
                anchorOrigin={{
                    vertical : 'top',
                    horizontal : 'right'
                }}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>
        </AppBar>
    )
}

export default Navbar