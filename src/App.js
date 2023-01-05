// import logo from "./logo.svg";
import "./App.css";
import { SectionDetails } from "./components/SectionDetails/SectionDetails";
import UserDetail from "./components/UserDetail/UserDetail";
import { useEffect, useState } from "react";
import axios from "axios";
import { Loader } from "./components/Loader/Loader";
function App() {
  const [userData, setuserData] = useState(null);
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    loadDetails();
  }, []);
  const loadDetails = () => {
    setLoading(true);
    axios({
      method: "get",
      url: "https://randomuser.me/api/",
    })
      .then((response) => {
        setuserData(response.data.results[0]);
      })
      .catch((error) => {
        console.log("Error while loading the user detail,error.message");
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <>
      {Loading ? (
        <Loader />
      ) : (
        <div className="main">
          <UserDetail
            onGenerateUser={() => loadDetails()}
            detail={userData}
          ></UserDetail>
          <div className="section-content">
            <SectionDetails detail={userData} />
          </div>
        </div>
      )}
    </>
  );
}
export default App;
