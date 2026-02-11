import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
@Schema()
export class User {
    @Prop({ required: true })
    protected nombre: string;
    @Prop({ required: true })
    protected email: string;
    @Prop({ required: true })
    protected id: string;
    @Prop({ required: true })
    protected password: string;
    @Prop({ required: true, default: 'user' })
    protected role: string;

    constructor(nombre: string, email: string, id: string, password: string, role: string) {
        this.nombre = nombre;
        this.email = email;
        this.id = id;
        this.password = password;
        this.role = role;
    }

    getNombre(): string {
        return this.nombre;
    }

    getEmail(): string {
        return this.email;
    }

    getId(): string {
        return this.id;
    }

    getPassword(): string {
        return this.password;
    }

    getRole(): string {
        return this.role;
    }

    setNombre(nombre: string) {
        this.nombre = nombre;
    }

    setEmail(email: string) {
        this.email = email;
    }

    setId(id: string) {
        this.id = id;
    }

    setPassword(password: string) {
        this.password = password;
    }

    setRole(role: string) {
        this.role = role;
    }
}
export const UserSchema = SchemaFactory.createForClass(User);
