import { Formik, Field, Form, ErrorMessage } from 'formik';
import { ImSearch } from "react-icons/im";
import * as Yup from 'yup';

const formSchema = Yup.object().shape({
    searchValue: Yup.string()
        .min(2, 'Too Short!')
        .required('This field is required!'),
});

export const Searchbar = ({getInput}) => {
    return (
        <Formik
            initialValues={{
                searchValue: '',
            }}
            onSubmit={(values, actions) => {
                getInput(values.searchValue);
                actions.resetForm();
            }}
            validationSchema={formSchema}
        >
            <Form>
                <button type="submit">
                    <ImSearch />
                </button>

                <Field
                    name="searchValue"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
                <ErrorMessage name="name" component="div" />

            </Form>
        </Formik>
    );
};