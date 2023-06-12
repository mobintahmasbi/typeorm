import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Products } from './Product.entity';

@Entity('ProductFeature')
export class ProductFeature{
    
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    value: string

    @ManyToOne(() => Products, (product) => product.features)
    product: Products
}
