# Education Platform - EduHub

## About the Project

Our Education platform provides an interactive environment where teachers create and offer classes for students to enroll in. Each class is meticulously crafted by the teacher to ensure an engaging learning experience. Students can leave reviews, helping others make informed decisions about enrolling.

Teachers have the ability to supplement their classes with posts related to course content, updates, and additional resources. These posts are exclusively accessible to registered users, fostering a sense of community and collaboration among learners.

To maintain the integrity of the learning experience, only logged-in users can enroll in classes, ensuring a personalized and secure educational journey. Guest users can browse through classes and read reviews but they must register to access the full functionality of the platform.

In addition to the dynamic features mentioned above, our platform prioritizes communication and engagement between teachers and students. We have a dedicated Contact Us page. This page serves as a direct channel for users and visitors to connect with teachers on the platform.

## 🔗 Live Link:

Click the following link to be redirected to the live version of the code. [EduHub](https://eduhub.fly.dev/)

## 💻 Built With

- ![HTML badge](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
- ![CSS badge](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
- ![JS badge](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
- ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
- ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
- ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

## 📈 ERD

![Image](https://i.ibb.co/SVsnCRQ/Edu-Hub-ERD.png)

## 🏃 Getting Started

1. Clone the repository

```sh
git clone git@github.com:TasneemAlhelli/education-platform.git
```

2. Install NPM pacakges

```sh
npm install
```

3. Create ENV file

```sh
cp exmaple.env .env
```

4. Create .gitignore file

```sh
touch .gitignore
```

5. Add node_modules and .env to .gitignore

```sh
echo node_modules >> .gitignore
```

```sh
echo .env >> .gitignore
```

## 🥇 Features

#### Home page:

This is the home page. It introduces the website and shows the featured classes that have the most registered students.

#### View All Classes:

This is the View All Classes page. It shows all classes on the platform that were created by the teacher, and the user can view the details of the class by clicking on the view button. Also, if the user is a student, an enroll button will be shown for him if he is not enrolled in that class.

#### View my Classes:

This is my classes page. For students, it shows the classes he registered for with a view button to redirect him to the details of the class. For the teacher, it shows the classes he created with three buttons (view, edit, delete); View button: show the details of the class; Edit button: redirect to the edit class form to update the details of the class; Delete button: it will delete the class. Also, there is a create class button that redirects him to the create class form.

#### Show class:

This is the show class page. For students, it shows the details of the class. Also, he was able to see the posts that the teacher created and those of his classmates. For teachers, it shows the details of the class and registered students. In addition, he is able to create posts and see them.

#### Create Class:

This is the class page. It shows a create class form that the teacher can fill in with inputs and click on the create button to create a class.

#### view reviews:

This is the review page. It shows the reviews of registered students for a specific class.

#### Contact us:

This is the contact us page. It shows a contact form that the user can use to send a message to one of the teachers on the platform.

## 👍 Contact

Tasneem Ali - [LinkedIn](https://www.linkedin.com/in/tasneem-jameel-ali/) | tasneem.jameel9@gmail.com

Zahraa Alhawaj - [LinkedIn](www.linkedin.com/in/zahraa-alhawaj) | zahraa.mu2019@gmail.com

Ali Albanna - [LinkedIn]() | ali.al-banna@outlook.com

Project GitHub Link - [https://github.com/TasneemAlhelli/education-platform](https://github.com/TasneemAlhelli/education-platform)

## ✨ Acknowledgments

- [mailtrap](https://mailtrap.io/blog/smtp-send-email/#Send-emails-with-SMTP-in-Nodejs)
- [pqina](https://pqina.nl/blog/upload-image-with-nodejs/)
