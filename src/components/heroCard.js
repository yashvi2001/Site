import "./heroCard.css";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";
import faker from "faker";
import { Doughnut, Bar } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
);

export const data = {
  labels: ["TypeScript", "JavaScript", "C++", "Java"],
  datasets: [
    {
      label: "skills",
      data: [12, 19, 3, 5],
      backgroundColor: [
        "	rgb(240,128,128)",
        "	rgb(0,191,255)",
        "rgb(255,255,0)",
        "rgb(0,255,127)",
      ],
    },
  ],
};
export const options = {
  plugins: {
    title: {
      display: true,
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const labels = ["React", "Next", "Angular"];
export const data1 = {
  labels,
  datasets: [
    {
      label: "Beginner",
      data: labels.map(() => faker.datatype.number({ min: 1000, max: 1000 })),
      backgroundColor: "rgb(255, 99, 132)",
    },
    {
      label: "Intermediate",
      data: labels.map(() => faker.datatype.number({ min: 1000, max: 1000 })),
      backgroundColor: "rgb(75, 192, 192)",
    },
    {
      label: "Advanced",
      data: labels.map(() => faker.datatype.number({ min: 1000, max: 1000 })),
      backgroundColor: "rgb(255,255,0)",
    },
  ],
};
function HeroCard() {
  return (
    <>
      <div class="item3">
        <div className="hero">
          <div className="heroCard">
            <div>
              <p className="Welcome">
                Hello, I am <br />
                <strong>Yashvi Mahapatra</strong>
              </p>
              <form
                target="_blank"
                action="https://drive.google.com/file/d/1Td2kz6SGW-gHu12tOsOfEchCnRECxV4M/view"
              >
                <button class="heroButton"> View My Resume</button>
              </form>
            </div>
            <img className="Image" src="./assets/Group-1783.png" alt="hero" />
          </div>
        </div>
        <div className="hero">
          <div className="detailContainer">
            <div className="details">
              <p className="title">Languages</p>
              <Doughnut data={data} />
            </div>
            <div className="details">
              <p className="title">Frameworks</p>
              <Bar options={options} data={data1} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default HeroCard;
