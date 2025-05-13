export const executeFetch = async <T = unknown>(
  url: string,
  method: string = 'POST',
  jsonData?: unknown,
): Promise<T> => {
  try {
    const response = await fetch(
        `http://localhost:3001${url}`, 
        {
            method,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.NEXT_PUBLIC_JWT_TOKEN}`,
            },
            body: jsonData ? JSON.stringify(jsonData) : undefined,
        }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
    }

    // const data = await response.json();
    const text = await response.text();
    const data = text ? JSON.parse(text) : null;
    return data as T;
  } catch (error) {
    console.error(`Fetch error for ${url}:`, error);
    throw error;
  }
};
