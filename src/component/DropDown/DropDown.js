import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { UserActions } from "../../redux/actions/userAction";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import "./DropDown.css";
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
    maxWidth: 300
  },
  chips: {
    display: "flex",
    flexWrap: "wrap"
  },
  chip: {
    margin: 2
  },
  noLabel: {
    marginTop: theme.spacing(3)
  }
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

function DSelect(props) {
  const classes = useStyles();
  console.log("UserTab", props.name);
  var label = "";
  const names = props.name;
  const [personName, setPersonName] = React.useState([]);

  function handleChange(event) {
    setPersonName(event.target.value);
    console.log("value on select", event.target.value);
    props.UserActions(event.target.value);
  }

  return (
    <div className={classes.root}>
      <FormControl className={classes.formControl + " form-select"}>
        <InputLabel htmlFor="select-multiple">{props.label}</InputLabel>
        <Select
          value={personName}
          onChange={handleChange}
          input={<Input id="select-multiple" />}
          MenuProps={MenuProps}
        >
          {names.map(name => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      UserActions
    },
    dispatch
  );
};
export default connect(
  null,
  mapDispatchToProps
)(DSelect);
