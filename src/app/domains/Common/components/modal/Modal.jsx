import { Fragment, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { modalFormFields } from "../../kernel/modalFormFields";
import { validate } from "./../../../../../utils/validate";
import {
  ComposedModal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  TextInput,
  NumberInput,
} from "carbon-components-react";

const Modal = ({ open, setOpen, handleAdd }) => {
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    employee_name: "",
    employee_salary: 0,
    employee_age: 0,
  });

  const handleSubmit = () => {
    const error = validate(formData, "modal");
    setErrors(error);
    if (!error)
      handleAdd({
        ...formData,
        id: uuidv4(),
      });
    !error && setOpen(false);
    setFormData({
      employee_name: "",
      employee_salary: 0,
      employee_age: 0,
    });
  };

  const handleClose = () => {
    setOpen(false);
    setErrors({});
    setFormData({
      employee_name: "",
      employee_salary: 0,
      employee_age: 0,
    });
  };

  return (
    <ComposedModal open={open} onClose={handleClose}>
      <ModalHeader title="Add a new employee" />
      <ModalBody>
        {modalFormFields.map(({ id, label, type, placeHolder }) => (
          <Fragment key={id}>
            {type === "text" && (
              <TextInput
                data-modal-primary-focus
                id={id}
                labelText={label}
                value={formData[id]}
                invalid={errors && errors[id]}
                invalidText={errors && errors[id]}
                placeholder={placeHolder}
                autoComplete="off"
                onChange={(evt) =>
                  setFormData((prevValues) => ({
                    ...prevValues,
                    [evt?.target.id]: evt.target.value,
                  }))
                }
              />
            )}
            {type === "number" && (
              <NumberInput
                id={id}
                placeholder={placeHolder}
                hideSteppers
                label={label}
                invalid={errors && errors[id]}
                invalidText={errors && errors[id]}
                value={formData[id]}
                onChange={(evt) =>
                  setFormData((prevValues) => ({
                    ...prevValues,
                    [evt?.target.id]: evt.target.value,
                  }))
                }
              />
            )}
          </Fragment>
        ))}
      </ModalBody>
      <ModalFooter
        primaryButtonText="Add"
        secondaryButtonText="Cancel"
        onRequestSubmit={handleSubmit}
      />
    </ComposedModal>
  );
};

export default Modal;
