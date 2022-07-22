import {
	Entity,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	PrimaryGeneratedColumn,
	BaseEntity,
	ManyToOne,
	JoinColumn,
} from 'typeorm';
import { ElementCodeEntity } from './elementCode.entity';
import { PageCode } from 'src/shared/enums';

@Entity('tutorial')
export class TutorialEntity extends BaseEntity {

	//id
	@PrimaryGeneratedColumn()
	id: number;

	//pageCode
	@Column({
		type: 'enum',
		enum: PageCode,
	})
	pageCode: string;

	@ManyToOne(
		() => ElementCodeEntity,
		(elementCode) => elementCode.tutorials,
		{
			onDelete: 'CASCADE',
		}
	)
	@JoinColumn({
		name: 'elementCodeId',
	})
	elementCode: string;

	//order
	@Column({
		type: 'numeric',
	})
	order: number;

	//title
	@Column({
		type: 'varchar',
	})
	title: string;

	//description
	@Column({
		type: 'varchar',
	})
	description: string;

	//created at
	@CreateDateColumn()
	createdAt: Date;

	//updated at
	@UpdateDateColumn()
	updatedAt: Date;
}
