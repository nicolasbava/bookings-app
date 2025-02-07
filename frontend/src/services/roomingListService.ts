export const getRoomingLists = async () => {
    try {
      const response = await fetch('http://localhost:3002/rooming-lists');
      console.log('response', response)
      if (!response.ok) throw new Error('Failed to fetch rooming lists');
      return await response.json();
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  