import fuseList from "./fuseList.json";

export default function filterFuse (searchText, maxResults) {
    return fuseList
      .filter(emoji => {
        if (emoji.keywords
            .join(' ')
            .toLowerCase()
            .includes(searchText.toLowerCase())) {
          return true;
        }
        return false;
      })
      .slice(0, maxResults);
  }
  