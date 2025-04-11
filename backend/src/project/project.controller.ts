import { Controller, Get, Post, Body, Patch, Param, Delete, Session, Res, Req, Put } from '@nestjs/common';
import { ProjectService } from './project.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Admin } from 'src/admin/entities/admin.entity';
import { Request, Response } from 'express';

@Controller('projects')
export class ProjectController {
    constructor(private readonly projectService: ProjectService) { }

    @Post()
    async create(
        @Req() request: Request,
        @Res() response: Response,
        @Body() createProjectDto: CreateProjectDto
    ) {
        await this.projectService.create(createProjectDto);

        const result = await this.projectService.findAll();
        return response.json(result);
    }

    @Get()
    async findAll(
        @Req() request: Request,
        @Res() response: Response,
    ) {
        const result = await this.projectService.findAll();
        return response.json(result);
    }

    @Put(':id')
    async update(
        @Req() request: Request,
        @Res() response: Response,
        @Param('id') id: number, @Body() updateProjectDto: UpdateProjectDto
    ) {
        await this.projectService.update(+id, updateProjectDto);

        const result = await this.projectService.findAll();
        return response.json(result);
    }

    @Delete(':id')
    async remove(
        @Req() request: Request,
        @Res() response: Response,
        @Param('id') id: number
    ) {
        const result = await this.projectService.remove(+id);
        return response.json(result);
    }
}
