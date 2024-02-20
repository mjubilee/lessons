import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { Vehicle } from '../types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addVehicle } from '../VehicleApi';
import VehicleDialogContent from './VehicleDialogContent';
import Button from '@mui/material/Button';

function AddVehicle() {
    const [open, setOpen] = useState(false);
  
    const [vehicle, setVehicle] = useState<Vehicle>({
        brand: '',
        model: '',
        color: '',
        registrationNumber: '',
        modelYear: 0,
        price: 0
    });
    
// Open the modal form
    const handleClickOpen = () => {
        setOpen(true);
    };
    
  // Close the modal form
    const handleClose = () => {
        setOpen(false);
    };

  
    const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        setVehicle({...vehicle, [event.target.name]:
        event.target.value});
    }

    const handleSave = () => {
        mutate(vehicle);   
        setVehicle({ brand: '', model: '', color: '',  registrationNumber:'',
                modelYear: 0, price: 0 });
        handleClose();
    }
  
    
    const queryClient = useQueryClient();

    const { mutate } = useMutation( addVehicle, {
        onSuccess: () => {
            queryClient.invalidateQueries(["cars"]);
        },
        onError: (err) => {
            console.error(err);
        },
    });

    return(
    <>
        <Button onClick={handleClickOpen}>New vehicle</Button>
        <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New vehicle</DialogTitle>
        <VehicleDialogContent vehicle={vehicle} handleChange={handleChange}/>
        <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSave}>Save</Button>
        </DialogActions>
        </Dialog>            
    </>
    );

}
export default AddVehicle;
