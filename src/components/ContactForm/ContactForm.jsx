import { Formik, Field } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';

import { FieldForm, Label } from './ContactFormStyled';
import { addContact } from 'services/api';

const schema = yup.object().shape({
    name: yup.string().required(),
    number: yup.string().required(),
});

const ContactForm = () => {

    const dispatch = useDispatch();

    const handleSubmit = (value, { resetForm }) => {
        console.log(value);
        dispatch(addContact(value));
        resetForm();
    }

    return (
        <Formik
            initialValues={{ name: '', number: '' }}
            onSubmit={handleSubmit}
            validationSchema={schema}
        >
            <FieldForm autoComplete='off'>
                <Label htmlFor=''>
                    Name
                    <Field
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </Label>
                <Label htmlFor=''>
                    Number
                    <Field
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </Label>
                <button type='submit'>Add contact</button>
            </FieldForm>
        </Formik>
    )
};

export default ContactForm;