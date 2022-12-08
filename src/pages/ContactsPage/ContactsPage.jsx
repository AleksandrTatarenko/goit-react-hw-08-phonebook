import { ContactForm } from 'components/ContactForm/ContactForm';
import { Contacts } from "components/Contacts/Contacts";
import { Title } from "pages/ContactsPage/ContactsPage.styled";
import { Filter } from 'components/Filter/Filter';

export const ContactsPage = () => {
    return (<div>
      <Title>Phonebook</Title>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter />
      <Contacts />
    </div>
   )
}