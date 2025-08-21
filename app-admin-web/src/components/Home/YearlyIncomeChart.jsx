import { useState, useEffect } from "react";
import { Chart } from "primereact/chart";
import axios from "axios";
import { IoMdRefresh } from "react-icons/io";

function YearlyIncomeChart() {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      let response;
      try {
        response = await axios.get("/admin/get_yearly_income");
        console.log(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }

      if (!isMounted) {
        return;
      }
      const data = {
        labels: ["Rides", "Rentals"],
        datasets: [
          {
            data: [response.data],
            backgroundColor: ["#FFD12E", "#ff7c1d"],
            hoverBackgroundColor: ["#EFC73C", "#FCD34D"],
          },
        ],
      };
      const options = {
        cutout: "60%",
        responsive: true,
        maintainAspectRatio: false,
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
        type="doughnut"
        data={chartData}
        options={chartOptions}
        className="h-full w-full"
      />
      <button
        type="button"
        onClick={() => setTrigger((t) => !t)}
        className="group absolute top-[20px] right-[20px] rounded-full p-1"
        aria-label="Refresh"
      >
        <IoMdRefresh className="h-6 w-6 cursor-pointer group-active:animate-[spin_0.3s_linear_infinite]" />
      </button>
    </>
  );
}

export default YearlyIncomeChart;
