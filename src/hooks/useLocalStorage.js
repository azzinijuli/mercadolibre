export const useLocalStorage = () => {
  const handleSearch = (searchInfo) => {
    const searches = localStorage.getItem("searches") ?? [];
    const parsedSearches =
      typeof searches == "string" ? JSON.parse(searches) : searches;
    parsedSearches.push(searchInfo);
    const stringifiedSearches = JSON.stringify(parsedSearches);
    localStorage.setItem("searches", stringifiedSearches);
    console.log(searchInfo);
  };
  return [handleSearch];
};
