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
            backgroundColor: ["#ffd12e", "#ff7c1d", "#22C55E"],
            hoverBackgroundColor: ["#60A5FA", "#FCD34D", "#4ADE80"],
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
      <IoMdRefresh
        className="absolute top-[20px] right-[20px] h-7 w-7 cursor-pointer"
        onClick={() => setTrigger((t) => !t)}
      />
    </>
  );
}

export default YearlyIncomeChart;
