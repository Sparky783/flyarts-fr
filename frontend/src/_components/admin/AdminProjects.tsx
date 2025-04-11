import { useEffect, useState } from "react";
import { getAllProjects } from "../../_api/api";
import { ProjectProp } from "../Project";
import { faPen, faPlusCircle, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";

export default function AdminProjects() {
  const [projects, setProjects] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showRemoveModal, setShowRemoveModal] = useState(false);

  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const [uploadProgress, setUploadProgress] = useState(0);
  const [dragging, setDragging] = useState(false);

  const handleCloseEditModal = () => setShowEditModal(false);
  const handleCloseRemoveModal = () => setShowRemoveModal(false);
  const handleOpenEditModal = () => setShowEditModal(true);
  const handleOpenRemoveModal = () => setShowRemoveModal(true);

  const updateProjectList = () => {
    getAllProjects().then((list) => setProjects(list));
  }

  const addProject = () => {
    getAllProjects().then((list) => setProjects(list));
  }

  const handleFileChange = (event: any) => {
    const selectedFile = event.target.files[0];
    handleFileSelection(selectedFile);
  };

  const handleFileSelection = (selectedFile: any) => {
    if (selectedFile) {
      setFile(selectedFile);

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleUpload = async () => {
    if (!file)
      return;

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:3000/upload/image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (progressEvent: any) => {
          const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          setUploadProgress(percentCompleted);
        },
      });
      console.log('Image uploaded successfully:', response.data);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const handleDragOver = (event: any) => {
    event.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (event: any) => {
    event.preventDefault();
    setDragging(false);
    const selectedFile = event.dataTransfer.files[0];
    handleFileSelection(selectedFile);
    handleUpload();
  };

  useEffect(() => {
    getAllProjects().then(list => setProjects(list));
  }, [])

  return <>
    <div className="container">
      <div className="row">
        <section className="col-md-12">
          <h1>Gestionnaire des projets</h1>
          <div className="card">
            <div className="card-header clearfix">
              <span className="float-left">Il y a {projects.length} projets</span>
              <button className="btn btn-primary float-right" type="button" onClick={handleOpenEditModal}><FontAwesomeIcon icon={faPlusCircle} /> Ajouter un projet</button>
            </div>
            <table id="tableProjects" className="card-body table table-hover">
              <thead>
                <tr>
                  <th scope="col">Titre</th>
                  <th scope="col">Image</th>
                  <th scope="col">Afficher</th>
                  <th scope="col">En cours</th>
                  <th className="text-right" scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project: ProjectProp) => {
                  return <tr>
                    <td>{project.title}</td>
                    <td>{project.idProject}</td>
                    <td>{project.visibility}</td>
                    <td>{project.inProgress}</td>

                    <td className='text-right'>
                      <div className='btn-group'>
                        <button className='modify-project btn btn-secondary' onClick={handleOpenEditModal}><FontAwesomeIcon icon={faPen} /></button>
                        <button className='remove-project btn btn-danger' onClick={handleOpenRemoveModal}><FontAwesomeIcon icon={faTrash} /></button>
                      </div>
                    </td>
                  </tr>
                })}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>

    {/* Modals */}
    <Modal show={showEditModal} onHide={handleCloseEditModal}>
      <Modal.Header closeButton>
        <Modal.Title>Ajouter un projet</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="form-group">
          <label htmlFor="titleInput">Titre</label>
          <input id="titleInput" className="form-control" type="text" />
        </div>
        <div className="form-group">
          <label htmlFor="linkInput">Link</label>
          <input id="linkInput" className="form-control" type="text" />
        </div>
        <div className="form-group">
          <label htmlFor="imageInput">Image</label>
          <div id="uploadProject">
            <div className={`upload-dropzone ${dragging ? 'dragging' : ''}`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              {previewUrl ? (
                <img src={previewUrl} alt="Preview" width="200" />
              ) : (
                <p>Drag & Drop an image here or click to select one</p>
              )}
              <input type="file" onChange={handleFileChange} style={{ display: 'none' }} />
            </div>

            {uploadProgress > 0 && (
              <div className="progress">
                <div className="progress-bar"
                  role="progressbar"
                  style={{ width: `${uploadProgress}%` }}
                  aria-valuenow={uploadProgress}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  {uploadProgress}%
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="descriptionInput">Description</label>
          <textarea id="descriptionInput" className="form-control"></textarea>
        </div>
        <div className="row edit-option">
          <div className="col-md-6">
            <div className="form-check form-switch">
              <input id="visibilityInput" className="form-check-input" type="checkbox" role="switch" checked />
              <label className="form-check-label" htmlFor="visibilityInput">Afficher</label>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-check form-switch">
              <input id="inProgressInput" className="form-check-input" type="checkbox" role="switch" />
              <label className="form-check-label" htmlFor="inProgressInput">En cours</label>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseEditModal}>
          Annuler
        </Button>
        <Button variant="primary" onClick={handleCloseEditModal}>
          Ajouter
        </Button>
      </Modal.Footer>
    </Modal>

    <Modal show={showRemoveModal} onHide={handleCloseRemoveModal}>
      <Modal.Header closeButton>
        <Modal.Title>Supprimer un projet</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Voulez-vous vraiment supprimer le projet "<span id="nameProject"></span>"?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseRemoveModal}>
          Non
        </Button>
        <Button variant="primary" onClick={handleCloseRemoveModal}>
          Oui
        </Button>
      </Modal.Footer>
    </Modal>
  </>
}