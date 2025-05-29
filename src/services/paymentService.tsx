import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5131';

export interface PaymentRequest {
    userId: string;
    month: number;
    botTradingId: number;
    returnUrl: string;
    cancelUrl: string;
}

export interface PaymentResponse {
    checkoutUrl: string;
}

export class PaymentService {
    private baseUrl: string;

    constructor(baseUrl: string = API_URL) {
        this.baseUrl = baseUrl;
    }

    // Tạo payment link để thanh toán
    async createPaymentLink(request: PaymentRequest): Promise<PaymentResponse> {
        try {
            const response = await axios.post(`${this.baseUrl}/api/payments/create-payment-link`, request);
            return response.data;
        } catch (error) {
            throw this.handleError(error);
        }
    }

    // Kiểm tra trạng thái thanh toán
    async checkPayment(userId: string): Promise<void> {
        try {
            await axios.get(`${this.baseUrl}/api/payments/check-payment/${userId}`);
        } catch (error) {
            throw this.handleError(error);
        }
    }

    // Error handler
    private handleError(error: any): Error {
        if (axios.isAxiosError(error)) {
            return new Error(error.response?.data?.message || error.message);
        }
        return error;
    }
}

export const paymentService = new PaymentService();