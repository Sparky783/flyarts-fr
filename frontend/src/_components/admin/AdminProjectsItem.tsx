import { useEffect, useState } from "react";
import { deleteProject, getAllProjects } from "../../_api/api";
import { ProjectProp } from "../Project";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export type AdminProjectsItemProps = {
  project: ProjectProp;
  updateProjectList: () => void;
};

export default function AdminProjectsItem({ project, updateProjectList }: AdminProjectsItemProps) {

  const handleModifyClick = () => {
    updateProjectList();
  }

  const handleRemoveClick = async () => {
    await deleteProject(project.idProject);
    updateProjectList();
  }

  return <tr>
    <td>{project.title}</td>
    <td>{project.idProject}</td>
    <td>{project.visibility}</td>
    <td>{project.inProgress}</td>

    <td className='text-right'>
      <div className='btn-group'>
        <button className='modify-project btn btn-secondary' onClick={handleModifyClick}><FontAwesomeIcon icon={faPen} /></button>
        <button className='remove-project btn btn-danger' onClick={handleRemoveClick}><FontAwesomeIcon icon={faTrash} /></button>
      </div>
    </td>
  </tr>
}