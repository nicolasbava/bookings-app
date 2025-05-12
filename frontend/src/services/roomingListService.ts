export const getRoomingLists = async () => {
    try {
      const response = await fetch('http://localhost:3001/rooming-lists');

      if (!response.ok) throw new Error('Failed to fetch rooming lists');
      return await response.json();
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  