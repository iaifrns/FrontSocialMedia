import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, PaletteMode, Switch } from "@mui/material";
import { Icon } from '@iconify/react';

function Sidebar({ mode, setMode }: { mode: PaletteMode, setMode: (text: PaletteMode) => void }) {
    return (
        <Box
            flex={1}
            p={3}
            sx={{
                display: { xs: 'none', sm: 'block' }
            }}
        >
            <Box position={'fixed'}>

                <List>
                    <ListItem disablePadding>
                        <ListItemButton LinkComponent={'a'} href="#home">
                            <ListItemIcon>
                                <Icon width={'18px'} icon="grommet-icons:home-rounded" />
                            </ListItemIcon>
                            <ListItemText primary="HomePage" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton LinkComponent={'a'} href="#pages">
                            <ListItemIcon>
                                <Icon width={'18px'} icon="grommet-icons:document-text" />
                            </ListItemIcon>
                            <ListItemText primary="Page" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton LinkComponent={'a'} href="#groups">
                            <ListItemIcon>
                                <Icon width={'18px'} icon="grommet-icons:group" />
                            </ListItemIcon>
                            <ListItemText primary="Groups" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton LinkComponent={'a'} href="#maketplace">
                            <ListItemIcon>
                                <Icon width={'18px'} icon="mdi:marketplace-outline" />
                            </ListItemIcon>
                            <ListItemText primary="Marketplace" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton LinkComponent={'a'} href="#friends">
                            <ListItemIcon>
                                <Icon width={'18px'} icon="radix-icons:person" />
                            </ListItemIcon>
                            <ListItemText primary="Friends" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton LinkComponent={'a'} href="#settings">
                            <ListItemIcon>
                                <Icon width={'18px'} icon="ant-design:setting-outlined" />
                            </ListItemIcon>
                            <ListItemText primary="Settings" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton LinkComponent={'a'} href="#profile">
                            <ListItemIcon>
                                <Icon width={'18px'} icon="gg:profile" />
                            </ListItemIcon>
                            <ListItemText primary="Profile" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton LinkComponent={'a'} href="#profile" onClick={() => { setMode((mode == 'light') ? 'dark' : 'light') }}>
                            <ListItemIcon>
                                {mode == 'light' ? (
                                    <Icon width={'18px'} icon="akar-icons:moon" />
                                ) : (
                                    <Icon width={'18px'} icon="icon-park-outline:sun" />
                                )}
                            </ListItemIcon>
                            <Switch />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Box>
    )
}

export default Sidebar;