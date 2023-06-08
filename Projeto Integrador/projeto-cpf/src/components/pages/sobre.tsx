import '../../style/style.css';
import { Form, FormGroup, Label, Input } from 'reactstrap';

import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


function Sobre() {
    const [state, setState] = useState(true);
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return(
        <div>
            <Form>
                <FormGroup switch>
                    <Input type="switch" role="switch" />
                    <Label check>Default switch checkbox input</Label>
                </FormGroup>
                <FormGroup switch>
                    <Input type="switch" checked={state} onClick={() => {setState(!state);}}/>
                    {state === true &&
                        <div>
                            verdadeiro
                        </div>
                    }
                    
                </FormGroup>
            </Form>
      </div>
    );
}

export default Sobre;