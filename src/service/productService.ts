import axios from "axios";
import { IProduct } from "../models/IProduct";

const baseURL = 'http://localhost:3001';

interface IProductsGetResponseData {
    message: string;
    products: IProduct[];
}

interface IProductsGetResponse {
    data: IProductsGetResponseData;
}

interface IProductUpdateResponseData {
    message: string;
    product: IProduct;
}

interface IProductUpdateResponse {
    data: IProductUpdateResponseData;
}

export function getAllProducts(): Promise<IProductsGetResponse> {
    return axios.get(`${baseURL}/products`);
}

export function updateProduct(product: IProduct): Promise<IProductUpdateResponse> {
    return axios.put(`${baseURL}/products/${product._id}`, product);
}
