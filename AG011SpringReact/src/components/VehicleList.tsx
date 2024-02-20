import { DataGrid, GridColDef, GridCellParams, GridToolbar } from '@mui/x-data-grid';
import { useQuery, useMutation, useQueryClient  } from '@tanstack/react-query';
import { getVehicles, deleteVehicle } from '../VehicleApi';
import Snackbar from '@mui/material/Snackbar';
import { useState } from 'react';
import AddVehicle from './AddVehicle';
import EditVehicle from './EditVehicle';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

type CarlistProps = {
    logOut?: () => void;
}

function VehicleList({ logOut }: CarlistProps) {
    const queryClient = useQueryClient();
    const [open, setOpen] = useState(false);

    const { data, error, isSuccess } = useQuery({
        queryKey: ["vehicles"], 
        queryFn: getVehicles
    });

    // Carlist.tsx
    const { mutate } = useMutation(deleteVehicle, { 
        onSuccess: () => {
            setOpen(true);
            queryClient.invalidateQueries({ queryKey: ['vehicles'] });
        },
        onError: (err) => {
            console.error(err);
        },
    });
 
    const columns: GridColDef[] = [
        {field: 'brand', headerName: 'Brand', width: 200},
        {field: 'model', headerName: 'Model', width: 200},
        {field: 'color', headerName: 'Color', width: 200},
        {field: 'registrationNumber', headerName: 'Registration #', width: 150},
        {field: 'modelYear', headerName: 'Model Year', width: 150},
        {field: 'price', headerName: 'Price', width: 150},
        {
            field: 'edit',
            headerName: '',
            width: 90,
            sortable: false,
            filterable: false,
            disableColumnMenu: true,
            renderCell: (params: GridCellParams) => 
              <EditVehicle vehicledata={params.row} />
        },
        {
            field: 'delete',
            headerName: '',
            width: 90,
            sortable: false,
            filterable: false,
            disableColumnMenu: true,
            renderCell: (params: GridCellParams) => (
            //   <button 
            //   onClick={() => {
            //     if (window.confirm(`Are you sure you want to delete ${params.row.brand} ${params.row.model}?`)) {
            //       mutate(params.row._links.vehicle.href);
            //     }
            //   }}
            //     >
            //     Delete
            //   </button>
            <IconButton aria-label="delete" size="small" 
              onClick={() => {
                if (window.confirm(`Are you sure you want to delete ${params.row.brand} ${params.row.model}?`)) {
                  mutate(params.row._links.vehicle.href);
                }
              }}
            ><DeleteIcon fontSize="small" /></IconButton>
            ),
          },
    ];
      
    if (!isSuccess) {
        return <span>Loading...</span>
    } else if (error) {
        return <span>Error when fetching Vehicles...</span>
    } else {
        return ( 
            <>
            <Stack direction="row" alignItems="center" justifyContent="space-between">
                <AddVehicle />
                <Button onClick={logOut}>Log out</Button>
            </Stack>
            
            <DataGrid rows={data} columns={columns} disableRowSelectionOnClick={true} getRowId={row => row._links.self.href} slots={{ toolbar: GridToolbar }}/>
            <Snackbar open={open} autoHideDuration={2000} onClose={() => setOpen(false)} message="Car deleted" />
            </>
        );
    }
}
 
export default VehicleList;
  