import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography, styled } from "@mui/material";
import { Icon } from '@iconify/react';
import { useState } from "react";
import { deepOrange } from "@mui/material/colors";

const Add = () => {
    const [open, setOpen] = useState(false);

    const handleModal = () => {
        setOpen(!open);
    }

    const StyledModal = styled(Modal)({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    })

    const ModalContainer = styled(Box)(({ theme }) => ({
        width: 400,
        height: 280,
        borderRadius: theme.shape.borderRadius,
        padding: '16px',
    }))

    return (
        <>
            <Tooltip title="New post" sx={{ position: 'fixed', bottom: 20, left: 30 }}>
                <Fab color="primary" aria-label="add" onClick={handleModal} >
                    <Icon width={24} icon="mingcute:add-fill" />
                </Fab>
            </Tooltip>
            <StyledModal
                open={open}
                onClose={handleModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <ModalContainer bgcolor={'background.default'} color={'text.primary'} >
                    <Typography variant="h6" color={'gray'} mb={2}>Create Post</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                        <Avatar sx={{ width: 30, height: 30, bgcolor: deepOrange[500] }}>
                            <Typography variant="body2">NF</Typography>
                        </Avatar>
                        <Typography variant="body2">Nsini Franc</Typography>
                    </Box>
                    <TextField
                        sx={{ width: '100%' }}
                        id="standard-multiline-static"
                        multiline
                        rows={3}
                        placeholder="what is new ?"
                        variant="standard"
                    />
                    <Stack direction={'row'} gap={1} m={2}>
                        <Icon width={24} icon="streamline-emojis:cat-face-with-wry-smile" />
                        <Icon width={24} icon="flat-color-icons:picture" />
                        <Icon width={24} icon="icon-park:video-one" />
                        <Icon width={24} icon="gridicons:user-add" color="red" />
                    </Stack>
                    <ButtonGroup variant="contained" aria-label="outlined primary button group" fullWidth>
                        <Button>Post</Button>
                        <Button sx={{width: '100px'}}><Icon width={24} icon="material-symbols-light:date-range-sharp" /></Button>
                    </ButtonGroup>
                </ModalContainer>
            </StyledModal>
        </>
    );
}

export default Add;