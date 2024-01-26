import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from "@mui/material"
import { Icon } from '@iconify/react';

const Post = ({name, date, image, letter, bgColor} : {name: string, date: string, image: string, letter : string, bgColor: string}) => {
    return (
        <>
            <Card sx={{mt: 3}}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: bgColor }} aria-label="recipe">
                            {letter}
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                        </IconButton>
                    }
                    title= {name}
                    subheader= {date}
                />
                <CardMedia
                    component="img"
                    height="350"
                    image= {image}
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <Checkbox icon={<Icon width={24} icon="icon-park-outline:like" />} checkedIcon={<Icon width={24} icon="flat-color-icons:like" />} />
                    </IconButton>
                    <IconButton aria-label="share">
                        <Icon icon="material-symbols:share-outline" />
                    </IconButton>
                </CardActions>
            </Card>
        </>
    )
}

export default Post;