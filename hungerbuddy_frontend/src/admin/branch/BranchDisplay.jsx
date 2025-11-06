import MaterialTable from "@material-table/core";
import { useEffect, useState } from "react";
import { getData, serverURL, getDate ,getTime, postData, } from "../../services/FetchNodeServices";
import { makeStyles } from "@mui/styles";
import {IconButton, Button, Grid, TextField, Dialog, DialogActions, DialogContent, DialogTitle,} from "@mui/material";
import Swal from "sweetalert2";
import { Toast } from "../../utils/toast";
import CloseIcon from "@mui/icons-material/Close";
import {FormControl,InputLabel,Select,MenuItem } from "@mui/material";


const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    minHeight: "100%",
  },
  box: {
    width: "1200px",
    height: "auto",
    padding: "10px",
  },
  heading: {
    width: "100%",
    height: "auto",
    background:
      "linear-gradient(90deg, hsla(321, 41%, 24%, 1) 0%, hsla(330, 53%, 77%, 1) 100%)",
    borderTopLeftRadius: "5px",
    borderTopRightRadius: "5px",
    display: "flex",
    flexDirection: "row",
  },
  titleStyle: {
    fontWeight: "bold",
    fontSize: "24px",
    color: "#fff",
  },
  subTitleStyle: {
    fontWeight: 700,
    fontSize: 16,
    color: "#fff",
  },
  titleBox: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    width: "30%",
    padding: 10,
  },
}));

export default function BranchDisplay({refresh,setRefresh}) {
  const classes = useStyle();
  const [branchList, setBranchList] = useState([]);
  const [open, setOpen] = useState(false);

  // ------------------------------------Branch View-------------------------------------------

  const [branchId, setBranchId] = useState("");
  const [branchName, setBranchName] = useState("");
  const [address, setAddress] = useState("");
  const [latlong, setLatlong] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [emailId, setEmailId] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [error, setError] = useState({});
  const [stateList, setStateList] = useState([]);
    const [cityList, setCityList] = useState([]);
    
  /* state city */

 const fetchAllState=async ()=>{
    var res=await getData('statecity/fetch_states')
    setStateList(res.data)


   }

 const fetchAllCity=async (sid)=>{
    var res=await postData('statecity/fetch_cities',{stateid:sid})
    setCityList(res.data)


   }

  const handleStateChange=(e)=>{
    setState(e.target.value)
    fetchAllCity(e.target.value)
  }

   useEffect(function(){
    fetchAllState()
  },[])

  const fillStates=()=>{
    return stateList.map((item)=>{
      return(<MenuItem value={item.stateid}>{item.statename}</MenuItem>)
    })
  }
  
 const fillCities=()=>{
    return cityList.map((item)=>{
      return(<MenuItem value={item.cityid}>{item.cityname}</MenuItem>)
    })
  }
 


  /*********/




  useEffect(() => {fetchAllBranch()}, [refresh]); //prop drilling
  

  const handleError = (label, message) => {
    setError((prev) => ({ ...prev, [label]: message }));
  };

  const validation = () => {
    var isError = false;
    if (branchName.length == 0) {
      setError((prev) => ({
        ...prev,
        branchName: "Pls Input Branch Name....",
      }));
      isError = true;
    }
    if (address.length == 0) {
      setError((prev) => ({
        ...prev,
        address: "Pls Input Address....",
      }));
      isError = true;
    }
    if (latlong.length == 0) {
      setError((prev) => ({
        ...prev,
        latlong: "Pls Input Latlong....",
      }));
      isError = true;
    }
    if (state.length == 0) {
      setError((prev) => ({
        ...prev,
        state: "Pls Input State....",
      }));
      isError = true;
    }
    if (city.length == 0) {
      setError((prev) => ({
        ...prev,
        city: "Pls Input City....",
      }));
      isError = true;
    }
    if (emailId.length == 0) {
      setError((prev) => ({
        ...prev,
        emailId: "Pls Input Email Id....",
      }));
      isError = true;
    }
    if (contactNumber.length == 0) {
      setError((prev) => ({
        ...prev,
        contactNumber: "Pls Input Contact Number....",
      }));
      isError = true;
    }
    if (contactPerson.length == 0) {
      setError((prev) => ({
        ...prev,
        contactPerson: "Pls Input Contact Person....",
      }));
      isError = true;
    }

    return isError;
  };

  const handleClick = async () => {
    var err = validation();
    if (err == false) {
      var body = {
        branchid: branchId,
        branchname: branchName,
        address: address,
        latlong: latlong,
        state: state,
        city: city,
        emailid: emailId,
        contactnumber: contactNumber,
        contactperson: contactPerson,
        createddate: getDate(),
        createdtime: getTime(),
        userid: "xxxxx",
      };

      var response = await postData("branch/edit_branch", body);
      if (response.status) {
        Toast.fire({
          icon: "success",
          title: response.message,
        });
        setOpen(false);
        fetchAllBranch();
      } else {
        Toast.fire({
          icon: "error",
          title: response.message,
        });
      }
    }
  };

  const showBranchInterface = () => {
    return (
      <Grid container spacing={2}>
        <Grid size={12}>
          <div className={classes.heading}>
            <div className={classes.titleBox}>
              <div className={classes.titleStyle}>HungerBuddy</div>
              <div className={classes.subTitleStyle}>New Food Category</div>
            </div>
            <div style={{ marginLeft: "auto" }}>
              <IconButton onClick={handleCloseDialog}>
                <CloseIcon style={{ color: "#ffff" }} />
              </IconButton>
            </div>
          </div>
        </Grid>
        <Grid size={6}>
          <div style={{ paddingLeft: "5px" }}>
            <TextField
              label="Branch Name"
              value={branchName}
              fullWidth
              onChange={(e) => setBranchName(e.target.value)}
              helperText={error?.branchName}
              error={error?.branchName}
              onFocus={() => handleError("branchName", null)}
            />
          </div>
        </Grid>
        <Grid size={6}>
          <div style={{ paddingRight: "5px" }}>
            <TextField
              label="Address"
              value={address}
              fullWidth
              onChange={(e) => setAddress(e.target.value)}
              helperText={error?.address}
              error={error?.address}
              onFocus={() => handleError("address", null)}
            />
          </div>
        </Grid>
        <Grid size={6}>
          <div style={{ paddingLeft: "5px" }}>
            <TextField
              label="Latlong"
              value={latlong}
              fullWidth
              onChange={(e) => setLatlong(e.target.value)}
              helperText={error?.latlong}
              error={error?.latlong}
              onFocus={() => handleError("latlong", null)}
            />
          </div>
        </Grid>
        <Grid size={6}>
          <div style={{ paddingRight: "5px" }}>
               <FormControl size="small" fullWidth>
                          <InputLabel>State</InputLabel>
                          <Select label="State" value={state} onChange={handleStateChange}>
                           <MenuItem>-Select State-</MenuItem>
                           {fillStates()}
                          </Select>
                         </FormControl>
                      
            {/*<TextField
              label="State"
              value={state}
              fullWidth
              onChange={(e) => setState(e.target.value)}
              helperText={error?.state}
              error={error?.state}
              onFocus={() => handleError("state", null)}
            />*/}
          </div>
        </Grid>
        <Grid size={6}>
          <div style={{ paddingLeft: "5px" }}>
            <FormControl size="small" fullWidth>
                          <InputLabel>City</InputLabel>
                          <Select label="City" value={city} onChange={(e)=>setCity(e.target.value)} >
                           <MenuItem>-Select City-</MenuItem>
                           {fillCities()}
                          </Select>
                          </FormControl>
                         
            {/*<TextField
              label="City"
              value={city}
              fullWidth
              onChange={(e) => setCity(e.target.value)}
              helperText={error?.city}
              error={error?.city}
              onFocus={() => handleError("city", null)}
            />*/}
          </div>
        </Grid>
        <Grid size={6}>
          <div style={{ paddingRight: "5px" }}>
            <TextField
              label="Email Id"
              value={emailId}
              fullWidth
              onChange={(e) => setEmailId(e.target.value)}
              helperText={error?.emailId}
              error={error?.emailId}
              onFocus={() => handleError("emailId", null)}
            />
          </div>
        </Grid>
        <Grid size={6}>
          <div style={{ paddingLeft: "5px" }}>
            <TextField
              label="Contact Number"
              value={contactNumber}
              fullWidth
              onChange={(e) => setContactNumber(e.target.value)}
              helperText={error?.contactNumber}
              error={error?.contactNumber}
              onFocus={() => handleError("contactNumber", null)}
            />
          </div>
        </Grid>
        <Grid size={6}>
          <div style={{ paddingRight: "5px" }}>
            <TextField
              label="Contact Person"
              value={contactPerson}
              fullWidth
              onChange={(e) => setContactPerson(e.target.value)}
              helperText={error?.contactPerson}
              error={error?.contactPerson}
              onFocus={() => handleError("contactPerson", null)}
            />
          </div>
        </Grid>
        <Grid size={6}>
          <div style={{ paddingLeft: "5px" }}>
            <Button
              style={{ background: "hsla(321, 32%, 37%, 1.00)" }}
              fullWidth
              variant="contained"
              onClick={handleClick}
            >
              Save
            </Button>
          </div>
        </Grid>
        <Grid size={6}>
          <div style={{ paddingRight: "5px" }}>
            <Button
              style={{ background: "hsla(321, 32%, 37%, 1.00)" }}
              fullWidth
              variant="contained"
            >
              Clear
            </Button>
          </div>
        </Grid>
      </Grid>
    );
  };

  // ------------------------------------Branch View-------------------------------------------

  const fetchAllBranch = async () => {
    var response = await getData("branch/fetch_all_branch");
    setBranchList(response.data);
  };

  useEffect(function () {
    fetchAllBranch();
  }, []);

  const showDialog = () => {
    return (
      <div>
        <Dialog open={open} onClose={handleCloseDialog}>
          <DialogContent>{showBranchInterface()}</DialogContent>
        </Dialog>
      </div>
    );
  };

  const handleOpenDialog = (rowData) => {
    fetchAllCity(rowData.stateid)
    setBranchId(rowData.branchid);
    setBranchName(rowData.branchname);
    setAddress(rowData.address);
    setLatlong(rowData.latlong);
    setCity(rowData.cityid);
    setState(rowData.stateid);
    setEmailId(rowData.emailid);
    setContactNumber(rowData.contactnumber);
    setContactPerson(rowData.contactperson);
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  const handleDelete = async (bid) => {
    Swal.fire({
      title: "Do you want to delete the selected branch",
      showCancelButton: true,
      confirmButtonText: "Delete",
    }).then(async (result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        var response = await postData("branch/delete_branch", {
          branchid: bid,
        });
        Swal.fire(response.message);
        fetchAllBranch();
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  const DisplayBranch = () => {
    return (
      <MaterialTable
        title="List of branches"
        columns={[
          { title: "Branch Name", field: "branchname" },
          { title: "Address", field: "address" },
          { title: "Latlong", field: "latlong" },
          { title: "City", field: "cityname" },
          { title: "State", field: "statename" },
          { title: "Email Id", field: "emailid" },
          { title: "Contact Number", field: "contactnumber" },
          { title: "Contact Person", field: "contactperson" },
        ]}
        data={branchList}
        actions={[
          {
            icon: "edit",
            tooltip: "Edit",
            onClick: (event, rowData) => handleOpenDialog(rowData),
          },
          {
            icon: "delete",
            tooltip: "Delete",
            onClick: (event, rowData) => handleDelete(rowData.branchid),
          },
        ]}
      />
    );
  };

  return (
    <div className={classes.root}>
      <div className={classes.box}>{DisplayBranch()}</div>
      {showDialog()}
    </div>
  );
}
