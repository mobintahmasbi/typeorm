import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { ProductFeature } from './ProductFeature.entity';

@Entity("Products")
export class Products{
    
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    description: string

    @Column()
    price: number

    @Column()
    count: number
    
    @OneToMany(() => ProductFeature, (feature) => feature.product)
    features: ProductFeature[]
}

