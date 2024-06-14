import { useState } from "react";
import { HeaderDashboard } from "../../components/layout/header/HeaderDashboard";
import { DashboardForm } from "../../components/molecules/form/DashboardForm";
import { DashboardWrapper } from "./DashboardWrapper";
import { DashboardFormWrapper } from "./DashboardFormWrapper";
import { Previewer } from "../../components/layout/previewer/Previewer";

export const Dashboard = () => {
  const [dataForm, setDataForm] = useState({});

  //Info is recived by FormMyData
  //keep info in dataForm to send info by Form props
  const handleSubmit = (ev) => {
    console.log({ ev });
    setDataForm({ ...dataForm, ...ev });
  };
  return (
    <>
      <HeaderDashboard />
      <DashboardWrapper>
        <DashboardFormWrapper>
          <DashboardForm onSubmit={handleSubmit}></DashboardForm>
        </DashboardFormWrapper>
        <Previewer dataForm={dataForm}></Previewer>
      </DashboardWrapper>
    </>
  );
};
