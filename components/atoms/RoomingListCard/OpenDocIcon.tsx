import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileCircleMinus } from "@fortawesome/free-solid-svg-icons";
import { Box } from "@mui/material";

const OpenDocIcon = () => {
    return (
        <Box sx={{border: '2px solid #4323FF', padding: '5px 7px', borderRadius: '8px', width: 'min-content', cursor: 'pointer'}}>
            <FontAwesomeIcon color={'#4323FF'} icon={faFileCircleMinus} />
        </Box>
    )
};  

export default OpenDocIcon; 