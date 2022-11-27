import React, { useEffect } from "react";
import AdminPage from "./AdminPage";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

const AdminPageContainer: React.FC = () => {
  const items = useAppSelector((state) => state.app.items);
  const isFetching = useAppSelector((state) => state.app.isFetching);
  const dispatch = useAppDispatch();

  return <AdminPage items={items} isFetching={isFetching} />;
};

export default AdminPageContainer;
