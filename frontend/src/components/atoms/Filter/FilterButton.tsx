import StyledButton from "./StyledButton";

interface FilterButtonProps {
    open: boolean,
    setOpen: (open : boolean) => void,
}

const FilterButton = ({open, setOpen} : FilterButtonProps) => {
    return (
        <>
            <StyledButton borderStyle={true}  text={'Filter'}  value={open} onClick={setOpen} endIconImg={"/tunes-icon.png"} />
        </>
    )
};

export default FilterButton;