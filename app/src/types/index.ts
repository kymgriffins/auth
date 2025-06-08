// Define User and Authentication types
export interface User {
  
  accessToken: string;
  refreshToken: string;
   id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: Hair;
  ip: string;
  address: Address;
  macAddress: string;
  university: string;
  bank: Bank;
  company: Company;
  ein: string;
  ssn: string;
  userAgent: string;
  crypto: Crypto;
  role: string;
  
}
export interface Hair {
  color: string;
  type: string;
}

export interface Address {
  address: string;
  city: string;
  state: string;
  stateCode: string;
  postalCode: string;
  coordinates: Coordinates;
  country: string;
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Bank {
  cardExpire: string;
  cardNumber: string;
  cardType: string;
  currency: string;
  iban: string;
}

export interface Company {
  department: string;
  name: string;
  title: string;
  address: Address;
}

export interface Crypto {
  coin: string;
  wallet: string;
  network: string;
}

// AuthState type is used for Redux state management
export interface AuthState {
  user: User | null;
  token: string;
  loading: boolean;
  error: string | null;
}
export interface AuthResponse {
  user: User;
  token: string;
  loading: boolean;
  error: string | null;
}
// AuthResponse type is used for API responses
export interface AuthAPIResponse {
    data: {
        token: string;
        user: User;
    };
    error?: string;
    }
// AuthAPIRequest type is used for API requests
// privateRoute type is used for protected API calls
export interface PrivateRouteProps  {
    children: React.ReactNode;
    isAuthenticated: boolean;
    loading: boolean;
    redirectPath?: string;
    };
// create a PublicRouteProps type for public routes
export interface PublicRouteProps {
    children: React.ReactNode;
    isAuthenticated: boolean;
    loading: boolean;
    redirectPath?: string;
    };

export interface RegisterUser {
  email: string;
  password: string;
  // firstName: string;
  // lastName: string;
}
export interface UsersResponse {
  users: User[];  
}