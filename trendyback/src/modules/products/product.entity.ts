import { Prop, Schema,SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Product {
    @Prop({required:true})
    protected id: string;
    @Prop({default:'Crop Top'})
    protected name: string;
    @Prop({default:'Ropa Femenina'})
    protected description: string;
    @Prop({required:true})
    protected price: number;
    @Prop({default:0})
    protected stock: number;

    constructor(id: string, name: string, description: string, price: number, stock: number) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.stock = stock;
    }

    getId(): string {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    getDescription(): string {
        return this.description;
    }

    getPrice(): number {
        return this.price;
    }

    getStock(): number {
        return this.stock;
    }

    setId(id: string) {
        this.id = id;
    }

    setName(name: string) {
        this.name = name;
    }

    setDescription(description: string) {
        this.description = description;
    }

    setPrice(price: number) {
        this.price = price;
    }

    setStock(stock: number) {
        this.stock = stock;
    }
}

export const ProductSchema = SchemaFactory.createForClass(Product);