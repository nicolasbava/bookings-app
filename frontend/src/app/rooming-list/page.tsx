'use client'
import Header from "@/components/molecules/Header";
import RoomingList from "@/components/organisms/RoomingList";
import { RoomingListFetch } from "@/interfaces/roomingList";
import { getRoomingLists } from "@/services/roomingListService";
import { useEffect, useState } from "react";

export const useRoomingListData = () => {
  const [roomingLists, setRoomingLists] = useState<RoomingListFetch[]>([]);
  const [filteredRoomingLists, setFilteredRoomingLists] = useState<RoomingListFetch[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await getRoomingLists();
      setRoomingLists(data);
      setFilteredRoomingLists(data);
      setError(null);
    } catch (error) {
      console.error("Error fetching rooming list:", error);
      setError("Failed to load rooming lists");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (selectedFilters.length === 0) {
      setFilteredRoomingLists(roomingLists);
    } else {
      setFilteredRoomingLists(roomingLists.filter(room => selectedFilters.includes(room.status)));
    }
  }, [selectedFilters, roomingLists]);

  return { roomingLists: filteredRoomingLists, loading, error, fetchData, setSelectedFilters };
};

const RoomingListContainer = () => {
  const { roomingLists, loading, error, setSelectedFilters } = useRoomingListData();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <Header onFilterChange={setSelectedFilters} />
      <RoomingList data={roomingLists} />
    </>
  );
};

export default RoomingListContainer;
