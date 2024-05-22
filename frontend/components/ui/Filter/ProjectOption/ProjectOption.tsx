import { FC } from "react";
import { IProject } from "@/types/interfaces";
import styles from "./ProjectOption.module.css";

const ProjectOption: FC<{ options: IProject[] }> = ({ options }) => {
  const active: IProject | undefined = options.find(
    (item: IProject) => item.is_active
  );
  return (
    <fieldset>
      <legend className={styles.legend}>Проект</legend>
      <select className={styles.select}>
        {active ? <option>{active.title}</option> : <option>Все</option>}
        {options
          .filter((option: IProject) => !option.is_active)
          .map((option: IProject) => (
            <option key={option.id} disabled={option.disabled}>
              {option.title}
            </option>
          ))}
        {active && <option>Все</option>}
      </select>
    </fieldset>
  );
};

export default ProjectOption;
