import React, {Component} from 'react';
import {
  Step,
  Stepper,
  StepLabel,
  StepContent,
} from 'material-ui/Stepper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import './styles.css';
 
class ProgressBar extends Component {
  
    state = {
      finished: false,
      stepIndex: 0,
    };
  
    handleNext = () => {
      const {stepIndex} = this.state;
      this.setState({
        stepIndex: stepIndex + 1,
        finished: stepIndex >= 2,
      });
    };
  
    handlePrev = () => {
      const {stepIndex} = this.state;
      if (stepIndex > 0) {
        this.setState({stepIndex: stepIndex - 1});
      }
    };
  
    renderStepActions(step) {
      const {stepIndex} = this.state;
  
      return (
        <div style={{margin: '12px 0'}}>
          <RaisedButton
            label={stepIndex === 3 ? 'Confirm' : 'Next'}
            disableTouchRipple={true}
            disableFocusRipple={true}
            primary={true}
            onClick={this.handleNext}
            style={{marginRight: 12}}
          />
          {step > 0 && (
            <FlatButton
              label="Back"
              disabled={stepIndex === 0}
              disableTouchRipple={true}
              disableFocusRipple={true}
              onClick={this.handlePrev}
            />
          )}
        </div>
      );
    }
  
    render() {
      const {finished, stepIndex} = this.state;
  
      return (
        <div style={{maxWidth: 380, maxHeight: 400, margin: 'auto'}}>
          <Stepper activeStep={stepIndex} orientation="vertical">
            <Step>
              <StepLabel>Add an Image</StepLabel>
              <StepContent>
                <p>
                  We live in a visual culture. Upload an image of the item you're sharing.
                </p>
                <input name="shareFile" type="file"/>
                {this.renderStepActions(0)}
              </StepContent>
            </Step>
            <Step>
              <StepLabel>Add a Title & Description</StepLabel>
              <StepContent>
                <p>Folks need to know what you're sharing. Give them a clue by adding a title and description.</p>
                <TextField
                  hintText="Title"
                  floatingLabelText="Title"
                />
                <TextField
                  hintText="Description"
                  floatingLabelText="Description"
                />
                {this.renderStepActions(1)}
              </StepContent>
            </Step>
            <Step>
              <StepLabel>Categorize Your Item</StepLabel>
              <StepContent>
                <p>
                  To share an item, you'll add it to our list of categories. You can select multiple categories.
                </p>
                {this.renderStepActions(2)}
              </StepContent>
            </Step>
            <Step>
              <StepLabel>Confirm Things!</StepLabel>
              <StepContent>
                <p>
                  Great! If you're happy with everything, tap the button.
                </p>
                {this.renderStepActions(3)}
              </StepContent>
            </Step>
          </Stepper>
        </div>
      );
    }
  }

  export default ProgressBar;
  