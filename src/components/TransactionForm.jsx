import {
  FormControl,
  FormLabel,
  Input,
  Modal,
  Button,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
} from '@chakra-ui/react';
import { useContext } from 'react';
import { GlobalContext } from '../context';

const TransactionForm = ({ isOpen, onClose }) => {
  const { formData, setFormData, value, setValue, handleFormSubmit } =
    useContext(GlobalContext);

  const handleFormChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleFormSubmit(formData);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Transaction</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Enter Description</FormLabel>
              <Input
                placeholder='Enter transaction description'
                name='description'
                type='text'
                onChange={handleFormChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Enter Amount</FormLabel>
              <Input
                placeholder='Enter transaction amount'
                name='amount'
                type='number'
                onChange={handleFormChange}
              />
            </FormControl>
            <RadioGroup mt={'5'} value={value} onChange={setValue}>
              <Radio
                checked={formData.type === 'income'}
                colorScheme='blue'
                value='income'
                name='type'
                mr={'5'}
                onChange={handleFormChange}>
                Income
              </Radio>
              <Radio
                checked={formData.type === 'expense'}
                colorScheme='red'
                value='expense'
                name='type'
                onChange={handleFormChange}>
                Expense
              </Radio>
            </RadioGroup>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose} mr={'4'}>
              Cancel
            </Button>
            <Button onClick={onClose} type='submit'>
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
};
export default TransactionForm;
