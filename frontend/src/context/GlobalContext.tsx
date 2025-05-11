"use client";
import { createContext, useContext, useState } from "react";

interface GlobalContextType {
  shouldRefresh: boolean;
  selectedFilters: string[];
  orderAscendent: boolean;
  changeOrderAscendent: () => void;
  triggerRefresh: () => void;
  toggleFilter: (status: string) => void;
  setFilters: (filters: string[]) => void;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [shouldRefresh, setShouldRefresh] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [orderAscendent, setOrderAscendent] = useState<boolean>(false);

  const toggleFilter = (status: string) => {
    setSelectedFilters(prevFilters =>
      prevFilters.includes(status)
        ? prevFilters.filter(f => f !== status) // Remove if already selected
        : [...prevFilters, status] // Add if not selected
    );
  };

  const setFilters = (filters: string[]) => {
    setSelectedFilters(filters);
  };

  const triggerRefresh = () => {
    setShouldRefresh((prev) => !prev); // Toggle value to trigger re-renders
  };

  const changeOrderAscendent = () => {
    setOrderAscendent((prev) => !prev)
  }

  return (
    <GlobalContext.Provider value={{ 
        shouldRefresh, 
        selectedFilters,
        orderAscendent,
        changeOrderAscendent,
        triggerRefresh, 
        toggleFilter,
        setFilters
    }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
    const context = useContext(GlobalContext);
    if (!context) {
      throw new Error("useGlobalContext must be used within a GlobalContextProvider");
    }
    return context;
};
