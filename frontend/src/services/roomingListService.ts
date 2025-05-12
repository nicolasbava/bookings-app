export const getRoomingLists = async () => {

    try {
      const response = await fetch('http://localhost:3001/rooming-lists',
        {
          method: 'GET',
            headers: {
              'Authorization': `Bearer ${process.env.NEXT_PUBLIC_JWT_TOKEN}`,
              'Content-Type': 'application/json',
            }
        }
      );

      if (!response.ok) throw new Error('Failed to fetch rooming lists');
      return await response.json();
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  