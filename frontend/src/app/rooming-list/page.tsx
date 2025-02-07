'use client'
import { useEffect, useState } from "react";
import Header from "@/components/molecules/Header";
import RoomingList from "@/components/organisms/RoomingList";
import { getRoomingLists } from "@/services/roomingListService";
import { Typography } from "@mui/material";

const RoomingListContainer = () => {
  const [roomingLists, setRoomingLists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getRoomingLists();
        setRoomingLists(data);
      } catch (error) {
        console.error("Error fetching rooming list", error);
        setError("Failed to load rooming lists");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <Header />
      {roomingLists.length === 0 ? 
        <Typography mt={4} ml={1}>No booking found  </Typography>  
        : <RoomingList data={roomingLists} />
      }
    </>
  );
};

export default RoomingListContainer;
