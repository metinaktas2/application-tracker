import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home";
import Form from "./pages/form";
import styles from "./styles/app.module.scss";
import { useEffect } from "react";
import api from "./utils/service";
import { useDispatch } from "react-redux";
import { setError, setJobs, setLoading } from "./redux/slices/jobSlice";
import { ToastContainer } from "react-toastify";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    //reducer'a yüklenmenin başladığını haber ver
    dispatch(setLoading());

    //api isteğini at
    api
      .get("/jobs")
      //verinin geldiğini reducer'a haber ver
      .then((res) => dispatch(setJobs(res.data)))
      //hatanın geldiğini reducer'a haber ver
      .catch((err) => dispatch(setError(err)));
  }, []);
  return (
    <BrowserRouter>
      <div className={styles.layout}>
        <Header />

        <main className={styles.page}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Form />} />
            <Route path="/edit/:id" element={<Form />} />
          </Routes>
        </main>
        <ToastContainer autoClose={2000} position="bottom-left" />
      </div>
    </BrowserRouter>
  );
};

export default App;
