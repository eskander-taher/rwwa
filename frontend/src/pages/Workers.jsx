import React, { useEffect } from "react";
import useWorkersContext from "../hooks/useWorkersContext";
import Section from "../components/UI/Section";
import WorkerList from "../components/workers/WorkerList";
import useHttpRequest from "../hooks/useHttpRequest";
import { workersActions } from "../context/WorkersContext";

//  workersTypes: ["ادارة", "أعضاء"],
// const workers = [
//   { job: "رئيس مجلس الادارة", name: "محمد عبدالله الشرقي", type: "ادارة" },
//   { job: "المسؤول المالي", name: "محمد عبدالله الشرقي", type: "ادارة" },
//   { job: "المشرف العام", name: "ابراهيم شعبان", type: "ادارة" },
//   { job: "مصمم", name: "أحمد غمضان", type: "أعضاء" },
//   { job: "كاتب", name: "حازم ", type: "أعضاء" },
//   { job: "مشرف", name: "علي محمد", type: "أعضاء" },
// ];
const Workers = () => {
  const { workers, workersDispatch } = useWorkersContext();

  const { error, isLoading, sendRequest } = useHttpRequest();

  useEffect(() => {
    sendRequest(
      {
        url: "/api/workers",
      },
      (data) =>{
      console.log(data)
        workersDispatch({ type: workersActions.SET_WORKERS, payload: data })}
    );
  }, [sendRequest, workersDispatch]);

  if (workers.length === 0) {
    return <></>;
  }
  return (
    <Section container header="العاملين">
      <WorkerList
        title="الادارة"
        workers={workers.filter((worker) => worker.type === "ادارة")}
      />
      <WorkerList
        title="فريق المجلة"
        workers={workers.filter((worker) => worker.type === "أعضاء")}
      />
    </Section>
  );
};

export default Workers;
