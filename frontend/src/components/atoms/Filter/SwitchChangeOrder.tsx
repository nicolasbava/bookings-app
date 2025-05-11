import { useGlobalContext } from "@/context/GlobalContext";
import { Tooltip } from "@mui/material"
import StyledButton from "./StyledButton";


const SwitchChangeOrder = () => {
    const { changeOrderAscendent, orderAscendent } = useGlobalContext();
    return (
        <Tooltip title="Order by Cutoff Date" >
            <StyledButton text={'Order'} value={orderAscendent} onClick={changeOrderAscendent} endIconImg={orderAscendent ? '/arrow-down-short-wide-solid.png' : '/arrow-down-wide-short-solid.png'} />
        </Tooltip>
    )
};

export default SwitchChangeOrder;

