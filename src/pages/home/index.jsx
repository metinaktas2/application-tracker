import { useSelector } from "react-redux";
import styles from "./home.module.scss";
import Loader from "../../components/loader";
import Error from "../../components/error";
import Empty from "../../components/empty";
import Card from "../../components/card";

const Home = () => {
  const { isLoading, error, jobs } = useSelector((store) => store.jobReducer);

  const grouped = jobs.reduce((grouped, job) => {
    //oluşturulan nesnede status 'e karşılık gelen dizi yoksa oluştur
    if (!grouped[job.status]) {
      grouped[job.status] = [];
    }
    //işin status değerine değerine karşılık gelen diziye pushla
    grouped[job.status].push(job);

    //nesnenin son halini return et
    return grouped;
  }, {});

  if (isLoading) return <Loader />;
  if (error) return <Error info={error.message} />;
  if (jobs.length === 0) return <Empty />;

  return (
    <div className={styles.stack}>
      {Object.entries(grouped).map(([category, array], key) => (
        <div
          key={key}
          className={`${styles.group} fade-in-up`}
          style={{ animationDelay: `${key * 0.1}s` }}
        >
          <h1>{category}</h1>
          <div className={styles.list}>
            {array.map((job, key) => (
              <div key={key} className="stagger-item">
                <Card job={job} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
