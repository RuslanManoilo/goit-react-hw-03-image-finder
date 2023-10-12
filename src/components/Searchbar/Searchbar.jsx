import { Formik, Field, Form } from 'formik';
import { ImSearch } from "react-icons/im";

export const Searchbar = () => {
    return (
        <Formik
            initialValues={{
                searchValue: '',
            }}
            onSubmit={values => {
                console.log(values);
            }}
        >
            <Form>
                <button type="submit"><ImSearch /></button>

                <Field
                    name="searchValue"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />

            </Form>
        </Formik>
    );
};