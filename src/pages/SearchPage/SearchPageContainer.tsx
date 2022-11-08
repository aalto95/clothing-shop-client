import SearchPage from "./SearchPage";
import { withRouter } from "react-router-dom";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchItems } from "../../features/app-slice";

const SearchPageContainer = (props: any) => {
  let searchString = props.match.params.string;
  const items = useAppSelector((state) => state.app.items);
  const isSearching = useAppSelector((state) => state.app.isSearching);
  const isRedirecting = useAppSelector((state) => state.app.isRedirecting);
  const searchText = useAppSelector((state) => state.app.searchText);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const promise = dispatch(fetchItems(searchText));
    return () => {
      promise.abort();
    };
  }, [dispatch, searchText]);

  return (
    <SearchPage
      items={items}
      isSearching={isSearching}
      searchText={searchText}
    />
  );
};

let withUrlDataContainerComponent = withRouter(SearchPageContainer);

export default withUrlDataContainerComponent;
