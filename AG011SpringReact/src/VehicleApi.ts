import { VehicleResponse, Vehicle, VehicleEntry } from './types';
import axios, { AxiosRequestConfig } from 'axios';

const getAxiosConfig = (): AxiosRequestConfig => {
  const token = sessionStorage.getItem("jwt");
  return {
    headers: {
      'Authorization': token,
      'Content-Type': 'application/json',
    },
  };
};


export const getVehicles = async (): Promise<VehicleResponse[]> => {
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/vehicles`, getAxiosConfig() );
      
  return response.data._embedded.vehicles;
}

export const deleteVehicle = async (link: string): Promise<VehicleResponse> =>
{
  const response = await axios.delete(link, getAxiosConfig());

  return response.data
}

export const addVehicle = async (vehicle: Vehicle): Promise<VehicleResponse> => {
  const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/vehicles`, vehicle, getAxiosConfig());
  
  return response.data;
}

export const updateVehicle = async (vehicleEntry: VehicleEntry): Promise<VehicleResponse> => {
    const response = await axios.put(vehicleEntry.url, vehicleEntry.vehicle, getAxiosConfig());
  
  return response.data;
}