import {
	Entity,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	PrimaryGeneratedColumn,
	BaseEntity,
	OneToMany,
} from 'typeorm';
import { TutorialEntity } from './tutorial.entity';

export enum PageCode {
	ECP = 'ECP',
	MAT = 'MAT',
}

@Entity('elementCode')
export class ElementCodeEntity extends BaseEntity {

	//id
	@PrimaryGeneratedColumn()
	id: number;

	//pageCode
	@Column({
		type: 'enum',
		enum: PageCode,
	})
	pageCode: string;

	//elementCode
	@Column({
		type: 'varchar',
	})
	code: string;

	//description
	@Column({
		type: 'varchar',
	})
	description: string;

	@OneToMany(
		() => TutorialEntity,
		(tutorial) => tutorial.elementCode
	)
	tutorials: TutorialEntity[];

	//created at
	@CreateDateColumn()
	createdAt: Date;

	//updated at
	@UpdateDateColumn()
	updatedAt: Date;
}
