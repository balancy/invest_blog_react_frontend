# REACT simple app

App uses [create-react-app](https://create-react-app.dev/) template.

It represents a React Single Page Application developped in educational purposes. It serves as frontend for [Django REST API](https://github.com/balancy/invest_blog_rest_api).

![react](https://i.ibb.co/Q9X4mJr/image.png)

It has public and private tabs. Courses, Mentors, About and Contact Us pages are available for all. Contact Us page allows users to send an email to web-app admin. Public tabs also include Login page. Private tabs include Account page.

App has 2 types of users: Mentor and Student with different permissions. Mentor is able to add new courses and delete the old ones. Student is able to subscribe himself on course or unsbuscribe from course. Operations are performed via JWT authentication on Django REST API. Mentors and Students could also refresh JWT token if the old one is expired. All those operations are availabes for them on their Account page.

![account](https://i.ibb.co/HHfBCbN/image.png)