import { useState, useEffect } from "react";
import { Chart } from "primereact/chart";
import axios from "axios";
import { IoMdRefresh } from "react-icons/io";

function CompletedRideData() {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      let response;
      try {
        response = await axios.get("/admin/get_monthly_stats");
        console.log("graph data", response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }

      if (!isMounted) {
        return;
      }
      const data = {
        labels: response.data.labels,
        datasets: [
          {
            label: "Completed Rides",
            data: response.data.completed,
            fill: true,
            tension: 0.4,
            borderColor: "#ffd12e",
          },
          {
            label: "Cancelled Rides",
            data: response.data.cancelled,
            fill: true,
            tension: 0.4,
            borderColor: "#ff7c1d",
          },
        ],
      };
      const options = {
        maintainAspectRatio: true,

        plugins: {
          legend: {
            labels: {
              color: "#000000",
            },
          },
        },
        scales: {
          x: {
            ticks: {
              color: "#000000",
            },
            grid: {
              color: "#cccccc",
            },
          },
          y: {
            ticks: {
              color: "#000000",
            },
            grid: {
              color: "#cccccc",
            },
          },
        },
      };

      setChartData(data);
      setChartOptions(options);
    };

    fetchData();
    const intervalId = setInterval(fetchData, 300000);
    return () => {
      isMounted = false;
      clearInterval(intervalId);
    };
  }, [trigger]);

  return (
    <>
      <Chart
        type="line"
        data={chartData}
        options={chartOptions}
        className="h-full w-full"
      />
      <IoMdRefresh
        className="absolute top-0 right-0 h-7 w-7 cursor-pointer"
        onClick={() => setTrigger((t) => !t)}
      />
    </>
  );
}

export default CompletedRideData;
