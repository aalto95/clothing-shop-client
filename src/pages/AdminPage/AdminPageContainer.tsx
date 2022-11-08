import React, { useEffect } from "react";
import AdminPage from "./AdminPage";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchItems } from "../../features/app-slice";

const AdminPageContainer: React.FC = () => {
  const isAdmin = useAppSelector((state) => state.app.isAdmin);
  const items = useAppSelector((state) => state.app.items);
  const isFetching = useAppSelector((state) => state.app.isFetching);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const promise = dispatch(fetchItems(""));
    return () => {
      promise.abort();
    };
  }, []);
  return <AdminPage isAdmin={isAdmin} items={items} isFetching={isFetching} />;
};

export default AdminPageContainer;
