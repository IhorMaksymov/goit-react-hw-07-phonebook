import { useDispatch } from "react-redux";
import { useEffect } from "react";

import GlobalStyle from "./GlobalStyle";
import { Box } from "./Box/Box";

import Section from "./Section";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import Filter from "./Filter";

import { fetchContacts } from "services/api";

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box
      pt={5}
      pb={5}
      pl={5}
      pr={5}
      display='flex'
      flexDirection='column'
      alignItems='flex-start'
      as='main'
    >
      <Section title={'Phonebook'}>
        <ContactForm />
      </Section>
      <Section title={'Contacts'}>
        <Filter />
        <ContactList />
      </Section>
      <GlobalStyle />
    </Box>
  );
};

export default App; 