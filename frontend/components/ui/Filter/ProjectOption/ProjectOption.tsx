import { FC } from 'react';
import { IProject, ISearchParams } from '@/types/interfaces';
import styles from './ProjectOption.module.css';
import { useRouterPush } from '@/hook/useRouterPush';
import { useRouter } from 'next/navigation';
import { PARAMS } from '@/config';

const ProjectOption: FC<{
  options: IProject[];
  searchParams: ISearchParams;
}> = ({ options, searchParams }) => {
  const router = useRouter();
  const pushRouter = useRouterPush(searchParams);

  const active: IProject | undefined =
    searchParams['f[projects][]'] !== undefined
      ? options.find(
          (item: IProject) => item.id == searchParams['f[projects][]']
        )
      : options.find((item: IProject) => item.is_active);
  return (
    <fieldset>
      <legend className={styles.legend}>Проект</legend>
      <select
        onChange={(e) => {
          e.target.value !== ''
            ? pushRouter(PARAMS.PROJECTS, e.target.value)
            : pushRouter(PARAMS.PROJECTS, '');
        }}
        className={styles.select}
      >
        {active ? (
          <option value={active.id}>{active.title}</option>
        ) : (
          <option value="">Все</option>
        )}
        {options
          .filter((option: IProject) =>
            searchParams['f[projects][]'] !== undefined
              ? active?.id != option.id
              : !option.is_active
          )
          .map((option: IProject) => (
            <option
              value={option.id}
              key={option.id}
              disabled={option.disabled}
            >
              {option.title}
            </option>
          ))}
        {active && <option value="">Все</option>}
      </select>
    </fieldset>
  );
};

export default ProjectOption;
