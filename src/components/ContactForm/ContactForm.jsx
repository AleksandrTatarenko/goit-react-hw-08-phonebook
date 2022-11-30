import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectContacts } from "redux/selectors";
import { addContact } from "redux/operations";
import { Container, Form, Label, Input, Button } from "components/ContactForm/ContactForm.styled";
import Notiflix from 'notiflix';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const isIncludeContact = contacts.map(contact => contact.name.toLowerCase().includes(form.elements.name.value.toLowerCase()))
    if (isIncludeContact.includes(true)) {
      return Notiflix.Notify.warning(`${form.name.value} is already in contacts`);
    }
    const contact = {
      name: form.name.value,
      phone: form.number.value
    }
    dispatch(addContact(contact));
    form.reset();
  }

  return (
    <Container onSubmit={handleSubmit}>
      <Form>
        <Label>
          Name <Input
            type="text"
            name='name'
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          Number <Input
            type="tel"
            name='number'
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <Button>Add contact</Button>
      </Form>
    </Container>
  );
};
