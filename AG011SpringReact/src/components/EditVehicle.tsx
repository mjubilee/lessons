import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { Vehicle, VehicleResponse, VehicleEntry } from '../types';
import VehicleDialogContent from './VehicleDialogContent';
import { updateVehicle } from '../VehicleApi';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import Tooltip from '@mui/material/Tooltip';

type FormProps = {
  vehicledata: VehicleResponse;
}

function EditVehicle({ vehicledata }: FormProps) {
  const [open, setOpen] = useState(false);
  const [vehicle, setVehicle] = useState<Vehicle>({
    brand: '',
    model: '',
    color: '',
    registrationNumber: '',
    modelYear: 0,  
    price: 0
  });
    
  const handleClose = () => {
    setOpen(false);
  };
         
  const handleSave = () => {
    const url = vehicledata._links.self.href;
    const updateVehicle: VehicleEntry = {vehicle, url}
    mutate(updateVehicle);
    setVehicle({ brand: '', model: '', color: '',  registrationNumber:'', modelYear: 0, price: 0 });
    
    setOpen(false);
  }

  const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    setVehicle({...vehicle, [event.target.name]: event.target.value});
  }

  const handleClickOpen = () => {
    setVehicle({
      brand: vehicledata.brand,
      model: vehicledata.model,
      color: vehicledata.color,
      registrationNumber: vehicledata.registrationNumber,
      modelYear: vehicledata.modelYear,
      price: vehicledata.price
    });
    setOpen(true);
  };
  
  const queryClient = useQueryClient();

  const { mutate } = useMutation(updateVehicle, {
      onSuccess: () => {
        queryClient.invalidateQueries(["vehicles"]);
    },
    onError: (err) => {
        console.error(err);
    }
  });

return(
    <>
      {/* <Button onClick={handleClickOpen}>Edit</Button> */}
      <Tooltip title="Edit Vehicle">
        <IconButton aria-label="edit" size="small" onClick={handleClickOpen}><EditIcon fontSize= "small" /></IconButton>
      </Tooltip>
      
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit vehicle</DialogTitle>
        <VehicleDialogContent vehicle={vehicle} handleChange={handleChange}/>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default EditVehicle;
