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

const TransactionForm = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form>
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
              />
            </FormControl>
            <FormControl>
              <FormLabel>Enter Amount</FormLabel>
              <Input
                placeholder='Enter transaction amount'
                name='amount'
                type='number'
              />
            </FormControl>
            <RadioGroup mt={'5'}>
              <Radio colorScheme='blue' value='income' name='type' mr={'5'}>
                Income
              </Radio>
              <Radio colorScheme='red' value='expense' name='type'>
                Expense
              </Radio>
            </RadioGroup>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose} mr={'4'}>
              Cancel
            </Button>
            <Button>Add</Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
};
export default TransactionForm;
