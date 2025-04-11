export interface Project {
  idProject?: number;
  title: string;
  description: string;
  link: string;
  visibility: boolean;
  inProgress: boolean;
}

export function getAllProjects() {
  return fetch('http://localhost:3000/projects', {
    method: 'GET'
  }).then(data => data.json())
}

export function createProject(data: Project) {
  return fetch('http://localhost:3000/projects', {
    method: 'POST',
    body: data
  }).then(data => data.json())
}

export function updateProject(projectId: number, data: Project) {
  return fetch('http://localhost:3000/projects/' + projectId, {
    method: 'PUT',
    body: data
  }).then(data => data.json())
}

export function deleteProject(projectId: number) {
  return fetch('http://localhost:3000/projects/' + projectId, {
    method: 'DELETE'
  }).then(data => data.json())
}