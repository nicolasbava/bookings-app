import { Box, Stack } from "@mui/material";
import TitleDivider from "../atoms/RoomingListCard/TitleDivider"
import CustomScrollbar from "../atoms/RoomingListCard/ScrollBarContainer";
import data from '../../data/dummyData.json';
import RoomingListCard from "../molecules/RoomingListCard";

const RoomingList = () => {
    return (
        <>
            {data.map((ele, index) => (
                <Box key={index}>
                    <TitleDivider title={ele.event} index={index} />
                    <CustomScrollbar>
                        <Stack direction={'row'} spacing={2} mt={2} >
                            
                            {ele.lends.map((item,index) => (
                                <RoomingListCard key={index} {...item} />
                            ))}
                            
                        </Stack>
                    </CustomScrollbar>
                </Box>
            ))}
        </>
    )
};

export default RoomingList