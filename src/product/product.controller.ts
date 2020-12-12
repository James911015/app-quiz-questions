import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';
import { from } from 'rxjs';
import { CreateProductDTO } from '../dto/product.dto';
import { ProductService } from './product.service'

@Controller('product')
export class ProductController {

    constructor(private productservice: ProductService) { }

    @Post('/create')
    async create(@Res() res, @Body() createProductDTO: CreateProductDTO) {
        //console.log(createProductDTO);
        const product = await this.productservice.createProduct(createProductDTO);
        res.status(HttpStatus.OK).json({
            message: 'Product Successfully Created',
            product: product
        })
    }

    @Get('/')
    async getProducts(@Res() res) {
        const products = await this.productservice.getProducts();
        return res.status(HttpStatus.OK).json({
            products
        });
    }

    @Get('/questions')
    async getQuestions(@Res() res) {
        //const products = await this.productservice.getProducts();
        const questions = ""
				+ "{'english': [{'question': 'Question 1','answers': [ {'answer': 'Answer 1-1', 'response': true},{'answer': 'Answer 1-2', 'response': false},{'answer': 'Answer 1-3', 'response': false},{'answer': 'Answer 1-4', 'response': false},]},{'question': 'Question 2','answers': [{'answer': 'Answer 2-1', 'response': false},{'answer': 'Answer 2-2', 'response': true},{'answer': 'Answer 2-3', 'response': false},{'answer': 'Answer 2-4', 'response': false},]},{'question': 'Question 3','answers': [{'answer': 'Answer 3-1', 'response': false},{'answer': 'Answer 3-2', 'response': false},{'answer': 'Answer 3-3', 'response': true},{'answer': 'Answer 3-4', 'response': false},]},{'question': 'Question 4','answers': [{'answer': 'Answer 4-1', 'response': false},{'answer': 'Answer 4-2', 'response': false},{'answer': 'Answer 4-3', 'response': false},{'answer': 'Answer 4-4', 'response': true},]},{'question': 'Question 5','answers': [{'answer': 'Answer 5-1', 'response': true},{'answer': 'Answer 5-2', 'response': false},{'answer': 'Answer 5-3', 'response': false},{'answer': 'Answer 5-4', 'response': false},]}]},"
				+ "{'science': [{'question': 'Question 1','answers': [{'answer': 'Answer 1-1', 'response': true},{'answer': 'Answer 1-2', 'response': false},{'answer': 'Answer 1-3', 'response': false},{'answer': 'Answer 1-4', 'response': false},]},{'question': 'Question 2','answers': [{'answer': 'Answer 2-1', 'response': false},{'answer': 'Answer 2-2', 'response': true},{'answer': 'Answer 2-3', 'response': false},{'answer': 'Answer 2-4', 'response': false},]},{'question': 'Question 3','answers': [{'answer': 'Answer 3-1', 'response': false},{'answer': 'Answer 3-2', 'response': false},{'answer': 'Answer 3-3', 'response': true},{'answer': 'Answer 3-4', 'response': false},]},{'question': 'Question 4','answers': [{'answer': 'Answer 4-1', 'response': false},{'answer': 'Answer 4-2', 'response': false},{'answer': 'Answer 4-3', 'response': false},{'answer': 'Answer 4-4', 'response': true},]},{'question': 'Question 5','answers': [{'answer': 'Answer 5-1', 'response': true},{'answer': 'Answer 5-2', 'response': false},{'answer': 'Answer 5-3', 'response': false},{'answer': 'Answer 5-4', 'response': false},]}]},"
				+ "{'spanish': [{'question': 'Question 1','answers': [{'answer': 'Answer 1-1', 'response': true},{'answer': 'Answer 1-2', 'response': false},{'answer': 'Answer 1-3', 'response': false},{'answer': 'Answer 1-4', 'response': false},]},{'question': 'Question 2','answers': [{'answer': 'Answer 2-1', 'response': false},{'answer': 'Answer 2-2', 'response': true},{'answer': 'Answer 2-3', 'response': false},{'answer': 'Answer 2-4', 'response': false},]},{'question': 'Question 3','answers': [{'answer': 'Answer 3-1', 'response': false},{'answer': 'Answer 3-2', 'response': false},{'answer': 'Answer 3-3', 'response': true},{'answer': 'Answer 3-4', 'response': false},]},{'question': 'Question 4','answers': [{'answer': 'Answer 4-1', 'response': false},{'answer': 'Answer 4-2', 'response': false},{'answer': 'Answer 4-3', 'response': false},{'answer': 'Answer 4-4', 'response': true},]},{'question': 'Question 5','answers': [{'answer': 'Answer 5-1', 'response': true},{'answer': 'Answer 5-2', 'response': false},{'answer': 'Answer 5-3', 'response': false},{'answer': 'Answer 5-4', 'response': false},]}]},"
				+ "{'logic':   [{'question': 'Question 1','answers': [{'answer': 'Answer 1-1', 'response': true},{'answer': 'Answer 1-2', 'response': false},{'answer': 'Answer 1-3', 'response': false},{'answer': 'Answer 1-4', 'response': false},]},{'question': 'Question 2','answers': [{'answer': 'Answer 2-1', 'response': false},{'answer': 'Answer 2-2', 'response': true},{'answer': 'Answer 2-3', 'response': false},{'answer': 'Answer 2-4', 'response': false},]},{			                  'question': 'Question 3',			                  'answers': [			                    {'answer': 'Answer 3-1', 'response': false},			                    {'answer': 'Answer 3-2', 'response': false},			                    {'answer': 'Answer 3-3', 'response': true},			                    {'answer': 'Answer 3-4', 'response': false},			                  ]			                },			                {			                  'question': 'Question 4',			                  'answers': [			                    {'answer': 'Answer 4-1', 'response': false},			                    {'answer': 'Answer 4-2', 'response': false},			                    {'answer': 'Answer 4-3', 'response': false},			                    {'answer': 'Answer 4-4', 'response': true},			                  ]			                },			                {			                  'question': 'Question 5',			                  'answers': [			                    {'answer': 'Answer 5-1', 'response': true},			                    {'answer': 'Answer 5-2', 'response': false},			                    {'answer': 'Answer 5-3', 'response': false},			                    {'answer': 'Answer 5-4', 'response': false},			                  ]			                }			              ]			            },			            {			              'math': [			                {			                  'question': 'Question 1',			                  'answers': [			                    {'answer': 'Answer 1-1', 'response': true},			                    {'answer': 'Answer 1-2', 'response': false},			                    {'answer': 'Answer 1-3', 'response': false},			                    {'answer': 'Answer 1-4', 'response': false},			                  ]			                },			                {			                  'question': 'Question 2',			                  'answers': [			                    {'answer': 'Answer 2-1', 'response': false},			                    {'answer': 'Answer 2-2', 'response': true},			                    {'answer': 'Answer 2-3', 'response': false},			                    {'answer': 'Answer 2-4', 'response': false},			                  ]			                },			                {			                  'question': 'Question 3',			                  'answers': [			                    {'answer': 'Answer 3-1', 'response': false},			                    {'answer': 'Answer 3-2', 'response': false},			                    {'answer': 'Answer 3-3', 'response': true},			                    {'answer': 'Answer 3-4', 'response': false},			                  ]			                },			                {			                  'question': 'Question 4',			                  'answers': [			                    {'answer': 'Answer 4-1', 'response': false},			                    {'answer': 'Answer 4-2', 'response': false},			                    {'answer': 'Answer 4-3', 'response': false},			                    {'answer': 'Answer 4-4', 'response': true},			                  ]			                },			                {			                  'question': 'Question 5',			                  'answers': [			                    {'answer': 'Answer 5-1', 'response': true},			                    {'answer': 'Answer 5-2', 'response': false},			                    {'answer': 'Answer 5-3', 'response': false},			                    {'answer': 'Answer 5-4', 'response': false},			                  ]			                }			              ]			            },			            {			              'religion': [			                {			                  'question': 'Question 1',			                  'answers': [			                    {'answer': 'Answer 1-1', 'response': true},{'answer': 'Answer 1-2', 'response': false},{'answer': 'Answer 1-3', 'response': false},{'answer': 'Answer 1-4', 'response': false},]},{'question': 'Question 2','answers': [{'answer': 'Answer 2-1', 'response': false},{'answer': 'Answer 2-2', 'response': true},{'answer': 'Answer 2-3', 'response': false},{'answer': 'Answer 2-4', 'response': false},]},{'question': 'Question 3','answers': [{'answer': 'Answer 3-1', 'response': false},{'answer': 'Answer 3-2', 'response': false},{'answer': 'Answer 3-3', 'response': true},{'answer': 'Answer 3-4', 'response': false},]},{'question': 'Question 4','answers': [{'answer': 'Answer 4-1', 'response': false},{'answer': 'Answer 4-2', 'response': false},{'answer': 'Answer 4-3', 'response': false},{'answer': 'Answer 4-4', 'response': true},]},{'question': 'Question 5','answers': [{'answer': 'Answer 5-1', 'response': true},{'answer': 'Answer 5-2', 'response': false},{'answer': 'Answer 5-3', 'response': false},{'answer': 'Answer 5-4', 'response': false},]}]}";
        return res.status(HttpStatus.OK).json({
            questions
        });
    }




    @Get('/:productId')
    async getProduct(@Res() res, @Param('productId') productId) {
        const product = await this.productservice.getProduct(productId);
        if (!product) throw new NotFoundException('Product Does Not Exists');
        return res.status(HttpStatus.OK).json(product);
    }

    @Delete('/delete')
    async deleteProduct(@Res() res, @Query('productId') productId) {
        const product = await this.productservice.deleteProduct(productId);
        if (!product) throw new NotFoundException('Product Does Not Exists');
        return res.status(HttpStatus.OK).json({
            message: "Prodcut deleted Successfully",
            product
        });
    }

    @Put('/update')
    async upateProduct(@Res() res, @Body() createProductDTO: CreateProductDTO, @Query('productId') productId) {
        const product = await this.productservice.updateProduct(productId, createProductDTO);
        if (!product) throw new NotFoundException('Product Does Not Exists');
        return res.status(HttpStatus.OK).json({
            message: "Prodcut Updated Successfully",
            product
        });
    }


}
