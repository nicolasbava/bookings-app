'use client'
import RoomingList from "@/components/organisms/RoomingList";
import { RoomingListFetch } from "@/interfaces/roomingList";
import { getRoomingLists } from "@/services/roomingListService";
import { useEffect, useState } from "react";

const RoomingListContainer = () => {
  const [roomingLists, setRoomingLists] = useState<RoomingListFetch[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getRoomingLists();
        setRoomingLists(data);
      } catch (error) {
        console.log('error fetching rooming list', error)
        setError('Failed to load rooming lists');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return <RoomingList data={roomingLists} />;
};

export default RoomingListContainer;
