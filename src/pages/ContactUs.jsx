import { sendForm } from 'emailjs-com';
import React from 'react';
import { Form, Input, TextArea } from 'semantic-ui-react';
import swal from 'sweetalert';
import MainButton from '../components/UI/buttons/MainButton';

const SERVICE_ID = process.env.REACT_APP_SERVICE_ID
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID
const USER_ID = process.env.REACT_APP_USER_ID

const ContactUs = () => {

    const handleOnSubmit = (e) => {
        e.preventDefault();
        sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
            .then((result) => {
                console.log(result.text);
                swal('Успех', 'Письмо отправлено', 'success')
            }, (error) => {
                console.log(error.text);
                swal('Ошибка', 'Что-то пошло не так', 'error')
            });
        e.target.reset()
    };

    return (
        <div>
            <h1>Свяжитесь с нами</h1>

            <div className="contactPage">
                <Form className="contactForm" onSubmit={handleOnSubmit}>
                    <Form.Field
                        className='contactForm__control'
                        control={Input}
                        name='user_email'
                        placeholder='Ваш email'
                        required
                    />
                    <Form.Field
                        className='contactForm__control'
                        control={Input}
                        name='user_name'
                        placeholder='Ваше имя'
                        required
                    />
                    <Form.Field
                        className='contactForm__control'
                        control={TextArea}
                        name='user_message'
                        placeholder='Сообщение'
                        required
                    />
                    <MainButton type='submit'>Отправить</MainButton>
                </Form>
            </div >
        </div>
    )
}

export default ContactUs
