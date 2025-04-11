import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProjectService {
    constructor(
        @InjectRepository(Project)
        private projectsRepository: Repository<Project>,
    ) { }

    create(createProjectDto: CreateProjectDto) {
        // This action adds a new project
        const project = new Project();
        project.title = createProjectDto.title;
        project.description = createProjectDto.description;
        project.link = createProjectDto.link;
        project.visibility = createProjectDto.visibility;
        project.inProgress = createProjectDto.inProgress;

        return this.projectsRepository.save(project);
    }

    findAll() {
        // This action returns all project of #${idAdmin} admin
        return this.projectsRepository.find();
    }

    async findOne(id: number) {
        // This action returns a #${id} project
        let projects = await this.projectsRepository.find({
            where: {
                idProject: id,
            }
        });

        return projects[0];
    }

    update(id: number, updateProjectDto: UpdateProjectDto) {
        // This action updates a #${id} project
        return this.projectsRepository.update(id, updateProjectDto);
    }

    remove(idProject: number) {
        // This action removes a #${id} project
        return this.projectsRepository.delete(idProject);
    }
}
