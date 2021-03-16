export const useLocalStorage = () => {
  const handleSearch = (searchInfo) => {
    const searches = localStorage.getItem("searches") ?? [];
    const parsedSearches =
      typeof searches == "string" ? JSON.parse(searches) : searches;
    parsedSearches.push(searchInfo);
    const stringifiedSearches = JSON.stringify(parsedSearches);
    localStorage.setItem("searches", stringifiedSearches);
  };

  const getSearches = localStorage.getItem("searches") ?? "[]";
  const parsedSearches = JSON.parse(getSearches);

  return [parsedSearches, handleSearch];
};
