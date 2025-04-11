import { Admin } from "src/admin/entities/admin.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("projects")
export class Project {
    @PrimaryGeneratedColumn({ name: "id_project" })
    idProject: number;
    
    @Column()
    title: string;
    
    @Column()
    description: string;
    
    @Column()
    link: string;
    
    @Column()
    visibility: boolean;
    
    @Column({ name: "in_progress" })
    inProgress: boolean;
}
