import React from "react";
import { BsGear, BsPersonFill } from "react-icons/bs";
import TextField from "@material-ui/core/TextField";
const Navbar = () => {
  return (
    <nav>
      <span>
        <img src="/images/white_logo_transparent_background.png" alt="logo" />
      </span>

      <div className="nav-actions">
        <TextField
          id="outlined-basic"
          label="Search for location"
          variant="filled"
          size="small"
          style={{
            backgroundColor: "#f5f5f5",
            marginRight: "1em",
            borderRadius: "5px",
          }}
          InputProps={{
            style: {
              color: "#444",
            },
          }}
        />
        <div className="setting-actions">
          <span>
            EN <BsGear />
          </span>
          <span>
            My Account <BsGear />
          </span>
          <span>
            Sign in <BsPersonFill />
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
