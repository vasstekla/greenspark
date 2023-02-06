import axios from "axios";
import { IProduct } from "../models/IProduct";

const baseURL = 'http://localhost:3001'

interface IProductResponseData {
    message: string;
    product: IProduct;
    products: IProduct[]
}

interface IProductResponse {
    data: IProductResponseData;
}

export function getAllProducts(): Promise<IProductResponse> {
    return axios.get(`${baseURL}/products`)
}

export function updateProduct(product: IProduct): Promise<IProductResponse> {
    return axios.put(`${baseURL}/product/${product._id}`, product)
}
