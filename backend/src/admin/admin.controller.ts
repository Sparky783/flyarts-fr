import { Controller, Get, Post, Body, Patch, Param, Delete, Session, Res, Req, Put } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { LoginAdminDto } from './dto/login-admin.dto';
import { Request, Response } from 'express';
import * as bcrypt from 'bcrypt';
import { AdminUtils } from './admin.utils';
import { Admin } from './entities/admin.entity';

@Controller('admins')
export class AdminController {
    constructor(private readonly adminService: AdminService) { }

    @Post()
    create(
        @Req() request: Request,
        @Res() response: Response,
        @Body() createAdminDto: CreateAdminDto
    ) {
        if (!request.session['admin']) {
            return response.status(401).json({ message: 'You need to be logged in.' });
        }

        if (!this.isAdminAdmin(request.session['admin'])) {
            return response.status(403).json({ message: 'You need to be admin.' });
        }

        // Get the data from the req body
        let password = AdminUtils.generatePassword();
        const saltRounds = 10;

        if (!password)
            return;

        // Hash a password
        bcrypt.hash(password, saltRounds, async (err, hash) => {
            if (err)
                throw err;

            createAdminDto.password = hash;
            await this.adminService.create(createAdminDto);

            const result = await this.adminService.findAll();
            return response.json(result);
        });
    }

    @Get()
    async findAll(
        @Req() request: Request,
        @Res() response: Response
    ) {
        if (!request.session['admin']) {
            return response.status(401).json({ message: 'You need to be logged in.' });
        }

        if (!this.isAdminAdmin(request.session['admin'])) {
            return response.status(403).json({ message: 'You need to be admin.' });
        }
        
        const result = await this.adminService.findAll();
        return response.json(result);
    }

    @Get(':id')
    findOne(
        @Req() request: Request,
        @Res() response: Response,
        @Param('id') id: string
    ) {
        if (!request.session['admin']) {
            return response.status(401).json({ message: 'You need to be logged in.' });
        }

        if (!this.isAdminAdmin(request.session['admin'])) {
            return response.status(403).json({ message: 'You need to be admin.' });
        }

        return this.adminService.findOne(+id);
    }

    @Put(':id')
    async update(
        @Req() request: Request,
        @Res() response: Response,
        @Param('id') id: string,
        @Body() updateAdminDto: UpdateAdminDto
    ) {
        if (!request.session['admin']) {
            return response.status(401).json({ message: 'You need to be logged in.' });
        }

        if (!this.isAdminAdmin(request.session['admin'])) {
            return response.status(403).json({ message: 'You need to be admin.' });
        }

        await this.adminService.update(+id, updateAdminDto);

        const result = await this.adminService.findAll();
        return response.json(result);
    }

    @Delete(':id')
    async remove(
        @Req() request: Request,
        @Res() response: Response,
        @Param('id') id: string
    ) {
        if (!request.session['admin']) {
            return response.status(401).json({ message: 'You need to be logged in.' });
        }

        if (!this.isAdminAdmin(request.session['admin'])) {
            return response.status(403).json({ message: 'You need to be admin.' });
        }

        const result = await this.adminService.remove(+id);
        return response.json(result);
    }

    @Post('login')
    async login(
        @Res() response: Response,
        @Body() loginAdminDto: LoginAdminDto,
        @Req() request: Request
    ) {
        if (!loginAdminDto.email || !loginAdminDto.password) {
            return 'Please enter Adminname and Password!';
        }

        const admins = await this.adminService.findByEmail(loginAdminDto.email);

        if (admins.length == 0) {
            return response.status(500).json({ message: 'Admin not found' });
        }

        if (admins.length > 1) {
            return response.status(500).json({ message: 'An error occured' });
        }

        if (!await bcrypt.compareSync(loginAdminDto.password, admins[0].password)) {
            return response.status(401).json({ message: 'Incorrect Email and/or Password!' });
        }

        try {
            await new Promise<void>((resolve, reject) => {
                request.session.regenerate((err) => {
                    if (err)
                        return reject(err);

                    request.session['admin'] = admins[0];

                    request.session.save((err) => {
                        if (err)
                            return reject(err);

                        resolve();
                    });
                });
            });

            return response.send(request.session['admin']);
        } catch (err) {
            console.error('Error during session regeneration or saving:', err);
            return response.status(500).json({ message: 'An error occurred during login.' });
        }
    }

    @Put('infos/:id')
    async updateInfos(
        @Req() request: Request,
        @Res() response: Response,
        @Param('id') id: string,
        @Body() updateAdminDto: UpdateAdminDto
    ) {
        if (!request.session['admin']) {
            return response.status(401).json({ message: 'You need to be logged in.' });
        }

        if (+id !== request.session['admin'].idAdmin) {
            return response.status(403).json({ message: 'You cannot change information from another admin.' });
        }

        await this.adminService.update(+id, updateAdminDto);

        const result = await this.adminService.findAll();
        return response.json(result);
    }

    @Put('password/:id')
    async updatePassword(
        @Req() request: Request,
        @Res() response: Response,
        @Param('id') id: string,
        @Body() updateAdminDto: UpdateAdminDto
    ) {
        if (!request.session['admin']) {
            return response.status(401).json({ message: 'You need to be logged in.' });
        }

        if (+id !== request.session['admin'].idAdmin) {
            return response.status(403).json({ message: 'You cannot change pasword from another admin.' });
        }

        await this.adminService.update(+id, updateAdminDto);

        const result = await this.adminService.findAll();
        return response.json(result);
    }

    private isAdminAdmin(admin: Admin): boolean {
        return admin.roles === "admin";
    }
}
