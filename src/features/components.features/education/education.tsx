import { Educationcomp } from "../../../core/components.core/educationcomp/educationcomp";
import { TopicTitle } from "../../../core/components.core/topictitle/topictitle";
import "./education.css";

export function Education() {
  return (
    <section className="education">
      <TopicTitle whereAreYou={"Education"} />
      <ul className="education__ul">
        <li className="education__li">
          <Educationcomp
            startYear={2022}
            startMonth={9}
            endYear={2023}
            endMonth={4}
            certificate={"Javascript Full Stack"}
            trainingCenter={"Isdi Coders"}
            city={"Madrid"}
          ></Educationcomp>
        </li>
        <li className="education__li">
          <Educationcomp
            startYear={2022}
            startMonth={7}
            endYear={2021}
            endMonth={12}
            certificate={
              "Professional Certificate Level III Development of Applications with Web Technologies"
            }
            trainingCenter={"Academia Crespo"}
            city={"Torrelavega"}
          ></Educationcomp>
        </li>
        <li className="education__li">
          <Educationcomp
            startYear={2017}
            startMonth={9}
            endYear={2018}
            endMonth={6}
            certificate={
              "University Master´s Degree in Teacher Training for Secundary school and Vocational Training "
            }
            trainingCenter={"Universidad Internacional de Andalucia"}
            city={"Sevilla"}
          ></Educationcomp>
        </li>
        <li className="education__li">
          <Educationcomp
            startYear={2007}
            startMonth={9}
            endYear={2009}
            endMonth={6}
            certificate={
              "Diploma of Higher Education in  carpentry, furniture, Installation and Furnishing Projects"
            }
            trainingCenter={"IES Ricardo Bernardo"}
            city={"Solares"}
          ></Educationcomp>
        </li>
        <li className="education__li">
          <Educationcomp
            startYear={2003}
            startMonth={9}
            endYear={2004}
            endMonth={6}
            certificate={"BTEC Multimedia "}
            trainingCenter={"Kensington & Chelsea College"}
            city={"Londres"}
          ></Educationcomp>
        </li>
      </ul>
    </section>
  );
}
