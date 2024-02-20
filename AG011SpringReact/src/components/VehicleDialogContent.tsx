import { Vehicle } from '../types';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

type DialogFormProps = {
    vehicle: Vehicle;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) =>
    void;
}
function VehicleDialogContent({ vehicle, handleChange}: DialogFormProps) {
  return (
    // <DialogContent>
    //   <input placeholder="Brand" name="brand" value={vehicle.brand} onChange={handleChange}/><br/>
    //   <input placeholder="Model" name="model" value={vehicle.model} onChange={handleChange}/><br/>
    //   <input placeholder="Color" name="color" value={vehicle.color} onChange={handleChange}/><br/>
    //   <input placeholder="Year" name="modelYear" value={vehicle.modelYear} onChange={handleChange}/><br/>
    //   <input placeholder="Reg.nr." name="registrationNumber" value={vehicle.registrationNumber} onChange={handleChange}/><br/>
    //   <input placeholder="Price" name="price" value={vehicle.price} onChange={handleChange}/><br/>
    // </DialogContent>

    <Stack spacing={2} mt={1}>
        <TextField label="Brand" name="brand" value={vehicle.brand} onChange={handleChange}/>
        <TextField label="Model" name="model" value={vehicle.model} onChange={handleChange}/>
        <TextField label="Color" name="color" value={vehicle.color} onChange={handleChange}/>
        <TextField label="Year" name="modelYear" value={vehicle.modelYear} onChange={handleChange}/>
        <TextField label="Reg.nr." name="registrationNumber" value={vehicle.registrationNumber} onChange={handleChange}/>
        <TextField label="Price" name="price" value={vehicle.price} onChange={handleChange}/>
    </Stack>
  );
}
export default VehicleDialogContent;
