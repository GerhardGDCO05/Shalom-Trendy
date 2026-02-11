import { Product } from '../products/product.entity';
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Order {
    @Prop({ default: [] })
    protected carshop: Array<{ product: Product, quantity: number }>;
    @Prop({ required: true })
    protected userId: string;
    @Prop({ required: true })
    protected status: string;

    constructor(carshop: Array<{ product: Product, quantity: number }>, userId: string, status: string) {
        this.carshop = carshop;
        this.userId = userId;
        this.status = status;
    }

    getCarshop(): Array<{ product: Product, quantity: number }> {
        return this.carshop;
    }

    getUserId(): string {
        return this.userId;
    }

    getStatus(): string {
        return this.status;
    }

    setCarshop(carshop: Array<{ product: Product, quantity: number }>) {
        this.carshop = carshop;
    }

    setUserId(userId: string) {
        this.userId = userId;
    }

    setStatus(status: string) {
        this.status = status;
    }
}

export const OrderSchema = SchemaFactory.createForClass(Order);
