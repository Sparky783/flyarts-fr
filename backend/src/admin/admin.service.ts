import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Admin } from './entities/admin.entity';
import { Repository } from 'typeorm';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';

@Injectable()
export class AdminService {
    constructor(
        @InjectRepository(Admin)
        private adminsRepository: Repository<Admin>,
    ) { }

    create(createAdminDto: CreateAdminDto) {
        // This action adds a new admin
        const admin = new Admin();
        admin.email = createAdminDto.email;
        admin.password = createAdminDto.password;
        admin.name = createAdminDto.name;
        admin.roles = createAdminDto.roles;

        return this.adminsRepository.save(admin); // Type is maybe Admin instead of CreateAdminDto;
    }

    findAll() {
        // This action returns all admin
        return this.adminsRepository.find();
    }

    findOne(idAdmin: number): Promise<Admin | null> {
        // This action returns a #${id} admin
        return this.adminsRepository.findOne({
            where: {
                idAdmin: idAdmin
            }
        });
    }
    
    findByEmail(adminEmail: string): Promise<Admin[]> {
        return this.adminsRepository.find({
            where: {
                email: adminEmail
            }
        });
    }

    update(id: number, updateAdminDto: UpdateAdminDto) {
        // This action updates a #${id} admin
        return this.adminsRepository.update(id, updateAdminDto); 
    }

    async remove(id: number) {
        // This action removes a #${id} admin
        await this.adminsRepository.delete(id);
    }
}
