import React from "react";
import CommonItemsLayout from "./CommonItemsLayout";
import CommonDashboard from "./CommonDashboard";

function CommonLayout({ totalItems }) {
  return (
    <div className="marginCenterLayout" style={{ display: "flex" }}>
      <CommonDashboard></CommonDashboard>
      <CommonItemsLayout totalItems={totalItems}></CommonItemsLayout>
    </div>
  );
}

export default CommonLayout;
