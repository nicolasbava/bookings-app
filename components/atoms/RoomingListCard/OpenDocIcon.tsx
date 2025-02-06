/* eslint-disable @next/next/no-img-element */
import { Box } from "@mui/material";

const OpenDocIcon = () => {
    return (
        <Box sx={{
            border: '2px solid #4323FF', 
            padding: '5px 7px', 
            paddingBottom: '0px', 
            borderRadius: '8px', 
            width: 'min-content', 
            cursor: 'pointer', 
            marginLeft: 'auto'
        }}>
            <img style={{maxWidth: '24px'}} src="/open-doc-icon.png" alt="open doc icon" />
        </Box>
    )
};  

export default OpenDocIcon; 