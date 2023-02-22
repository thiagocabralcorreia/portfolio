const selectOptions = ["All Projects", "Web Application", "Mobile Application"];

const ProjectsFilter = ({ setSelectProject }: any) => {
  return (
    <select
      onChange={(e) => {
        setSelectProject(e.target.value);
      }}
      className="px-2 py-3 rounded-lg focus:outline-none text-md bg-amber-300 text-neutral-900"
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
