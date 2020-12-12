import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose'
import { IProduct } from '../interfaces/product.interface'
import { CreateProductDTO } from '../dto/product.dto'

@Injectable()
export class ProductService {

    constructor(@InjectModel('Product') readonly productModel: Model<IProduct>) {
    }

    async getProducts(): Promise<IProduct[]> {
        const products = await this.productModel.find()
        return products;
    }

    async getProduct(productId: string): Promise<IProduct> {
        const product = await this.productModel.findById(productId);
        return product;
    }

    async createProduct(createProduct: CreateProductDTO): Promise<IProduct> {
        const product = new this.productModel(createProduct);
        await product.save()
        return product;
    }

    async updateProduct(productId: string, createProduct: CreateProductDTO): Promise<IProduct> {
        const product = await this.productModel.findByIdAndUpdate(productId, createProduct, { new: true });
        return product;
    }

    async deleteProduct(productId: string): Promise<IProduct> {
        const product = await this.productModel.findByIdAndDelete(productId);
        return product;
    }
}
