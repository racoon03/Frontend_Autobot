import axios from 'axios';
import type { AxiosInstance } from 'axios';
import Cookies from 'js-cookie';

interface UserData {
    userId: string;
    name: string;
    email: string;
    phoneNumber: string;
    roles: string[];
}

// Corrected AuthResponse interface based on actual API response structure
interface AuthResponse {
    access_token: string;
    refresh_token: string;
    userId: string; // User data fields are at the top level
    name: string;
    email: string;
    phoneNumber: string;
    roles: string[];
    // Remove 'user: UserData;' as it's not nested
}

// Constants
    const API_URL = import.meta.env.VITE_REACT_APP_BASE_URL || 'http://localhost:5131';
const AUTH_ENDPOINTS = {
  LOGIN: '/api/auth/login',
  REFRESH_TOKEN: '/api/auth/refresh-token',
  LOGOUT: '/api/auth/logout',
  REGISTER: '/api/auth/register',
  SEND_RESET_CODE: '/api/auth/send-code',
  VERIFY_RESET_CODE: '/api/auth/confirm-code',
  RESET_PASSWORD: '/api/auth/reset-password',
  SEND_REGISTER_CODE: '/api/auth/send-register-code'
};

// Cookie names
const COOKIE_NAMES = {
  USER_DATA: 'user_data',
  ACCESS_TOKEN: 'access_token',
  REFRESH_TOKEN: 'refresh_token',
};

// Cookie expiration times (in milliseconds)
const EXPIRATION_TIMES = {
  USER_DATA: 4 * 60 * 60 * 1000, // 4 hours
  ACCESS_TOKEN: 5 * 60 * 1000,    // 5 minutes
  REFRESH_TOKEN: 24 * 60 * 60 * 1000
};

class AuthService {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: API_URL,
      headers: {
        'Content-Type': 'application/json'
      }
    });

    // Add request interceptor for token refresh
    this.axiosInstance.interceptors.request.use(
      (config) => {
        const token = this.getAccessToken();
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );
  }

  // Login
  async login(username: string, password: string): Promise<UserData> {
    try {
      const response = await this.axiosInstance.post<AuthResponse>(AUTH_ENDPOINTS.LOGIN, {
        username,
        password
      });
      console.log(response.data);
      this.setUserData(response.data);
      const userData: UserData = {
          userId: response.data.userId,
          name: response.data.name,
          email: response.data.email,
          phoneNumber: response.data.phoneNumber,
          roles: response.data.roles,
      };
      return userData;
    } catch (error) {
      throw this.handleError(error);
    }
  }
  //register
  async register(name: string, email: string, phoneNumber: string, password: string, token: string): Promise<void> {
    try {
      await this.axiosInstance.post(AUTH_ENDPOINTS.REGISTER, {
        name,
        email,
        phoneNumber,
        password,
        token
      });
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async sendRegisterCode(email: string): Promise<void> {
    try {
      await this.axiosInstance.post(AUTH_ENDPOINTS.SEND_REGISTER_CODE, { email });
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Send reset password code
  async sendResetCode(email: string): Promise<void> {
    try {
      await this.axiosInstance.post(AUTH_ENDPOINTS.SEND_RESET_CODE, { email });
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Verify reset code
  async verifyResetCode(email: string, code: string): Promise<void> {
    try {
      await this.axiosInstance.post(AUTH_ENDPOINTS.VERIFY_RESET_CODE, {
        email,
        token: code
      });
    } catch (error) {
      throw this.handleError(error);
    }
  }
  async resetPassword(email: string, code: string, newPassword: string): Promise<void> {
    try {
      await this.axiosInstance.post(AUTH_ENDPOINTS.RESET_PASSWORD, {
        email,
        token: code,
        newPassword
      });
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Refresh Token
  async refreshToken(): Promise<void> {
    try {
      const refreshToken = this.getRefreshToken();
      if (!refreshToken) {
        throw new Error('No refresh token available');
      }

      const response = await this.axiosInstance.post<AuthResponse>(AUTH_ENDPOINTS.REFRESH_TOKEN, {
        refresh_token: refreshToken
      });

      this.setUserData(response.data);
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Logout
  async logout(): Promise<void> {
    try {
      const refreshToken = this.getRefreshToken();
      if (refreshToken) {
        // Optionally call backend logout endpoint if needed
        await this.axiosInstance.post(AUTH_ENDPOINTS.LOGOUT, { refresh_token: refreshToken });
        // Note: The backend logout endpoint might also invalidate the refresh token server-side
      }
    } catch (error) {
      // Handle potential errors during logout API call, but still proceed to clear data
      console.error("Error during logout API call:", error);
    } finally {
      this.clearUserData(); 
      window.location.reload();
    }
  }

  // Get current user
  getCurrentUser(): UserData | null {
    console.log(Cookies.get(COOKIE_NAMES.USER_DATA));
    const userData = Cookies.get(COOKIE_NAMES.USER_DATA);
    
    if (typeof userData !== 'string' || userData === 'undefined') {
      return null;
    }
    try {
      return JSON.parse(userData);
    } catch (e) {
      console.error("Failed to parse user data from cookie:", e);
      this.clearUserData();
      return null;
    }
  }

  // Get access token
  getAccessToken(): string | undefined {
    return Cookies.get(COOKIE_NAMES.ACCESS_TOKEN);
  }

  // Get refresh token
  private getRefreshToken(): string | undefined {
    return Cookies.get(COOKIE_NAMES.REFRESH_TOKEN);
  }

  // Set user data in cookies - now correctly processes data from top level
  private setUserData(data: AuthResponse): void {
    const userDataExpiry = new Date(new Date().getTime() + EXPIRATION_TIMES.USER_DATA);
    const tokenExpiry = new Date(new Date().getTime() + EXPIRATION_TIMES.ACCESS_TOKEN);
    const refreshTokenExpiry = new Date(new Date().getTime() + EXPIRATION_TIMES.REFRESH_TOKEN);

    // Extract user specific data and save it as a UserData object in the cookie
    const userToSave: UserData = {
        userId: data.userId,
        name: data.name,
        email: data.email,
        phoneNumber: data.phoneNumber,
        roles: data.roles,
    };

    Cookies.set(COOKIE_NAMES.USER_DATA, JSON.stringify(userToSave), { expires: userDataExpiry });
    Cookies.set(COOKIE_NAMES.ACCESS_TOKEN, data.access_token, { expires: tokenExpiry });
    Cookies.set(COOKIE_NAMES.REFRESH_TOKEN, data.refresh_token, { expires: refreshTokenExpiry });
  }

  // Clear user data from cookies
  private clearUserData(): void {
    Cookies.remove(COOKIE_NAMES.USER_DATA);
    Cookies.remove(COOKIE_NAMES.ACCESS_TOKEN);
    Cookies.remove(COOKIE_NAMES.REFRESH_TOKEN);
  }

  // Handle API errors
  private handleError(error: any): Error {
    // Customize error handling based on your API response structure
    if (error.response && error.response.data && error.response.data.message) {
      return new Error(error.response.data.message);
    } else if (error.message) {
      return new Error(error.message);
    } else {
      return new Error('An unknown error occurred.');
    }
  }
}

// Export singleton instance
export const authService = new AuthService();