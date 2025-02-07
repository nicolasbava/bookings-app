'use client'

import Header from "@/components/molecules/Header";
import RoomingList from "@/components/organisms/RoomingList";
import { RoomingListFetch } from "@/interfaces/roomingList";
import { getRoomingLists } from "@/services/roomingListService";
import { useEffect, useState } from "react";

const RoomingListContainer = () => {
  const [roomingLists, setRoomingLists] = useState<RoomingListFetch[]>([]);
  const [filteredRoomingLists, setFilteredRoomingLists] = useState<RoomingListFetch[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getRoomingLists();
        setRoomingLists(data);
        setFilteredRoomingLists(data); // Initialize filtered data
      } catch (error) {
        console.log("error fetching rooming list", error);
        setError("Failed to load rooming lists");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (selectedFilters.length === 0) {
      setFilteredRoomingLists(roomingLists);
    } else {
      setFilteredRoomingLists(roomingLists.filter(room => selectedFilters.includes(room.status)));
    }
  }, [selectedFilters, roomingLists]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <Header onFilterChange={setSelectedFilters} />
      <RoomingList data={filteredRoomingLists} />
    </>
  );
};

export default RoomingListContainer;
