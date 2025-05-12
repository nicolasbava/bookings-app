'use client'
import { useEffect, useState } from "react";
import Header from "@/components/molecules/Header";
import RoomingList from "@/components/organisms/RoomingList";
import { getRoomingLists } from "@/services/roomingListService";
import { Typography } from "@mui/material";
import { useGlobalContext } from "@/context/GlobalContext";

const RoomingListTemplate = () => {
  const {shouldRefresh} = useGlobalContext()
  const [roomingLists, setRoomingLists] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getRoomingLists();
        setRoomingLists(data);
      } catch (error) {
        console.error("Error fetching rooming list", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [shouldRefresh]);


  // if (loading) return <div>Loading...</div>;

  return (
    <>
      {loading ? <div>Loading...</div> :  
        <>
          <Header roomingLists={roomingLists} />
          {roomingLists.length === 0 ? 
            <Typography mt={4} ml={1}>No booking found.</Typography>  
            : <RoomingList data={roomingLists} />
          }
        </>
      }
    </>
  );
};

export default RoomingListTemplate;
