import { Outlet, useNavigation } from "react-router-dom";
import Loading from "./Loading";
import Heading from "./Heading";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div className="container">
      {isLoading && <Loading />}
      <Heading />
      

      <div className="container">
        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
