import { useContext } from "react";
import { Language, LanguageContext } from "../context/LanguageContext";

const selectOptions = ["All Projects", "Web", "Mobile"];

const ProjectsFilter = ({ setSelectProject }: any) => {
  const { language } = useContext(LanguageContext);

  return (
    <select
      onChange={(e) => {
        setSelectProject(e.target.value);
      }}
      className="px-2 py-3 rounded-lg focus:outline-none text-md bg-amber-400 text-neutral-900"
    >
      {selectOptions.map((option) => {
        return (
          <option className="text-md" key={option}>
            {option}
          </option>
        );
      })}
    </select>
  );
};

export default ProjectsFilter;
