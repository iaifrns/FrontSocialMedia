import { Box } from "@mui/material"
import Post from "./Post"

const postData = [
    {
        name : "Junior Malcom",
        date: "Jan 14, 2016",
        image : "https://images.pexels.com/photos/1131774/pexels-photo-1131774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        letter : 'J',
        color : 'pink'
    },
    {
        name : "Nsini Franc",
        date: "September 01, 2015",
        image : "https://images.pexels.com/photos/33045/lion-wild-africa-african.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        letter : 'N',
        color : 'red'
    },
    {
        name : "Max Lilian",
        date: "Feb 14, 2012",
        image : "https://images.pexels.com/photos/86596/owl-bird-eyes-eagle-owl-86596.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        letter : "M",
        color : 'blue'
    },
    {
        name : "M.I.T",
        date: "September 14, 2016",
        letter: 'M',
        color : 'green',
        image : "https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
]

const Feed = () => {
    return (
        <Box flex={4} p={3} justifyContent={'center'}>
            {
                postData.map((item, index) => (
                    <Post key={index} name={item.name} date={item.date} image= {item.image} bgColor={item.color} letter={item.letter}/>
                ))
            }
        </Box>
    )
}

export default Feed