import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("admins")
export class Admin {
    @PrimaryGeneratedColumn({ name: "id_admin" })
    idAdmin: number;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    name: string;

    @Column()
    roles: string;
}
