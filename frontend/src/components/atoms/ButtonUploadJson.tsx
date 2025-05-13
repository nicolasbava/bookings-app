import { executeFetch } from "../../utils/executeFetch";
import { useGlobalContext } from "../../context/GlobalContext";
import { BookingType, RoomingListBookingType, RoomingListType } from "../../interfaces/roomingList";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import { toast } from "react-toastify";

const ButtonUploadJson = () => {
    const [open, setOpen] = useState(false);
    const [bookingJson, setBookingJson] = useState<BookingType>();
    const [roomingListsJson, setRoomingListsJson] = useState<RoomingListType>();
    const [roomingListBookingsJson, setRoomingListBookingsJson] = useState<RoomingListBookingType>();
    const { triggerRefresh } = useGlobalContext();
    const onClose = () => {
        setOpen(false)
        return console.log('success')
    }

    const handleFileChange = <T extends BookingType | RoomingListType | RoomingListBookingType> (event: React.ChangeEvent<HTMLInputElement>, setState: Dispatch<SetStateAction<T | undefined>>) => {
        if (event.target.files && event.target.files.length > 0) {
            const file = event.target.files[0];
            const reader = new FileReader();

            reader.onload = (e) => {
                try {
                    const json = JSON.parse(e.target?.result as string);
                    console.log("JSON uploaded:", json);
                    setState(json);
                } catch (error) {
                    console.error("Error parsing JSON:", error);
                    toast.error("Invalid JSON file.");
                }
            };

            reader.readAsText(file);
        }
    };

    const handleDeleteAllData = async () => {
        try {
            console.log("Cleaning database...");

            try {
                await executeFetch("/rooming-list-booking/delete-all", 'DELETE');
                toast.success('Database cleaned')
                triggerRefresh();

                console.log("Database cleaned ✅");
            } catch (error) {
                console.error('Error deleting:', error);
                console.warn("Database cleanup failed, continuing...");
            }

        } catch (error) {
            toast.error('Error cleaning database')
            console.log('error', error)
        } finally {
            setOpen(true)
        }
    }

    const handleUpload = async () => {
        try {
            if (!bookingJson || !roomingListsJson || !roomingListBookingsJson) {
                alert("Please upload all JSON files before proceeding.");
                return;
            }

            console.log("Uploading Bookings...");
            await executeFetch("/booking", 'POST', bookingJson);
            console.log("Bookings uploaded ✅");

            console.log("Uploading Rooming Lists...");
            await executeFetch("/rooming-lists", "POST", roomingListsJson);
            console.log("Rooming Lists uploaded ✅");

            console.log("Uploading Rooming List Bookings...");
            await executeFetch("/rooming-list-booking", "POST", roomingListBookingsJson);
            console.log("Rooming List Bookings uploaded ✅");

            
            toast.success("All files uploaded successfully!");
            setOpen(false);
            triggerRefresh();
        } catch (error) {
            console.error('Error uploading:', error);
            toast.error("Upload failed! Check console for details.");
        } finally {
            setOpen(false)
        }
    };


    return (
        <>
            <Button
                onClick={handleDeleteAllData}
                fullWidth
                sx={{
                    borderRadius: '8px',
                    fontSize: '14px',
                    maxWidth: { xs: 'auto', md: '225px' },
                    maxHeight: '80px',
                    marginBlock: 'auto',
                    marginLeft: 'auto',
                    fontWeight: '600',
                    background: '#4323FF',
                    color: 'white',
                    textTransform: 'capitalize',
                    padding: 1.2,
                    transition: '250ms all ease',
                    '&:hover': {
                        background: '#3516eb',
                    }
                }}
            >
                Insert Bookings and Rooming Lists
            </Button>

            <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
                <DialogTitle>Insert Data</DialogTitle>
                <DialogContent>
                    <Stack spacing={2}>

                        <Button sx={{ background: '#4323FF' }} variant="contained" component="label">
                            Upload Bookings Json
                            <input type="file" accept=".json" hidden onChange={(e) => handleFileChange<BookingType>(e, setBookingJson)} />
                        </Button>

                        <Button sx={{ background: '#4323FF' }} variant="contained" component="label">
                            Upload Rooming Lists Json
                            <input type="file" accept=".json" hidden onChange={(e) => handleFileChange<RoomingListType>(e, setRoomingListsJson)} />
                        </Button>

                        <Button sx={{ background: '#4323FF' }} variant="contained" component="label">
                            Upload Rooming List Bookings Json
                            <input type="file" accept=".json" hidden onChange={(e) => handleFileChange<RoomingListBookingType>(e, setRoomingListBookingsJson)} />
                        </Button>
                    </Stack>

                </DialogContent>
                <DialogActions>
                    <Stack direction={'row'} justifyContent={'space-between'} mx={2} mb={2} width={'100%'} >
                        <Button disabled={!bookingJson || !roomingListsJson || !roomingListBookingsJson} variant="contained" onClick={handleUpload} sx={{ marginRight: 'auto' }}>Upload</Button>
                        <Button onClick={onClose} color="secondary" variant="outlined">Close</Button>
                    </Stack>
                </DialogActions>
            </Dialog>
        </>
    )
};

export default ButtonUploadJson;