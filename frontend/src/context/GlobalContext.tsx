"use client";
import { createContext, useContext, useState } from "react";

interface GlobalContextType {
  shouldRefresh: boolean;
  triggerRefresh: () => void;
  selectedFilters: string[];
  toggleFilter: (status: string) => void;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [shouldRefresh, setShouldRefresh] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const toggleFilter = (status: string) => {
    setSelectedFilters(prevFilters =>
      prevFilters.includes(status)
        ? prevFilters.filter(f => f !== status) // Remove if already selected
        : [...prevFilters, status] // Add if not selected
    );
  };

  const triggerRefresh = () => {
    setShouldRefresh((prev) => !prev); // Toggle value to trigger re-renders
  };

  return (
    <GlobalContext.Provider value={{ 
        shouldRefresh, 
        triggerRefresh, 
        selectedFilters,
        toggleFilter
    }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
    const context = useContext(GlobalContext);
    if (!context) {
      throw new Error("useFilter must be used within a FilterProvider");
    }
    return context;
  };
