import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { v4 as uuidv4 } from 'uuid'

@Entity()
export class Catalog {
    @PrimaryGeneratedColumn('uuid')
    id: string = uuidv4();

    @Column({ name: "categoryId", length: 64, nullable: false })
    categoryId: string;

    @Column({ name: "mediaId", length: 64, nullable: false })
    mediaId: string;

    @Column({ name: "mediaTypeId", length: 64, nullable: false })
    mediaTypeId: string;

    @Column({ name: "classificaitonId", length: 64, nullable: false })
    classificaitonId: string;

    @Column({ name: "participantId", length: 64, nullable: false })
    participantId: string;

    @Column({ length: 300, nullable: false })
    mediaPath: string;

    @Column({ type: "float", nullable: false })
    price: number;

    @Column({ type: "date", nullable: false })
    registrionDate: Date;

    @Column({ type: "date", nullable: false })
    inactivationDate: Date;
}