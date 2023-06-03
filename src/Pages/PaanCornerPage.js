import React from "react";
import PaanCornerDashboard from "../Components/PaanCornerComponents/PaanCornerDashboard";
import PaanCornerContent from "../Components/PaanCornerComponents/PaanCornerContent";

function PaanCornerPage() {
  return (
    <div className="d-flex marginCenterLayout ">
      <PaanCornerDashboard />
      <PaanCornerContent />
    </div>
  );
}

export default PaanCornerPage;
