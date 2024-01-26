import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material"
import React from "react"

const Rightbar = () => {
    return (
        <Box
            flex={2}
            p={3}
            sx={{
                display: { xs: 'none', sm: 'block' }
            }}
        >
            <Box position={'fixed'} width={300}>
                <Box>
                    <Typography variant="h6" mb={2}>Online Friends</Typography>
                    <AvatarGroup max={7}>
                        <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/14024358/pexels-photo-14024358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                        <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/14089012/pexels-photo-14089012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                        <Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/19898940/pexels-photo-19898940/free-photo-of-close-up-of-an-owl-perching-in-a-hollow.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                        <Avatar alt="Agnes Walker" src="https://images.pexels.com/photos/19869332/pexels-photo-19869332/free-photo-of-person-hiking-on-mountain-path.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                        <Avatar alt="Trevor Henderson" src="https://images.pexels.com/photos/1583119/pexels-photo-1583119.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
                        <Avatar alt="Trevor Henderson" src="https://images.pexels.com/photos/17652903/pexels-photo-17652903/free-photo-of-naomi.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                        <Avatar alt="Trevor Henderson" src="https://images.pexels.com/photos/11719062/pexels-photo-11719062.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
                        <Avatar alt="Trevor Henderson" src="https://images.pexels.com/photos/17758065/pexels-photo-17758065/free-photo-of-a-tote-bag-with-writing-on-it-in-the-sand.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
                    </AvatarGroup>
                </Box>
                <Box>
                    <Typography variant="h6" mt={2} mb={2}>Latest Photos</Typography>
                    <ImageList cols={3} rowHeight={100}>
                        <ImageListItem>
                            <img
                                src='https://images.unsplash.com/photo-1551963831-b3b1ca40c98e'
                            />
                        </ImageListItem>
                        <ImageListItem>
                            <img
                                src='https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c'
                            />
                        </ImageListItem>
                        <ImageListItem>
                            <img
                                src='https://images.unsplash.com/photo-1597645587822-e99fa5d45d25'
                            />
                        </ImageListItem>
                    </ImageList>
                </Box>
                <Box>
                    <Typography variant="h6" mt={2} mb={2}>Latest Messages</Typography>
                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/17758065/pexels-photo-17758065/free-photo-of-a-tote-bag-with-writing-on-it-in-the-sand.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
                            </ListItemAvatar>
                            <ListItemText
                                primary="Brunch this weekend?"
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            Ali Connors
                                        </Typography>
                                        {" — I'll be in your neighborhood doing errands this…"}
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/11719062/pexels-photo-11719062.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
                            </ListItemAvatar>
                            <ListItemText
                                primary="Summer BBQ"
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            to Scott, Alex, Jennifer
                                        </Typography>
                                        {" — Wish I could come, but I'm out of town this…"}
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/17652903/pexels-photo-17652903/free-photo-of-naomi.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                            </ListItemAvatar>
                            <ListItemText
                                primary="Oui Oui"
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            Sandra Adams
                                        </Typography>
                                        {' — Do you have Paris recommendations? Have you ever…'}
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                    </List>
                </Box>
            </Box>
        </Box>
    )
}

export default Rightbar