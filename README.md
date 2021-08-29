# REACT simple app

App uses [create-react-app](https://create-react-app.dev/) template.

It represents a React Single Page Application developped in educational purposes. It serves as frontend for [Django REST API](https://github.com/balancy/invest_blog_rest_api).

![react](https://i.ibb.co/Q9X4mJr/image.png)

It has public and private tabs. Courses, Mentors, About and Contact Us pages are available for all. Contact Us page allows users to send an email to web-app admin. Public tabs also include Login page. Private tabs include Account page.

App has 2 types of users: Mentor and Student with different permissions. Mentor is able to add new courses and delete the old ones. Student is able to subscribe himself on course or unsbuscribe from course. Operations are performed via JWT authentication on Django REST API. Mentors and Students could also refresh JWT token if the old one is expired. All those operations are availabes for them on their Account page.

![account](https://i.ibb.co/HHfBCbN/image.png)

Also added 6 tests.

## Install

npm should be already installed.

1. Clone the repository:
```console
git clone https://github.com/balancy/invest_blog_react_frontend
```

2. Go inside cloned repository and install dependencies:
```console
npm install
```

#### If you need Contact page to work and send emails

3. Add to your account on [emailjs](https://www.emailjs.com/) one template and one service

4. Rename `.env.example` to `.env` and define values for environmental variables:

- `REACT_APP_SERVICE_ID` — your emailjs service id
- `REACT_APP_TEMPLATE_ID` — your emailjs template id
- `REACT_APP_USER_ID` — your emailjs user id

## Launch

For app to work correctly, you need to launch DRF API on port 8080, or reconfigure it in `config.json`.

Run app:
```console
npm start