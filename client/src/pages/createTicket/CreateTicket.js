import React, { useEffect, useState } from "react";
import "./createTicket.css";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";

 function CreateTicket(props) {
  const [user, setUser] = useState({});
  const username = useParams().username;

  // useEffect(() => {
  //   const FetchUser = async () => {
  //     const res = await axios.get(`/users/?username=${username}`);
  //     setUser(res.data);
  //   };
  //   FetchUser();
  // }, [username]);
  console.log(props);
  // 路由组件中会包含
  //    history
  //    location
  //    match
  // 此处可以使用new URLSearchParams获取当前查询条件
  //  使用模块qs也能获取查询条件
  const params = new URLSearchParams(props.location.search);
  console.log(params.get("t"));
  return (
    <>
      <div className="tickets-list">
        <h2>this is the CreateTicket page</h2>
      </div>
    </>
  );
}
export default withRouter(CreateTicket)