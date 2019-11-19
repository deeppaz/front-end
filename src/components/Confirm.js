import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';

export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { firstName, lastName, email, phone }
    } = this.props;
    return (
      <MuiThemeProvider >
        <React.Fragment>
          <Dialog
            open={true}
            fullWidth={true}
            maxWidth='sm'
          >
          <AppBar title="Confirm User Data" />
          <List>
            <ListItem>
              <ListItemText primary="Adınız" secondary={firstName} /> 
            </ListItem>
            <ListItem>
              <ListItemText primary="Soyadınız" secondary={lastName} /> 
            </ListItem>
            <ListItem>
              <ListItemText primary="Email" secondary={email} /> 
            </ListItem>
            <ListItem>
              <ListItemText primary="Telefon Numaranız" secondary={phone} /> 
            </ListItem>
          </List>
          <br />
        
          <Button
            color="secondary"
            variant="contained"
            onClick={this.back}
          >Geri</Button>

          <Button
            color="primary"
            variant="contained"
            onClick={this.continue}
          >Onayla ve Devam et</Button>
          </Dialog>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Confirm;