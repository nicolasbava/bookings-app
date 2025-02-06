import { Box } from "@mui/material";
import HomePage from "../../components/templates/HomePage";
// import HomePage from "../../components/organisms/RoomingList";

export default function Page() {
  return (
    <Box sx={{padding: '32px 16px', background: '#f9fbff'}} >
      <main >
        <HomePage />
      </main>
    </Box>
  );
}
