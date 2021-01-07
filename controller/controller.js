const Chat = require('../index');
let mobileNumber = '';

let mainCtg_Inputs = ['1', '2', '3', '4'];

let student_ctg = ['1', '2', '3', '4'];
let student_sub_ctg1 = ['1', '2', '3', '4'];
let student_sub_ctg2 = ['1', '2', '3'];
let student_sub_ctg3 = ['1', '2', '3'];
let student_sub_ctg4 = ['1', '2', '3', '4', '5'];

let parent_ctg = ['1', '2', '3'];
let parent_sub_ctg1 = ['1', '2', '3'];
let parent_sub_ctg2 = ['1', '2', '3', '4'];
let parent_sub_ctg3 = ['1', '2', '3', '4', '5', '6'];

let administrator_sub_ctg1 = ['1', '2', '3', '4', '5'];

let teacher_ctg = ['1', '2', '3'];
let teacher_sub_ctg1 = ['1', '2', '3'];
let teacher_sub_ctg2 = ['1', '2', '3', '4', '5', '6', '7'];
let teacher_sub_ctg3 = ['1', '2', '3', '4'];

let teacher_subctg2_subctg1 = ['1', '2', '3', '4', '5', '6'];
let teacher_subctg2_subctg2 = ['1', '2', '3', '4', '5', '6', '7'];
let teacher_subctg2_subctg3 = ['1', '2', '3', '4', '5', '6', '7'];
let teacher_subctg2_subctg4 = ['1', '2', '3', '4', '5'];
let teacher_subctg2_subctg5 = ['1', '2', '3', '4', '5', '6', '7'];
let teacher_subctg2_subctg6 = ['1', '2', '3', '4'];
let teacher_subctg2_subctg7 = ['1', '2', '3', '4', '5'];


let unidentifiedTextResponse = "You are almost there! We could not understand your response. Please check your response and revert back based on the previous message and try again.";

let ctgTeacher = '{"ctgTeacher": ["to get how-to-guides for teachers & coaches📚", "for questions related to using Khan Academy teacher tools 🛠️", "to understand technology requirements needed to use Khan Academy 💻"]}';
let subCtgTeacher = '{"subCtgTeacher": {	"value_1":["to get weekly math lesson plans for classes 6th to 10th", "to know how can Khan Academy be used for distance learning during school closures", "to get started on Khan Academy"], "value_2":["for queries related to your Khan Academy account", "to understand how to create your class on Khan Academy.", "to know about your student`s accounts on Khan Academy.", "to learn about Khan Academy`s videos and exercises.", "to understand how to assign homework on Khan Academy.", "to learn how to check the progress of your students.", "for other issues where you need help."],"value_3":["to know if you can use Khan Academy without internet connection.","to know if you need to download the Khan Academy app.","to know the minimum internet speed required to use Khan Academy.","to know if you can use Khan Academy with any other apps or websites, like- Google Classroom, Google Meets, MS Teams, etc."]}}';
let subSubCtgTeacher = '{"subSubCtgTeacher": {"value_1_1": null,"value_2_1": ["to know how to create your account on Khan Academy.", "to know how to change your account settings.", "if you forgot your account password.", "if you mistakenly signed in as a student and want to change your role to teacher.", "if you are not able to see the Teacher dashboard in your profile.", "to know whether you need to create a new account if you are already using Khan Academy."],"value_2_2": ["to know how can you create a class on Khan Academy.", "to learn about the next steps once you have created a class on Khan Academy.", "to know about adding a new student to your class.", "to know how to add different subjects and grades to your class.", "to know how to remove students from your class.", "to know more about modifying your class settings, like- changing class names, changing courses, etc.", "if you have other issues."],"value_2_3": ["to know how can your students join your class on Khan Academy.", "to know how can you find list of student`s Khan Academy account details- usernames and passwords.", "to know how can you change the Khan Academy account password for your student(s)?", "to know how can you stop coaching your students on Khan Academy once they left the school/class.", "to learn how can you remove a few students from your Khan Academy class if you added them by mistake.", "if you are seeing more students added to your class than you expected.", "if you have other issues."],"value_2_4": ["to know about different types of content available on Khan Academy.", "to know about familiar, proficient, and mastery terms used in Khan Academy.","to learn how to plan your teaching sessions using Khan Academy`s content.", "to know about different languages in which you can use Khan Academy.", "if you have other issues."],"value_2_5": ["to know if you can create your own assignments on Khan Academy.","to learn how to assign Khan Academy exercises, videos and unit tests to your students.","to know how to assign homework to a few students.","to know how can you change the due date of the Khan Academy assignment.","to know how to delete a Khan Academy assignment that you have assigned to your students.","to know if you can give different assignments to different students.","to know how to check what Khan Academy assignments you have given to your students."],"value_2_6": ["to learn how can you see your student performance reports.","to learn how to read the scores table.","if your student`s scores are not getting reflected on the scores table.","to know how can you download students performance report?"],"value_2_7": ["for marketing & PR related queries.","to know about Khan Academy content in local/ regional languages.","to know how to give feedback on the content.","to learn how to report a technical issue on Khan Academy.","if you want to get more training on using Khan Academy."],"value_3_1": null}}';
let answersTeacher = '{"answersTeacher": {"value_1_1":["Here is the link to the lesson plan for Maths in English, Hinglish, and Hindi: https://bit.ly/34c3K8U","We offer free lessons in math, science and other subjects from kindergarten through the early years of college. Students can use our exercises, quizzes, and instructional videos to learn and master skills. They will get immediate feedback and encouragement. Click here to know more: https://bit.ly/347rdHZ","Here is a certification course that we have designed for you to get started on Khan Academy: https://bit.ly/3kLvPdM"],"value_2_1":["Go to www.khanacademy.org and sign-up if you are visiting for the first time. Choose your role as a teacher. If you have already used Khan Academy then login using the same username and password. You can use the same login credentials and switch roles between a teacher, student or parent. Go to your account settings to change your role, by clicking your name on top-right after logging in.","Once logged into your Khan Academy account, click your name at the top right. Go to the Settings tab. You would find all the options there. Click here to know more: bit.ly/3cExf6N","You can reset your password by clicking on reset password link .It will ask you to enter your email addesss. Once you enter your email address and click on Reset password, a unique URL will be sent to your inbox. By accessing that URL, you will be prompted to set a new password. Click here to know more: bit.ly/3cD6CPK","To change Learner account to teacher account, click your name on the top right corner and go to Settings. Scroll down to the roles section,select your role as a Learner and Teacher/Coach. Click Save changes.","If you have created your account as a teacher, you can go to your teacher dashboard by clicking your name on the top right and then selecting the Teacher Dashboard option. If you can`t see this option, this means that you have signed up as a student. You need to change your role by going to your account settings. Refer point 4 above. Click here to know more: bit.ly/2HxjVFT","If you are already using Khan Academy, you do not need to create a new account. You can use the same account details to login as a learner, teacher, and/or parent. Just change your role from your profile settings."],"value_2_2":["Login to your Khan Academy teacher account and go to your Teacher Dashboard. Click the Add new class button on extreme right . Click here to know more: https://bit.ly/2G5oFlT","Once you have created a class, you then need to add courses to your class and then add students. You can import the student list from your Google Classroom, share your unique class code with your students or create their accounts and share their credentials with them. Click here to know more: https://bit.ly/3kOif9i","Go to your Teacher Dashboard.To add a student/few students to your class, click on the name of the class and go to the student list. Click on Add new student on the top right of student table and add students. Click here to know more: https://bit.ly/3kOif9i","You can add various courses to your class at the time of class creation itself. If you want to add/delete courses from your class go to your class settings by clicking on your class name and then going to the Settings tab in the left column.","Go to your class and see the student list. This can be done by clicking on Students in the left column. Select the students that you would like to remove by checking on the boxes against their name. On top right of the table, you can see the Actions tab. Click on the Actions tab and then select Remove students from my class. Click here to know more: https://bit.ly/348obDB","Go to your Teacher Dashboard. Select the class you want to modify. Click on the Settings tab in the left column. From the Settings tab you can: change class names,delete classes, adjust course content, etc. Click here to know more: https://bit.ly/3cALSbk","Please write your query here and attach screenshots/video of the issue (if applicable). Our team will get back to you within 1 business day"],"value_2_3":["Students can join your class in two ways  - The teacher can create student accounts manually https://bit.ly/36hiw0w or can ask his/her students to create accounts on their own. If the students create their account themselves, they can join the class using class code.  https://bit.ly/36kzNpF","When you create student accounts infor the first time,  you`ll be prompted to download a CSV containing the username and password for each student account. This is a one-time occurrence for privacy reasons, so we strongly recommend that you don`t skip this step and download the file.https://bit.ly/2G90Vxd","Go to your Teacher Dashboard. Click on your name on the extreme top right ,then setting and check the teacher confirmation (I am a teacher).Go to the class the student is in. Once in the class, click on Students in the left navigation menu (found under Admin).Once you are in the class, go to the Student Roster page shown below. From there, click on the student for whom you wish to modify settings.When you click a student`s name, you will be able to see the option for Settings right next to Assignments. If the student is younger than 13 years old, you`ll be able to update their information (such as change their username, password, or birthdate).You can make the necessary changes to the student`s settings from this page directly.  Please be sure to click Save changes once you are done. Click here to know more:https://bit.ly/30jwJ9o","Go to your Teacher Dashboard . Select the class from which you want to stop coaching the student.Select the student you want to stop coaching by clicking the check box on the right-hand side of the list of students. Click on the down arrow to the right of the word Actions on the right side at the top of the student list.Select stop coaching from class. * Stop coaching deletes the student permanently from the teacher account.https://bit.ly/3kRru8I","Go to your Teacher Dashboard . Select the class from which you want to remove the student. Select the student you want to remove by clicking the check box on the right-hand side of the list of students. Click on the down arrow to the right of the word Actions on the right side at the top of the student list.Select Remove from class. Click here to know more: https://bit.ly/348obDB","This generally happens when a teacher creates accounts for their students and also shares the class code with them. Since you have created these accounts, these accounts are already part of your class but some of your students might create their accounts on their own and join your class using the class code shared by you. This creates duplicate accounts and hence you see more students than expected. Ask your students to login only using the username and password shared by you. To delete the extra students, select the inactive students, click on the Actions tab and click Remove from class.","Please write your query here and attach screenshots/video of the issue (if applicable). Our team will get back to you within 1 business day"],"value_2_4":["Khan Academy has videos, exericses, quizzes, unit tests and articles that help you learn and master all the skills needed for your course. Khan Academy`s content is created by expert teachers like you and ncorporates solid pedagogical principles, curriculum guidelines and a growth mindset. Click here to know more: https://youtu.be/n82MpRB9Xak", "These are the different mastery skill levels. Each skill is worth a total of 100 Mastery Points. As you practice skills and answer questions in quizzes, unit tests, and course challenges, your level for that skill will go up (or down, if you miss any questions in the course). Moving to Familiar will earn you 50 of the 100 points. Leveling up to Proficient will get you to 80 points. Become Mastered in a skill to collect the total 100 available Mastery Points. Click here to know more: https://bit.ly/2FXOd4t","You can use Khan Academy`s ready-to-use Math lesson plans to plan your sessions on Khan Academy. And remember there is not one right way to use Khan Academy. You can assign homework from Khan Academy once you have completed the topic in your class. You can also use Khan Acdemy`s unit test for quick periodic revision and assessments. Click here to know more: https://bit.ly/3j6gcx3","Khan Academy is avalible in multiple languages, including English, Hindi, Hinglish, Kannada, Gujarati, Punjabi, etc. Click here to know more: https://bit.ly/2Hxr7ln","Please write your query here and attach screenshots/video of the issue (if applicable). Our team will get back to you within 1 business day"],"value_2_5":["No, you cannot create your own assignments on Khan Academy. The content on Khan Academy has been created after thorough research and taking feedback from expert teachers like you. We study our user data and keep on improvising our content. Mail us at indialearns@khanacademy.org if you have suggestions on how can we make our content better.","Assignments allow teachers to select videos, articles, exercises, quizzes, unit tests, or mastery of a specific course for an entire class or specific students to work on.To create an assignment, select the content that you want the student(s) to work on from the Assign content page inside of the class using the checkboxes on the right, and click on Assign. Click here to know more: https://bit.ly/30dL2wi","After selecting the assignments you wish to assign to your students, you would click on the Assign button. There you get an option to assign the content to the entire class or to a few students. Select all the students that you want to assign and click on the Assign button. Click here to know more: https://bit.ly/30dL2wi","Go to your Teacher Dashboard and click on the class where you have given asssignments. Go to Manage under the Assignments tab. You would see all the given assignments. Click on the Actions tab and go to Edit to change the due date. Click here to know more: https://bit.ly/3jdrHmd","Go to your Teacherdashboard.Choose the Classes you would like to delete the assignment of.Select the Manage page under Assignments in the left side bar.Select the assignment you’d like to delete by clicking the checkbox.Click on Delete. Click here to know more: https://bit.ly/30c6jX2","Yes you can give different assignments to different students. Click here to know more: https://bit.ly/3jg9NzC","On your teacher dashboard, go to the Manage tab under assignments. You can see the list of all the assignments along with the due date and other details. You can also delete, modify and change the assignment due date from here."],"value_2_6":["Go to your Teacher Dashboard, click o the class where you have given asssignments.You can view an Assignment report for any student by clicking on Scores under Assignments in the left sidebar. If you want to see a single student`s performance on an individual assignment, click their score. Click here to know more: https://bit.ly/36eLn5x","Red color in the scores table means that the student needs to work more on the given skill. Orange means that the student has a basic understanding of the concept but needs more practice. And Green means the student is proficient in the skill. Click here to know more: https://bit.ly/2Gh8H7M","This might be because the account that your students are using to solve exercises on Khan Academy is not part of the class created by you.Your students might be using some other account to log into Khan Academy are are trying the exercise using that account. Ask them to log into Khan Acadmey only using the credentials shared by you or share your class code and ask them to join your class.","Go to the Settings tab of your class. In the settings tab you can download the student list along with their performance reports."],"value_2_7":["Reach out to us at indialearns@khanacademy.org with all the details.","Khan Academy is available in multiple languages. Click here to know more: https://bit.ly/2Hxr7ln. Mail us at indialearns@khanacademy.org with your detailed plan to volunteer for translating the content in any language.","While solving any exercise on Khan Academy, below every question, you have an option to Report a problem. Click on it and let us know your concern. Alternatively, you can also mail us at indialearns@khanacademy.org with your feedback/issue.","Visit https://support.khanacademy.org/hc/en-us/requests/new to report any technical issue.","Click here to know more: https://bit.ly/343QcfA"],"value_3_1":["You can download the Khan Academy app and save the videos in the app. Once the videos are saved, you can play them without internet connection. But to practice an exercise, quiz, or unit test on Khan Academy you need internet connectivity.","You can use Khan Academy on your phone/PC browser without downloading the app.Teacher tools are not available on the app, hence teachers are requested to access Khan Academy from their browser.","If students are focused mainly on exercises, the bandwidth required is closer to 150 kbps per user. Most Khan Academy videos require less bandwidth than live-action content, but we still suggest ~1.5 Mbps bandwidth per student or device playing standard-definition video. Click here to know more: https://bit.ly/3iaqUS2","If you have already created your class on Google Classroom, you can import the entire student list while adding students to your class on Khan Academy. If you are conducting online session with your students, you can assign remedial homework before the session and topic related homework after your session,on Khan Academy.Click here to know more https://bit.ly/3kXhpY8"]}}';

let ctgStudent = '{"ctgStudent": ["to get started on Khan Academy","for questions related to technical requirements of using Khan Academy","if you have questions related to your Khan Academy account.","for questions related to your Khan Academy assignments"]}';
let subCtgStudent = '{"subCtgStudent": {"value_1":["What do I need to get started on Khan Academy?","What is the right way to use Khan Academy for my studies?","How can I understand my progress on Khan Academy?","What are some of the rewards I can get on Khan Academy?"], "value_2": ["to know if you can use Khan Academy without internet connection.","to know if you need to download the Khan Academy app.","to know about the minimum internet speed required to use Khan Academy."], "value_3": ["to learn how to join your teacher`s class on Khan Academy.","to know how can you change your account settings.","to know how to use Khan Academy without being associated with a teacher account."], "value_4" : ["to know how to see the assignments assigned by your teacher.","to know what to do if the due date of the assignments given by your teacher has passed.","if you are not able to see the assignments assigned by your teacher.","to know how to see your progress and due date of your assignments.","to know how can you get help in case you get stuck while solving an exercise on Khan Academy."]}}';
let answersStudent = '{"answersStudent": { "value_1_1": ["You need a phone, desktop/PC or a tablet to access www.khanacademy.org. Create your account to track your progress. You don`t need a coach/teacher to get started. You can also join your teacher`s class through the unique class code (to be shared by the teacher) or the teacher can create your account and share the username and password with you. You can then use these credentials to log into Khan Academy.","Go to www.khanacademy.org and create your account. Choose your subjects and focus on specific topics. See what you already know through quizzes and unit tests. You Khan Acadmey for learning new things or for revising old concepts. Keep practicing, try the mastery challenge and also make a routine. Click to know more: http://bit.ly/get-started-students", "Once you have logged into Khan Academy and have tried a few exercises, go to the *Progress* tab on the bottom left. You will get a detailed table showing your performance. Click here to know more: https://bit.ly/36pGE1l", "To know all about the badges, avatars, and points collected by you on Khan Academy visit your student profile on Khan Academy. Click here to know more:https://bit.ly/3l2bG3n"], "value_2_1": ["You can download the Khan Academy app and save the videos in the app. Once the videos are saved, you can play them without internet connection. But to practice an exercise, quiz, or unit test on Khan Academy you need internet connectivity.","You can use Khan Academy on your phone/PC browser without downloading the app. The app would definitely give you a better experience but don`t worry if you are not able to download the app on your mobile. If you are using Khan Academy on your desktop/PC you can use it directly from your browser.","If students are focused mainly on exercises, the bandwidth required is closer to 150 kbps per user. Most Khan Academy videos require less bandwidth than live-action content, but we still suggest ~1.5 Mbps bandwidth per student or device playing standard-definition video. Click here to know more: https://bit.ly/3iaqUS2"], "value_3_1": ["There are two ways: \\n \\n 1. The teacher can create your account and join you in their class. They would then share the username and password with you. Use the same credentials to log into Khan Academy. \\n 2. You can create your account yourself and join your teacher`s class using the unique class code shared by them. https://bit.ly/3ihhZhw","Click your name on the top right and go to Settings. You can make then make changes to your profile, like changing password, nickname, username, etc. But if have logged into Khan Academy using the account created by your teacher, remember to take the consent from your teacher or parent before making any changes.","Yes, you can use Khan Academy independently. Just go to www.khanacademy.org and create your account. Choose your course and start leanring. Click here to know more: http://bit.ly/get-started-students"], "value_4_1": ["Once the teacher has assigned some homework to you on Khan Academy, you can see them under the *Assignment* tab on the left side of your screen. You can see the list of all the assignments assigned by the teacher along with the due date. Click on the *Start* button and move on! Once you have finished the exercise, you can see your score percentage adjacent to the exercise name. Try aiming for 100%.","You can still try the exercise and try to get 100%. Teachers will be able to see your best score before the due date. You can try the exercise as many times as you want.","2 reasons:\\n\\n 1. You might have logged in from an account different from what the teacher has shared with you. In this case since your account will not be part of the class created by the teacher, you might not be able to see the assignments given by your teacher.\\n 2. You are still not part of the class created by your teacher. Contact your teacher and ask them to add you to their class by sharing the unique class code. Go to *Teachers* section in your student dashboard and enter the unique class code.","You can quickly see your score and due date of any assignment just adjacent to it in the Assignments tab. Based on your score, you can keep trying to score 100%.","For any question you solve on Khan Academy, there is always *hint* available. You can click on *Watch a video or use a hint* below any question to get step-by-step solution to the problem."]}}';


let ctgParent = '{"ctgParent": ["to get started on Khan Academy","for questions related to technical requirements of using Khan Academy","if you have questions related to your Khan Academy account"]}';
let subCtgParent = '{"subCtgParent":{ "value_1":["to know how can you use Khan Academy as a parent.","to know how to support your child`s learning during school closure.","to know how to access Khan Academy kids."],"value_2":["to understand the technical requirements of using Khan Academy.","to know if you can use Khan Academy on mobile.","to know if you need internet connection to use Khan Academy.","to know if you can use Khan Academy without internet connection."],"value_3":["to learn about creating your account on Khan Academy.","to know how can you change your account settings.","if you forgot your account password.","to know how to change your role to parent if you mistakenly signed in as a student.","if you are not able to see the Parent dashboard in your profile.","to know if you need to create a new account on Khan Academy if you already have one."]}}';
let answersParent = '{"answersParent":{"value_1_1":["Go to www.khanacademy.org and sign-up as a parent. You can then add your children and assign content to them. You can also see their performance on your dashboard. Click here to know more: bit.ly/khan-parent-guide","We know it’s challenging to raise children, manage a household, and get work done and it’s particularly true when schools are closed. Click here to know more: bit.ly/3j8oYe4","Khan Academy Kids is a free, fun educational program that will inspire a lifetime of learning for young children. The educational experience includes thousands of activities for kids ages 2 - 7 that are aligned with national education standards. The curriculum includes reading and literacy, language, math, social-emotional development, executive function, physical development, and creative expression. Click here to know more: https://bit.ly/3ibwiUT"],"value_2_1":["You can use Khan Academy on a mobile, desktop/PC, or tablet with a decent internet connection. Just go to www.khanacademy.org on your phone or desktop browser and explore. You don`t even need to download the app. And its free for everyone!","Khan Academy has an official iOS app (supported on devices with iOS 12 and newer) and Android app. Click to know more: https://bit.ly/3kZmoHx","Yes, you require a decent internet connection to use Khan Academy.","If you will be without an Internet connection only temporarily, a good option would be downloading the videos on the Khan Academy app so that you can watch them while you`re offline. Click here to know more: https://bit.ly/3jbBnhh"],"value_3_1":["Go to www.khanacademy.org and sign-up if you are visiting for the first time. If you have already used Khan Academy before then login using the same username and password. You can use the same username and password and switch roles between a teacher, student or parent. Go to your account settings to change your role, by clicking your name on top-right after logging in.","Once logged in to your Khan Academy account.Click your name at the top right, which will open a menu.Click Settings. You would find all the options here. Click here to know more: bit.ly/3cExf6N","You can reset your password by clicking on reset password link .It will ask you to enter your email addesss. Once you enter your email address and click on Reset password, a unique URL will be sent to your inbox. By accessing that URL, you will be prompted to set a new password. Click here to know more: bit.ly/3cD6CPK","To change Learner/teacher account to Parent account, click on your name on the top right and go to *Settings*. Scroll down to *Roles* and tick the box next to the parent and save the changes.","If you have created your account as a parent, you can go to your parent dashboard by clicking your name on the top right and then selecting the Parent Dashboard option. If you can`t see this option, this means that you have signed up as a student or teacher. You need to change your role by going to your account settings. Refer point 4 above. Click here to know more: bit.ly/2HxjVFT","If you are already using Khan Academy, you do not need to create a new account. You can use the same account details to login as a learner, teacher, and/or parent. Just change your role from your profile settings."]}}';

let subCtgAdministrator = '{"subCtgAdministrator":["to know about the requirements of using Khan Academy in your school. Do you need to pay for it?","to understand why should you use Khan Academy?","to know Khan Academy can be used for which subjects and grades?","to know about the school systems who have used/ are currently using Khan Academy.","to know about using Khan Academy in your tuition center."]}';
let answersAdministrator = '{"answersAdministrator":["All of Khan Academy’s library of trusted, standards-aligned videos, articles, practice questions, and lessons are completely free for anyone who wants to use them. Click here to know more about the technology considerations: https://bit.ly/3iaqUS2 \\n You can ask your teachers to go through our Khan for Educators course to get started on Khan Academy: https://bit.ly/3kLvPdM","All of Khan Academy’s library of trusted, standards-aligned videos, articles, practice questions, and lessons are completely free for anyone who wants to use them. The content is also aligned as per the Indian curriculum and is availabe in multiple languages.","You can use Khan Academy from Grade 1 to 12 . You can go through the content on the top left side of Khan Academy webpage under the Courses tab. You can also use Khan Academy to learn Computer Programming, Economics, World History, and many other subjects.","Khan Academy is being used across different public and private sector schools in India, including Podar International Schools, Punjab and Chandigarh schools, JNVs, etc.","Yes, you can use Khan Academy for your tution centres. You can use Khan Academy teacher tools and create classes on Khan Academy, assign homework to your students and check their progress. Khan Academy`s content is entirely free and avoid charging any fees for Khan Academy`s usage."]}';

// let ctgLearnStorm = '{"ctgLearnStorm": ["to get started with LearnStorm.","for questions related to prizes and recognition","for LearnStorm related resources","for other LearnStorm FAQS"]}';
// let subCtgLearnStorm = '{"subCtgLearnStorm":{"value_1":["How LearnStorm works?","What is the duration of learnstorm?","How does the learnstorm tracker work?","Any tips for implementing learnstorm?"],		"value_2":["What are the different Levels of prizes this year?","When and how do I get notified if I win a Learnstorm Prize?","What does keep going! keep growing! grand prize recipient(1) win?","What do the top 10 finalists win?","Who is eligible to apply for the grand prize?","How does my school become eligible for the school grand prize?","If I am the only teacher from my school participating in learnstorm, can I still apply?","Are there prizes for signing-up/ enrollment?","When and how will i be notified if we win the grand prize?","How will my application be evaluated?"],		"value_3":["Learnstorm Webinars"],		"value_4":["What are the important dates and milestones for Learnstorm 2020?","Can I participate in learnstorm if my school starts after 1st Oct 2020?","Can I participate in learnstorm if I do not live in india?","Can I participate in learnstorm if I am not in grades 3–12?","How to participate as a student?","Can I participate in learnstorm if I am a homeschooling parent?","As a parent, how can I participate in learnstorm with my child?","As a principal or administrator, can I sign up all of my students for learnstorm?","As a school principal or administrator, how can I encourage all teachers to participate in learnstorm?","What if I have a question that isn`t answered here?"]}}';
// let subSubCtgLearnStorm = '{"subSubCtgLearnStorm": {"value_1_1": null,"value_2_1": null,"value_3_1":["Get Started with LearnStorm","LearnStorm Best Practices from a Teacher and Khan Academy Expert","LearnStorm - Ask Us Anything!"],"value_4_1": null}}';
// let answersLearnStorm = '{"answersLearnStorm":{"value_1_1":["Go to https://learnstormin.khanacademy.org/ and enroll in LearnStorm. Get started by creating a Khan Academy teacher account or signing into your existing one. Enroll from your teacher dashboard. Click here to know more: https://learnstormin.khanacademy.org/get-started","You can participate in LearnStorm from October 1st, 2020 till December 24th, 2020.","As your whole class completes assignments together, watch the LearnStorm tracker fill in. Be prepared for surprise celebration moments! One ring on the tracker requires the number of completed assignments to be 3 times the number of students in your class.","Setting a weekly or daily cadence always helps.If your course is Course Mastery enabled, we strongly recommend you make a Course Mastery goal for your students."],		"value_2_1":["Sign-up with 10+ students in your class to win the entry level vouchers worth Rs. 500 (First 1000 classrooms).Complete level 5 by November 15 to win Rs. 500 worth gift cards! (First 500 classrooms).Complete level 15 by November 30 to win Rs. 500 worth gift cards! (First 500 classrooms).After LearnStorm ends, 10 schools will be selected as Keep Going, Keep Growing Award winners and 1 school will be our Grand Winner!","If you qualify for LearnStorm prize, you will be notified via the EMAIL tied to your Khan Academy teacher account. Please ensure you have a valid email id linked to Khan Academy.","Keep Going, Keep Growing! The Grand Prize recipient class - the teacher and the students - will win national recognition through Social Media (Facebook, Website, Mentions) for school excellence in leadership, teamwork and collaboration and the LearnStorm India Grand Trophy. They will also receive tablets for the entire classroom (Max. 30 tabs for the class)!","The top 10 finalists will receive national recognition through Social Media (Facebook, Website, Mentions) for school excellence in leadership, teamwork and collaboration, a trophy for the school . The winning teacher will get a tablet for excellence in teamwork, motivating the students and collaboration.","After LearnStorm ends, any teacher/ class with  10 or more students and has unlocked at least level 6 will be eligible to enter for the grand prize.Please note, level is not the only criteria for winning the grand prize. Applications will be collected and received on a teacher or school basis. Schools where more than one teacher and classroom is participating can fill one form with details of all the classes.The application will be open in the first week of December. We will announce the grand prize application opening via email and also on the LearnStorm banner on your teacher dashboard.","To apply for the Keep Going, Keep Growing Prizes, your class should reach a minimum Level 6 in LearnStorm! If there are multiple classes that reach Level 6 or more, you can submit one collective application with details of all the classes.","Yes you may! We understand that other teachers from your school may not be able to participate due to certain reasons, however we`d love to hear your LearnStorm story!","Sign-up with 10+ students in your class to win the entry level vouchers worth Rs. 500 (First 1000 classrooms)","If you qualify for LearnStorm prize, you will be notified via the EMAIL tied to your Khan Academy teacher account. Please ensure you have a valid email id linked to Khan Academy.","Applications will be reviewed by the Khan Academy team and judged on a set of criteria including engagement in LearnStorm, school involvement and teamwork, creativity, and quality of application. Please keep in mind that as part of choosing the winners and finalists, we will not just be looking at how many levels your classes have achieved but how many assignments you have assigned and your students have completed."],		"value_3_1":["Join our webinars where we`ll cover how to implement LearnStorm, share best practices, and answer your LIVE questions! If you are not able to attend, no worries, just check out this page to watch and share the recordings anytime. Get Started with LearnStorm - Date: 10/9/2020 Time: 5:00 - 6:00 PM IST. Click here to know more: https://learnstormin.khanacademy.org/resources","Join our webinars where we`ll cover how to implement LearnStorm, share best practices, and answer your LIVE questions! If you are not able to attend, no worries, just check out this page to watch and share the recordings anytime.LearnStorm Best Practices from a Teacher and Khan Academy Expert - Date: 11/6/2020   Time: 5:00 - 6:00 PM IST Click here to know more: https://learnstormin.khanacademy.org/resources","Join our webinars where we`ll cover how to implement LearnStorm, share best practices, and answer your LIVE questions! If you are not able to attend, no worries, just check out this page to watch and share the recordings anytime.LearnStorm - Ask Us Anything! - Date: 12/11/2020 Time: 5:00 - 6:00 PM IST Click here to know more: https://learnstormin.khanacademy.org/resources"],		"value_4_1":["1 October, 2020 : 15 November 2020 , 30 November 2020","Yes, you can join LearnStorm anytime between 1st Oct and 24th Dec 2020. You will see the enrollment banner on your teacher dashboard after 1st Oct 2020.","At this time, LearnStorm is only available to classrooms in the United States, Brazil and India. We hope to expand the program to additional countries in future years.","Yes. Teachers and students outside of grades 3–12 may participate. However, the program is most appropriate for 3–12 grade classrooms.","Students complete the teacher’s assignments to unlock LearnStorm levels and earn special badges! Each assignment will help students develop new learning strategies, and learning confidence.","Yes! You can sign up for a teacher account on Khan and add your child as a student. You can assign content to your child, have him or her complete the assignment and then, check progress in front of him or her. We are sure you and your child will be excited by the progress tracker!","Encourage your child to work through LearnStorm’s assignments. You may learn alongside them to help motivate them.","No. LearnStorm is designed to be a teacher- and classroom-based campaign, and it works best if teachers sign up each of their classes for LearnStorm.","LearnStorm is available for all teachers and classes nationwide to participate individually, so encourage teachers to sign up on Khan Academy and enroll their own classes. Suggesting a little friendly competition never hurt!","Please write your query here and attach screenshots/video of the issue (if applicable). Our team will get back to you within 1 business day"]}}';


let welComeMessage = 'Hi, Welcome to Khan Academy support chat!\n\n*Type 1* if you are a teacher \n\n*Type 2* if you are a student \n\n*Type 3* if you are a parent\n\n*Type 4* if you are a school owner/administrator\n\n OR, *get started right away by typing your query* e.g - How to create teacher account on Khan Academy?';
let startagain_welComeMessage = '*Type 1* if you are a teacher \n\n*Type 2* if you are a student \n\n*Type 3* if you are a parent\n\n*Type 4* if you are a school owner/administrator\n\n OR, *get started right away by typing your query* e.g - How to create teacher account on Khan Academy?';
let backToMainMenu = '*Type 99* to go back to *Main Menu*';
let backToPreviousMenuMessage = "*Type 0* to go back to *Previous Menu*";
let satisfiedReview = "*Are You satisfied ?*\n\nType *Yes*";
let notSatisfiedReview = "Type *No*";
let incomprehensive = "Sorry, I tried my best but I am unable to comprehend your message. Please use English words and phrases. I would soon be available in Hindi and other regional languages to support you better. Give me some time to learn.";
let disatisfaction = "I am extremely sorry for your dissatisfaction. Please let us know how can we do better. Your genuine feedback will help us learn and make this experience better for thousands of teachers who are using Khan Academy.";
let botunavailable = "Sorry, I am on leave, need some time off. Please type your question and attach screenshots (if any) and we will get back to you within 1 working day.";
let teacher_technologyConsideration = "You can use Khan Academy on a mobile, desktop/PC, or tablet with a decent internet connection. Just go to www.khanacademy.org on your phone or desktop browser and explore. Downloading the app is not compulsary. And its free for everyone!";
let student_technologyConsideration = "You can use Khan Academy on a mobile, desktop/PC, or tablet with a decent internet connection. Just go to www.khanacademy.org on your phone or desktop browser and explore. Downloading the app is not compulsary. And its free for everyone!";
let last_thankYouMessage = 'I hope that I resolved your query 🤞Please visit www.khanacademy.org and keep learning.\n\n';
let thankYouMessage = 'I hope that I resolved your query 🤞Please visit www.khanacademy.org and keep learning. Give us your feedback and let us know how we did.\n\n*Type 1* to give feedback\n\n' + backToMainMenu;
let askQuery = '*Type 1* to write us a new query.\n\n*Type 2* to share your thoughts and feedback to write your query.';
let words = '{"words": ["account","accounts","password","passwords","forgot","change","retrieve","class","classes","student","students","assignments","assignment","mastery","report","reports","progress","transfer","transferred","teacher","teachers","school","schools","closures","closure","create","join","enroll","settings","setting","delete","remove","email","emailid","login","signup","dashboard","add","google","classroom","assign","how","edit","manage","past","find","content","due","date","username","usernames","move","facebook","resources","resource","help","experience","new","code","assistant","size","limit","roster","assigning","can\'t","cannot","learner","home","goal","performance","scores","score","progress","activity","error","mistake","question","questions","wrong","online","learning","remote","browsers","browser","technology","internet","sat","guide","energy","points","badges","avatars","languages","language","hindi","punjabi","kannada","gujarati","tamil","khan","academy","partner","partners","subjects","subject","cost","certificate","certificates","privacy","security","securties","contact","contacts","learnstorm","webinars","webinar","app","apps","kids","kid","missing","registered","register","duplicate","video","videos","stop","coaching","volunteer","event","press","started","start","childhood","access","sites","ncert","cbse","icse","curriculum","mapping","youtube"]}';
let relaventlinks = `{
  "account": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/202755530-How-can-I-create-my-teacher-account",
      "https://khanacademy.zendesk.com/hc/en-us/articles/202263014-How-do-I-delete-my-account",
      "https://khanacademy.zendesk.com/hc/en-us/articles/204707040-How-can-I-edit-my-account-settings",
      "https://khanacademy.zendesk.com/hc/en-us/articles/202487450-How-do-I-set-up-a-new-user-account",
      "https://khanacademy.zendesk.com/hc/en-us/articles/115002660452-How-do-I-manually-create-an-account-for-a-student",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030808291-How-do-I-stop-coaching-students-on-my-Teacher-dashboard",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030834891-How-do-I-remove-students-from-a-class",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030714512-How-can-I-adjust-a-student-s-settings-such-as-their-username-or-password",
      "https://khanacademy.zendesk.com/hc/en-us/articles/202262964-Where-is-the-verification-email-for-my-new-account",
      "https://khanacademy.zendesk.com/hc/en-us/articles/202487470-How-do-I-get-started-on-Khan-Academy"
    ],
    "short": [
      "https://bit.ly/38CTIRU",
      "https://bit.ly/3pmz5PU",
      "https://bit.ly/3koGWbS",
      "https://bit.ly/2UhOWkm",
      "https://bit.ly/36yb9Ak",
      "https://bit.ly/2GUyJ1z",
      "https://bit.ly/38zVIdJ",
      "https://bit.ly/3pk7TRL",
      "https://bit.ly/36rLGsh",
      "https://bit.ly/3eWmga3"
    ],
    "statements": [
      "Create your teacher account",
      "Delete your account",
      "Your account settings",
      "Set-up a new user account",
      "Create student accounts",
      "Delete students from your dashboard",
      "Remove students from a class",
      "Adjust student settings",
      "Where is the verification email for my new account?",
      "How do I get started on Khan Academy"
    ]
  },
  "passwordandchange": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/202323914-What-are-the-basic-password-requirements-for-Khan-Academy",
      "https://khanacademy.zendesk.com/hc/en-us/articles/202487480-How-do-I-reset-my-password"
    ],
    "short": [
      "https://bit.ly/2IvcGiH",
      "https://bit.ly/2InRPxU"
    ],
    "statements": [
      "What are the basic password requirements for Khan Academy",
      "How do I reset my password"
    ]
  },
  "forgotandpassword": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/203184800-How-can-I-change-my-students-passwords",
      "https://khanacademy.zendesk.com/hc/en-us/articles/202487480-How-do-I-reset-my-password",
      "https://khanacademy.zendesk.com/hc/en-us/articles/214695728-How-can-I-get-a-copy-of-my-students-usernames-and-passwords"
    ],
    "short": [
      "https://bit.ly/3nhuc8P",
      "https://bit.ly/2InRPxU",
      "https://bit.ly/3f4z9iF"
    ],
    "statements": [
      "Change students' passwords",
      "Reset password",
      "How can I get a copy of my students' usernames and passwords"
    ]
  },
  "usernameandpasswords": {
    "links": [
     "https://khanacademy.zendesk.com/hc/en-us/articles/203184800-How-can-I-change-my-students-passwords",
     "https://khanacademy.zendesk.com/hc/en-us/articles/202487480-How-do-I-reset-my-password",
     "https://khanacademy.zendesk.com/hc/en-us/articles/214695728-How-can-I-get-a-copy-of-my-students-usernames-and-passwords",
     "https://khanacademy.zendesk.com/hc/en-us/articles/202323914-What-are-the-basic-password-requirements-for-Khan-Academy",
     "https://khanacademy.zendesk.com/hc/en-us/articles/202323914-What-are-the-basic-password-requirements-for-Khan-Academy"
    ],
    "short": [
      "https://bit.ly/3nhuc8P",
      "https://bit.ly/2InRPxU",
      "https://bit.ly/3f4z9iF",
      "https://bit.ly/2IvcGiH",
      "https://bit.ly/35kZtSe"
    ],
    "statements": [
      "Change students' passwords",
      "Reset password",
      "How can I get a copy of my students' usernames and passwords",
      "What are the basic password requirements for Khan Academy",
      "What are the basic requirements for usernames"
    ]
  },
  "retrieveandpasswords": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/203184800-How-can-I-change-my-students-passwords",
      "https://khanacademy.zendesk.com/hc/en-us/articles/202487480-How-do-I-reset-my-password",
      "https://khanacademy.zendesk.com/hc/en-us/articles/214695728-How-can-I-get-a-copy-of-my-students-usernames-and-passwords"
    ],
    "short": [
      "https://bit.ly/3nhuc8P",
      "https://bit.ly/2InRPxU",
      "https://bit.ly/3f4z9iF"
    ],
    "statements": [
      "Change students' passwords",
      "Reset password",
      "How can I get a copy of my students' usernames and passwords"
    ]
  },
  "changeandusername": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/202262984-How-do-I-change-my-username"
    ],
    "short": [
      "https://bit.ly/2UiaxJu"
    ],
    "statements": [
      "Change username"
    ]
  },
  "password": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/203184800-How-can-I-change-my-students-passwords",
      "https://khanacademy.zendesk.com/hc/en-us/articles/202487480-How-do-I-reset-my-password",
      "https://khanacademy.zendesk.com/hc/en-us/articles/214695728-How-can-I-get-a-copy-of-my-students-usernames-and-passwords",
      "https://khanacademy.zendesk.com/hc/en-us/articles/202262984-How-do-I-change-my-username"
    ],
    "short": [
      "https://bit.ly/3nhuc8P",
      "https://bit.ly/2InRPxU",
      "https://bit.ly/3f4z9iF",
      "https://bit.ly/2UiaxJu"
    ],
    "statements": [
      "Change students' passwords",
      "Reset password",
      "How can I get a copy of my students' usernames and passwords",
      "Change username"
    ]
  },
  "class": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030826991-What-is-the-Teacher-Dashboard",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360031099511-What-can-I-do-from-the-Classes-page",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360031129271-How-do-I-add-additional-classes-to-my-Khan-Academy-teacher-account",
      "https://khanacademy.zendesk.com/hc/en-us/articles/202487620-How-do-I-delete-a-class",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030760852-How-do-I-import-my-Google-Classroom-roster-to-Khan-Academy"
    ],
    "short": [
      "https://bit.ly/3popwji",
      "https://bit.ly/3nmiTvZ",
      "https://bit.ly/3lD9Czz",
      "https://bit.ly/35mUkJi",
      "https://bit.ly/32DmVbu"
    ],
    "statements": [
      "What is the Teacher Dashboard",
      "What can I do from the Classes page",
      "How do I add a class to my Khan Academy teacher account",
      "How do I delete a class",
      "Import Google Classroom roster to Khan Academy"
    ]
  },
  "student": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/360031103051-How-do-I-add-new-students-to-a-class-in-my-Teacher-Dashboard",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030762612-How-do-I-add-existing-students-to-a-class-in-my-Teacher-Dashboard",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360031102971-How-do-I-manage-my-student-roster",
      "https://khanacademy.zendesk.com/hc/en-us/articles/115002660452-How-do-I-manually-create-an-account-for-a-student",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030834891-How-do-I-remove-students-from-a-class",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030808291-How-do-I-stop-coaching-students-on-my-Teacher-dashboard",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030494852-What-can-I-do-from-the-Students-page",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360031055631-How-do-my-students-get-started-on-Khan-Academy",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030494452-How-do-I-rename-students-on-my-class-roster"
    ],
    "short": [
      "https://bit.ly/3lreh7x",
      "https://bit.ly/3kru1pH",
      "https://bit.ly/2ItqQ3t",
      "https://bit.ly/2Iys0dT",
      "https://bit.ly/3eWJs87",
      "https://bit.ly/3eQAx8n",
      "https://bit.ly/32DmWMI",
      "https://bit.ly/3lrNvvx",
      "https://bit.ly/36pvFmK"
    ],
    "statements": [
      "Add new students to a class",
      "Add existing students' to a different class",
      "Manage student roster",
      "Create student accounts",
      "Remove students from a class",
      "Delete students from your dashboard",
      "What can I do from the Students page",
      "How do my students get started on Khan Academy",
      "Rename student's on class roster"
    ]
  },
  "editandassignment": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/360031121631-How-do-I-edit-copy-and-delete-assignments",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360034860511-What-can-I-do-when-I-get-an-error-while-assigning-content-or-editing-my-assignments"
    ],
    "short": [
      "https://bit.ly/36mXH24",
      "https://bit.ly/2Ui7f94"
    ],
    "statements": [
      "Edit, copy and delete assignments",
      "What can I do when I get an error while assigning content or editing my assignments"
    ]
  },
"manageandassignment": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/360031102431-How-do-I-manage-assignments"
    ],
    "short": [
      "https://bit.ly/35oPM5d"
    ],
    "statements": [
      "Manage assignments"
    ]
  },
 "pastandassignment": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030055471-How-do-assignments-appear-to-students"
    ],
    "short": [
      "https://bit.ly/3pgrbYa"
    ],
    "statements": [
      "How do assignments appear to students"
    ]
  },
"studentandassignment": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030055471-How-do-assignments-appear-to-students",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360041478492-My-students-joined-my-class-but-they-can-t-see-it-or-any-of-my-assignments-How-do-I-help-them"
    ],
    "short": [
      "https://bit.ly/3pgrbYa",
      "https://bit.ly/3eTybFD"
    ],
    "statements": [
      "How do assignments appear to students",
      "Students joined my class but they can't see my assignments"
    ]
  },
 "seeviewandassignment": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030055471-How-do-assignments-appear-to-students"
    ],
    "short": [
      "https://bit.ly/3pgrbYa"
    ],
    "statements": [
      "How do assignments appear to students"
    ]
  },
 "cannotseeandassignment": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/360041478492-My-students-joined-my-class-but-they-can-t-see-it-or-any-of-my-assignments-How-do-I-help-them"
    ],
    "short": [
      "https://bit.ly/3eTybFD"
    ],
    "statements": [
      "Students joined my class but they can't see my assignments"
    ]
  },
 "assignmentandreport": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/360031122951-How-do-I-use-the-Assignment-Scores-report",
      "https://khanacademy.zendesk.com/hc/en-us/articles/115000780012-Guide-to-Assignment-coaching-reports",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360012119392-How-do-I-use-the-Live-Assignment-Report",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030704892-How-do-I-use-my-Individual-Student-report",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030704352-How-do-I-use-my-Class-Overview-report"
    ],
    "short": [
      "https://bit.ly/38y0UyN",
      "https://bit.ly/36AqD7c",
      "https://bit.ly/3pmVxIz",
      "https://bit.ly/3lrlGU6",
      "https://bit.ly/35oRXG7"
    ],
    "statements": [
      "My students joined my class but they can t see it or any of my assignments How do I help them",
      "How do I delete an assignment",
      "How do assignments appear to students",
      "My students joined my class but they can t see it or any of my assignments How do I help them",
      "How do I use the Assignment Scores report"
    ]
  },
  "assignment": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/115000772311-How-do-I-create-assignments",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360031102431-How-do-I-manage-assignments",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360031121631-How-do-I-edit-copy-and-delete-assignments",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030055471-How-do-assignments-appear-to-students",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360041478492-My-students-joined-my-class-but-they-can-t-see-it-or-any-of-my-assignments-How-do-I-help-them",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360034860511-What-can-I-do-when-I-get-an-error-while-assigning-content-or-editing-my-assignments",
      "https://khanacademy.zendesk.com/hc/en-us/articles/115000780012-Guide-to-Assignment-coaching-reports",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360041477272-How-can-I-view-my-students-Khan-Academy-experience"
    ],
    "short": [
      "https://bit.ly/3poyu08",
      "https://bit.ly/35oPM5d",
      "https://bit.ly/36mXH24",
      "https://bit.ly/3pgrbYa",
      "https://bit.ly/3eTybFD",
      "https://bit.ly/2Ui7f94",
      "https://bit.ly/2UmiiOw",
      "https://bit.ly/2JUfypC"
    ],
    "statements": [
      "Create an assignment",
      "Manage assignments",
      "Edit, copy and delete assignments",
      "How do assignments appear to students",
      "Students joined my class but they can't see my assignments",
      "What can I do when I get an error while assigning content or editing my assignments",
      "Guide to Assignment coaching reports",
      "How can I view my students Khan Academy experience"
    ]
  },
  "mastery": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030753412-Why-Mastery-Learning-by-Sal-Khan",
      "https://khanacademy.zendesk.com/hc/en-us/articles/115002552631--Beta-What-are-Course-and-Unit-Mastery",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360037127892-What-are-Mastery-Challenges-in-Course-Mastery",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360007253831-What-is-self-paced-Mastery",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360014675332-Which-courses-have-mastery-enabled",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360037494231-What-are-Mastery-Challenges"
    ],
    "short": [
      "https://bit.ly/2UnsIgZ",
      "https://bit.ly/36tnfLh",
      "https://bit.ly/2GUH4lL",
      "https://bit.ly/3lC4z1W",
      "https://bit.ly/3njlfMh",
      "https://bit.ly/2IvMuUU"
    ],
    "statements": [
      "Why Mastery Learning",
      "What is Course Mastery & Unit Mastery",
      "What are Mastery Challenges in Course Mastery",
      "What is self paced Mastery",
      "Which courses have mastery enabled",
      "What are Mastery Challenges"
    ]
  },
  "masteryandchallenge": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/203605660-Why-do-Mastery-Challenges-sometimes-contain-skills-I-ve-already-mastered",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360037127892-What-are-Mastery-Challenges-in-Course-Mastery",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360037494231-What-are-Mastery-Challenges"
    ],
    "short": [
      "https://bit.ly/2ItDBvi",
      "https://bit.ly/2Iy41Mi",
      "https://bit.ly/2IvMuUU"
    ],
    "statements": [
      "Why do Mastery Challenges sometimes contain skills I ve already mastered",
      "What are Mastery Challenges in Course Mastery",
      "What are Mastery Challenges"
    ]
  },
  "report": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/115000780012-Guide-to-Assignment-coaching-reports",
      "https://khanacademy.zendesk.com/hc/en-us/articles/115001118292-Can-I-get-data-reports-progress-reports-for-my-school",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360031122631-How-do-I-use-the-Course-Mastery-Progress-Report",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360012119392-How-do-I-use-the-Live-Assignment-Report",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360031052391-How-do-I-use-my-Individual-Student-and-Activity-Overview-reports",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360031047451-How-do-I-use-my-Activity-Overview-report",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030704892-How-do-I-use-my-Individual-Student-report",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030704352-How-do-I-use-my-Class-Overview-report",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360031122951-How-do-I-use-the-Assignment-Scores-report",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360031129891-How-do-I-view-my-students-performance-and-progress",
      "https://khanacademy.zendesk.com/hc/en-us/articles/202323964-Why-can-t-I-see-my-students-progress"
    ],
    "short": [
      "https://bit.ly/35ou2GD",
      "https://bit.ly/2GTarow",
      "https://bit.ly/3eTcsxz",
      "https://bit.ly/3eZ1yq7",
      "https://bit.ly/35mkCva",
      "https://bit.ly/36t78gL",
      "https://bit.ly/3pmzIcd",
      "https://bit.ly/38Fl5uz",
      "https://bit.ly/2JR0uZR",
      "https://bit.ly/3nhLpyT",
      "https://bit.ly/3ktlgeK"
    ],
    "statements": [
      "Guide to Assignment coaching reports",
      "Can I get data reports progress reports for my school",
      "How do I use the Course Mastery Progress Report",
      "How do I use the Live Assignment Report",
      "How do I use my Individual Student and Activity Overview reports",
      "How do I use my Activity Overview report",
      "How do I use my Individual Student report",
      "How do I use my Class Overview report",
      "How do I use the Assignment Scores report",
      "How do I view my students performance and progress",
      "Why can't I see my students progress"
    ]
  },
  "cannotseereport": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/202323964-Why-can-t-I-see-my-students-progress"
    ],
    "short": [
      "https://bit.ly/3kqwPDB"
    ],
    "statements": [
      "Why can t I see my students progress"
    ]
  },
  "myandreport": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/115000780012-Guide-to-Assignment-coaching-reports",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360012119392-How-do-I-use-the-Live-Assignment-Report",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030704352-How-do-I-use-my-Class-Overview-report",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030704892-How-do-I-use-my-Individual-Student-report",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360031122951-How-do-I-use-the-Assignment-Scores-report"
    ],
    "short": [
      "https://bit.ly/36xOWTf",
      "https://bit.ly/2Izq1GA",
      "https://bit.ly/38CXECi",
      "https://bit.ly/3lrmmJ9",
      "https://bit.ly/3kq7Xfc"
    ],
    "statements": [
      "Guide to Assignment coaching reports",
      "How do I use the live Assignment report?",
      "How do I use Class Overview report?",
      "How do I use Individual Student report?",
      "How do I use the Assignments report?"
    ]
  },
  "teacherandreport": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/115000780012-Guide-to-Assignment-coaching-reports",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360012119392-How-do-I-use-the-Live-Assignment-Report",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360031122631-How-do-I-use-the-Course-Mastery-Progress-Report",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360031047451-How-do-I-use-my-Activity-Overview-report",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030704352-How-do-I-use-my-Class-Overview-report",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030704892-How-do-I-use-my-Individual-Student-report",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360031129891-How-do-I-view-my-students-performance-and-progress",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360031052391-How-do-I-use-my-Individual-Student-and-Activity-Overview-reports",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360028233571-What-do-First-and-Last-Attempts-mean-in-the-Exercise-Report",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360020924871-What-counts-as-an-Attempt-on-Khan-Academy"
    ],
    "short": [
      "https://bit.ly/36xOWTf",
      "https://bit.ly/2Izq1GA",
      "https://bit.ly/3ncMjN2",
      "https://bit.ly/3kq7o54",
      "https://bit.ly/38CXECi",
      "https://bit.ly/3lrmmJ9",
      "https://bit.ly/3eTjcvm",
      "https://bit.ly/35mkCva",
      "https://bit.ly/3nj89i5",
      "https://bit.ly/2GZRrVC"
    ],
    "statements": [
      "Guide to Assignment coaching reports",
      "How do I use the live Assignment report?",
      "How do I use the Course Mastery Progress report?",
      "How do I use my Activity Overview report?",
      "How do I use Class Overview report?",
      "How do I use Individual Student report?",
      "How do I view my students' performance and progress?",
      "How do I use my Individual Student and Activity Overview reports",
      "What do First and Last Attempts mean in the Exercise Report",
      "What counts as an Attempt on Khan Academy"
    ]
  },
  "classandreport": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/115000780012-Guide-to-Assignment-coaching-reports",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360012119392-How-do-I-use-the-Live-Assignment-Report",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030704352-How-do-I-use-my-Class-Overview-report",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030704892-How-do-I-use-my-Individual-Student-report",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360031122951-How-do-I-use-the-Assignment-Scores-report"
    ],
    "short": [
      "https://bit.ly/36xOWTf",
      "https://bit.ly/2Izq1GA",
      "https://bit.ly/3ncMjN2",
      "https://bit.ly/3lrmmJ9",
      "https://bit.ly/3kq7Xfc"
    ],
    "statements": [
      "Guide to Assignment coaching reports",
      "How do I use the live Assignment report?",
      "How do I use the Course Mastery Progress report?",
      "How do I use Individual Student report?",
      "How do I use the Assignments report?"
    ]
  },
  "progress": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/360031122631-How-do-I-use-the-Course-Mastery-Progress-Report",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360031123551-How-can-I-monitor-Mastery-progress",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360031129891-How-do-I-view-my-students-performance-and-progress",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360032987591-How-can-I-understand-my-progress-in-Khan-Academy",
      "https://khanacademy.zendesk.com/hc/en-us/articles/202323964-Why-can-t-I-see-my-students-progress"
    ],
    "short": [
      "https://bit.ly/3lvPbEE",
      "https://bit.ly/2GUyX8N",
      "https://bit.ly/3lqpN2Z",
      "https://bit.ly/3eU9CZq",
      "https://bit.ly/32EJHQh"
    ],
    "statements": [
      "How do I use the Course Mastery Progress Report",
      "How can I monitor Mastery progress",
      "How do I view my students performance and progress",
      "How can I understand my progress in Khan Academy",
      "Why can t I see my students progress"
    ]
  },
  "transfer": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/203610350-Can-a-user-have-multiple-coaches-Is-there-a-way-to-add-a-co-teacher",
      "https://khanacademy.zendesk.com/hc/en-us/articles/202487490-Can-I-transfer-accounts-from-one-email-address-to-another-or-combine-accounts",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030561952-How-do-I-add-a-teacher-for-myself",
      "https://khanacademy.zendesk.com/hc/en-us/articles/203610350-Can-a-user-have-multiple-coaches-Is-there-a-way-to-add-a-co-teacher",
      "https://khanacademy.zendesk.com/hc/en-us/community/posts/360050577532-transferring-a-student-s-account-to-a-new-teacher"
    ],
    "short": [
      "https://bit.ly/3eZXOEY",
      "https://bit.ly/2IsK89q",
      "https://bit.ly/3kojETu",
      "https://bit.ly/2GSsKds",
      "https://bit.ly/3niK62Y"
    ],
    "statements": [
      "How to transfer a class to another teacher?",
      "Transfer accounts from one email address to another or combine accounts",
      "How do I add a teacher for myself",
      "Can a user have multiple coaches Is there a way to add a co teacher",
      "transferring a student s account to a new teacher"
    ]
  },
  "teacher": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/202755530-How-can-I-create-my-teacher-account",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030826991-What-is-the-Teacher-Dashboard",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360031129271-How-do-I-add-additional-classes-to-my-Khan-Academy-teacher-account",
      "https://khanacademy.zendesk.com/hc/en-us/articles/202487620-How-do-I-delete-a-class",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360031103051-How-do-I-add-new-students-to-a-class-in-my-Teacher-Dashboard",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030808291-How-do-I-stop-coaching-students-on-my-Teacher-dashboard",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360031102971-How-do-I-manage-my-student-roster",
      "https://khanacademy.zendesk.com/hc/en-us/articles/115000772311-How-do-I-create-assignments",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360031102431-How-do-I-manage-assignments",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360031121631-How-do-I-edit-copy-and-delete-assignments",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360031101831-How-do-I-delete-an-assignment",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030782352-How-do-I-manage-my-students-Course-Mastery-goals",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030694212-How-do-I-set-and-view-Course-Mastery-Placements-Goals",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360031129891-How-do-I-view-my-students-performance-and-progress",
      "https://khanacademy.zendesk.com/hc/en-us/articles/203610350-Can-a-user-have-multiple-coaches-Is-there-a-way-to-add-a-co-teacher",
      "https://khanacademy.zendesk.com/hc/en-us/articles/202755530-How-can-I-create-my-teacher-account",
      "https://khanacademy.zendesk.com/hc/en-us/articles/202487450-How-do-I-set-up-a-new-user-account",
      "https://khanacademy.zendesk.com/hc/en-us/articles/202487470-How-do-I-get-started-on-Khan-Academy",
      "https://khanacademy.zendesk.com/hc/en-us/articles/202755530-How-can-I-create-my-teacher-account",
      "https://khanacademy.zendesk.com/hc/en-us/articles/202487450-How-do-I-set-up-a-new-user-account",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030826991-What-is-the-Teacher-Dashboard",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030808291-How-do-I-stop-coaching-students-on-my-Teacher-dashboard",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360031103051-How-do-I-add-new-students-to-a-class-in-my-Teacher-Dashboard",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030762612-How-do-I-add-existing-students-to-a-class-in-my-Teacher-Dashboard",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360031099511-What-can-I-do-from-the-Classes-page",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030494852-What-can-I-do-from-the-Students-page",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030470932-Where-can-I-find-teacher-resources",
      "https://khanacademy.zendesk.com/hc/en-us/articles/203043824-I-d-like-to-share-Khan-Academy-with-my-colleagues-or-school-what-materials-do-you-have-to-help",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030470932-Where-can-I-find-teacher-resources",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360040755952-How-can-Khan-Academy-be-used-in-India-for-remote-learning-during-school-closures",
      "https://khanacademy.zendesk.com/hc/en-us/articles/203043824-I-d-like-to-share-Khan-Academy-with-my-colleagues-or-school-what-materials-do-you-have-to-help",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030561952-How-do-I-add-a-teacher-for-myself",
      "https://khanacademy.zendesk.com/hc/en-us/articles/203610350-Can-a-user-have-multiple-coaches-Is-there-a-way-to-add-a-co-teacher",
      "https://khanacademy.zendesk.com/hc/en-us/community/posts/360050577532-transferring-a-student-s-account-to-a-new-teacher",
      "https://khanacademy.zendesk.com/hc/en-us/community/posts/360050577532-transferring-a-student-s-account-to-a-new-teacher",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030561952-How-do-I-add-a-teacher-for-myself",
      "https://khanacademy.zendesk.com/hc/en-us/articles/203610350-Can-a-user-have-multiple-coaches-Is-there-a-way-to-add-a-co-teacher",
      "https://khanacademy.zendesk.com/hc/en-us/community/posts/360050577532-transferring-a-student-s-account-to-a-new-teacher",
      "https://khanacademy.zendesk.com/hc/en-us/community/posts/115001332992-Adding-a-teachers-assistant",
      "https://khanacademy.zendesk.com/hc/en-us/community/posts/360058349471-Is-it-possible-to-add-a-second-teacher-to-an-existing-class",
      "https://khanacademy.zendesk.com/hc/en-us/articles/115000780012-Guide-to-Assignment-coaching-reports",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360012119392-How-do-I-use-the-Live-Assignment-Report",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360031122631-How-do-I-use-the-Course-Mastery-Progress-Report",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360031052391-How-do-I-use-my-Individual-Student-and-Activity-Overview-reports",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360031047451-How-do-I-use-my-Activity-Overview-report",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030704892-How-do-I-use-my-Individual-Student-report",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030704352-How-do-I-use-my-Class-Overview-report",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360031129891-How-do-I-view-my-students-performance-and-progress",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360028233571-What-do-First-and-Last-Attempts-mean-in-the-Exercise-Report",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360020924871-What-counts-as-an-Attempt-on-Khan-Academy",
      "https://khanacademy.zendesk.com/hc/en-us/articles/202755530-How-can-I-create-my-teacher-account",
      "https://khanacademy.zendesk.com/hc/en-us/articles/209891998-How-do-I-change-my-account-from-a-child-to-an-adult-or-teacher-account"
    ],
    "short": [
      "https://bit.ly/2UkVA9B",
      "https://bit.ly/2UicJRc",
      "https://bit.ly/2GTUyOG",
      "https://bit.ly/3koPQ9r",
      "https://bit.ly/35oMUp3",
      "https://bit.ly/2IsWBKb",
      "https://bit.ly/32DmYEt",
      "https://bit.ly/32CRRbP",
      "https://bit.ly/3eTFAEV",
      "https://bit.ly/3kppAf5",
      "https://bit.ly/3eTN2Qo",
      "https://bit.ly/32DA6sY",
      "https://bit.ly/3kqCABc",
      "https://bit.ly/3nigToO",
      "https://bit.ly/3loKPPm",
      "https://bit.ly/2GUSm9D",
      "https://bit.ly/3kmH3ER",
      "https://bit.ly/3f4ym1b",
      "https://bit.ly/32CVJd0",
      "https://bit.ly/3pjPCnE",
      "https://bit.ly/35q5L2W",
      "https://bit.ly/2K1nTrM",
      "https://bit.ly/2Itwcf6",
      "https://bit.ly/35tHKs1",
      "https://bit.ly/2IpSy13",
      "https://bit.ly/32ELEMK",
      "https://bit.ly/3ppUMOO",
      "https://bit.ly/3pxEJPk",
      "https://bit.ly/3ppUMOO",
      "https://bit.ly/38J5sSK",
      "https://bit.ly/3pxEJPk",
      "https://bit.ly/3kxZl6p",
      "https://bit.ly/32zLlm7",
      "https://bit.ly/3ktYLGp",
      "https://bit.ly/3ktYLGp",
      "https://bit.ly/3kxZl6p",
      "https://bit.ly/32zLlm7",
      "https://bit.ly/3ktYLGp",
      "https://bit.ly/3eQ3aT8",
      "https://bit.ly/2H0jKTS",
      "https://bit.ly/2IvUkhp",
      "https://bit.ly/3ppPSkX",
      "https://bit.ly/2UjtlIa",
      "https://bit.ly/32yNuyH",
      "https://bit.ly/2Unoc26",
      "https://bit.ly/2IveGaH",
      "https://bit.ly/2Ummpu4",
      "https://bit.ly/36tnJku",
      "https://bit.ly/38BcgBT",
      "https://bit.ly/3ndjRKY",
      "https://bit.ly/3nie1Z4",
      "https://bit.ly/2Iy4myB"
    ],
    "statements": [
      "Create your teacher account",
      "What is the Teacher Dashboard",
      "How do I add a class to my Khan Academy teacher account",
      "How do I delete a class",
      "Add new students to a class",
      "Delete students from your dashboard",
      "Manage student roster",
      "Create an assignment",
      "Manage assignments",
      "Edit, copy and delete assignments",
      "Delete an assignment",
      "How do I manage my students' Course Mastery goals",
      "How do I assign a mastery goal",
      "How do I view my students' performance and progress",
      "How to transfer a class to another teacher?",
      "How can I create my teacher account",
      "How do I set up a new user account",
      "How do I get started on Khan Academy",
      "How can I create my teacher account",
      "How do I set up a new user account",
      "What is the Teacher Dashboard",
      "How do I stop coaching students on my Teacher dashboard",
      "How do I add new students to a class in my Teacher Dashboard",
      "How do I add existing students to a class in my Teacher Dashboard",
      "What can I do from the Classes page",
      "What can I do from the Students page",
      "Where can I find teacher resources",
      "I d like to share Khan Academy with my colleagues or school what materials do you have to help",
      "Where can I find teacher resources",
      "How can Khan Academy be used in India for remote learning during school closures",
      "I d like to share Khan Academy with my colleagues or school what materials do you have to help",
      "How do I add a teacher for myself",
      "Can a user have multiple coaches Is there a way to add a co teacher",
      "transferring a student s account to a new teacher",
      "transferring a student s account to a new teacher",
      "How do I add a teacher for myself",
      "Can a user have multiple coaches Is there a way to add a co teacher",
      "transferring a student s account to a new teacher",
      "Adding a teachers assistant",
      "Is it possible to add a second teacher to an existing class",
      "Guide to Assignment coaching reports",
      "How do I use the Live Assignment Report",
      "How do I use the Course Mastery Progress Report",
      "How do I use my Individual Student and Activity Overview reports",
      "How do I use my Activity Overview report",
      "How do I use my Individual Student report",
      "How do I use my Class Overview report",
      "How do I view my students performance and progress",
      "What do First and Last Attempts mean in the Exercise Report",
      "What counts as an Attempt on Khan Academy",
      "How can I create my teacher account",
      "How do I change my account from a child to an adult or teacher account"
    ]
  },
  "changeandteacher": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030561952-How-do-I-add-a-teacher-for-myself",
      "https://khanacademy.zendesk.com/hc/en-us/articles/203610350-Can-a-user-have-multiple-coaches-Is-there-a-way-to-add-a-co-teacher",
      "https://khanacademy.zendesk.com/hc/en-us/community/posts/360050577532-transferring-a-student-s-account-to-a-new-teacher"
    ],
    "short": [
      "https://bit.ly/3kxZl6p",
      "https://bit.ly/32zLlm7",
      "https://bit.ly/3ktYLGp"
    ],
    "statements": [
      "How do I add a teacher for myself",
      "Can a user have multiple coaches Is there a way to add a co teacher",
      "transferring a student s account to a new teacher"
    ]
  },
  "schoolandclosure": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/360040762372-Khan-Academy-schedules-for-school-closures-in-India",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360042427152-Weekly-Math-learning-plans-for-classes-6th-10th-India-to-prepare-students-better-for-the-upcoming-school-year",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360040755952-How-can-Khan-Academy-be-used-in-India-for-remote-learning-during-school-closures",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360040418972-As-a-parent-how-can-I-use-Khan-Academy-to-support-my-child-s-learning-during-a-school-closure",
      "https://s3.amazonaws.com/KA-share/Translations/ParentsClosure_HI.pdf"
    ],
    "short": [
      "https://bit.ly/32DpCtT",
      "https://bit.ly/36scM2t",
      "https://bit.ly/38J5sSK",
      "https://bit.ly/38OJoXh",
      "https://bit.ly/38OJRZx"
    ],
    "statements": [
      "Khan Academy Schedules for School Closures in India",
      "Weekly Learning Plans for 6th-10th grade India to prepare students' better for the upcoming school year",
      "How can Khan Academy be used in India for remote learning during school closures",
      "How can I use Khan Academy to support my chil'd learning during school closures",
      "Translations/ParentsClosure_HI.pdf"
    ]
  },
  "school": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/360040762372-Khan-Academy-schedules-for-school-closures-in-India",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360042427152-Weekly-Math-learning-plans-for-classes-6th-10th-India-to-prepare-students-better-for-the-upcoming-school-year",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360040755952-How-can-Khan-Academy-be-used-in-India-for-remote-learning-during-school-closures",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360040418972-As-a-parent-how-can-I-use-Khan-Academy-to-support-my-child-s-learning-during-a-school-closure",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360040762372-Khan-Academy-schedules-for-school-closures-in-India",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360042427152-Weekly-Math-learning-plans-for-classes-6th-10th-India-to-prepare-students-better-for-the-upcoming-school-year",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360040755952-How-can-Khan-Academy-be-used-in-India-for-remote-learning-during-school-closures",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360040418972-As-a-parent-how-can-I-use-Khan-Academy-to-support-my-child-s-learning-during-a-school-closure",
      "https://s3.amazonaws.com/KA-share/Translations/ParentsClosure_HI.pdf"
    ],
    "short": [
      "https://bit.ly/32DpCtT",
      "https://bit.ly/36scM2t",
      "https://bit.ly/38J5sSK",
      "https://bit.ly/38OJoXh",
      "https://bit.ly/32DpCtT",
      "https://bit.ly/36scM2t",
      "https://bit.ly/38J5sSK",
      "https://bit.ly/38OJoXh",
      "https://bit.ly/38OJRZx"
    ],
    "statements": [
      "Khan Academy Schedules for School Closures in India",
      "Weekly Learning Plans for 6th-10th grade India to prepare students' better for the upcoming school year",
      "How can Khan Academy be used in India for remote learning during school closures",
      "How can I use Khan Academy to support my chil'd learning during school closures",
      "Khan Academy schedules for school closures in India",
      "Weekly Math learning plans for classes 6th 10th India to prepare students better for the upcoming school year",
      "How can Khan Academy be used in India for remote learning during school closures",
      "As a parent how can I use Khan Academy to support my child s learning during a school closure",
      "Translations/ParentsClosure_HI.pdf"
    ]
  },
  "create": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/115002660452-How-do-I-manually-create-an-account-for-a-student",
      "https://khanacademy.zendesk.com/hc/en-us/articles/202755530-How-can-I-create-my-teacher-account",
      "https://khanacademy.zendesk.com/hc/en-us/articles/216368447-What-are-the-basic-requirements-for-usernames",
      "https://khanacademy.zendesk.com/hc/en-us/articles/202487450-How-do-I-set-up-a-new-user-account",
      "https://khanacademy.zendesk.com/hc/en-us/articles/204451344-How-do-I-set-up-student-or-child-accounts",
      "https://khanacademy.zendesk.com/hc/en-us/articles/202487470-How-do-I-get-started-on-Khan-Academy",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360031129271-How-do-I-add-additional-classes-to-my-Khan-Academy-teacher-account",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360031099511-What-can-I-do-from-the-Classes-page",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030760852-How-do-I-import-my-Google-Classroom-roster-to-Khan-Academy",
      "https://khanacademy.zendesk.com/hc/en-us/articles/115000772311-How-do-I-create-assignments",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030055471-How-do-assignments-appear-to-students",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360031102431-How-do-I-manage-assignments"
    ],
    "short": [
      "https://bit.ly/3pmXuEZ",
      "https://bit.ly/3nie1Z4",
      "https://bit.ly/2UiYvzp",
      "https://bit.ly/38D0FSP",
      "https://bit.ly/2UkYsmT",
      "https://bit.ly/32C8ftj",
      "https://bit.ly/2IwQCnk",
      "https://bit.ly/2IpSy13",
      "https://bit.ly/3ngQHdX",
      "https://bit.ly/3pqOxuu",
      "https://bit.ly/35ptMY8",
      "https://bit.ly/35oJLpf"
    ],
    "statements": [
      "How do I manually create an account for a student",
      "How can I create my teacher account",
      "What are the basic requirements for usernames",
      "How do I set up a new user account",
      "How do I set up student or child accounts",
      "How do I get started on Khan Academy",
      "How do I add additional classes to my Khan Academy teacher account",
      "What can I do from the Classes page",
      "How do I import my Google Classroom roster to Khan Academy",
      "How do I create assignments",
      "How do assignments appear to students",
      "How do I manage assignments"
    ]
  },
  "createandassignment": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/115000772311-How-do-I-create-assignments",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030055471-How-do-assignments-appear-to-students",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360031102431-How-do-I-manage-assignments"
    ],
    "short": [
      "https://bit.ly/3pqOxuu",
      "https://bit.ly/35ptMY8",
      "https://bit.ly/35oJLpf"
    ],
    "statements": [
     
      "How do I create assignments",
      "How do assignments appear to students",
      "How do I manage assignments"
    ]
  },
  "createandclass": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/360031129271-How-do-I-add-additional-classes-to-my-Khan-Academy-teacher-account",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360031099511-What-can-I-do-from-the-Classes-page",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030760852-How-do-I-import-my-Google-Classroom-roster-to-Khan-Academy"
    ],
    "short": [
      "https://bit.ly/2IwQCnk",
      "https://bit.ly/2IpSy13",
      "https://bit.ly/3ngQHdX"
    ],
    "statements": [
      "How do I add additional classes to my Khan Academy teacher account",
      "What can I do from the Classes page",
      "How do I import my Google Classroom roster to Khan Academy"
    ]
  },
  "createandaccount": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/115002660452-How-do-I-manually-create-an-account-for-a-student",
      "https://khanacademy.zendesk.com/hc/en-us/articles/202755530-How-can-I-create-my-teacher-account",
      "https://khanacademy.zendesk.com/hc/en-us/articles/216368447-What-are-the-basic-requirements-for-usernames",
      "https://khanacademy.zendesk.com/hc/en-us/articles/202487450-How-do-I-set-up-a-new-user-account",
      "https://khanacademy.zendesk.com/hc/en-us/articles/204451344-How-do-I-set-up-student-or-child-accounts",
      "https://khanacademy.zendesk.com/hc/en-us/articles/202487470-How-do-I-get-started-on-Khan-Academy"
    ],
    "short": [
      "https://bit.ly/3pmXuEZ",
      "https://bit.ly/3nie1Z4",
      "https://bit.ly/2UiYvzp",
      "https://bit.ly/38D0FSP",
      "https://bit.ly/2UkYsmT",
      "https://bit.ly/32C8ftj"
    ],
    "statements": [
      "How do I manually create an account for a student",
      "How can I create my teacher account",
      "What are the basic requirements for usernames",
      "How do I set up a new user account",
      "How do I set up student or child accounts",
      "How do I get started on Khan Academy"
    ]
  },
  "openandaccount": {
    "links": [
		"https://khanacademy.zendesk.com/hc/en-us/articles/202755530-How-can-I-create-my-teacher-account",
        "https://khanacademy.zendesk.com/hc/en-us/articles/202487450-How-do-I-set-up-a-new-user-account",
        "https://khanacademy.zendesk.com/hc/en-us/articles/115002660452-How-do-I-manually-create-an-account-for-a-student",
        "https://khanacademy.zendesk.com/hc/en-us/articles/204451344-How-do-I-set-up-student-or-child-accounts"
    ],
    "short": [
     "https://bit.ly/38CTIRU",
     "https://bit.ly/2UhOWkm",
     "https://bit.ly/36yb9Ak",
     "https://bit.ly/35m0z06"
    ],
    "statements": [
      "Create your teacher account",
      "Set-up a new user account",
      "Create student accounts",
      "How do I set up student or child accounts"
    ]
  },
  "teacherandaccount": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/202755530-How-can-I-create-my-teacher-account",
      "https://khanacademy.zendesk.com/hc/en-us/articles/209891998-How-do-I-change-my-account-from-a-child-to-an-adult-or-teacher-account"
    ],
    "short": [
		"https://bit.ly/38CTIRU",
		"https://bit.ly/3eU1MPu"
    ],
    "statements": [
		"Create your teacher account",
		"How do I change my account from a child to an adult or teacher account"
    ]
  },
  "joinandteacher": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/202755530-How-can-I-create-my-teacher-account",
      "https://khanacademy.zendesk.com/hc/en-us/articles/202487450-How-do-I-set-up-a-new-user-account",
      "https://khanacademy.zendesk.com/hc/en-us/articles/202487470-How-do-I-get-started-on-Khan-Academy"
    ],
    "short": [
      "https://bit.ly/3nie1Z4",
      "https://bit.ly/38D0FSP",
      "https://bit.ly/32C8ftj"
    ],
    "statements": [
      "How can I create my teacher account",
      "How do I set up a new user account",
      "How do I get started on Khan Academy"
    ]
  },
  "joinanddifferentclass": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030561952-How-do-I-add-a-teacher-for-myself",
      "https://khanacademy.zendesk.com/hc/en-us/articles/203610350-Can-a-user-have-multiple-coaches-Is-there-a-way-to-add-a-co-teacher",
      "https://khanacademy.zendesk.com/hc/en-us/community/posts/360050577532-transferring-a-student-s-account-to-a-new-teacher"
    ],
    "short": [
      "https://bit.ly/3kxZl6p",
      "https://bit.ly/32zLlm7",
      "https://bit.ly/3ktYLGp"
    ],
    "statements": [
      "How do I add a teacher for myself",
      "Can a user have multiple coaches Is there a way to add a co teacher",
      "transferring a student s account to a new teacher"
    ]
  },
  "enrollandclass": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/202755530-How-can-I-create-my-teacher-account",
      "https://khanacademy.zendesk.com/hc/en-us/articles/202487450-How-do-I-set-up-a-new-user-account",
      "https://khanacademy.zendesk.com/hc/en-us/articles/202487470-How-do-I-get-started-on-Khan-Academy"
    ],
    "short": [
      "https://bit.ly/3nie1Z4",
      "https://bit.ly/38D0FSP",
      "https://bit.ly/32C8ftj"
    ],
    "statements": [
      "How can I create my teacher account",
      "How do I set up a new user account",
      "How do I get started on Khan Academy"
    ]
  },
  "enrollandteacher": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/202755530-How-can-I-create-my-teacher-account",
      "https://khanacademy.zendesk.com/hc/en-us/articles/202487450-How-do-I-set-up-a-new-user-account",
      "https://khanacademy.zendesk.com/hc/en-us/articles/202487470-How-do-I-get-started-on-Khan-Academy"
    ],
    "short": [
      "https://bit.ly/3nie1Z4",
      "https://bit.ly/38D0FSP",
      "https://bit.ly/32C8ftj"
    ],
    "statements": [
      "How can I create my teacher account",
      "How do I set up a new user account",
      "How do I get started on Khan Academy"
    ]
  },
  "accountandsetting": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/204707040-How-can-I-edit-my-account-settings",
      "https://khanacademy.zendesk.com/hc/en-us/articles/209891998-How-do-I-change-my-account-from-a-child-to-an-adult-or-teacher-account",
      "https://khanacademy.zendesk.com/hc/en-us/articles/203216800-How-do-I-change-my-homepage",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030714512-How-can-I-adjust-a-student-s-settings-such-as-their-username-or-password",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030562332-How-can-I-edit-my-profile"
    ],
    "short": [
      "https://bit.ly/38C1KdG",
      "https://bit.ly/2Iy4myB",
      "https://bit.ly/2IsUtlF",
      "https://bit.ly/3kj5Jy8",
      "https://bit.ly/2GUOyoR"
    ],
    "statements": [
      "How can I edit my account settings",
      "How do I change my account from a child to an adult or teacher account",
      "How do I change my homepage",
      "How can I adjust a student s settings such as their username or password",
      "How can I edit my profile"
    ]
  },
  "deleteandaccount": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/202263014-How-do-I-delete-my-account",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360034662972-How-do-I-delete-my-account"
    ],
    "short": [
      "https://bit.ly/3knoC32",
      "https://bit.ly/3eUvxzx"
    ],
    "statements": [
      "How do I delete my account",
      "How do I delete my account"
    ]
  },
  "studentandaccount": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/204451344-How-do-I-set-up-student-or-child-accounts",
      "https://khanacademy.zendesk.com/hc/en-us/articles/214695728-How-can-I-get-a-copy-of-my-students-usernames-and-passwords",
      "https://khanacademy.zendesk.com/hc/en-us/articles/115002660452-How-do-I-manually-create-an-account-for-a-student"
    ],
    "short": [
      "https://bit.ly/35m0z06",
      "https://bit.ly/35mcfjq",
      "https://bit.ly/35p4lWE"
    ],
    "statements": [
      "How do I set up student or child accounts",
      "How can I get a copy of my students usernames and passwords",
      "How do I manually create an account for a student"
    ]
  },
  "removeandstudents": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030834891-How-do-I-remove-students-from-a-class",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030808291-How-do-I-stop-coaching-students-on-my-Teacher-dashboard"
    ],
    "short": [
      "https://bit.ly/2Iu9eox",
      "https://bit.ly/3ngqpsr"
    ],
    "statements": [
      "How do I remove students from a class",
      "How do I stop coaching students on my Teacher dashboard"
    ]
  },
  "deleteandstudents": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030834891-How-do-I-remove-students-from-a-class",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030808291-How-do-I-stop-coaching-students-on-my-Teacher-dashboard"
    ],
    "short": [
      "https://bit.ly/2Iu9eox",
      "https://bit.ly/3ngqpsr"
    ],
    "statements": [
      "How do I remove students from a class",
      "How do I stop coaching students on my Teacher dashboard"
    ]
  },
  "deleteandclass": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/202487620-How-do-I-delete-a-class"
    ],
    "short": [
      "https://bit.ly/2GXNMYk"
    ],
    "statements": [
      "How do I delete a class"
    ]
  },
  "deleteandassignment": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/360031101831-How-do-I-delete-an-assignment"
    ],
    "short": [
      "https://bit.ly/38D3ROu"
    ],
    "statements": [
      "How do I delete an assignment"
    ]
  },
  "delete": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/202487620-How-do-I-delete-a-class",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030834891-How-do-I-remove-students-from-a-class",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030808291-How-do-I-stop-coaching-students-on-my-Teacher-dashboard",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360031101831-How-do-I-delete-an-assignment",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360031102431-How-do-I-manage-assignments"
    ],
    "short": [
      "https://bit.ly/2GXNMYk",
      "https://bit.ly/2Iu9eox",
      "https://bit.ly/3ngqpsr",
      "https://bit.ly/38D3ROu",
      "https://bit.ly/35oJLpf"
    ],
    "statements": [
      "How do I delete a class",
      "How do I remove students from a class",
      "How do I stop coaching students on my Teacher dashboard",
      "How do I delete an assignment",
      "How do I manage assignments"
    ]
  },
  "email": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/202487490-Can-I-transfer-accounts-from-one-email-address-to-another-or-combine-accounts",
      "https://khanacademy.zendesk.com/hc/en-us/articles/202487580-How-do-I-change-the-email-address-I-use-to-log-in-to-my-account",
      "https://khanacademy.zendesk.com/hc/en-us/articles/202323924-How-do-I-unsubscribe-from-Khan-Academy-emails",
      "https://khanacademy.zendesk.com/hc/en-us/articles/202262964-Where-is-the-verification-email-for-my-new-account",
      "https://khanacademy.zendesk.com/hc/en-us/articles/202959854-Why-haven-t-my-students-received-their-invitation-emails-after-I-invited-them-to-join-my-class",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360034356692-What-can-I-do-if-I-didn-t-receive-the-email-to-verify-my-Khan-Academy-account"
    ],
    "short": [
      "https://bit.ly/35pmbZC",
      "https://bit.ly/36tGEvl",
      "https://bit.ly/2IvdX94",
      "https://bit.ly/38DfDIS",
      "https://bit.ly/36vD0Bm",
      "https://bit.ly/3kqvkVY"
    ],
    "statements": [
      "Can I transfer accounts from one email address to another or combine accounts",
      "How do I change the email address I use to log in to my account",
      "How do I unsubscribe from Khan Academy emails",
      "Where is the verification email for my new account",
      "Why haven t my students received their invitation emails after I invited them to join my class",
      "What can I do if I didn t receive the email to verify my Khan Academy account"
    ]
  },
  "login": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/202487450-How-do-I-set-up-a-new-user-account"
    ],
    "short": [
      "https://bit.ly/2UrgNyt"
    ],
    "statements": [
      "How do I set up a new user account"
    ]
  },
  "teacheranddashboard": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030826991-What-is-the-Teacher-Dashboard",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030808291-How-do-I-stop-coaching-students-on-my-Teacher-dashboard",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360031103051-How-do-I-add-new-students-to-a-class-in-my-Teacher-Dashboard",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030762612-How-do-I-add-existing-students-to-a-class-in-my-Teacher-Dashboard",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360031099511-What-can-I-do-from-the-Classes-page",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030494852-What-can-I-do-from-the-Students-page"
    ],
    "short": [
      "https://bit.ly/3eTXTtS",
      "https://bit.ly/32D7znm",
      "https://bit.ly/2IvscLe",
      "https://bit.ly/2Uk2eNj",
      "https://bit.ly/36wo05Z",
      "https://bit.ly/2GZLube"
    ],
    "statements": [
      "What is the Teacher Dashboard",
      "How do I stop coaching students on my Teacher dashboard",
      "How do I add new students to a class in my Teacher Dashboard",
      "How do I add existing students to a class in my Teacher Dashboard",
      "What can I do from the Classes page",
      "What can I do from the Students page"
    ]
  },
  "studentanddashboard": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030055471-How-do-assignments-appear-to-students",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360031055631-How-do-my-students-get-started-on-Khan-Academy"
    ],
    "short": [
      "https://bit.ly/38xtHU5",
      "https://bit.ly/3px8YWC"
    ],
    "statements": [
      "How do assignments appear to students",
      "How do my students get started on Khan Academy"
    ]
  },
  "addandstudent": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/360031103051-How-do-I-add-new-students-to-a-class-in-my-Teacher-Dashboard",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030762612-How-do-I-add-existing-students-to-a-class-in-my-Teacher-Dashboard",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360031102971-How-do-I-manage-my-student-roster",
      "https://khanacademy.zendesk.com/hc/en-us/articles/115002660452-How-do-I-manually-create-an-account-for-a-student"
    ],
    "short": [
      "https://bit.ly/3eP3b9S",
      "https://bit.ly/35lk1tL",
      "https://bit.ly/35lk7BD",
      "https://bit.ly/3ksqx6e"
    ],
    "statements": [
      "How do I add new students to a class in my Teacher Dashboard",
      "How do I add existing students to a class in my Teacher Dashboard",
      "How do I manage my student roster",
      "How do I manually create an account for a student"
    ]
  },
  "addandclass": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/360031129271-How-do-I-add-additional-classes-to-my-Khan-Academy-teacher-account",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360031099511-What-can-I-do-from-the-Classes-page"
    ],
    "short": [
      "https://bit.ly/38ExsqK",
      "https://bit.ly/32F5Jm9"
    ],
    "statements": [
      "How do I add additional classes to my Khan Academy teacher account",
      "What can I do from the Classes page"
    ]
  },
  "addandteacher": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030561952-How-do-I-add-a-teacher-for-myself",
      "https://khanacademy.zendesk.com/hc/en-us/articles/203610350-Can-a-user-have-multiple-coaches-Is-there-a-way-to-add-a-co-teacher",
      "https://khanacademy.zendesk.com/hc/en-us/community/posts/360050577532-transferring-a-student-s-account-to-a-new-teacher"
    ],
    "short": [
      "https://bit.ly/3eQoYxQ",
      "https://bit.ly/3kkKOKV",
      "https://bit.ly/2IsAaF2"
    ],
    "statements": [
      "How do I add a teacher for myself",
      "Can a user have multiple coaches Is there a way to add a co teacher",
      "transferring a student s account to a new teacher"
    ]
  },
  "addandassistantteacher": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/community/posts/115001332992-Adding-a-teachers-assistant",
      "https://khanacademy.zendesk.com/hc/en-us/community/posts/360058349471-Is-it-possible-to-add-a-second-teacher-to-an-existing-class"
    ],
    "short": [
      "https://bit.ly/2GSiFx8",
      "https://bit.ly/36stz5z"
    ],
    "statements": [
      "Adding a teachers assistant",
      "Is it possible to add a second teacher to an existing class"
    ]
  },
  "add": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/360031103051-How-do-I-add-new-students-to-a-class-in-my-Teacher-Dashboard",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030762612-How-do-I-add-existing-students-to-a-class-in-my-Teacher-Dashboard",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360031102971-How-do-I-manage-my-student-roster",
      "https://khanacademy.zendesk.com/hc/en-us/articles/115002660452-How-do-I-manually-create-an-account-for-a-student",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360031129271-How-do-I-add-additional-classes-to-my-Khan-Academy-teacher-account",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360031099511-What-can-I-do-from-the-Classes-page",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030561952-How-do-I-add-a-teacher-for-myself",
      "https://khanacademy.zendesk.com/hc/en-us/articles/203610350-Can-a-user-have-multiple-coaches-Is-there-a-way-to-add-a-co-teacher",
      "https://khanacademy.zendesk.com/hc/en-us/community/posts/360050577532-transferring-a-student-s-account-to-a-new-teacher",
      "https://khanacademy.zendesk.com/hc/en-us/community/posts/115001332992-Adding-a-teachers-assistant",
      "https://khanacademy.zendesk.com/hc/en-us/community/posts/360058349471-Is-it-possible-to-add-a-second-teacher-to-an-existing-class"
    ],
    "short": [
      "https://bit.ly/3eP3b9S",
      "https://bit.ly/35lk1tL",
      "https://bit.ly/35lk7BD",
      "https://bit.ly/3ksqx6e",
      "https://bit.ly/38ExsqK",
      "https://bit.ly/32F5Jm9",
      "https://bit.ly/3eQoYxQ",
      "https://bit.ly/3kkKOKV",
      "https://bit.ly/2IsAaF2",
      "https://bit.ly/2GSiFx8",
      "https://bit.ly/36stz5z"
    ],
    "statements": [
      "How do I add new students to a class in my Teacher Dashboard",
      "How do I add existing students to a class in my Teacher Dashboard",
      "How do I manage my student roster",
      "How do I manually create an account for a student",
      "How do I add additional classes to my Khan Academy teacher account",
      "What can I do from the Classes page",
      "How do I add a teacher for myself",
      "Can a user have multiple coaches Is there a way to add a co teacher",
      "transferring a student s account to a new teacher",
      "Adding a teachers assistant",
      "Is it possible to add a second teacher to an existing class"
    ]
  },
  "google": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030760852-How-do-I-import-my-Google-Classroom-roster-to-Khan-Academy",
      "https://khanacademy.zendesk.com/hc/en-us/articles/115000170227-How-can-I-share-Khan-Academy-content-to-my-classes-on-Google-Classroom",
      "https://khanacademy.zendesk.com/hc/en-us/articles/203444450-Can-my-students-create-Khan-Academy-accounts-using-their-Google-accounts-if-we-use-Google-Apps-for-Education",
      "https://khanacademy.zendesk.com/hc/en-us/articles/115000170227-How-can-I-share-Khan-Academy-content-to-my-classes-on-Google-Classroom",
      "https://khanacademy.zendesk.com/hc/en-us/articles/115000170227-How-can-I-share-Khan-Academy-content-to-my-classes-on-Google-Classroom"
    ],
    "short": [
      "https://bit.ly/38zeCBh",
      "https://bit.ly/35oSsjb",
      "https://bit.ly/2UnddWl",
      "https://bit.ly/36suHpP",
      "https://bit.ly/32AfQbW"
    ],
    "statements": [
      "How do I import my Google Classroom roster to Khan Academy",
      "How can I share Khan Academy content to my classes on Google Classroom",
      "Can my students create Khan Academy accounts using their Google accounts if we use Google Apps for Education",
      "How can I share Khan Academy content to my classes on Google Classroom",
      "How can I share Khan Academy content to my classes on Google Classroom"
    ]
  },
  "whatandassign": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030707832-How-do-I-find-content-to-assign",
      "https://khanacademy.zendesk.com/hc/en-us/articles/115000797392-What-are-some-limits-around-assigning-content-to-students-in-different-locales-or-languages",
      "https://khanacademy.zendesk.com/hc/en-us/articles/115001118352-Does-anything-assigned-by-a-teacher-count-What-if-it-s-in-a-different-subject-or-grade",
      "https://khanacademy.zendesk.com/hc/en-us/articles/115000797392-What-are-some-limits-around-assigning-content-to-students-in-different-locales-or-languages"
    ],
    "short": [
      "https://bit.ly/3ktlkLw",
      "https://bit.ly/3pn47XS",
      "https://bit.ly/2Itpeak",
      "https://bit.ly/3eQJKxg"
    ],
    "statements": [
      "How do I find content to assign",
      "What are some limits around assigning content to students in different locales or languages",
      "Does anything assigned by a teacher count What if it s in a different subject or grade",
      "What are some limits around assigning content to students in different locales or languages"
    ]
  },
  "assign": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/360031054891-How-do-I-assign-content-from-more-than-one-subject-to-my-class",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030707832-How-do-I-find-content-to-assign",
      "https://khanacademy.zendesk.com/hc/en-us/articles/115000772311-How-do-I-create-assignments",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360031102431-How-do-I-manage-assignments",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030694212-How-do-I-set-and-view-Course-Mastery-Placements-Goals",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030707832-How-do-I-find-content-to-assign",
      "https://khanacademy.zendesk.com/hc/en-us/articles/115000797392-What-are-some-limits-around-assigning-content-to-students-in-different-locales-or-languages",
      "https://khanacademy.zendesk.com/hc/en-us/articles/115001118352-Does-anything-assigned-by-a-teacher-count-What-if-it-s-in-a-different-subject-or-grade",
      "https://khanacademy.zendesk.com/hc/en-us/articles/115000797392-What-are-some-limits-around-assigning-content-to-students-in-different-locales-or-languages"
    ],
    "short": [
      "https://bit.ly/2UrmgoZ",
      "https://bit.ly/36ovbgI",
      "https://bit.ly/2IzNNlt",
      "https://bit.ly/32BzUuv",
      "https://bit.ly/38BjO7R",
      "https://bit.ly/3ktlkLw",
      "https://bit.ly/3pn47XS",
      "https://bit.ly/2Itpeak",
      "https://bit.ly/3eQJKxg"
    ],
    "statements": [
      "How do I assign content from more than one subject to my class",
      "How do I find content to assign",
      "How do I create assignments",
      "How do I manage assignments",
      "How do I set and view Course Mastery Placements Goals",
      "How do I find content to assign",
      "What are some limits around assigning content to students in different locales or languages",
      "Does anything assigned by a teacher count What if it s in a different subject or grade",
      "What are some limits around assigning content to students in different locales or languages"
    ]
  },
  "howandassign": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/360031054891-How-do-I-assign-content-from-more-than-one-subject-to-my-class",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030707832-How-do-I-find-content-to-assign",
      "https://khanacademy.zendesk.com/hc/en-us/articles/115000772311-How-do-I-create-assignments",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360031102431-How-do-I-manage-assignments",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030694212-How-do-I-set-and-view-Course-Mastery-Placements-Goals"
    ],
    "short": [
      "https://bit.ly/3eUbbX9",
      "https://bit.ly/2IxKqff",
      "https://bit.ly/32CwAze",
      "https://bit.ly/3lqBDds",
      "https://bit.ly/2ItpPsA"
    ],
    "statements": [
      "How do I assign content from more than one subject to my class",
      "How do I find content to assign",
      "How do I create assignments",
      "How do I manage assignments",
      "How do I set and view Course Mastery Placements Goals"
    ]
  },
  "assignandstudent": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030695472-How-do-I-auto-assign-content-to-new-students",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360041478492-My-students-joined-my-class-but-they-can-t-see-it-or-any-of-my-assignments-How-do-I-help-them"
    ],
    "short": [
      "https://bit.ly/38zCAfJ",
      "https://bit.ly/36pwnQW"
    ],
    "statements": [
      "How do I auto assign content to new students",
      "My students joined my class but they can t see it or any of my assignments How do I help them"
    ]
  },
  "assignandmastery": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030694212-How-do-I-set-and-view-Course-Mastery-Placements-Goals",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030782352-How-do-I-manage-my-students-Course-Mastery-goals"
    ],
    "short": [
      "https://bit.ly/36wG7bZ",
      "https://bit.ly/2JWhOwx"
    ],
    "statements": [
      "How do I assign a mastery goal",
      "How do I manage my student's Course Mastery goals"
    ]
  },
  "edit": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/360031121631-How-do-I-edit-copy-and-delete-assignments",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360034860511-What-can-I-do-when-I-get-an-error-while-assigning-content-or-editing-my-assignments",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030782352-How-do-I-manage-my-students-Course-Mastery-goals"
    ],
    "short": [
      "https://bit.ly/3lpcOyD",
      "https://bit.ly/3pm5gPs",
      "https://bit.ly/3pptwQu"
    ],
    "statements": [
      "How do I edit copy and delete assignments",
      "What can I do when I get an error while assigning content or editing my assignments",
      "How do I manage my students Course Mastery goals"
    ]
  },
  "manage": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/360031102431-How-do-I-manage-assignments"
    ],
    "short": [
      "https://bit.ly/3eQCamt"
    ],
    "statements": [
      "How do I manage assignments"
    ]
  },
  "past": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030055471-How-do-assignments-appear-to-students"
    ],
    "short": [
      "https://bit.ly/38Ap6jW"
    ],
    "statements": [
      "How do assignments appear to students"
    ]
  },
  "findandcontent": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030707832-How-do-I-find-content-to-assign",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360031054891-How-do-I-assign-content-from-more-than-one-subject-to-my-class"
    ],
    "short": [
      "https://bit.ly/32DVBtF",
      "https://bit.ly/35mepQ4"
    ],
    "statements": [
      "How do I find content to assign",
      "How do I assign content from more than one subject to my class"
    ]
  },
  "errorandassigningandcontent": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/360034860511-What-can-I-do-when-I-get-an-error-while-assigning-content-or-editing-my-assignments"
    ],
    "short": [
      "https://bit.ly/35kXvkO"
    ],
    "statements": [
      "What can I do when I get an error while assigning content or editing my assignments"
    ]
  },
  "content": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/202487550-Are-there-knowledge-maps-or-practice-problems-for-subjects-other-than-math"
    ],
    "short": [
      "https://bit.ly/2UkBGvp"
    ],
    "statements": [
      "Are there knowledge maps or practice problems for subjects other than math"
    ]
  },
  "duedate": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/360031121631-How-do-I-edit-copy-and-delete-assignments"
    ],
    "short": [
      "https://bit.ly/3eP98Ug"
    ],
    "statements": [
      "How do I edit copy and delete assignments"
    ]
  },
  "username": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/202576990-How-can-I-find-my-username-or-any-of-my-students-usernames",
      "https://khanacademy.zendesk.com/hc/en-us/articles/202262984-How-do-I-change-my-username",
      "https://khanacademy.zendesk.com/hc/en-us/articles/214695728-How-can-I-get-a-copy-of-my-students-usernames-and-passwords",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030714512-How-can-I-adjust-a-student-s-settings-such-as-their-username-or-password",
      "https://khanacademy.zendesk.com/hc/en-us/articles/216368447-What-are-the-basic-requirements-for-usernames"
    ],
    "short": [
      "https://bit.ly/3eQHy8Y",
      "https://bit.ly/35mgBqM",
      "https://bit.ly/3kqgRt8",
      "https://bit.ly/3ksyuZ8",
      "https://bit.ly/35kZtSe"
    ],
    "statements": [
      "How can I find my username or any of my students usernames",
      "How do I change my username",
      "How can I get a copy of my students usernames and passwords",
      "How can I adjust a student s settings such as their username or password",
      "What are the basic requirements for usernames"
    ]
  },
  "moveandstudents": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/360031102971-How-do-I-manage-my-student-roster",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030762612-How-do-I-add-existing-students-to-a-class-in-my-Teacher-Dashboard",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030494852-What-can-I-do-from-the-Students-page",
      "https://khanacademy.zendesk.com/hc/en-us/articles/203610350-Can-a-user-have-multiple-coaches-Is-there-a-way-to-add-a-co-teacher"
    ],
    "short": [
      "https://bit.ly/3kpD3U3",
      "https://bit.ly/32UnM87",
      "https://bit.ly/3kqphRg",
      "https://bit.ly/2GT354n"
    ],
    "statements": [
      "How do I manage my student roster",
      "How do I add existing students to a class in my Teacher Dashboard",
      "What can I do from the Students page",
      "Can a user have multiple coaches Is there a way to add a co teacher"
    ]
  },
  "facebookandaccount": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/360002042532-How-can-I-disconnect-Facebook-from-my-Khan-Academy-account"
    ],
    "short": [
      "https://bit.ly/35oB5iF"
    ],
    "statements": [
      "How can I disconnect Facebook from my Khan Academy account"
    ]
  },
  "teacherandresources": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030470932-Where-can-I-find-teacher-resources",
      "https://khanacademy.zendesk.com/hc/en-us/articles/203043824-I-d-like-to-share-Khan-Academy-with-my-colleagues-or-school-what-materials-do-you-have-to-help"
    ],
    "short": [
      "https://bit.ly/3nbEjMm",
      "https://bit.ly/2JY7ZhH"
    ],
    "statements": [
      "Where can I find teacher resources",
      "I d like to share Khan Academy with my colleagues or school what materials do you have to help"
    ]
  },
  "teacherandhelp": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030470932-Where-can-I-find-teacher-resources",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360040755952-How-can-Khan-Academy-be-used-in-India-for-remote-learning-during-school-closures",
      "https://khanacademy.zendesk.com/hc/en-us/articles/203043824-I-d-like-to-share-Khan-Academy-with-my-colleagues-or-school-what-materials-do-you-have-to-help"
    ],
    "short": [
      "https://bit.ly/2UkjhPj",
      "https://bit.ly/3ktOqu5",
      "https://bit.ly/3nmmB8T"
    ],
    "statements": [
      "Where can I find teacher resources",
      "How can Khan Academy be used in India for remote learning during school closures",
      "I d like to share Khan Academy with my colleagues or school what materials do you have to help"
    ]
  },
  "studentsandexperience": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/360041477272-How-can-I-view-my-students-Khan-Academy-experience"
    ],
    "short": [
      "https://bit.ly/38BuRxZ"
    ],
    "statements": [
      "How can I view my students Khan Academy experience"
    ]
  },
  "studentsandnewteacher": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/community/posts/360050577532-transferring-a-student-s-account-to-a-new-teacher"
    ],
    "short": [
      "https://bit.ly/2UmN0qY"
    ],
    "statements": [
      "transferring a student s account to a new teacher"
    ]
  },
  "code": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030561952-How-do-I-add-a-teacher-for-myself",
      "https://khanacademy.zendesk.com/hc/en-us/community/posts/360062381091-Class-code",
      "https://khanacademy.zendesk.com/hc/en-us/community/posts/360050603192-Where-do-I-find-the-Class-code"
    ],
    "short": [
      "https://bit.ly/2IugYa6",
      "https://bit.ly/38BU0Za",
      "https://bit.ly/3eTuWhr"
    ],
    "statements": [
      "How do I add a teacher for myself",
      "Class code",
      "Where do I find the Class code"
    ]
  },
  "assistant": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/community/posts/115001332992-Adding-a-teachers-assistant",
      "https://khanacademy.zendesk.com/hc/en-us/community/posts/360058349471-Is-it-possible-to-add-a-second-teacher-to-an-existing-class"
    ],
    "short": [
      "https://bit.ly/2Im9nul",
      "https://bit.ly/36y2aiy"
    ],
    "statements": [
      "Adding a teachers assistant",
      "Is it possible to add a second teacher to an existing class"
    ]
  },
  "classandsize": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/115003227291-Why-can-t-I-coach-hundreds-of-students-Or-Why-doesn-t-my-roster-load"
    ],
    "short": [
      "https://bit.ly/32DrFhi"
    ],
    "statements": [
      "Why can t I coach hundreds of students Or Why doesn t my roster load"
    ]
  },
  "limitandstudent": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/115003227291-Why-can-t-I-coach-hundreds-of-students-Or-Why-doesn-t-my-roster-load",
      "https://khanacademy.zendesk.com/hc/en-us/articles/115000797392-What-are-some-limits-around-assigning-content-to-students-in-different-locales-or-languages"
    ],
    "short": [
      "https://bit.ly/3niRkUE",
      "https://bit.ly/3ni78qG"
    ],
    "statements": [
      "Why can t I coach hundreds of students Or Why doesn t my roster load",
      "What are some limits around assigning content to students in different locales or languages"
    ]
  },
  "studentandroster": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/360031102971-How-do-I-manage-my-student-roster",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030760852-How-do-I-import-my-Google-Classroom-roster-to-Khan-Academy",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030494452-How-do-I-rename-students-on-my-class-roster",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360031103051-How-do-I-add-new-students-to-a-class-in-my-Teacher-Dashboard",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030494852-What-can-I-do-from-the-Students-page",
      "https://khanacademy.zendesk.com/hc/en-us/articles/115003227291-Why-can-t-I-coach-hundreds-of-students-Or-Why-doesn-t-my-roster-load"
    ],
    "short": [
      "https://bit.ly/3eW6Qmq",
      "https://bit.ly/3korCMo",
      "https://bit.ly/2Uim6Av",
      "https://bit.ly/3eR05lA",
      "https://bit.ly/38BWmqY",
      "https://bit.ly/3ngIMNL"
    ],
    "statements": [
      "How do I manage my student roster",
      "How do I import my Google Classroom roster to Khan Academy",
      "How do I rename students on my class roster",
      "How do I add new students to a class in my Teacher Dashboard",
      "What can I do from the Students page",
      "Why can t I coach hundreds of students Or Why doesn t my roster load"
    ]
  },
  "assigning": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/360034860511-What-can-I-do-when-I-get-an-error-while-assigning-content-or-editing-my-assignments"
    ],
    "short": [
      "https://bit.ly/3ppJ2fe"
    ],
    "statements": [
      "What can I do when I get an error while assigning content or editing my assignments"
    ]
  },
  "cannot": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/360041478492-My-students-joined-my-class-but-they-can-t-see-it-or-any-of-my-assignments-How-do-I-help-them"
    ],
    "short": [
      "https://bit.ly/2IvHqjt"
    ],
    "statements": [
      "My students joined my class but they can t see it or any of my assignments How do I help them"
    ]
  },
  "learner": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030629852-What-is-my-Learner-Home-page-and-what-can-I-do-there"
    ],
    "short": [
      "https://bit.ly/36JnQsr"
    ],
    "statements": [
      "What is my Learner Home page and what can I do there"
    ]
  },
  "studentandhome": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030629852-What-is-my-Learner-Home-page-and-what-can-I-do-there"
    ],
    "short": [
      "https://bit.ly/2K5ywtL"
    ],
    "statements": [
      "What is my Learner Home page and what can I do there"
    ]
  },
  "editandgoal": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030782352-How-do-I-manage-my-students-Course-Mastery-goals"
    ],
    "short": [
      "https://bit.ly/2UkzFzd"
    ],
    "statements": [
      "How do I manage my students Course Mastery goals"
    ]
  },
  "performance": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/360031122951-How-do-I-use-the-Assignment-Scores-report",
      "https://khanacademy.zendesk.com/hc/en-us/articles/115000780012-Guide-to-Assignment-coaching-reports",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360012119392-How-do-I-use-the-Live-Assignment-Report",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030704892-How-do-I-use-my-Individual-Student-report",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030704352-How-do-I-use-my-Class-Overview-report",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360031122631-How-do-I-use-the-Course-Mastery-Progress-Report",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360031123551-How-can-I-monitor-Mastery-progress",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360031129891-How-do-I-view-my-students-performance-and-progress"
    ],
    "short": [
      "https://bit.ly/2GTvBCY",
      "https://bit.ly/2UhF4aq",
      "https://bit.ly/38xZYdL",
      "https://bit.ly/3eQU7RG",
      "https://bit.ly/3nuMiVd",
      "https://bit.ly/3nfaD0U",
      "https://bit.ly/2K3dko7",
      "https://bit.ly/3knbg6D"
    ],
    "statements": [
      "How do I use the Assignment Scores report",
      "Guide to Assignment coaching reports",
      "How do I use the Live Assignment Report",
      "How do I use my Individual Student report",
      "How do I use my Class Overview report",
      "How do I use the Course Mastery Progress Report",
      "How can I monitor Mastery progress",
      "How do I view my students performance and progress"
    ]
  },
  "score": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/360031122951-How-do-I-use-the-Assignment-Scores-report",
      "https://khanacademy.zendesk.com/hc/en-us/articles/115000780012-Guide-to-Assignment-coaching-reports",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360012119392-How-do-I-use-the-Live-Assignment-Report",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030704892-How-do-I-use-my-Individual-Student-report",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030704352-How-do-I-use-my-Class-Overview-report"
    ],
    "short": [
      "https://bit.ly/3nfVFrw",
      "https://bit.ly/38CMmh5",
      "https://bit.ly/32FyBup",
      "https://bit.ly/36txa3d",
      "https://bit.ly/36txa3d"
    ],
    "statements": [
      "How do I use the Assignment Scores report",
      "Guide to Assignment coaching reports",
      "How do I use the Live Assignment Report",
      "How do I use my Individual Student report",
      "How do I use my Class Overview report"
    ]
  },
  "activity": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/360031052391-How-do-I-use-my-Individual-Student-and-Activity-Overview-reports",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360031047451-How-do-I-use-my-Activity-Overview-report",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360035351992-Why-do-the-Activity-Overview-and-Individual-Student-Reports-show-different-minutes-measurements"
    ],
    "short": [
      "https://bit.ly/3kxL0H7",
      "https://bit.ly/35mhTls",
      "https://bit.ly/3kiSEow"
    ],
    "statements": [
      "How do I use my Individual Student and Activity Overview reports",
      "How do I use my Activity Overview report",
      "Why do the Activity Overview and Individual Student Reports show different minutes measurements"
    ]
  },
  "error": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/212934867-How-do-I-report-errors-in-videos",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360034860511-What-can-I-do-when-I-get-an-error-while-assigning-content-or-editing-my-assignments",
      "https://khanacademy.zendesk.com/hc/en-us/articles/202834460-What-information-do-I-need-to-include-to-submit-an-effective-bug-report",
      "https://khanacademy.zendesk.com/hc/en-us/articles/226373748-How-do-I-report-different-kinds-of-bugs-and-issues",
      "https://khanacademy.zendesk.com/hc/en-us/articles/222478287-Why-did-I-get-the-problem-wrong-when-entering-the-correct-math-expression",
      "https://khanacademy.zendesk.com/hc/en-us/articles/202487500-Why-are-Khan-Academy-videos-not-playing-for-me"
    ],
    "short": [
      "https://bit.ly/35oyvsZ",
      "https://bit.ly/2Ui0aW2",
      "https://bit.ly/32FxJpw",
      "https://bit.ly/32EMOYt",
      "https://bit.ly/3kkWUDP",
      "https://bit.ly/35mNlQv"
    ],
    "statements": [
      "How do I report errors in videos",
      "What can I do when I get an error while assigning content or editing my assignments",
      "What information do I need to include to submit an effective bug report",
      "How do I report different kinds of bugs and issues",
      "Why did I get the problem wrong when entering the correct math expression",
      "Why are Khan Academy videos not playing for me"
    ]
  },
  "mistakeandquestion": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/227067827-I-ran-into-a-mistake-in-a-question-how-can-I-let-you-know-it-needs-to-be-fixed",
      "https://khanacademy.zendesk.com/hc/en-us/articles/222478287-Why-did-I-get-the-problem-wrong-when-entering-the-correct-math-expression"
    ],
    "short": [
      "https://bit.ly/3poTUu7",
      "https://bit.ly/3eUdCco"
    ],
    "statements": [
      "I ran into a mistake in a question how can I let you know it needs to be fixed",
      "Why did I get the problem wrong when entering the correct math expression"
    ]
  },
  "wrong": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/227067827-I-ran-into-a-mistake-in-a-question-how-can-I-let-you-know-it-needs-to-be-fixed",
      "https://khanacademy.zendesk.com/hc/en-us/articles/222478287-Why-did-I-get-the-problem-wrong-when-entering-the-correct-math-expression",
      "https://khanacademy.zendesk.com/hc/en-us/articles/202968980-Why-am-I-getting-the-problem-wrong-when-entering-the-correct-answer"
    ],
    "short": [
      "https://bit.ly/2UhCUaR",
      "https://bit.ly/2Un6FXQ",
      "https://bit.ly/2UihwSP"
    ],
    "statements": [
      "I ran into a mistake in a question how can I let you know it needs to be fixed",
      "Why did I get the problem wrong when entering the correct math expression",
      "Why am I getting the problem wrong when entering the correct answer"
    ]
  },
  "onlineandlearning": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/360040762372-Khan-Academy-schedules-for-school-closures-in-India",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360042427152-Weekly-Math-learning-plans-for-classes-6th-10th-India-to-prepare-students-better-for-the-upcoming-school-year",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360040755952-How-can-Khan-Academy-be-used-in-India-for-remote-learning-during-school-closures",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360040418972-As-a-parent-how-can-I-use-Khan-Academy-to-support-my-child-s-learning-during-a-school-closure",
      "https://s3.amazonaws.com/KA-share/Translations/ParentsClosure_HI.pdf"
    ],
    "short": [
      "https://bit.ly/35noYlH",
      "https://bit.ly/3krfutY",
      "https://bit.ly/35mduPE",
      "https://bit.ly/32D4fZI",
      "https://bit.ly/38zFUaG"
    ],
    "statements": [
      "Khan Academy schedules for school closures in India",
      "Weekly Math learning plans for classes 6th 10th India to prepare students better for the upcoming school year",
      "How can Khan Academy be used in India for remote learning during school closures",
      "As a parent how can I use Khan Academy to support my child s learning during a school closure",
      "Translations/ParentsClosure_HI.pdf"
    ]
  },
  "remoteandlearning": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/360040762372-Khan-Academy-schedules-for-school-closures-in-India",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360042427152-Weekly-Math-learning-plans-for-classes-6th-10th-India-to-prepare-students-better-for-the-upcoming-school-year",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360040755952-How-can-Khan-Academy-be-used-in-India-for-remote-learning-during-school-closures",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360040418972-As-a-parent-how-can-I-use-Khan-Academy-to-support-my-child-s-learning-during-a-school-closure",
      "https://s3.amazonaws.com/KA-share/Translations/ParentsClosure_HI.pdf"
    ],
    "short": [
      "https://bit.ly/35noYlH",
      "https://bit.ly/3krfutY",
      "https://bit.ly/35mduPE",
      "https://bit.ly/32D4fZI",
      "https://bit.ly/38zFUaG"
    ],
    "statements": [
      "Khan Academy schedules for school closures in India",
      "Weekly Math learning plans for classes 6th 10th India to prepare students better for the upcoming school year",
      "How can Khan Academy be used in India for remote learning during school closures",
      "As a parent how can I use Khan Academy to support my child s learning during a school closure",
      "Translations/ParentsClosure_HI.pdf"
    ]
  },
  "remote": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/360040762372-Khan-Academy-schedules-for-school-closures-in-India",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360042427152-Weekly-Math-learning-plans-for-classes-6th-10th-India-to-prepare-students-better-for-the-upcoming-school-year",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360040755952-How-can-Khan-Academy-be-used-in-India-for-remote-learning-during-school-closures",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360040418972-As-a-parent-how-can-I-use-Khan-Academy-to-support-my-child-s-learning-during-a-school-closure",
      "https://s3.amazonaws.com/KA-share/Translations/ParentsClosure_HI.pdf"
    ],
    "short": [
      "https://bit.ly/35nq80x",
      "https://bit.ly/35oLTx9",
      "https://bit.ly/2IA0tsz",
      "https://bit.ly/38Aro2t",
      "https://bit.ly/2UhVHCM"
    ],
    "statements": [
      "Khan Academy schedules for school closures in India",
      "Weekly Math learning plans for classes 6th 10th India to prepare students better for the upcoming school year",
      "How can Khan Academy be used in India for remote learning during school closures",
      "As a parent how can I use Khan Academy to support my child s learning during a school closure",
      "https://s3.amazonaws.com/KA share/Translations/ParentsClosure_HI.pdf"
    ]
  },
  "browsers": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/204795660-Which-browsers-are-supported",
      "https://khanacademy.zendesk.com/hc/en-us/articles/204795430-What-devices-and-browsers-work-best-for-Khan-Academy",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360029043712-Why-does-the-Khan-Academy-website-look-odd-in-my-browser",
      "https://khanacademy.zendesk.com/hc/en-us/articles/216408347-Why-am-I-having-trouble-using-Khan-Academy-on-Internet-Explorer",
      "https://khanacademy.zendesk.com/hc/en-us/articles/203390074-How-do-I-find-my-browser-version"
    ],
    "short": [
      "https://bit.ly/2UlGEYY",
      "https://bit.ly/3kpKIlo",
      "https://bit.ly/3kpeBlR",
      "https://bit.ly/38ISeW6",
      "https://bit.ly/3eQQATq"
    ],
    "statements": [
      "Which browsers are supported",
      "What devices and browsers work best for Khan Academy",
      "Why does the Khan Academy website look odd in my browser",
      "Why am I having trouble using Khan Academy on Internet Explorer",
      "How do I find my browser version"
    ]
  },
  "technology": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/204795430-What-devices-and-browsers-work-best-for-Khan-Academy",
      "https://khanacademy.zendesk.com/hc/en-us/articles/204795670-What-technology-set-up-and-maintenance-are-recommended-for-organizational-use"
    ],
    "short": [
      "https://bit.ly/2UmNjSE",
      "https://bit.ly/2GSz9p0"
    ],
    "statements": [
      "What devices and browsers work best for Khan Academy",
      "What technology set up and maintenance are recommended for organizational use"
    ]
  },
  "internet": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/202487370-How-can-I-use-Khan-Academy-without-an-internet-connection",
      "https://khanacademy.zendesk.com/hc/en-us/articles/216408347-Why-am-I-having-trouble-using-Khan-Academy-on-Internet-Explorer",
      "https://khanacademy.zendesk.com/hc/en-us/articles/204795670-What-technology-set-up-and-maintenance-are-recommended-for-organizational-use"
    ],
    "short": [
      "https://bit.ly/35oCDJv",
      "https://bit.ly/35l97UW",
      "https://bit.ly/38CA34I"
    ],
    "statements": [
      "How can I use Khan Academy without an internet connection",
      "Why am I having trouble using Khan Academy on Internet Explorer",
      "What technology set up and maintenance are recommended for organizational use"
    ]
  },
  "SAT": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/115000775711-SAT-Coach-Tools-Guide",
      "https://khanacademy.zendesk.com/hc/en-us/articles/202577040-Finding-SAT-content",
      "https://khanacademy.zendesk.com/hc/en-us/articles/209976288-Where-can-I-find-the-PSAT-SAT-material",
      "https://khanacademy.zendesk.com/hc/en-us/articles/209975888-How-do-I-assign-the-Official-SAT-Practice-experience-to-my-class",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360031060231-How-do-I-use-my-Teachers-SAT-report",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360041352331-Official-SAT-Practice-Guidance-for-Teachers-During-School-Closures",
      "https://khanacademy.zendesk.com/hc/en-us/articles/210690577-How-can-I-track-my-student-s-progress-in-the-Official-PSAT-SAT-Practice-experience",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360035989651-What-activity-is-counted-toward-SAT-practice-time-on-Khan-Academy"
    ],
    "short": [
      "https://bit.ly/3pgoOEK",
      "https://bit.ly/38AtWO5",
      "https://bit.ly/32zCS2j",
      "https://bit.ly/35pUI9Y",
      "https://bit.ly/2IzLTla",
      "https://bit.ly/2K5xaPH",
      "https://bit.ly/2UhDtRY",
      "https://bit.ly/32D8vsa"
    ],
    "statements": [
      "SAT Coach Tools Guide",
      "Finding SAT content",
      "Where can I find the PSAT SAT material",
      "How do I assign the Official SAT Practice experience to my class",
      "How do I use my Teachers SAT report",
      "Official SAT Practice Guidance for Teachers During School Closures",
      "How can I track my student s progress in the Official PSAT SAT Practice experience",
      "What activity is counted toward SAT practice time on Khan Academy"
    ]
  },
  "guide": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/360040762832-India-Parent-Quick-Start-Guide",
      "https://khanacademy.zendesk.com/hc/en-us/articles/115000775711-SAT-Coach-Tools-Guide",
      "https://khanacademy.zendesk.com/hc/en-us/articles/115000780012-Guide-to-Assignment-coaching-reports"
    ],
    "short": [
      "https://bit.ly/3kl2FRX",
      "https://bit.ly/2IsRycG",
      "https://bit.ly/3loBsPG"
    ],
    "statements": [
      "India Parent Quick Start Guide",
      "SAT Coach Tools Guide",
      "Guide to Assignment coaching reports"
    ]
  },
  "energy": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/202487710-What-are-energy-points-badges-and-avatars"
    ],
    "short": [
      "https://bit.ly/3eW7dxk"
    ],
    "statements": [
      "What are energy points badges and avatars"
    ]
  },
  "avatars": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/202487710-What-are-energy-points-badges-and-avatars",
      "https://khanacademy.zendesk.com/hc/en-us/articles/115007749488-How-do-I-change-my-avatar"
    ],
    "short": [
      "https://bit.ly/3nbIfN8",
      "https://bit.ly/2UnkUf0"
    ],
    "statements": [
      "What are energy points badges and avatars",
      "How do I change my avatar"
    ]
  },
  "languages": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/204707160-How-can-I-access-Khan-Academy-in-languages-other-than-English",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360035202931-How-do-I-change-my-region-within-the-Khan-Academy-mobile-app",
      "https://khanacademy.zendesk.com/hc/en-us/articles/226457308-Is-Khan-Academy-available-in-other-languages",
      "https://khanacademy.zendesk.com/hc/en-us/articles/226458808-How-do-I-set-a-language-other-than-English-as-default",
      "https://khanacademy.zendesk.com/hc/en-us/articles/226457308-What-languages-is-Khan-Academy-available-in"
    ],
    "short": [
      "https://bit.ly/3ppERjB",
      "https://bit.ly/36xp09Y",
      "https://bit.ly/38BykfZ",
      "https://bit.ly/32DgB41",
      "https://bit.ly/35mEePO"
    ],
    "statements": [
      "How can I access Khan Academy in languages other than English",
      "How do I change my region within the Khan Academy mobile app",
      "Is Khan Academy available in other languages",
      "How do I set a language other than English as default",
      "What languages is Khan Academy available in"
    ]
  },
  "Hindi": {
    "links": [
      "https://hi.khanacademy.org/",
      "https://khanacademy.zendesk.com/hc/en-us/articles/226457308-What-languages-is-Khan-Academy-available-in"
    ],
    "short": [
      "https://bit.ly/35nuuEV",
      "https://bit.ly/32CN0rm"
    ],
    "statements": [
      "Hindi Language",
      "What languages is Khan Academy available in"
    ]
  },
  "Punjabi": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/226457308-What-languages-is-Khan-Academy-available-in"
    ],
    "short": [
      "https://bit.ly/2JWk46Z"
    ],
    "statements": [
      "What languages is Khan Academy available in"
    ]
  },
  "Gujarati": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/226457308-What-languages-is-Khan-Academy-available-in"
    ],
    "short": [
      "https://bit.ly/32Uv3or"
    ],
    "statements": [
      "What languages is Khan Academy available in"
    ]
  },
  "Tamil": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/226457308-What-languages-is-Khan-Academy-available-in"
    ],
    "short": [
      "https://bit.ly/2ItFSXm"
    ],
    "statements": [
      "What languages is Khan Academy available in"
    ]
  },
  "useandkhanacademyandlinks": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/202262954-Can-I-use-Khan-Academy-s-videos-name-materials-links-in-my-project"
    ],
    "short": [
      "https://bit.ly/2UmRduM"
    ],
    "statements": [
      "Can I use Khan Academy s videos name materials links in my project"
    ]
  },
  "aboutandkhanacademy": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/203043814-What-materials-do-you-have-on-Khan-Academy-that-I-can-share-with-my-colleagues-or-school"
    ],
    "short": [
      "https://bit.ly/3luA91K"
    ],
    "statements": [
      "What materials do you have on Khan Academy that I can share with my colleagues or school"
    ]
  },
  
  "KhanAcademy": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/202483180-What-is-the-history-of-Khan-Academy",
      "https://khanacademy.zendesk.com/hc/en-us/articles/202483430-What-software-program-equipment-is-used-to-make-Khan-Academy-videos",
      "https://khanacademy.zendesk.com/hc/en-us/articles/202263034-What-is-Khan-Academy-s-Trademark-and-Brand-Usage-Policy",
      "https://khanacademy.zendesk.com/hc/en-us/articles/202483500-What-makes-Khan-Academy-a-not-for-profit",
      "https://khanacademy.zendesk.com/hc/en-us/articles/202260264-How-is-Khan-Academy-effective-and-different-from-other-resources",
      "https://khanacademy.zendesk.com/hc/en-us/articles/230910488-Does-Khan-Academy-have-an-open-source-contribution-portal",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360038703332-How-do-I-contact-Khan-Academy"
    ],
    "short": [
      "https://bit.ly/2ItG8FO",
      "https://bit.ly/3eSHXaX",
      "https://bit.ly/3poAky4",
      "https://bit.ly/2Iv4sXR",
      "https://bit.ly/35qSjfo",
      "https://bit.ly/2JTiym6",
      "https://bit.ly/3nd9J4U"
    ],
    "statements": [
      "What is the history of Khan Academy",
      "What software program equipment is used to make Khan Academy videos",
      "What is Khan Academy s Trademark and Brand Usage Policy",
      "What makes Khan Academy a not for profit",
      "How is Khan Academy effective and different from other resources",
      "Does Khan Academy have an open source contribution portal",
      "How do I contact Khan Academy"
    ]
  },
  "partner": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/202845420-How-can-I-or-my-organization-partner-with-Khan-Academy-to-create-content"
    ],
    "short": [
      "https://bit.ly/3eQKEtI"
    ],
    "statements": [
      "How can I or my organization partner with Khan Academy to create content"
    ]
  },
  "subjects": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/202497674-How-do-I-switch-to-a-different-course-or-subject",
      "https://khanacademy.zendesk.com/hc/en-us/articles/202487550-Are-there-knowledge-maps-or-practice-problems-for-subjects-other-than-math",
      "https://khanacademy.zendesk.com/hc/en-us/articles/115001118352-Does-anything-assigned-by-a-teacher-count-What-if-it-s-in-a-different-subject-or-grade",
      "https://khanacademy.zendesk.com/hc/en-us/articles/219136527-Can-I-use-teacher-and-coach-tools-for-subjects-other-than-Math-and-Computer-Science"
    ],
    "short": [
      "https://bit.ly/3nag6pQ",
      "https://bit.ly/35oTNH1",
      "https://bit.ly/3kpkCir",
      "https://bit.ly/2GVhbT1"
    ],
    "statements": [
      "How do I switch to a different course or subject",
      "Are there knowledge maps or practice problems for subjects other than math",
      "Does anything assigned by a teacher count What if it s in a different subject or grade",
      "Can I use teacher and coach tools for subjects other than Math and Computer Science"
    ]
  },
  "cost": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/202260114-Does-it-cost-money-to-use-Khan-Academy"
    ],
    "short": [
      "https://bit.ly/2IzRRCA"
    ],
    "statements": [
      "Does it cost money to use Khan Academy"
    ]
  },
  "certificate": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/115006697467-Can-Khan-Academy-give-me-a-certificate-or-diploma",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360019825432-Can-I-give-students-certificates-to-recognize-their-work-multiple-languages"
    ],
    "short": [
      "https://bit.ly/3neHBi3",
      "https://bit.ly/2Its8LS"
    ],
    "statements": [
      "Can Khan Academy give me a certificate or diploma",
      "Can I give students certificates to recognize their work multiple languages"
    ]
  },
  "privacy": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/202487520-What-are-Khan-Academy-s-privacy-principles",
      "https://khanacademy.zendesk.com/hc/en-us/articles/202487460-If-my-child-is-younger-than-age-13-what-login-options-are-there",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360021112132-How-do-I-allow-cookies-from-Khan-Academy",
      "https://khanacademy.zendesk.com/hc/en-us/articles/115000719631-Why-might-a-support-agent-need-to-log-in-to-my-account"
    ],
    "short": [
      "https://bit.ly/2IlCq16",
      "https://bit.ly/35r6j8V",
      "https://bit.ly/2Uidt8W",
      "https://bit.ly/2IvUdSU"
    ],
    "statements": [
      "What are Khan Academy s privacy principles",
      "If my child is younger than age 13 what login options are there",
      "How do I allow cookies from Khan Academy",
      "Why might a support agent need to log in to my account"
    ]
  },
  "security": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/202487520-What-are-Khan-Academy-s-privacy-principles",
      "https://khanacademy.zendesk.com/hc/en-us/articles/202487460-If-my-child-is-younger-than-age-13-what-login-options-are-there",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360021112132-How-do-I-allow-cookies-from-Khan-Academy",
      "https://khanacademy.zendesk.com/hc/en-us/articles/115000719631-Why-might-a-support-agent-need-to-log-in-to-my-account"
    ],
    "short": [
      "https://bit.ly/2IlCq16",
      "https://bit.ly/35r6j8V",
      "https://bit.ly/2Uidt8W",
      "https://bit.ly/2IvUdSU"
    ],
    "statements": [
      "What are Khan Academy s privacy principles",
      "If my child is younger than age 13 what login options are there",
      "How do I allow cookies from Khan Academy",
      "Why might a support agent need to log in to my account"
    ]
  },
  "contact": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/360038703332-How-do-I-contact-Khan-Academy",
      "https://khanacademy.zendesk.com/hc/en-us/articles/226373748-How-do-I-report-different-kinds-of-bugs-and-issues",
      "https://khanacademy.zendesk.com/hc/en-us/articles/202483620-I-would-like-to-invite-a-member-of-Khan-Academy-to-speak-at-an-event-Who-do-I-contact"
    ],
    "short": [
      "https://bit.ly/3ktJGVs",
      "https://bit.ly/3lCdZdO",
      "https://bit.ly/2Unkh57"
    ],
    "statements": [
      "How do I contact Khan Academy",
      "How do I report different kinds of bugs and issues",
      "I would like to invite a member of Khan Academy to speak at an event Who do I contact"
    ]
  },
  "learnstorm": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/115001114011-How-do-I-move-from-one-level-to-the-next",
      "https://khanacademy.zendesk.com/hc/en-us/articles/115001114411-If-a-teacher-deletes-an-assignment-does-it-remove-assignment-progress-in-the-LearnStorm-Tracker",
      "https://khanacademy.zendesk.com/hc/en-us/articles/115001118352-Does-anything-assigned-by-a-teacher-count-What-if-it-s-in-a-different-subject-or-grade",
      "https://khanacademy.zendesk.com/hc/en-us/articles/115001117992-Will-student-work-on-material-that-I-haven-t-assigned-count-in-LearnStorm",
      "https://khanacademy.zendesk.com/hc/en-us/articles/115001117892-What-if-I-add-or-drop-students-mid-way-through-the-challenge",
      "https://khanacademy.zendesk.com/hc/en-us/articles/115001117852-How-can-I-check-the-progress-in-LearnStorm",
      "https://khanacademy.zendesk.com/hc/en-us/articles/115001113491-As-a-principal-or-district-administrator-can-I-sign-up-all-of-my-students-for-LearnStorm",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360032268812-How-do-I-use-LearnStorm-in-my-classroom"
    ],
    "short": [
      "https://bit.ly/2IpRZ7r",
      "https://bit.ly/36wjR22",
      "https://bit.ly/3pqNXgi",
      "https://bit.ly/35q3t3Q",
      "https://bit.ly/2IlDUsc",
      "https://bit.ly/3eUAp7N",
      "https://bit.ly/2Ump2vO",
      "https://bit.ly/3nfPiEE"
    ],
    "statements": [
      "How do I move from one level to the next",
      "If a teacher deletes an assignment does it remove assignment progress in the LearnStorm Tracker",
      "Does anything assigned by a teacher count What if it s in a different subject or grade",
      "Will student work on material that I haven t assigned count in LearnStorm",
      "What if I add or drop students mid way through the challenge",
      "How can I check the progress in LearnStorm",
      "As a principal or district administrator can I sign up all of my students for LearnStorm",
      "How do I use LearnStorm in my classroom"
    ]
  },
  "webinars": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/360040755952-How-can-Khan-Academy-be-used-in-India-for-remote-learning-during-school-closures"
    ],
    "short": [
      "https://bit.ly/32Fh85j"
    ],
    "statements": [
      "How can Khan Academy be used in India for remote learning during school closures"
    ]
  },
  "app": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/202487540-Does-Khan-Academy-have-an-official-mobile-app",
      "https://khanacademy.zendesk.com/hc/en-us/articles/221562187-Is-the-Khan-Academy-app-for-Windows-supported",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360035202931-How-do-I-change-my-region-within-the-Khan-Academy-mobile-app",
      "https://khanacademy.zendesk.com/hc/en-us/articles/217162638-What-features-are-available-on-the-iOS-and-Google-Play-Apps",
      "https://khanacademy.zendesk.com/hc/en-us/articles/230910428-How-can-I-change-the-language-that-my-mobile-app-uses",
      "https://khanacademy.zendesk.com/hc/en-us/articles/203444450-Can-my-students-create-Khan-Academy-accounts-using-their-Google-accounts-if-we-use-Google-Apps-for-Education",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360035166571-Update-Khan-Academy-Mobile-App-6-4-0-Pick-Your-Language-and-Region-with-Ease"
    ],
    "short": [
      "https://bit.ly/36sLSHU",
      "https://bit.ly/3eQ45mz",
      "https://bit.ly/3neKJuc",
      "https://bit.ly/32CQKct",
      "https://bit.ly/38IwbPk",
      "https://bit.ly/3nbjuAG",
      "https://bit.ly/3lvzNbm"
    ],
    "statements": [
      "Does Khan Academy have an official mobile app",
      "Is the Khan Academy app for Windows supported",
      "How do I change my region within the Khan Academy mobile app",
      "What features are available on the iOS and Google Play Apps",
      "How can I change the language that my mobile app uses",
      "Can my students create Khan Academy accounts using their Google accounts if we use Google Apps for Education",
      "Update Khan Academy Mobile App 6 4 0 Pick Your Language and Region with Ease"
    ]
  },
  "khanacademyandkids": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/360006897372-How-do-I-access-Khan-Academy-Kids",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360007045372-Introducing-Khan-Academy-Kids",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360041091351-How-to-use-Khan-Academy-Kids-for-remote-learning"
    ],
    "short": [
      "https://bit.ly/38CTMBg",
      "https://bit.ly/3lp2JSj",
      "https://bit.ly/3low7rP"
    ],
    "statements": [
      "How do I access Khan Academy Kids",
      "Introducing Khan Academy Kids",
      "How to use Khan Academy Kids for remote learning"
    ]
  },
  "missingandstudent": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/360031103051-How-do-I-add-new-students-to-a-class-in-my-Teacher-Dashboard",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030762612-How-do-I-add-existing-students-to-a-class-in-my-Teacher-Dashboard",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030808291-How-do-I-stop-coaching-students-on-my-Teacher-dashboard"
    ],
    "short": [
      "https://bit.ly/3eQB7mm",
      "https://bit.ly/3eTLS7A",
      "https://bit.ly/36ruEut"
    ],
    "statements": [
      "How do I add new students to a class in my Teacher Dashboard",
      "How do I add existing students to a class in my Teacher Dashboard",
      "How do I stop coaching students on my Teacher dashboard"
    ]
  },
  "registeredandstudent": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030808291-How-do-I-stop-coaching-students-on-my-Teacher-dashboard",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030494852-What-can-I-do-from-the-Students-page"
    ],
    "short": [
      "https://bit.ly/3numIj9",
      "https://bit.ly/2UrelYN"
    ],
    "statements": [
      "How do I stop coaching students on my Teacher dashboard",
      "What can I do from the Students page"
    ]
  },
  "duplicateandstudent": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030808291-How-do-I-stop-coaching-students-on-my-Teacher-dashboard",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360031102971-How-do-I-manage-my-student-roster",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030834891-How-do-I-remove-students-from-a-class",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030494852-What-can-I-do-from-the-Students-page"
    ],
    "short": [
      "https://bit.ly/32CodUe",
      "https://bit.ly/3po0cd9",
      "https://bit.ly/38xpvnj",
      "https://bit.ly/3ppk6o6"
    ],
    "statements": [
      "How do I stop coaching students on my Teacher dashboard",
      "How do I manage my student roster",
      "How do I remove students from a class",
      "What can I do from the Students page"
    ]
  },
  "video": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/202487500-Why-are-Khan-Academy-videos-not-playing-for-me",
      "https://khanacademy.zendesk.com/hc/en-us/articles/115002789111-Why-aren-t-videos-showing-as-completed-in-my-profile",
      "https://khanacademy.zendesk.com/hc/en-us/articles/235640267-Why-don-t-my-videos-show-as-watched-possible-workaround",
      "https://khanacademy.zendesk.com/hc/en-us/articles/212934867-How-do-I-report-errors-in-videos"
    ],
    "short": [
      "https://bit.ly/3nitvMI",
      "https://bit.ly/3lt5emr",
      "https://bit.ly/2UhBvks",
      "https://bit.ly/2IsWOwL"
    ],
    "statements": [
      "Why are Khan Academy videos not playing for me",
      "Why aren t videos showing as completed in my profile",
      "Why don t my videos show as watched possible workaround",
      "How do I report errors in videos"
    ]
  },
  "coaching": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030808291-How-do-I-stop-coaching-students-on-my-Teacher-dashboard",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360031102971-How-do-I-manage-my-student-roster",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360030494852-What-can-I-do-from-the-Students-page"
    ],
    "short": [
      "https://bit.ly/3eTfLVu",
      "https://bit.ly/36IZEGD",
      "https://bit.ly/3kjf74M"
    ],
    "statements": [
      "How do I stop coaching students on my Teacher dashboard",
      "How do I manage my student roster",
      "What can I do from the Students page"
    ]
  },
  "volunteer": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/202260334-How-can-I-volunteer-at-Khan-Academy"
    ],
    "short": [
      "https://bit.ly/3kqvvjS"
    ],
    "statements": [
      "How can I volunteer at Khan Academy"
    ]
  },
  "event": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/202483620-I-would-like-to-invite-a-member-of-Khan-Academy-to-speak-at-an-event-Who-do-I-contact"
    ],
    "short": [
      "https://bit.ly/2JTP9bu"
    ],
    "statements": [
      "I would like to invite a member of Khan Academy to speak at an event Who do I contact"
    ]
  },
  "press": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/202483630-Press-releases-and-other-resources",
      "https://khanacademy.zendesk.com/hc/en-us/articles/202260284-I-am-a-member-of-the-press-how-can-I-get-in-touch"
    ],
    "short": [
      "https://bit.ly/2GUkMk5",
      "https://bit.ly/36xGlQa"
    ],
    "statements": [
      "Press releases and other resources",
      "I am a member of the press how can I get in touch"
    ]
  },
  "getstarted": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/360031055631-How-do-my-students-get-started-on-Khan-Academy",
      "https://khanacademy.zendesk.com/hc/en-us/articles/202487470-How-do-I-get-started-on-Khan-Academy",
      "https://khanacademy.zendesk.com/hc/en-us/articles/202487570-Where-do-I-begin-How-should-I-get-started",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360040755952-How-can-Khan-Academy-be-used-in-India-for-remote-learning-during-school-closures"
    ],
    "short": [
      "https://bit.ly/3niJHNK",
      "https://bit.ly/2IxClXX",
      "https://bit.ly/2Un7dgh",
      "https://bit.ly/3px5O5c"
    ],
    "statements": [
      "How do my students get started on Khan Academy",
      "How do I get started on Khan Academy",
      "Where do I begin How should I get started",
      "How can Khan Academy be used in India for remote learning during school closures"
    ]
  },
  "start": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/360031055631-How-do-my-students-get-started-on-Khan-Academy",
      "https://khanacademy.zendesk.com/hc/en-us/articles/202487470-How-do-I-get-started-on-Khan-Academy"
    ],
    "short": [
      "https://bit.ly/36raiBu",
      "https://bit.ly/3eZJw7i"
    ],
    "statements": [
      "How do my students get started on Khan Academy",
      "How do I get started on Khan Academy"
    ]
  },
  "childhood": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/360006897372-How-do-I-access-Khan-Academy-Kids",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360007045372-Introducing-Khan-Academy-Kids",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360041091351-How-to-use-Khan-Academy-Kids-for-remote-learning"
    ],
    "short": [
      "https://bit.ly/3kn8crh",
      "https://bit.ly/36sNBgm",
      "https://bit.ly/2UmWKBk"
    ],
    "statements": [
      "How do I access Khan Academy Kids",
      "Introducing Khan Academy Kids",
      "How to use Khan Academy Kids for remote learning"
    ]
  },
  "accessandkhanacademy": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/203580580-Which-sites-domains-do-I-whitelist-so-my-students-can-access-all-of-Khan-Academy"
    ],
    "short": [
      "https://bit.ly/36uqnX5"
    ],
    "statements": [
      "Which sites domains do I whitelist so my students can access all of Khan Academy"
    ]
  },
  "NCERT": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/115004513048-Is-there-curriculum-mapping-for-Indian-Math-levels-English-only"
    ],
    "short": [
      "https://bit.ly/3niJkmk"
    ],
    "statements": [
      "Is there curriculum mapping for Indian Math levels English only"
    ]
  },
  "youtube": {
    "links": [
      "https://khanacademy.zendesk.com/hc/en-us/articles/115001113931-What-should-I-do-if-YouTube-is-blocked-for-my-district",
      "https://khanacademy.zendesk.com/hc/en-us/articles/360020335452-How-do-I-go-back-to-having-the-full-YouTube-video-player-as-my-default-player-and-how-can-I-view-videos-on-YouTube",
      "https://khanacademy.zendesk.com/hc/en-us/articles/204795670-What-technology-set-up-and-maintenance-are-recommended-for-organizational-use"
    ],
    "short": [
      "https://bit.ly/3lqtyFE",
      "https://bit.ly/3nhE1DF",
      "https://bit.ly/2UhYZpJ"
    ],
    "statements": [
      "What should I do if YouTube is blocked for my district",
      "How do I go back to having the full YouTube video player as my default player and how can I view videos on YouTube",
      "What technology set up and maintenance are recommended for organizational use"
    ]
  }
}`;
let searchStatement = '👇🏻 *Find below Search results from your query relate to* 👇🏻';

module.exports.nlpAnswers = function (context, event, message, profileName, mobileNumber) {
  try {
    var currentdate = new Date();
    var datetime = currentdate.getDate() + "/"
      + (currentdate.getMonth() + 1) + "/"
      + currentdate.getFullYear() + " @ "
      + currentdate.getHours() + ":"
      + currentdate.getMinutes() + ":"
      + currentdate.getSeconds();
    context.simpledb.roomleveldata.count = 0;
    delete context.simpledb.roomleveldata.category;
    delete context.simpledb.roomleveldata.maincategory;
    delete context.simpledb.roomleveldata.subcategory;
    delete context.simpledb.roomleveldata.subsubcategory;
    let result = '';
    let i
    let j;
    let text = '';
    let wordsCount = JSON.parse(words);
    // console.log("Length: " + wordsCount.words.length);
    message = message.replace("?", "");
    let query = message.split(/[\s,&]+/);
    // console.log("Query Length: " + query.length);
    for (i = 0; i < query.length; i++) {
      for (j = 0; j < wordsCount.words.length; j++) {
        if (query[i] == wordsCount.words[j]) {
          // console.log("Words: "+wordsCount.words[j])+"\n";
          // console.log("Query: "+query[i]);
          text += query[i] + "|";
        }
      }
    }
    // console.log('Text Length:'+text.length);
    if (text.length > 0) {
      query = [];
      context.simpledb.roomleveldata.wordlist = text;
      let keyword = context.simpledb.roomleveldata.wordlist;

      query = keyword.split('|');
      if (query.length == 0) {
        Chat.sendToRocketChat(context, event, ['Our customer care executive will connect you in 2 working days.']);
      }

      if ((query.includes("create") == true) && ((query.includes("account") == true) || (query.includes("accounts") == true))) {
        // result += searchStatement + ' *' +query[i]+ '*\n\n';
        let links = JSON.parse(relaventlinks);
        for (j = 0; j < links.createandaccount.statements.length; j++) {
          result += "*" + links.createandaccount.statements[j] + "* \n" + links.createandaccount.short[j] + "\n\n";
        }
      }

      if ((query.includes("create") == true) && ((query.includes("class") == true) || (query.includes("classes") == true))) {
        // result += searchStatement + ' *' +query[i]+ '*\n\n';
        let links = JSON.parse(relaventlinks);
        for (j = 0; j < links.createandclass.statements.length; j++) {
          result += "*" + links.createandclass.statements[j] + "* \n" + links.createandclass.short[j] + "\n\n";
        }
      }

      if ((query.includes("create") == true) && ((query.includes("assignment") == true) || (query.includes("assignments") == true))) {
        // result += searchStatement + ' *' +query[i]+ '*\n\n';
        let links = JSON.parse(relaventlinks);
        for (j = 0; j < links.createandassignment.statements.length; j++) {
          result += "*" + links.createandassignment.statements[j] + "* \n" + links.createandassignment.short[j] + "\n\n";
        }
      }

      if (((query.includes("account") == true) || (query.includes("accounts") == true)) && ((query.includes("setting") == true) || (query.includes("settings") == true))) {
        // result += searchStatement + ' *' +query[i]+ '*\n\n';
        let links = JSON.parse(relaventlinks);
        for (j = 0; j < links.accountandsetting.statements.length; j++) {
          result += "*" + links.accountandsetting.statements[j] + "* \n" + links.accountandsetting.short[j] + "\n\n";
        }
      }

      if (((query.includes("account") == true) || (query.includes("accounts") == true)) && (query.includes("delete") == true)) {
        // result += searchStatement + ' *' +query[i]+ '*\n\n';
        let links = JSON.parse(relaventlinks);
        for (j = 0; j < links.deleteandaccount.statements.length; j++) {
          result += "*" + links.deleteandaccount.statements[j] + "* \n" + links.deleteandaccount.short[j] + "\n\n";
        }
      }

      if (((query.includes("account") == true) || (query.includes("accounts") == true)) && (query.includes("facebook") == true)) {
        // result += searchStatement + ' *' +query[i]+ '*\n\n';
        let links = JSON.parse(relaventlinks);
        for (j = 0; j < links.facebookandaccount.statements.length; j++) {
          result += "*" + links.facebookandaccount.statements[j] + "* \n" + links.facebookandaccount.short[j] + "\n\n";
        }
      }

      if (((query.includes("account") == true) || (query.includes("accounts") == true)) && ((query.includes("student") == true) || (query.includes("students") == true))) {
        // result += searchStatement + ' *' +query[i]+ '*\n\n';
        let links = JSON.parse(relaventlinks);
        for (j = 0; j < links.studentandaccount.statements.length; j++) {
          result += "*" + links.studentandaccount.statements[j] + "* \n" + links.studentandaccount.short[j] + "\n\n";
        }
      }

      if (((query.includes("account") == true) || (query.includes("accounts") == true)) && (query.includes("open") == true)) {
        // result += searchStatement + ' *' +query[i]+ '*\n\n';
        let links = JSON.parse(relaventlinks);
        for (j = 0; j < links.openandaccount.statements.length; j++) {
          result += "*" + links.openandaccount.statements[j] + "* \n" + links.openandaccount.short[j] + "\n\n";
        }
      }

      if (((query.includes("account") == true) || (query.includes("accounts") == true)) && ((query.includes("teacher") == true) || (query.includes("teachers") == true))) {
        // result += searchStatement + ' *' +query[i]+ '*\n\n';
        let links = JSON.parse(relaventlinks);
        for (j = 0; j < links.teacherandaccount.statements.length; j++) {
          result += "*" + links.teacherandaccount.statements[j] + "* \n" + links.teacherandaccount.short[j] + "\n\n";
        }
      }

      if (((query.includes("join") == true)) && ((query.includes("teacher") == true) || (query.includes("teachers") == true))) {
        // result += searchStatement + ' *' +query[i]+ '*\n\n';
        let links = JSON.parse(relaventlinks);
        for (j = 0; j < links.joinandteacher.statements.length; j++) {
          result += "*" + links.joinandteacher.statements[j] + "* \n" + links.joinandteacher.short[j] + "\n\n";
        }
      }

      if (((query.includes("join") == true)) && ((query.includes("different", "class") == true) || (query.includes("different", "classes") == true))) {
        // result += searchStatement + ' *' +query[i]+ '*\n\n';
        let links = JSON.parse(relaventlinks);
        for (j = 0; j < links.joinanddifferentclass.statements.length; j++) {
          result += "*" + links.joinanddifferentclass.statements[j] + "* \n" + links.joinanddifferentclass.short[j] + "\n\n";
        }
      }

      if (((query.includes("enroll") == true)) && ((query.includes("teacher") == true) || (query.includes("teachers") == true))) {
        // result += searchStatement + ' *' +query[i]+ '*\n\n';
        let links = JSON.parse(relaventlinks);
        for (j = 0; j < links.enrollandteacher.statements.length; j++) {
          result += "*" + links.enrollandteacher.statements[j] + "* \n" + links.enrollandteacher.short[j] + "\n\n";
        }
      }

      if (((query.includes("enroll") == true)) && ((query.includes("class") == true) || (query.includes("classes") == true))) {
        // result += searchStatement + ' *' +query[i]+ '*\n\n';
        let links = JSON.parse(relaventlinks);
        for (j = 0; j < links.enrollandclass.statements.length; j++) {
          result += "*" + links.enrollandclass.statements[j] + "* \n" + links.enrollandclass.short[j] + "\n\n";
        }
      }

      if (((query.includes("student") == true) || (query.includes("students") == true)) && ((query.includes("dashboard") == true) || (query.includes("dashboards") == true))) {
        // result += searchStatement + ' *' +query[i]+ '*\n\n';
        let links = JSON.parse(relaventlinks);
        for (j = 0; j < links.studentanddashboard.statements.length; j++) {
          result += "*" + links.studentanddashboard.statements[j] + "* \n" + links.studentanddashboard.short[j] + "\n\n";
        }
      }

      if ((query.includes("teacher", "dashboard") == true)) {
        // result += searchStatement + ' *' +query[i]+ '*\n\n';
        let links = JSON.parse(relaventlinks);
        for (j = 0; j < links.teacheranddashboard.statements.length; j++) {
          result += "*" + links.teacheranddashboard.statements[j] + "* \n" + links.teacheranddashboard.short[j] + "\n\n";
        }
      }

      if (((query.includes("password") == true) || (query.includes("passwords") == true)) && ((query.includes("change") == true))) {
        // result += searchStatement + ' *' +query[i]+ '*\n\n';
        let links = JSON.parse(relaventlinks);
        for (j = 0; j < links.passwordandchange.statements.length; j++) {
          result += "*" + links.passwordandchange.statements[j] + "* \n" + links.passwordandchange.short[j] + "\n\n";
        }
      }

      if (((query.includes("password") == true) || (query.includes("passwords") == true)) && ((query.includes("forgot") == true))) {
        // result += searchStatement + ' *' +query[i]+ '*\n\n';
        let links = JSON.parse(relaventlinks);
        for (j = 0; j < links.forgotandpassword.statements.length; j++) {
          result += "*" + links.forgotandpassword.statements[j] + "* \n" + links.forgotandpassword.short[j] + "\n\n";
        }
      }

      if (((query.includes("username") == true)) && ((query.includes("password") == true) || (query.includes("passwords") == true))) {
        // result += searchStatement + ' *' +query[i]+ '*\n\n';
        let links = JSON.parse(relaventlinks);
        for (j = 0; j < links.usernameandpasswords.statements.length; j++) {
          result += "*" + links.usernameandpasswords.statements[j] + "* \n" + links.usernameandpasswords.short[j] + "\n\n";
        }
      }

      if (((query.includes("retrieve") == true)) && ((query.includes("password") == true) || (query.includes("passwords") == true))) {
        // result += searchStatement + ' *' +query[i]+ '*\n\n';
        let links = JSON.parse(relaventlinks);
        for (j = 0; j < links.retrieveandpasswords.statements.length; j++) {
          result += "*" + links.retrieveandpasswords.statements[j] + "* \n" + links.retrieveandpasswords.short[j] + "\n\n";
        }
      }

      if (((query.includes("remove") == true)) && ((query.includes("student") == true) || (query.includes("students") == true))) {
        // result += searchStatement + ' *' +query[i]+ '*\n\n';
        let links = JSON.parse(relaventlinks);
        for (j = 0; j < links.removeandstudents.statements.length; j++) {
          result += "*" + links.removeandstudents.statements[j] + "* \n" + links.removeandstudents.short[j] + "\n\n";
        }
      }

      if (((query.includes("delete") == true)) && ((query.includes("student") == true) || (query.includes("students") == true))) {
        // result += searchStatement + ' *' +query[i]+ '*\n\n';
        let links = JSON.parse(relaventlinks);
        for (j = 0; j < links.deleteandstudents.statements.length; j++) {
          result += "*" + links.deleteandstudents.statements[j] + "* \n" + links.deleteandstudents.short[j] + "\n\n";
        }
      }

      if (((query.includes("delete") == true)) && ((query.includes("class") == true) || (query.includes("classes") == true))) {
        // result += searchStatement + ' *' +query[i]+ '*\n\n';
        let links = JSON.parse(relaventlinks);
        for (j = 0; j < links.deleteandclass.statements.length; j++) {
          result += "*" + links.deleteandclass.statements[j] + "* \n" + links.deleteandclass.short[j] + "\n\n";
        }
      }

      if (((query.includes("delete") == true)) && ((query.includes("assignment") == true) || (query.includes("assignments") == true))) {
        // result += searchStatement + ' *' +query[i]+ '*\n\n';
        let links = JSON.parse(relaventlinks);
        for (j = 0; j < links.deleteandassignment.statements.length; j++) {
          result += "*" + links.deleteandassignment.statements[j] + "* \n" + links.deleteandassignment.short[j] + "\n\n";
        }
      }


      if (((query.includes("add") == true)) && ((query.includes("student") == true) || (query.includes("students") == true))) {
        // result += searchStatement + ' *' +query[i]+ '*\n\n';
        let links = JSON.parse(relaventlinks);
        for (j = 0; j < links.addandstudent.statements.length; j++) {
          result += "*" + links.addandstudent.statements[j] + "* \n" + links.addandstudent.short[j] + "\n\n";
        }
      }

      if (((query.includes("add") == true)) && ((query.includes("class") == true) || (query.includes("classes") == true))) {
        // result += searchStatement + ' *' +query[i]+ '*\n\n';
        let links = JSON.parse(relaventlinks);
        for (j = 0; j < links.addandclass.statements.length; j++) {
          result += "*" + links.addandclass.statements[j] + "* \n" + links.addandclass.short[j] + "\n\n";
        }
      }

      if (((query.includes("add") == true)) && ((query.includes("teacher") == true) || (query.includes("teachers") == true))) {
        // result += searchStatement + ' *' +query[i]+ '*\n\n';
        let links = JSON.parse(relaventlinks);
        for (j = 0; j < links.addandteacher.statements.length; j++) {
          result += "*" + links.addandteacher.statements[j] + "* \n" + links.addandteacher.short[j] + "\n\n";
        }
      }

      if (((query.includes("add") == true)) && (query.includes("assistant", "teacher") == true)) {
        // result += searchStatement + ' *' +query[i]+ '*\n\n';
        let links = JSON.parse(relaventlinks);
        for (j = 0; j < links.addandassistantteacher.statements.length; j++) {
          result += "*" + links.addandassistantteacher.statements[j] + "* \n" + links.addandassistantteacher.short[j] + "\n\n";
        }
      }

      if ((query.includes("how") == true) && (query.includes("assign") == true)) {
        // result += searchStatement + ' *' +query[i]+ '*\n\n';
        let links = JSON.parse(relaventlinks);
        for (j = 0; j < links.howandassign.statements.length; j++) {
          result += "*" + links.howandassign.statements[j] + "* \n" + links.howandassign.short[j] + "\n\n";
        }
      }

      if (((query.includes("what") == true)) && (query.includes("assign") == true)) {
        // result += searchStatement + ' *' +query[i]+ '*\n\n';
        let links = JSON.parse(relaventlinks);
        for (j = 0; j < links.whatandassign.statements.length; j++) {
          result += "*" + links.whatandassign.statements[j] + "* \n" + links.whatandassign.short[j] + "\n\n";
        }
      }

      if (((query.includes("assign") == true)) && (query.includes("students") == true) || (query.includes("student") == true)) {
        // result += searchStatement + ' *' +query[i]+ '*\n\n';
        let links = JSON.parse(relaventlinks);
        for (j = 0; j < links.assignandstudent.statements.length; j++) {
          result += "*" + links.assignandstudent.statements[j] + "* \n" + links.assignandstudent.short[j] + "\n\n";
        }
      }

      if (((query.includes("assign") == true)) && (query.includes("mastery") == true)) {
        // result += searchStatement + ' *' +query[i]+ '*\n\n';
        let links = JSON.parse(relaventlinks);
        for (j = 0; j < links.assignandmastery.statements.length; j++) {
          result += "*" + links.assignandmastery.statements[j] + "* \n" + links.assignandmastery.short[j] + "\n\n";
        }
      }

      if (((query.includes("challenge") == true)) && (query.includes("mastery") == true)) {
        // result += searchStatement + ' *' +query[i]+ '*\n\n';
        let links = JSON.parse(relaventlinks);
        for (j = 0; j < links.masteryandchallenge.statements.length; j++) {
          result += "*" + links.masteryandchallenge.statements[j] + "* \n" + links.masteryandchallenge.short[j] + "\n\n";
        }
      }

      if (((query.includes("edit") == true)) && (query.includes("goal") == true)) {
        // result += searchStatement + ' *' +query[i]+ '*\n\n';
        let links = JSON.parse(relaventlinks);
        for (j = 0; j < links.editandgoal.statements.length; j++) {
          result += "*" + links.editandgoal.statements[j] + "* \n" + links.editandgoal.short[j] + "\n\n";
        }
      }

      if (((query.includes("edit") == true)) && (query.includes("assignment") == true)) {
        // result += searchStatement + ' *' +query[i]+ '*\n\n';
        let links = JSON.parse(relaventlinks);
        for (j = 0; j < links.editandassignment.statements.length; j++) {
          result += "*" + links.editandassignment.statements[j] + "* \n" + links.editandassignment.short[j] + "\n\n";
        }
      }

      if (((query.includes("manage") == true)) && (query.includes("assignment") == true)) {
        // result += searchStatement + ' *' +query[i]+ '*\n\n';
        let links = JSON.parse(relaventlinks);
        for (j = 0; j < links.manageandassignment.statements.length; j++) {
          result += "*" + links.manageandassignment.statements[j] + "* \n" + links.manageandassignment.short[j] + "\n\n";
        }
      }

      if (((query.includes("past") == true)) && (query.includes("assignment") == true)) {
        // result += searchStatement + ' *' +query[i]+ '*\n\n';
        let links = JSON.parse(relaventlinks);
        for (j = 0; j < links.pastandassignment.statements.length; j++) {
          result += "*" + links.pastandassignment.statements[j] + "* \n" + links.pastandassignment.short[j] + "\n\n";
        }
      }

      if (((query.includes("student") == true) || (query.includes("students") == true)) && (query.includes("assignment") == true)) {
        // result += searchStatement + ' *' +query[i]+ '*\n\n';
        let links = JSON.parse(relaventlinks);
        for (j = 0; j < links.studentandassignment.statements.length; j++) {
          result += "*" + links.studentandassignment.statements[j] + "* \n" + links.studentandassignment.short[j] + "\n\n";
        }
      }

      if (((query.includes("see") == true) || (query.includes("view") == true)) && (query.includes("assignment") == true)) {
        // result += searchStatement + ' *' +query[i]+ '*\n\n';
        let links = JSON.parse(relaventlinks);
        for (j = 0; j < links.seeviewandassignment.statements.length; j++) {
          result += "*" + links.seeviewandassignment.statements[j] + "* \n" + links.seeviewandassignment.short[j] + "\n\n";
        }
      }

      if ((query.includes("can't", "see") == true) && (query.includes("assignment") == true)) {
        // result += searchStatement + ' *' +query[i]+ '*\n\n';
        let links = JSON.parse(relaventlinks);
        for (j = 0; j < links.cannotseeandassignment.statements.length; j++) {
          result += "*" + links.cannotseeandassignment.statements[j] + "* \n" + links.cannotseeandassignment.short[j] + "\n\n";
        }
      }

      if ((query.includes("report") == true) && (query.includes("assignment") == true)) {
        // result += searchStatement + ' *' +query[i]+ '*\n\n';
        let links = JSON.parse(relaventlinks);
        for (j = 0; j < links.assignmentandreport.statements.length; j++) {
          result += "*" + links.assignmentandreport.statements[j] + "* \n" + links.assignmentandreport.short[j] + "\n\n";
        }
      }

      if ((query.includes("teacher") == true) && (query.includes("report") == true)) {
        // result += searchStatement + ' *' +query[i]+ '*\n\n';
        let links = JSON.parse(relaventlinks);
        for (j = 0; j < links.teacherandreport.statements.length; j++) {
          result += "*" + links.teacherandreport.statements[j] + "* \n" + links.teacherandreport.short[j] + "\n\n";
        }
      }

      if ((query.includes("class") == true) && (query.includes("report") == true)) {
        // result += searchStatement + ' *' +query[i]+ '*\n\n';
        let links = JSON.parse(relaventlinks);
        for (j = 0; j < links.classandreport.statements.length; j++) {
          result += "*" + links.classandreport.statements[j] + "* \n" + links.classandreport.short[j] + "\n\n";
        }
      }

      if ((query.includes("my") == true) && (query.includes("report") == true)) {
        // result += searchStatement + ' *' +query[i]+ '*\n\n';
        let links = JSON.parse(relaventlinks);
        for (j = 0; j < links.myandreport.statements.length; j++) {
          result += "*" + links.myandreport.statements[j] + "* \n" + links.myandreport.short[j] + "\n\n";
        }
      }

      if ((query.includes("can't") == true) && (query.includes("see") == true) && (query.includes("report") == true)) {
        // result += searchStatement + ' *' +query[i]+ '*\n\n';
        let links = JSON.parse(relaventlinks);
        for (j = 0; j < links.cannotseereport.statements.length; j++) {
          result += "*" + links.cannotseereport.statements[j] + "* \n" + links.cannotseereport.short[j] + "\n\n";
        }
      }

      if ((query.includes("find") == true) && (query.includes("content") == true)) {
        // result += searchStatement + ' *' +query[i]+ '*\n\n';
        let links = JSON.parse(relaventlinks);
        for (j = 0; j < links.findandcontent.statements.length; j++) {
          result += "*" + links.findandcontent.statements[j] + "* \n" + links.findandcontent.short[j] + "\n\n";
        }
      }

      if ((query.includes("error") == true) && (query.includes("content") == true) && (query.includes("assigning") == true)) {
        // result += searchStatement + ' *' +query[i]+ '*\n\n';
        let links = JSON.parse(relaventlinks);
        for (j = 0; j < links.errorandassigningandcontent.statements.length; j++) {
          result += "*" + links.errorandassigningandcontent.statements[j] + "* \n" + links.errorandassigningandcontent.short[j] + "\n\n";
        }
      }

      if ((query.includes("change") == true) && (query.includes("username") == true)) {
        // result += searchStatement + ' *' +query[i]+ '*\n\n';
        let links = JSON.parse(relaventlinks);
        for (j = 0; j < links.changeandusername.statements.length; j++) {
          result += "*" + links.changeandusername.statements[j] + "* \n" + links.changeandusername.short[j] + "\n\n";
        }
      }

      if ((query.includes("move") == true) && (query.includes("students") == true) || (query.includes("student") == true)) {
        // result += searchStatement + ' *' +query[i]+ '*\n\n';
        let links = JSON.parse(relaventlinks);
        for (j = 0; j < links.moveandstudents.statements.length; j++) {
          result += "*" + links.moveandstudents.statements[j] + "* \n" + links.moveandstudents.short[j] + "\n\n";
        }
      }

      if ((query.includes("teacher") == true) && (query.includes("resources") == true)) {
        // result += searchStatement + ' *' +query[i]+ '*\n\n';
        let links = JSON.parse(relaventlinks);
        for (j = 0; j < links.teacherandresources.statements.length; j++) {
          result += "*" + links.teacherandresources.statements[j] + "* \n" + links.teacherandresources.short[j] + "\n\n";
        }
      }

      if ((query.includes("teacher") == true) && (query.includes("help") == true)) {
        // result += searchStatement + ' *' +query[i]+ '*\n\n';
        let links = JSON.parse(relaventlinks);
        for (j = 0; j < links.teacherandhelp.statements.length; j++) {
          result += "*" + links.teacherandhelp.statements[j] + "* \n" + links.teacherandhelp.short[j] + "\n\n";
        }
      }

      if (((query.includes("students") == true) || (query.includes("student") == true)) && (query.includes("experience") == true)) {
        // result += searchStatement + ' *' +query[i]+ '*\n\n';
        let links = JSON.parse(relaventlinks);
        for (j = 0; j < links.studentsandexperience.statements.length; j++) {
          result += "*" + links.studentsandexperience.statements[j] + "* \n" + links.studentsandexperience.short[j] + "\n\n";
        }
      }

      if (((query.includes("students") == true) || (query.includes("student") == true)) && (query.includes("new", "teacher") == true)) {
        // result += searchStatement + ' *' +query[i]+ '*\n\n';
        let links = JSON.parse(relaventlinks);
        for (j = 0; j < links.studentsandnewteacher.statements.length; j++) {
          result += "*" + links.studentsandnewteacher.statements[j] + "* \n" + links.studentsandnewteacher.short[j] + "\n\n";
        }
      }

      if ((query.includes("change") == true) && (query.includes("teacher") == true)) {
        // result += searchStatement + ' *' +query[i]+ '*\n\n';
        let links = JSON.parse(relaventlinks);
        for (j = 0; j < links.changeandteacher.statements.length; j++) {
          result += "*" + links.changeandteacher.statements[j] + "* \n" + links.changeandteacher.short[j] + "\n\n";
        }
      }

      if ((query.includes("class") == true) && (query.includes("size") == true)) {
        // result += searchStatement + ' *' +query[i]+ '*\n\n';
        let links = JSON.parse(relaventlinks);
        for (j = 0; j < links.classandsize.statements.length; j++) {
          result += "*" + links.classandsize.statements[j] + "* \n" + links.classandsize.short[j] + "\n\n";
        }
      }

      if ((query.includes("limit") == true) && ((query.includes("student") == true) || (query.includes("students") == true))) {
        // result += searchStatement + ' *' +query[i]+ '*\n\n';
        let links = JSON.parse(relaventlinks);
        for (j = 0; j < links.limitandstudent.statements.length; j++) {
          result += "*" + links.limitandstudent.statements[j] + "* \n" + links.limitandstudent.short[j] + "\n\n";
        }
      }

      if ((query.includes("roster") == true) && ((query.includes("student") == true) || (query.includes("students") == true))) {
        // result += searchStatement + ' *' +query[i]+ '*\n\n';
        let links = JSON.parse(relaventlinks);
        for (j = 0; j < links.studentandroster.statements.length; j++) {
          result += "*" + links.studentandroster.statements[j] + "* \n" + links.studentandroster.short[j] + "\n\n";
        }
      }

      if (query.includes("learner", "home") == true) {
        // result += searchStatement + ' *' +query[i]+ '*\n\n';
        let links = JSON.parse(relaventlinks);
        for (j = 0; j < links.learner.statements.length; j++) {
          result += "*" + links.learner.statements[j] + "* \n" + links.learner.short[j] + "\n\n";
        }
      }

      if ((query.includes("mistake") == true) && (query.includes("question") == true)) {
        // result += searchStatement + ' *' +query[i]+ '*\n\n';
        let links = JSON.parse(relaventlinks);
        for (j = 0; j < links.mistakeandquestion.statements.length; j++) {
          result += "*" + links.mistakeandquestion.statements[j] + "* \n" + links.mistakeandquestion.short[j] + "\n\n";
        }
      }

      if ((query.includes("school") == true) && (query.includes("closure") == true)) {
        // result += searchStatement + ' *' +query[i]+ '*\n\n';
        let links = JSON.parse(relaventlinks);
        for (j = 0; j < links.schoolandclosure.statements.length; j++) {
          result += "*" + links.schoolandclosure.statements[j] + "* \n" + links.schoolandclosure.short[j] + "\n\n";
        }
      }

      if ((query.includes("online") == true) && (query.includes("learning") == true)) {
        // result += searchStatement + ' *' +query[i]+ '*\n\n';
        let links = JSON.parse(relaventlinks);
        for (j = 0; j < links.onlineandlearning.statements.length; j++) {
          result += "*" + links.onlineandlearning.statements[j] + "* \n" + links.onlineandlearning.short[j] + "\n\n";
        }
      }

      if ((query.includes("online") == true) && (query.includes("learning") == true)) {
        // result += searchStatement + ' *' +query[i]+ '*\n\n';
        let links = JSON.parse(relaventlinks);
        for (j = 0; j < links.onlineandlearning.statements.length; j++) {
          result += "*" + links.onlineandlearning.statements[j] + "* \n" + links.onlineandlearning.short[j] + "\n\n";
        }
      }

      if ((query.includes("use") == true) && (query.includes("khan") == true) && (query.includes("academy") == true) && (query.includes("links") == true)) {
        // result += searchStatement + ' *' +query[i]+ '*\n\n';
        let links = JSON.parse(relaventlinks);
        for (j = 0; j < links.useandkhanacademyandlinks.statements.length; j++) {
          result += "*" + links.useandkhanacademyandlinks.statements[j] + "* \n" + links.useandkhanacademyandlinks.short[j] + "\n\n";
        }
      }

      if ((query.includes("about") == true) && (query.includes("khan") == true) && (query.includes("academy") == true)) {
        // result += searchStatement + ' *' +query[i]+ '*\n\n';
        let links = JSON.parse(relaventlinks);
        for (j = 0; j < links.aboutandkhanacademy.statements.length; j++) {
          result += "*" + links.aboutandkhanacademy.statements[j] + "* \n" + links.aboutandkhanacademy.short[j] + "\n\n";
        }
      }

      if ((query.includes("kids") == true) && (query.includes("khan") == true) && (query.includes("academy") == true)) {
        // result += searchStatement + ' *' +query[i]+ '*\n\n';
        let links = JSON.parse(relaventlinks);
        for (j = 0; j < links.khanacademyandkids.statements.length; j++) {
          result += "*" + links.khanacademyandkids.statements[j] + "* \n" + links.khanacademyandkids.short[j] + "\n\n";
        }
      }

      if ((query.includes("registered") == true) && (query.includes("student") == true)) {
        // result += searchStatement + ' *' +query[i]+ '*\n\n';
        let links = JSON.parse(relaventlinks);
        for (j = 0; j < links.registeredandstudent.statements.length; j++) {
          result += "*" + links.registeredandstudent.statements[j] + "* \n" + links.registeredandstudent.short[j] + "\n\n";
        }
      }

      if (((query.includes("duplicate") == true) && ((query.includes("student") == true) || (query.includes("students") == true))) || ((query.includes("more") == true) && ((query.includes("student") == true) || (query.includes("students") == true)))) {
        // result += searchStatement + ' *' +query[i]+ '*\n\n';
        let links = JSON.parse(relaventlinks);
        for (j = 0; j < links.duplicateandstudent.statements.length; j++) {
          result += "*" + links.duplicateandstudent.statements[j] + "* \n" + links.duplicateandstudent.short[j] + "\n\n";
        }
      }

      if ((query.includes("home") == true) && ((query.includes("student") == true) || (query.includes("students") == true))) {
        // result += searchStatement + ' *' +query[i]+ '*\n\n';
        let links = JSON.parse(relaventlinks);
        for (j = 0; j < links.studentandhome.statements.length; j++) {
          result += "*" + links.studentandhome.statements[j] + "* \n" + links.studentandhome.short[j] + "\n\n";
        }
      }

      if ((query.includes("access") == true) && (query.includes("khan") == true) && (query.includes("academy") == true)) {
        // result += searchStatement + ' *' +query[i]+ '*\n\n';
        let links = JSON.parse(relaventlinks);
        for (j = 0; j < links.accessandkhanacademy.statements.length; j++) {
          result += "*" + links.accessandkhanacademy.statements[j] + "* \n" + links.accessandkhanacademy.short[j] + "\n\n";
        }
      }

      if ((query.includes("missing") == true) && ((query.includes("students") == true) || (query.includes("student") == true))) {
        // result += searchStatement + ' *' +query[i]+ '*\n\n';
        let links = JSON.parse(relaventlinks);
        for (j = 0; j < links.missingandstudent.statements.length; j++) {
          result += "*" + links.missingandstudent.statements[j] + "* \n" + links.missingandstudent.short[j] + "\n\n";
        }
      }

      if ((query.includes("khan") == true) && (query.includes("academy") == true)) {
        // result += searchStatement + ' *' +query[i]+ '*\n\n';
        let links = JSON.parse(relaventlinks);
        for (j = 0; j < links.KhanAcademy.statements.length; j++) {
          result += "*" + links.KhanAcademy.statements[j] + "* \n" + links.KhanAcademy.short[j] + "\n\n";
        }
      }

      for (i = 0; i < (query.length - 1); i++) {

        if (query[i] == 'password' || query[i] == 'passwords') {
          //result += searchStatement + ' *' + query[i] + '*\n\n';
          let links = JSON.parse(relaventlinks);
          for (j = 0; j < links.password.statements.length; j++) {
            result += "*" + links.password.statements[j] + "* \n" + links.password.short[j] + "\n\n";
          }
        }

        if (query[i] == 'classes' || query[i] == 'class') {
          //result += searchStatement + ' *' + query[i] + '*\n\n';
          let links = JSON.parse(relaventlinks);
          for (j = 0; j < links.class.statements.length; j++) {
            result += "*" + links.class.statements[j] + "* \n" + links.class.short[j] + "\n\n";
          }
        }
        if (query[i] == 'student' || query[i] == 'students') {
          //result += searchStatement + ' *' + query[i] + '*\n\n';
          let links = JSON.parse(relaventlinks);
          for (j = 0; j < links.student.statements.length; j++) {
            result += "*" + links.student.statements[j] + "* \n" + links.student.short[j] + "\n\n";
          }
        }
        if (query[i] == 'assignment' || query[i] == 'assignments') {
          //result += searchStatement + ' *' + query[i] + '*\n\n';
          let links = JSON.parse(relaventlinks);
          for (j = 0; j < links.assignment.statements.length; j++) {
            result += "*" + links.assignment.statements[j] + "* \n" + links.assignment.short[j] + "\n\n";
          }
        }
        if (query[i] == 'mastery') {
          //result += searchStatement + ' *' + query[i] + '*\n\n';
          let links = JSON.parse(relaventlinks);
          for (j = 0; j < links.mastery.statements.length; j++) {
            result += "*" + links.mastery.statements[j] + "* \n" + links.mastery.short[j] + "\n\n";
          }
        }
        if (query[i] == 'report' || query[i] == 'reports') {
          //result += searchStatement + ' *' + query[i] + '*\n\n';
          let links = JSON.parse(relaventlinks);
          for (j = 0; j < links.report.statements.length; j++) {
            result += "*" + links.report.statements[j] + "* \n" + links.report.short[j] + "\n\n";
          }
        }
        if (query[i] == 'progress') {
          //result += searchStatement + ' *' + query[i] + '*\n\n';
          let links = JSON.parse(relaventlinks);
          for (j = 0; j < links.progress.statements.length; j++) {
            result += "*" + links.progress.statements[j] + "* \n" + links.progress.short[j] + "\n\n";
          }
        }
        if (query[i] == 'transfer' || query[i] == 'transferred') {
          //result += searchStatement + ' *' + query[i] + '*\n\n';
          let links = JSON.parse(relaventlinks);
          for (j = 0; j < links.transfer.statements.length; j++) {
            result += "*" + links.transfer.statements[j] + "* \n" + links.transfer.short[j] + "\n\n";
          }
        }

        if (query[i] == 'emailid' || query[i] == "email") {
          //result += searchStatement + ' *' + query[i] + '*\n\n';
          let links = JSON.parse(relaventlinks);
          for (j = 0; j < links.email.statements.length; j++) {
            result += "*" + links.email.statements[j] + "* \n" + links.email.short[j] + "\n\n";
          }
        }
        if (query[i] == 'login' || query[i] == "signup") {
          //result += searchStatement + ' *' + query[i] + '*\n\n';
          let links = JSON.parse(relaventlinks);
          for (j = 0; j < links.login.statements.length; j++) {
            result += "*" + links.login.statements[j] + "* \n" + links.login.short[j] + "\n\n";
          }
        }
        if (query[i] == 'google') {
          //result += searchStatement + ' *' + query[i] + '*\n\n';
          let links = JSON.parse(relaventlinks);
          for (j = 0; j < links.google.statements.length; j++) {
            result += "*" + links.google.statements[j] + "* \n" + links.google.short[j] + "\n\n";
          }
        }
        if (query[i] == 'content') {
          //result += searchStatement + ' *' + query[i] + '*\n\n';
          let links = JSON.parse(relaventlinks);
          for (j = 0; j < links.content.statements.length; j++) {
            result += "*" + links.content.statements[j] + "* \n" + links.content.short[j] + "\n\n";
          }
        }
        if (query[i] == "due" || query[i] == "date") {
          //result += searchStatement + ' *' + query[i] + '*\n\n';
          let links = JSON.parse(relaventlinks);
          for (j = 0; j < links.duedate.statements.length; j++) {
            result += "*" + links.duedate.statements[j] + "* \n" + links.duedate.short[j] + "\n\n";
          }
        }
        if (query[i] == 'username' || query[i] == "usernames") {
          //result += searchStatement + ' *' + query[i] + '*\n\n';
          let links = JSON.parse(relaventlinks);
          for (j = 0; j < links.username.statements.length; j++) {
            result += "*" + links.username.statements[j] + "* \n" + links.username.short[j] + "\n\n";
          }
        }
        if (query[i] == 'assistant') {
          //result += searchStatement + ' *' + query[i] + '*\n\n';
          let links = JSON.parse(relaventlinks);
          for (j = 0; j < links.assistant.statements.length; j++) {
            result += "*" + links.assistant.statements[j] + "* \n" + links.assistant.short[j] + "\n\n";
          }
        }
        if (query[i] == 'assigning') {
          //result += searchStatement + ' *' + query[i] + '*\n\n';
          let links = JSON.parse(relaventlinks);
          for (j = 0; j < links.assigning.statements.length; j++) {
            result += "*" + links.assigning.statements[j] + "* \n" + links.assigning.short[j] + "\n\n";
          }
        }

        if (query[i] == 'performance') {
          //result += searchStatement + ' *' + query[i] + '*\n\n';
          let links = JSON.parse(relaventlinks);
          for (j = 0; j < links.performance.statements.length; j++) {
            result += "*" + links.performance.statements[j] + "* \n" + links.performance.short[j] + "\n\n";
          }
        }

        if (query[i] == 'score' || query[i] == "scores") {
          //result += searchStatement + ' *' + query[i] + '*\n\n';
          let links = JSON.parse(relaventlinks);
          for (j = 0; j < links.score.statements.length; j++) {
            result += "*" + links.score.statements[j] + "* \n" + links.score.short[j] + "\n\n";
          }
        }
        if (query[i] == 'progress') {
          //result += searchStatement + ' *' + query[i] + '*\n\n';
          let links = JSON.parse(relaventlinks);
          for (j = 0; j < links.progress.statements.length; j++) {
            result += "*" + links.progress.statements[j] + "* \n" + links.progress.short[j] + "\n\n";
          }
        }
        if (query[i] == 'activity') {
          //result += searchStatement + ' *' + query[i] + '*\n\n';
          let links = JSON.parse(relaventlinks);
          for (j = 0; j < links.activity.statements.length; j++) {
            result += "*" + links.activity.statements[j] + "* \n" + links.activity.short[j] + "\n\n";
          }
        }
        if (query[i] == 'error') {
          //result += searchStatement + ' *' + query[i] + '*\n\n';
          let links = JSON.parse(relaventlinks);
          for (j = 0; j < links.error.statements.length; j++) {
            result += "*" + links.error.statements[j] + "* \n" + links.error.short[j] + "\n\n";
          }
        }

        if (query[i] == 'wrong') {
          //result += searchStatement + ' *' + query[i] + '*\n\n';
          let links = JSON.parse(relaventlinks);
          for (j = 0; j < links.wrong.statements.length; j++) {
            result += "*" + links.wrong.statements[j] + "* \n" + links.wrong.short[j] + "\n\n";
          }
        }

        if (query[i] == 'remote') {
          //result += searchStatement + ' *' + query[i] + '*\n\n';
          let links = JSON.parse(relaventlinks);
          for (j = 0; j < links.remote.statements.length; j++) {
            result += "*" + links.remote.statements[j] + "* \n" + links.remote.short[j] + "\n\n";
          }
        }
        if (query[i] == 'browsers' || query[i] == 'browser') {
          //result += searchStatement + ' *' + query[i] + '*\n\n';
          let links = JSON.parse(relaventlinks);
          for (j = 0; j < links.browsers.statements.length; j++) {
            result += "*" + links.browsers.statements[j] + "* \n" + links.browsers.short[j] + "\n\n";
          }
        }
        if (query[i] == 'technology') {
          //result += searchStatement + ' *' + query[i] + '*\n\n';
          let links = JSON.parse(relaventlinks);
          for (j = 0; j < links.technology.statements.length; j++) {
            result += "*" + links.technology.statements[j] + "* \n" + links.technology.short[j] + "\n\n";
          }
        }
        if (query[i] == 'internet') {
          //result += searchStatement + ' *' + query[i] + '*\n\n';
          let links = JSON.parse(relaventlinks);
          for (j = 0; j < links.internet.statements.length; j++) {
            result += "*" + links.internet.statements[j] + "* \n" + links.internet.short[j] + "\n\n";
          }
        }
        if (query[i] == 'sat') {
          //result += searchStatement + ' *' + query[i] + '*\n\n';
          let links = JSON.parse(relaventlinks);
          for (j = 0; j < links.sat.statements.length; j++) {
            result += "*" + links.sat.statements[j] + "* \n" + links.sat.short[j] + "\n\n";
          }
        }
        if (query[i] == 'guide') {
          //result += searchStatement + ' *' + query[i] + '*\n\n';
          let links = JSON.parse(relaventlinks);
          for (j = 0; j < links.guide.statements.length; j++) {
            result += "*" + links.guide.statements[j] + "* \n" + links.guide.short[j] + "\n\n";
          }
        }
        if (query[i] == 'energy' || query[i] == 'badges' || query[i] == 'points') {
          //result += searchStatement + ' *' + query[i] + '*\n\n';
          let links = JSON.parse(relaventlinks);
          for (j = 0; j < links.energy.statements.length; j++) {
            result += "*" + links.energy.statements[j] + "* \n" + links.energy.short[j] + "\n\n";
          }
        }
        if (query[i] == 'avatars') {
          //result += searchStatement + ' *' + query[i] + '*\n\n';
          let links = JSON.parse(relaventlinks);
          for (j = 0; j < links.avatars.statements.length; j++) {
            result += "*" + links.avatars.statements[j] + "* \n" + links.avatars.short[j] + "\n\n";
          }
        }
        if (query[i] == 'languages' || query[i] == "language") {
          //result += searchStatement + ' *' + query[i] + '*\n\n';
          let links = JSON.parse(relaventlinks);
          for (j = 0; j < links.languages.statements.length; j++) {
            result += "*" + links.languages.statements[j] + "* \n" + links.languages.short[j] + "\n\n";
          }
        }
        if (query[i] == 'hindi') {
          //result += searchStatement + ' *' + query[i] + '*\n\n';
          let links = JSON.parse(relaventlinks);
          for (j = 0; j < links.Hindi.statements.length; j++) {
            result += "*" + links.Hindi.statements[j] + "* \n" + links.Hindi.short[j] + "\n\n";
          }
        }
        if (query[i] == 'punjabi') {
          //result += searchStatement + ' *' + query[i] + '*\n\n';
          let links = JSON.parse(relaventlinks);
          for (j = 0; j < links.Punjabi.statements.length; j++) {
            result += "*" + links.Punjabi.statements[j] + "* \n" + links.Punjabi.short[j] + "\n\n";
          }
        }
        if (query[i] == 'gujarati') {
          //result += searchStatement + ' *' + query[i] + '*\n\n';
          let links = JSON.parse(relaventlinks);
          for (j = 0; j < links.Gujarati.statements.length; j++) {
            result += "*" + links.Gujarati.statements[j] + "* \n" + links.Gujarati.short[j] + "\n\n";
          }
        }
        if (query[i] == 'tamil') {
          //result += searchStatement + ' *' + query[i] + '*\n\n';
          let links = JSON.parse(relaventlinks);
          for (j = 0; j < links.Tamil.statements.length; j++) {
            result += "*" + links.Tamil.statements[j] + "* \n" + links.Tamil.short[j] + "\n\n";
          }
        }

        if (query[i] == 'partner') {
          //result += searchStatement + ' *' + query[i] + '*\n\n';
          let links = JSON.parse(relaventlinks);
          for (j = 0; j < links.partner.statements.length; j++) {
            result += "*" + links.partner.statements[j] + "* \n" + links.partner.short[j] + "\n\n";
          }
        }
        if (query[i] == 'subjects' || query[i] == "subject") {
          //result += searchStatement + ' *' + query[i] + '*\n\n';
          let links = JSON.parse(relaventlinks);
          for (j = 0; j < links.subjects.statements.length; j++) {
            result += "*" + links.subjects.statements[j] + "* \n" + links.subjects.short[j] + "\n\n";
          }
        }
        if (query[i] == 'cost') {
          //result += searchStatement + ' *' + query[i] + '*\n\n';
          let links = JSON.parse(relaventlinks);
          for (j = 0; j < links.cost.statements.length; j++) {
            result += "*" + links.cost.statements[j] + "* \n" + links.cost.short[j] + "\n\n";
          }
        }
        if (query[i] == 'certificate' || query[i] == "certificates") {
          //result += searchStatement + ' *' + query[i] + '*\n\n';
          let links = JSON.parse(relaventlinks);
          for (j = 0; j < links.certificate.statements.length; j++) {
            result += "*" + links.certificate.statements[j] + "* \n" + links.certificate.short[j] + "\n\n";
          }
        }
        if (query[i] == 'privacy') {
          //result += searchStatement + ' *' + query[i] + '*\n\n';
          let links = JSON.parse(relaventlinks);
          for (j = 0; j < links.privacy.statements.length; j++) {
            result += "*" + links.privacy.statements[j] + "* \n" + links.privacy.short[j] + "\n\n";
          }
        }
        if (query[i] == 'security' || query[i] == "securties") {
          //result += searchStatement + ' *' + query[i] + '*\n\n';
          let links = JSON.parse(relaventlinks);
          for (j = 0; j < links.security.statements.length; j++) {
            result += "*" + links.security.statements[j] + "* \n" + links.security.short[j] + "\n\n";
          }
        }
        if (query[i] == 'contact' || query[i] == "contacts") {
          //result += searchStatement + ' *' + query[i] + '*\n\n';
          let links = JSON.parse(relaventlinks);
          for (j = 0; j < links.contact.statements.length; j++) {
            result += "*" + links.contact.statements[j] + "* \n" + links.contact.short[j] + "\n\n";
          }
        }
        if (query[i] == 'learnstorm') {
          //result += searchStatement + ' *' + query[i] + '*\n\n';
          let links = JSON.parse(relaventlinks);
          for (j = 0; j < links.learnstorm.statements.length; j++) {
            result += "*" + links.learnstorm.statements[j] + "* \n" + links.learnstorm.short[j] + "\n\n";
          }
        }
        if (query[i] == 'webinars' || query[i] == "webinar") {
          //result += searchStatement + ' *' + query[i] + '*\n\n';
          let links = JSON.parse(relaventlinks);
          for (j = 0; j < links.webinars.statements.length; j++) {
            result += "*" + links.webinars.statements[j] + "* \n" + links.webinars.short[j] + "\n\n";
          }
        }
        if (query[i] == 'app' || query[i] == "apps") {
          //result += searchStatement + ' *' + query[i] + '*\n\n';
          let links = JSON.parse(relaventlinks);
          for (j = 0; j < links.app.statements.length; j++) {
            result += "*" + links.app.statements[j] + "* \n" + links.app.short[j] + "\n\n";
          }
        }


        if (query[i] == 'registered' || query[i] == "register") {
          //result += searchStatement + ' *' + query[i] + '*\n\n';
          let links = JSON.parse(relaventlinks);
          for (j = 0; j < links.registered.statements.length; j++) {
            result += "*" + links.registered.statements[j] + "* \n" + links.registered.short[j] + "\n\n";
          }
        }

        if (query[i] == 'videos' || query[i] == "video") {
          //result += searchStatement + ' *' + query[i] + '*\n\n';
          let links = JSON.parse(relaventlinks);
          for (j = 0; j < links.video.statements.length; j++) {
            result += "*" + links.video.statements[j] + "* \n" + links.video.short[j] + "\n\n";
          }
        }
        if (query[i] == 'coaching' || query[i] == "stop") {
          //result += searchStatement + ' *' + query[i] + '*\n\n';
          let links = JSON.parse(relaventlinks);
          for (j = 0; j < links.coaching.statements.length; j++) {
            result += "*" + links.coaching.statements[j] + "* \n" + links.coaching.short[j] + "\n\n";
          }
        }
        if (query[i] == 'volunteer') {
          //result += searchStatement + ' *' + query[i] + '*\n\n';
          let links = JSON.parse(relaventlinks);
          for (j = 0; j < links.volunteer.statements.length; j++) {
            result += "*" + links.volunteer.statements[j] + "* \n" + links.volunteer.short[j] + "\n\n";
          }
        }
        if (query[i] == 'event' || query[i] == "events") {
          //result += searchStatement + ' *' + query[i] + '*\n\n';
          let links = JSON.parse(relaventlinks);
          for (j = 0; j < links.event.statements.length; j++) {
            result += "*" + links.event.statements[j] + "* \n" + links.event.short[j] + "\n\n";
          }
        }
        if (query[i] == 'press') {
          //result += searchStatement + ' *' + query[i] + '*\n\n';
          let links = JSON.parse(relaventlinks);
          for (j = 0; j < links.press.statements.length; j++) {
            result += "*" + links.press.statements[j] + "* \n" + links.press.short[j] + "\n\n";
          }
        }
        if (query[i] == 'started') {
          //result += searchStatement + ' *' + query[i] + '*\n\n';
          let links = JSON.parse(relaventlinks);
          for (j = 0; j < links.getstarted.statements.length; j++) {
            result += "*" + links.getstarted.statements[j] + "* \n" + links.getstarted.short[j] + "\n\n";
          }
        }
        if (query[i] == 'start') {
          //result += searchStatement + ' *' + query[i] + '*\n\n';
          let links = JSON.parse(relaventlinks);
          for (j = 0; j < links.start.statements.length; j++) {
            result += "*" + links.start.statements[j] + "* \n" + links.start.short[j] + "\n\n";
          }
        }
        if (query[i] == 'childhood') {
          //result += searchStatement + ' *' + query[i] + '*\n\n';
          let links = JSON.parse(relaventlinks);
          for (j = 0; j < links.childhood.statements.length; j++) {
            result += "*" + links.childhood.statements[j] + "* \n" + links.childhood.short[j] + "\n\n";
          }
        }
        if (query[i] == 'access' || query[i] == "sites") {
          //result += searchStatement + ' *' + query[i] + '*\n\n';
          let links = JSON.parse(relaventlinks);
          for (j = 0; j < links.access.statements.length; j++) {
            result += "*" + links.access.statements[j] + "* \n" + links.access.short[j] + "\n\n";
          }
        }
        if (query[i] == "ncert" || query[i] == "cbse" || query[i] == "icse" || query[i] == "curriculum" || query[i] == "mapping") {
          //result += searchStatement + ' *' + query[i] + '*\n\n';
          let links = JSON.parse(relaventlinks);
          for (j = 0; j < links.NCERT.statements.length; j++) {
            result += "*" + links.NCERT.statements[j] + "* \n" + links.NCERT.short[j] + "\n\n";
          }
        }
        if (query[i] == 'youtube') {
          //result += searchStatement + ' *' + query[i] + '*\n\n';
          let links = JSON.parse(relaventlinks);
          for (j = 0; j < links.youtube.statements.length; j++) {
            result += "*" + links.youtube.statements[j] + "* \n" + links.youtube.short[j] + "\n\n";
          }
        }
      }

      context.simpledb.doPut("customerquery_" + mobileNumber + "_" + currentdate.getTime(), JSON.stringify('{"date_and_time" : "' + datetime + ',"query":"' + message + '","mobilenumber":' + mobileNumber + ',"profileName":"' + profileName + '"}'));
      delete context.simpledb.roomleveldata.wordlist;
      delete context.simpledb.roomleveldata.feedback;
      context.simpledb.roomleveldata.squery = "on";
      Chat.sendToRocketChat(context, event, [result + "\n\n" + "*Type 99* to start with the main menu." + "\n\nStill you have queries ?\n\n*Type 1* for *Yes*\n\n*Type 2* for *No*\n\n*Type #* and write your queries. Our customer care executive reply you."]);
    } else {
      context.simpledb.roomleveldata.count = 0;
      delete context.simpledb.roomleveldata.squery;
      delete context.simpledb.roomleveldata.feedback;
      delete context.simpledb.roomleveldata.wordlist;
      delete context.simpledb.roomleveldata.category;
      delete context.simpledb.roomleveldata.maincategory;
      delete context.simpledb.roomleveldata.subcategory;
      delete context.simpledb.roomleveldata.subsubcategory;
      context.simpledb.doPut("customerquery_" + mobileNumber + "_" + currentdate.getTime(), JSON.stringify('{"date_and_time" : "' + datetime + ',"query":"' + message + '","mobilenumber":' + mobileNumber + ',"profileName":"' + profileName + '"}'));
      Chat.sendToRocketChat(context, event, [incomprehensive + "\n\n" + startagain_welComeMessage + "\n\n" + last_thankYouMessage]);
      // callback(context,event);
    }
  } catch (error) {
    console.log(error);
    context.simpledb.roomleveldata.count = 0;
    delete context.simpledb.roomleveldata.squery;
    delete context.simpledb.roomleveldata.feedback;
    delete context.simpledb.roomleveldata.wordlist;
    delete context.simpledb.roomleveldata.category;
    delete context.simpledb.roomleveldata.maincategory;
    delete context.simpledb.roomleveldata.subcategory;
    delete context.simpledb.roomleveldata.subsubcategory;
    Chat.sendToRocketChat(context, event, [botunavailable]);
  }
}


module.exports.satisfactionYes = function (context, event, message, profileName, mobileNumber) {
  try {
    var currentdate = new Date();
    var datetime = currentdate.getDate() + "/"
      + (currentdate.getMonth() + 1) + "/"
      + currentdate.getFullYear() + " @ "
      + currentdate.getHours() + ":"
      + currentdate.getMinutes() + ":"
      + currentdate.getSeconds();
    context.simpledb.doPut("feedback_" + mobileNumber + "_" + currentdate.getTime(), JSON.stringify('{"date_and_time" : "' + datetime + ',"feedback":"' + message + '","mobilenumber":' + mobileNumber + ',"profileName":"' + profileName + '"}'));
    context.simpledb.roomleveldata.feedback = "yes";
    delete context.simpledb.roomleveldata.count;
    delete context.simpledb.roomleveldata.squery;
    delete context.simpledb.roomleveldata.wordlist;
    delete context.simpledb.roomleveldata.category;
    delete context.simpledb.roomleveldata.maincategory;
    delete context.simpledb.roomleveldata.subcategory;
    delete context.simpledb.roomleveldata.subsubcategory;
    Chat.sendToRocketChat(context, event, [thankYouMessage]);
  } catch (error) {
    console.log(error);
    delete context.simpledb.roomleveldata.count;
    delete context.simpledb.roomleveldata.squery;
    delete context.simpledb.roomleveldata.feedback;
    delete context.simpledb.roomleveldata.wordlist;
    delete context.simpledb.roomleveldata.category;
    delete context.simpledb.roomleveldata.maincategory;
    delete context.simpledb.roomleveldata.subcategory;
    delete context.simpledb.roomleveldata.subsubcategory;
    Chat.sendToRocketChat(context, event, [botunavailable]);
  }
}

module.exports.satisfactionNo = function (context, event, message, profileName, mobileNumber) {
  try {
    var currentdate = new Date();
    var datetime = currentdate.getDate() + "/"
      + (currentdate.getMonth() + 1) + "/"
      + currentdate.getFullYear() + " @ "
      + currentdate.getHours() + ":"
      + currentdate.getMinutes() + ":"
      + currentdate.getSeconds();
    context.simpledb.doPut("feedback_" + mobileNumber + "_" + currentdate.getTime(), JSON.stringify('{"date_and_time" : "' + datetime + ',"feedback":"' + message + '","mobilenumber":' + mobileNumber + ',"profileName":"' + profileName + '"}'));
    context.simpledb.roomleveldata.feedback = "no";
    delete context.simpledb.roomleveldata.count;
    delete context.simpledb.roomleveldata.squery;
    delete context.simpledb.roomleveldata.wordlist;
    delete context.simpledb.roomleveldata.category;
    delete context.simpledb.roomleveldata.maincategory;
    delete context.simpledb.roomleveldata.subcategory;
    delete context.simpledb.roomleveldata.subsubcategory;
    Chat.sendToRocketChat(context, event, [disatisfaction + "\n\n" + askQuery]);

  } catch (error) {
    console.log(error);
    delete context.simpledb.roomleveldata.count;
    delete context.simpledb.roomleveldata.squery;
    delete context.simpledb.roomleveldata.feedback;
    delete context.simpledb.roomleveldata.wordlist;
    delete context.simpledb.roomleveldata.category;
    delete context.simpledb.roomleveldata.maincategory;
    delete context.simpledb.roomleveldata.subcategory;
    delete context.simpledb.roomleveldata.subsubcategory;
    Chat.sendToRocketChat(context, event, [botunavailable]);
  }
}

module.exports.saveCustomFeedback = function (context, event, message, profileName, mobileNumber) {
  try {
    var currentdate = new Date();
    var datetime = currentdate.getDate() + "/"
      + (currentdate.getMonth() + 1) + "/"
      + currentdate.getFullYear() + " @ "
      + currentdate.getHours() + ":"
      + currentdate.getMinutes() + ":"
      + currentdate.getSeconds();
    context.simpledb.doPut("feedback_" + mobileNumber + "_" + currentdate.getTime(), JSON.stringify('{"date_and_time" : "' + datetime + ',"feedback":"' + message + '","mobilenumber":' + mobileNumber + ',"profileName":"' + profileName + '"}'));
    delete context.simpledb.roomleveldata.squery;
    delete context.simpledb.roomleveldata.count;
    delete context.simpledb.roomleveldata.feedback;
    delete context.simpledb.roomleveldata.wordlist;
    delete context.simpledb.roomleveldata.category;
    delete context.simpledb.roomleveldata.maincategory;
    delete context.simpledb.roomleveldata.subcategory;
    delete context.simpledb.roomleveldata.subsubcategory;
    Chat.sendToRocketChat(context, event, ["Thank you very much for your valueable feedback.\n\nPlease visit www.khanacademy.org and keep learning."]);
  } catch (error) {
    console.log(error);
    delete context.simpledb.roomleveldata.count;
    delete context.simpledb.roomleveldata.squery;
    delete context.simpledb.roomleveldata.feedback;
    delete context.simpledb.roomleveldata.wordlist;
    delete context.simpledb.roomleveldata.category;
    delete context.simpledb.roomleveldata.maincategory;
    delete context.simpledb.roomleveldata.subcategory;
    delete context.simpledb.roomleveldata.subsubcategory;
    Chat.sendToRocketChat(context, event, [botunavailable]);
  }
}

module.exports.questionAndAnswers = function (context, event, message) {
  try {
    let count = context.simpledb.roomleveldata.count;
    let maincategory = context.simpledb.roomleveldata.maincategory;
    let category = context.simpledb.roomleveldata.category;
    let subcategory = context.simpledb.roomleveldata.subcategory;
    let subsubcategory = context.simpledb.roomleveldata.subsubcategory;
    let text = '';
    let i;
    //**************************************************************Start Main Category*******************************************//
    if (count == 0 && (typeof maincategory == 'undefined') && (typeof category == 'undefined') && (typeof subcategory == 'undefined')
      && (typeof subsubcategory == 'undefined')) {

      console.log(mainCtg_Inputs.includes(message));
      if ((typeof maincategory == 'undefined') && (mainCtg_Inputs.includes(message) == true)) {
        context.simpledb.roomleveldata.maincategory = parseInt(message);
      } else {
        Chat.sendToRocketChat(context, event, [unidentifiedTextResponse]);
      }

      if (message == 1) {
        let categories = JSON.parse(ctgTeacher);
        for (i = 0; i < categories.ctgTeacher.length; i++) {
          text += "*Type " + (i + 1) + "* " + categories.ctgTeacher[i] + "\n\n";
        }
        text += backToMainMenu;
        context.simpledb.roomleveldata.count = parseInt(count) + 1;
        Chat.sendToRocketChat(context, event, [text]);
      }
      if (message == 2) {
        let categories = JSON.parse(ctgStudent);
        for (i = 0; i < categories.ctgStudent.length; i++) {
          text += "*Type " + (i + 1) + "* " + categories.ctgStudent[i] + "\n\n";
        }
        text += backToMainMenu;
        context.simpledb.roomleveldata.count = parseInt(count) + 1;
        Chat.sendToRocketChat(context, event, [text]);
      }
      if (message == 3) {
        let categories = JSON.parse(ctgParent);
        for (i = 0; i < categories.ctgParent.length; i++) {
          text += "*Type " + (i + 1) + "* " + categories.ctgParent[i] + "\n\n";
        }
        text += backToMainMenu;
        context.simpledb.roomleveldata.count = parseInt(count) + 1;
        Chat.sendToRocketChat(context, event, [text]);
      }
      if (message == 4) {
        let categories = JSON.parse(subCtgAdministrator);
        for (i = 0; i < categories.subCtgAdministrator.length; i++) {
          text += "*Type " + (i + 1) + "* " + categories.subCtgAdministrator[i] + "\n\n";
        }
        text += backToMainMenu;
        context.simpledb.roomleveldata.count = parseInt(count) + 1;
        Chat.sendToRocketChat(context, event, [text]);
      }
      // else
      //   if (message == 5) {
      //     let categories = JSON.parse(ctgLearnStorm);
      //     for (i = 0; i < categories.ctgLearnStorm.length; i++) {
      //       text += "*Type " + (i + 1) + "* " + categories.ctgLearnStorm[i] + "\n\n";
      //     }
      //     text += backToMainMenu;
      //     context.simpledb.roomleveldata.count = parseInt(count) + 1;
      //     Chat.sendToRocketChat(context, event, [text]);
      //   }
      // else {
      //   context.simpledb.roomleveldata.count = 0;
      //   delete context.simpledb.roomleveldata.category;
      //   delete context.simpledb.roomleveldata.maincategory;
      //   delete context.simpledb.roomleveldata.subcategory;
      //   delete context.simpledb.roomleveldata.subsubcategory;
      //   Chat.sendToRocketChat(context, event, [welComeMessage]);
      // }
    }
    //**************************************************************Stop Main Category*******************************************//
    /*******************************************Student Category Start******************************************************** */
    else
      if (count == 1 && maincategory == 2 && typeof category == 'undefined') {
        if (typeof category == 'undefined' && (student_ctg.includes(message) == true)) {
          context.simpledb.roomleveldata.category = parseInt(message);
        } else {
          Chat.sendToRocketChat(context, event, [unidentifiedTextResponse]);
        }
        if (message == 1) {
          let categories = JSON.parse(subCtgStudent);
          for (i = 0; i < categories.subCtgStudent.value_1.length; i++) {
            text += "*Type " + (i + 1) + "* " + categories.subCtgStudent.value_1[i] + "\n\n";
          }
          text += backToMainMenu + "\n" + backToPreviousMenuMessage;
          context.simpledb.roomleveldata.count = parseInt(count) + 1;
          Chat.sendToRocketChat(context, event, [text]);
          // callback();
        }
        if (message == 2) {
          let categories = JSON.parse(subCtgStudent);
          text += student_technologyConsideration + "\n\n";
          for (i = 0; i < categories.subCtgStudent.value_2.length; i++) {
            text += "*Type " + (i + 1) + "* " + categories.subCtgStudent.value_2[i] + "\n\n";
          }
          text += backToMainMenu + "\n" + backToPreviousMenuMessage;
          context.simpledb.roomleveldata.count = parseInt(count) + 1;
          Chat.sendToRocketChat(context, event, [text]);
        }
        if (message == 3) {
          let categories = JSON.parse(subCtgStudent);
          for (i = 0; i < categories.subCtgStudent.value_3.length; i++) {
            text += "*Type " + (i + 1) + "* " + categories.subCtgStudent.value_3[i] + "\n\n";
          }
          text += backToMainMenu + "\n" + backToPreviousMenuMessage;
          context.simpledb.roomleveldata.count = parseInt(count) + 1;
          Chat.sendToRocketChat(context, event, [text]);
        }
        if (message == 4) {
          let categories = JSON.parse(subCtgStudent);
          for (i = 0; i < categories.subCtgStudent.value_4.length; i++) {
            text += "*Type " + (i + 1) + "* " + categories.subCtgStudent.value_4[i] + "\n\n";
          }
          text += backToMainMenu + "\n" + backToPreviousMenuMessage;
          context.simpledb.roomleveldata.count = parseInt(count) + 1;
          Chat.sendToRocketChat(context, event, [text]);
        }
      } else
        if (count == 2 && maincategory == 2 && message == 0 && (category >= 1 && category <= 4)) {
          let categories = JSON.parse(ctgStudent);
          for (i = 0; i < categories.ctgStudent.length; i++) {
            text += "*Type " + (i + 1) + "* " + categories.ctgStudent[i] + "\n\n";
          }
          text += backToMainMenu;

          delete context.simpledb.roomleveldata.category;
          context.simpledb.roomleveldata.count = parseInt(count) - 1;

          Chat.sendToRocketChat(context, event, [text]);
        } else
          if (count == 2 && maincategory == 2 && (category >= 1 && category <= 4) &&
            (typeof subcategory == 'undefined' || (subcategory >= 1 && subcategory <= 5))) {

            let categories = JSON.parse(answersStudent);
            let index = parseInt(message) - 1;
            if (typeof subcategory == 'undefined' && category == 1 && (student_sub_ctg1.includes(message) == true)) {
              context.simpledb.roomleveldata.subcategory = parseInt(message);
              subcategory = context.simpledb.roomleveldata.subcategory;
              text += categories.answersStudent.value_1_1[index] + "\n\n";
              text += backToMainMenu + "\n" + backToPreviousMenuMessage + "\n\n" + satisfiedReview + "\n" + notSatisfiedReview;
              context.simpledb.roomleveldata.count = parseInt(count) + 1;
              Chat.sendToRocketChat(context, event, [text]);
            } else if (typeof subcategory == 'undefined' && category == 2 && (student_sub_ctg2.includes(message) == true)) {
              context.simpledb.roomleveldata.subcategory = parseInt(message);
              subcategory = context.simpledb.roomleveldata.subcategory;
              text += categories.answersStudent.value_2_1[index] + "\n\n";
              text += backToMainMenu + "\n" + backToPreviousMenuMessage + "\n\n" + satisfiedReview + "\n" + notSatisfiedReview;
              context.simpledb.roomleveldata.count = parseInt(count) + 1;
              Chat.sendToRocketChat(context, event, [text]);
            } else if (typeof subcategory == 'undefined' && category == 3 && (student_sub_ctg3.includes(message) == true)) {
              context.simpledb.roomleveldata.subcategory = parseInt(message);
              subcategory = context.simpledb.roomleveldata.subcategory;
              text += categories.answersStudent.value_3_1[index] + "\n\n";
              text += backToMainMenu + "\n" + backToPreviousMenuMessage + "\n\n" + satisfiedReview + "\n" + notSatisfiedReview;
              context.simpledb.roomleveldata.count = parseInt(count) + 1;
              Chat.sendToRocketChat(context, event, [text]);
            } else if (typeof subcategory == 'undefined' && category == 4 && (student_sub_ctg4.includes(message) == true)) {
              context.simpledb.roomleveldata.subcategory = parseInt(message);
              subcategory = context.simpledb.roomleveldata.subcategory;
              text += categories.answersStudent.value_4_1[index] + "\n\n";
              text += backToMainMenu + "\n" + backToPreviousMenuMessage + "\n\n" + satisfiedReview + "\n" + notSatisfiedReview;
              context.simpledb.roomleveldata.count = parseInt(count) + 1;
              Chat.sendToRocketChat(context, event, [text]);
            } else {
              Chat.sendToRocketChat(context, event, [unidentifiedTextResponse]);
            }
          }
          else
            if (count == 3 && maincategory == 2 && message == 0 && (category >= 1 && category <= 4)
              && (subcategory >= 1 && subcategory <= 5)) {

              let categories = JSON.parse(subCtgStudent);
              if ((subcategory >= 1 && subcategory <= 5) && category == 1) {
                for (i = 0; i < categories.subCtgStudent.value_1.length; i++) {
                  text += "*Type " + (i + 1) + "* " + categories.subCtgStudent.value_1[i] + "\n\n";
                }
              }
              if ((subcategory >= 1 && subcategory <= 5) && category == 2) {
                for (i = 0; i < categories.subCtgStudent.value_2.length; i++) {
                  text += "*Type " + (i + 1) + "* " + categories.subCtgStudent.value_2[i] + "\n\n";
                }
              }
              if ((subcategory >= 1 && subcategory <= 5) && category == 3) {
                for (i = 0; i < categories.subCtgStudent.value_3.length; i++) {
                  text += "*Type " + (i + 1) + "* " + categories.subCtgStudent.value_3[i] + "\n\n";
                }
              }
              if ((subcategory >= 1 && subcategory <= 5) && category == 4) {
                for (i = 0; i < categories.subCtgStudent.value_4.length; i++) {
                  text += "*Type " + (i + 1) + "* " + categories.subCtgStudent.value_4[i] + "\n\n";
                }
              }

              delete context.simpledb.roomleveldata.subcategory;
              context.simpledb.roomleveldata.count = parseInt(count) - 1;

              text += backToMainMenu + "\n" + backToPreviousMenuMessage;
              Chat.sendToRocketChat(context, event, [text]);
            }
            /****************************************Student Category End*******************************************************/
            /****************************************Parent Category Start******************************************************/
            else
              if (count == 1 && maincategory == 3 && typeof category == 'undefined') {
                if (typeof category == 'undefined' && parent_ctg.includes(message) == true) {
                  context.simpledb.roomleveldata.category = parseInt(message);
                } else {
                  Chat.sendToRocketChat(context, event, [unidentifiedTextResponse]);
                }
                if (message == 1) {
                  let categories = JSON.parse(subCtgParent);
                  for (i = 0; i < categories.subCtgParent.value_1.length; i++) {
                    text += "*Type " + (i + 1) + "* " + categories.subCtgParent.value_1[i] + "\n\n";
                  }
                  text += backToMainMenu + "\n" + backToPreviousMenuMessage;
                  context.simpledb.roomleveldata.count = parseInt(count) + 1;
                  Chat.sendToRocketChat(context, event, [text]);
                }
                if (message == 2) {
                  let categories = JSON.parse(subCtgParent);
                  text += student_technologyConsideration + "\n\n";
                  for (i = 0; i < categories.subCtgParent.value_2.length; i++) {
                    text += "*Type " + (i + 1) + "* " + categories.subCtgParent.value_2[i] + "\n\n";
                  }
                  text += backToMainMenu + "\n" + backToPreviousMenuMessage;
                  context.simpledb.roomleveldata.count = parseInt(count) + 1;
                  Chat.sendToRocketChat(context, event, [text]);
                }
                if (message == 3) {
                  let categories = JSON.parse(subCtgParent);
                  for (i = 0; i < categories.subCtgParent.value_3.length; i++) {
                    text += "*Type " + (i + 1) + "* " + categories.subCtgParent.value_3[i] + "\n\n";
                  }
                  text += backToMainMenu + "\n" + backToPreviousMenuMessage;
                  context.simpledb.roomleveldata.count = parseInt(count) + 1;
                  Chat.sendToRocketChat(context, event, [text]);
                }
              } else
                if (count == 2 && maincategory == 3 && message == 0 && (category >= 1 && category <= 3)) {
                  let categories = JSON.parse(ctgParent);
                  for (i = 0; i < categories.ctgParent.length; i++) {
                    text += "*Type " + (i + 1) + "* " + categories.ctgParent[i] + "\n\n";
                  }
                  text += backToMainMenu;

                  delete context.simpledb.roomleveldata.category;
                  context.simpledb.roomleveldata.count = parseInt(count) - 1;

                  Chat.sendToRocketChat(context, event, [text]);
                } else
                  if (count == 2 && maincategory == 3 && (category >= 1 && category <= 3) &&
                    (typeof subcategory == 'undefined' || (subcategory >= 1 && subcategory <= 6))) {

                    let categories = JSON.parse(answersParent);
                    let index = parseInt(message) - 1;
                    if (typeof subcategory == 'undefined' && category == 1 && (parent_sub_ctg1.includes(message) == true)) {
                      context.simpledb.roomleveldata.subcategory = parseInt(message);
                      subcategory = context.simpledb.roomleveldata.subcategory;
                      text += categories.answersParent.value_1_1[index] + "\n\n";
                      text += backToMainMenu + "\n" + backToPreviousMenuMessage + "\n\n" + satisfiedReview + "\n" + notSatisfiedReview;
                      context.simpledb.roomleveldata.count = parseInt(count) + 1;
                      Chat.sendToRocketChat(context, event, [text]);
                    } else if (typeof subcategory == 'undefined' && category == 2 && (parent_sub_ctg2.includes(message) == true)) {
                      context.simpledb.roomleveldata.subcategory = parseInt(message);
                      subcategory = context.simpledb.roomleveldata.subcategory;
                      text += categories.answersParent.value_2_1[index] + "\n\n";
                      text += backToMainMenu + "\n" + backToPreviousMenuMessage + "\n\n" + satisfiedReview + "\n" + notSatisfiedReview;
                      context.simpledb.roomleveldata.count = parseInt(count) + 1;
                      Chat.sendToRocketChat(context, event, [text]);
                    } else if (typeof subcategory == 'undefined' && category == 3 && (parent_sub_ctg3.includes(message) == true)) {
                      context.simpledb.roomleveldata.subcategory = parseInt(message);
                      subcategory = context.simpledb.roomleveldata.subcategory;
                      text += categories.answersParent.value_3_1[index] + "\n\n";
                      text += backToMainMenu + "\n" + backToPreviousMenuMessage + "\n\n" + satisfiedReview + "\n" + notSatisfiedReview;
                      context.simpledb.roomleveldata.count = parseInt(count) + 1;
                      Chat.sendToRocketChat(context, event, [text]);
                    } else {
                      Chat.sendToRocketChat(context, event, [unidentifiedTextResponse]);
                    }
                  } else
                    if (count == 3 && maincategory == 3 && message == 0 && (category >= 1 && category <= 3)
                      && (subcategory >= 1 && subcategory <= 6)) {

                      let categories = JSON.parse(subCtgParent);
                      if ((subcategory >= 1 && subcategory <= 6) && category == 1) {
                        for (i = 0; i < categories.subCtgParent.value_1.length; i++) {
                          text += "*Type " + (i + 1) + "* " + categories.subCtgParent.value_1[i] + "\n\n";
                        }
                      }
                      if ((subcategory >= 1 && subcategory <= 6) && category == 2) {
                        for (i = 0; i < categories.subCtgParent.value_2.length; i++) {
                          text += "*Type " + (i + 1) + "* " + categories.subCtgParent.value_2[i] + "\n\n";
                        }
                      }
                      if ((subcategory >= 1 && subcategory <= 6) && category == 3) {
                        for (i = 0; i < categories.subCtgParent.value_3.length; i++) {
                          text += "*Type " + (i + 1) + "* " + categories.subCtgParent.value_3[i] + "\n\n";
                        }
                      }
                      delete context.simpledb.roomleveldata.subcategory;
                      context.simpledb.roomleveldata.count = parseInt(count) - 1;

                      text += backToMainMenu + "\n" + backToPreviousMenuMessage;
                      Chat.sendToRocketChat(context, event, [text]);
                    }
                    /****************************************Parent Category End***********************************************************/
                    /****************************************Administrator Category Start******************************************************/
                    else
                      if (count == 1 && maincategory == 4) {
                        if (administrator_sub_ctg1.includes(message) == true) {
                          let categories = JSON.parse(answersAdministrator);
                          let index = parseInt(message) - 1;
                          text += categories.answersAdministrator[index] + "\n\n";
                          text += backToMainMenu + "\n" + backToPreviousMenuMessage + "\n\n" + satisfiedReview + "\n" + notSatisfiedReview;
                          context.simpledb.roomleveldata.count = parseInt(count) + 1;
                          Chat.sendToRocketChat(context, event, [text]);
                        } else {
                          Chat.sendToRocketChat(context, event, [unidentifiedTextResponse]);
                        }
                      } else
                        if (count == 2 && maincategory == 4 && message == 0) {
                          let categories = JSON.parse(subCtgAdministrator);
                          for (i = 0; i < categories.subCtgAdministrator.length; i++) {
                            text += "*Type " + (i + 1) + "* " + categories.subCtgAdministrator[i] + "\n\n";
                          }
                          text += backToMainMenu;
                          context.simpledb.roomleveldata.count = parseInt(count) - 1;
                          Chat.sendToRocketChat(context, event, [text]);
                        }
                        // else
                        //   if (count == 2 && maincategory == 4 && (subcategory >= 1 && subcategory <= 5)) {
                        //     let categories = JSON.parse(answersAdministrator);
                        //     let index = parseInt(message) - 1;
                        //     text += categories.answersAdministrator[index] + "\n\n";
                        //     text += backToMainMenu + "\n" + backToPreviousMenuMessage + "\n\n" + satisfiedReview + "\n" + notSatisfiedReview;
                        //     context.simpledb.roomleveldata.count = parseInt(count) + 1;
                        //     Chat.sendToRocketChat(context, event, [text]);
                        //   }
                        /****************************************Administrator Category End********************************************************/

                        /****************************************LearnStorm Category Start********************************************************/
                        // else
                        //   if (count == 1 && maincategory == 5 && typeof category == 'undefined') {
                        //     if (typeof category == 'undefined') { context.simpledb.roomleveldata.category = parseInt(message); }
                        //     if (message == 1) {
                        //       let categories = JSON.parse(subCtgLearnStorm);
                        //       for (i = 0; i < categories.subCtgLearnStorm.value_1.length; i++) {
                        //         text += "*Type " + (i + 1) + "* " + categories.subCtgLearnStorm.value_1[i] + "\n\n";
                        //       }
                        //       text += backToMainMenu + "\n" + backToPreviousMenuMessage;
                        //       context.simpledb.roomleveldata.count = parseInt(count) + 1;
                        //       Chat.sendToRocketChat(context, event, [text]);
                        //     } else
                        //       if (message == 2) {
                        //         let categories = JSON.parse(subCtgLearnStorm);
                        //         for (i = 0; i < categories.subCtgLearnStorm.value_2.length; i++) {
                        //           text += "*Type " + (i + 1) + "* " + categories.subCtgLearnStorm.value_2[i] + "\n\n";
                        //         }
                        //         text += backToMainMenu + "\n" + backToPreviousMenuMessage;
                        //         context.simpledb.roomleveldata.count = parseInt(count) + 1;
                        //         Chat.sendToRocketChat(context, event, [text]);
                        //       } else
                        //         if (message == 3) {
                        //           let categories = JSON.parse(subCtgLearnStorm);
                        //           for (i = 0; i < categories.subCtgLearnStorm.value_3.length; i++) {
                        //             text += "*Type " + (i + 1) + "* " + categories.subCtgLearnStorm.value_3[i] + "\n\n";
                        //           }
                        //           text += backToMainMenu + "\n" + backToPreviousMenuMessage;
                        //           context.simpledb.roomleveldata.count = parseInt(count) + 1;
                        //           Chat.sendToRocketChat(context, event, [text]);
                        //         }
                        //         else
                        //           if (message == 4) {
                        //             let categories = JSON.parse(subCtgLearnStorm);
                        //             text += teacher_technologyConsideration + "\n\n";
                        //             for (i = 0; i < categories.subCtgLearnStorm.value_4.length; i++) {
                        //               text += "*Type " + (i + 1) + "* " + categories.subCtgLearnStorm.value_4[i] + "\n\n";
                        //             }
                        //             text += backToMainMenu + "\n" + backToPreviousMenuMessage;
                        //             context.simpledb.roomleveldata.count = parseInt(count) + 1;
                        //             Chat.sendToRocketChat(context, event, [text]);
                        //           }
                        //   } else
                        //     if (count == 2 && maincategory == 5 && message == 0 && (category >= 1 && category <= 4)) {

                        //       let categories = JSON.parse(ctgLearnStorm);
                        //       for (i = 0; i < categories.ctgLearnStorm.length; i++) {
                        //         text += "*Type " + (i + 1) + "* " + categories.ctgLearnStorm[i] + "\n\n";
                        //       }

                        //       delete context.simpledb.roomleveldata.category;
                        //       context.simpledb.roomleveldata.count = parseInt(count) - 1;

                        //       text += backToMainMenu;
                        //       Chat.sendToRocketChat(context, event, [text]);
                        //     } else
                        //       if (count == 2 && maincategory == 5 && (category == 1 || category == 2 || category == 4) &&
                        //         (typeof subcategory == 'undefined' || (subcategory >= 1 && subcategory <= 10))) {
                        //         if (typeof subcategory == 'undefined') {
                        //           context.simpledb.roomleveldata.subcategory = parseInt(message);
                        //           subcategory = context.simpledb.roomleveldata.subcategory;
                        //         }
                        //         let categories = JSON.parse(answersLearnStorm);
                        //         let index = parseInt(message) - 1;
                        //         if ((subcategory >= 1 && subcategory <= 10) && category == 1) {
                        //           text += categories.answersLearnStorm.value_1_1[index] + "\n\n";
                        //         }
                        //         if ((subcategory >= 1 && subcategory <= 10) && category == 2) {
                        //           text += categories.answersLearnStorm.value_2_1[index] + "\n\n";
                        //         }
                        //         if ((subcategory >= 1 && subcategory <= 10) && category == 4) {
                        //           text += categories.answersLearnStorm.value_4_1[index] + "\n\n";
                        //         }
                        //         text += backToMainMenu + "\n" + backToPreviousMenuMessage + "\n\n" + satisfiedReview + "\n" + notSatisfiedReview;
                        //         context.simpledb.roomleveldata.count = parseInt(count) + 1;
                        //         Chat.sendToRocketChat(context, event, [text]);
                        //       } else
                        //         if (count == 3 && maincategory == 5 && message == 0 && (category == 1 || category == 2 || category == 4)
                        //           && (subcategory >= 1 && subcategory <= 10)) {

                        //           let categories = JSON.parse(subCtgLearnStorm);
                        //           if ((subcategory >= 1 && subcategory <= 10) && category == 1) {
                        //             for (i = 0; i < categories.subCtgLearnStorm.value_1.length; i++) {
                        //               text += "*Type " + (i + 1) + "* " + categories.subCtgLearnStorm.value_1[i] + "\n\n";
                        //             }
                        //           }
                        //           if ((subcategory >= 1 && subcategory <= 10) && category == 2) {
                        //             for (i = 0; i < categories.subCtgLearnStorm.value_2.length; i++) {
                        //               text += "*Type " + (i + 1) + "* " + categories.subCtgLearnStorm.value_2[i] + "\n\n";
                        //             }
                        //           }
                        //           if ((subcategory >= 1 && subcategory <= 10) && category == 4) {
                        //             for (i = 0; i < categories.subCtgLearnStorm.value_4.length; i++) {
                        //               text += "*Type " + (i + 1) + "* " + categories.subCtgLearnStorm.value_4[i] + "\n";
                        //             }
                        //           }

                        //           delete context.simpledb.roomleveldata.subcategory;
                        //           context.simpledb.roomleveldata.count = parseInt(count) - 1;

                        //           text += backToMainMenu + "\n" + backToPreviousMenuMessage;
                        //           Chat.sendToRocketChat(context, event, [text]);
                        //         } else
                        //           if (count == 4 && maincategory == 5 && message == 0 && (category == 1 || category == 2 || category == 4)
                        //             && (subcategory >= 1 && subcategory <= 10)) {

                        //             let categories = JSON.parse(subcategory);
                        //             if ((subcategory >= 1 && subcategory <= 10) && category == 1) {
                        //               for (i = 0; i < categories.subCtgLearnStorm.value_1.length; i++) {
                        //                 text += "*Type " + (i + 1) + "* " + categories.subCtgLearnStorm.value_1[i] + "\n\n";
                        //               }
                        //             }

                        //             if ((subcategory >= 1 && subcategory <= 10) && category == 2) {
                        //               for (i = 0; i < categories.subCtgLearnStorm.value_2.length; i++) {
                        //                 text += "*Type " + (i + 1) + "* " + categories.subCtgLearnStorm.value_2[i] + "\n\n";
                        //               }
                        //             }

                        //             if ((subcategory >= 1 && subcategory <= 10) && category == 4) {
                        //               for (i = 0; i < categories.subCtgLearnStorm.value_4.length; i++) {
                        //                 text += "*Type " + (i + 1) + "* " + categories.subCtgLearnStorm.value_4[i] + "\n\n";
                        //               }
                        //             }

                        //             delete context.simpledb.roomleveldata.subcategory;
                        //             context.simpledb.roomleveldata.count = parseInt(count) - 2;

                        //             text += backToMainMenu;
                        //             Chat.sendToRocketChat(context, event, [text]);
                        //           } else
                        //             if (count == 2 && maincategory == 5 && category == 3 && (typeof subcategory == 'undefined'
                        //               || (subcategory == 1))) {
                        //               if (typeof subcategory == 'undefined') {
                        //                 context.simpledb.roomleveldata.subcategory = parseInt(message);
                        //                 subcategory = context.simpledb.roomleveldata.subcategory;
                        //               }
                        //               if (subcategory == 1 && maincategory == 5 && category == 3) {
                        //                 let categories = JSON.parse(subSubCtgLearnStorm);
                        //                 for (i = 0; i < categories.subSubCtgLearnStorm.value_3_1.length; i++) {
                        //                   text += "*Type " + (i + 1) + "* " + categories.subSubCtgLearnStorm.value_3_1[i] + "\n";
                        //                 }
                        //               }

                        //               text += backToMainMenu + "\n" + backToPreviousMenuMessage;
                        //               context.simpledb.roomleveldata.count = parseInt(count) + 1;
                        //               Chat.sendToRocketChat(context, event, [text]);

                        //             } else
                        //               if (count == 3 && maincategory == 5 && message == 0 && category == 3
                        //                 && (subcategory == 1)) {

                        //                 let categories = JSON.parse(subCtgLearnStorm);
                        //                 for (i = 0; i < categories.subCtgLearnStorm.value_3.length; i++) {
                        //                   text += "*Type " + (i + 1) + "* " + categories.subCtgLearnStorm.value_3[i] + "\n\n";
                        //                 }
                        //                 delete context.simpledb.roomleveldata.subcategory;
                        //                 context.simpledb.roomleveldata.count = parseInt(count) - 1;

                        //                 text += backToMainMenu + "\n" + backToPreviousMenuMessage;
                        //                 Chat.sendToRocketChat(context, event, [text]);
                        //               } else
                        //                 if (count == 3 && maincategory == 5 && category == 3 && (subcategory == 1)
                        //                   && (typeof subsubcategory == 'undefined' || (subsubcategory >= 1 && subsubcategory <= 3))) {
                        //                   if (typeof subsubcategory == 'undefined') {
                        //                     context.simpledb.roomleveldata.subsubcategory = parseInt(message);
                        //                     subsubcategory = context.simpledb.roomleveldata.subsubcategory;
                        //                   }
                        //                   let categories = JSON.parse(answersLearnStorm);
                        //                   let index = parseInt(message) - 1;

                        //                   if ((subsubcategory >= 1 && subsubcategory <= 3) && category == 3 && subcategory == 1) {
                        //                     text += categories.answersLearnStorm.value_3_1[index] + "\n\n";
                        //                   }

                        //                   text += backToMainMenu + "\n" + backToPreviousMenuMessage + "\n\n" + satisfiedReview + "\n" + notSatisfiedReview;;
                        //                   context.simpledb.roomleveldata.count = parseInt(count) + 1;
                        //                   Chat.sendToRocketChat(context, event, [text]);
                        //                 } else
                        //                   if (count == 4 && maincategory == 5 && message == 0 && category == 3 && (subcategory == 1)) {

                        //                     let categories = JSON.parse(subSubCtgLearnStorm);
                        //                     if (subcategory == 1 && maincategory == 5 && category == 3) {
                        //                       for (i = 0; i < categories.subSubCtgLearnStorm.value_3_1.length; i++) {
                        //                         text += "*Type " + (i + 1) + "* " + categories.subSubCtgLearnStorm.value_3_1[i] + "\n\n";
                        //                       }
                        //                     }

                        //                     delete context.simpledb.roomleveldata.subsubcategory;
                        //                     context.simpledb.roomleveldata.count = parseInt(count) - 1;

                        //                     text += backToMainMenu + "\n" + backToPreviousMenuMessage;
                        //                     Chat.sendToRocketChat(context, event, [text]);
                        //                   } else
                        //                     if (message == 99) {
                        //                       context.simpledb.roomleveldata.count = 0;
                        //                       delete context.simpledb.roomleveldata.maincategory;
                        //                       delete context.simpledb.roomleveldata.category;
                        //                       delete context.simpledb.roomleveldata.subcategory;
                        //                       delete context.simpledb.roomleveldata.subsubcategory;
                        //                       Chat.sendToRocketChat(context, event, [welComeMessage]);
                        //                     }
                        /****************************************LearnStorm Category End********************************************************/


                        /****************************************Teacher Category Start********************************************************/
                        else
                          if (count == 1 && maincategory == 1 && typeof category == 'undefined') {
                            if (typeof category == 'undefined' && (teacher_ctg.includes(message) == true)) {
                              context.simpledb.roomleveldata.category = parseInt(message);
                            } else {
                              Chat.sendToRocketChat(context, event, [unidentifiedTextResponse]);
                            }
                            if (message == 1) {
                              let categories = JSON.parse(subCtgTeacher);
                              for (i = 0; i < categories.subCtgTeacher.value_1.length; i++) {
                                text += "*Type " + (i + 1) + "* " + categories.subCtgTeacher.value_1[i] + "\n\n";
                              }
                              text += backToMainMenu + "\n" + backToPreviousMenuMessage;
                              context.simpledb.roomleveldata.count = parseInt(count) + 1;
                              Chat.sendToRocketChat(context, event, [text]);
                            }
                            if (message == 2) {
                              let categories = JSON.parse(subCtgTeacher);
                              for (i = 0; i < categories.subCtgTeacher.value_2.length; i++) {
                                text += "*Type " + (i + 1) + "* " + categories.subCtgTeacher.value_2[i] + "\n\n";
                              }
                              text += backToMainMenu + "\n" + backToPreviousMenuMessage;
                              context.simpledb.roomleveldata.count = parseInt(count) + 1;
                              Chat.sendToRocketChat(context, event, [text]);
                            }
                            if (message == 3) {
                              let categories = JSON.parse(subCtgTeacher);
                              text += teacher_technologyConsideration + "\n\n";
                              for (i = 0; i < categories.subCtgTeacher.value_3.length; i++) {
                                text += "*Type " + (i + 1) + "* " + categories.subCtgTeacher.value_3[i] + "\n\n";
                              }
                              text += backToMainMenu + "\n" + backToPreviousMenuMessage;
                              context.simpledb.roomleveldata.count = parseInt(count) + 1;
                              Chat.sendToRocketChat(context, event, [text]);
                            }
                          } else
                            if (count == 2 && maincategory == 1 && message == 0 && (category == 1 || category == 2 || category == 3)) {

                              let categories = JSON.parse(ctgTeacher);
                              for (i = 0; i < categories.ctgTeacher.length; i++) {
                                text += "*Type " + (i + 1) + "* " + categories.ctgTeacher[i] + "\n\n";
                              }

                              delete context.simpledb.roomleveldata.category;
                              context.simpledb.roomleveldata.count = parseInt(count) - 1;

                              text += backToMainMenu;
                              Chat.sendToRocketChat(context, event, [text]);
                            } else
                              if (count == 2 && maincategory == 1 && (category == 1 || category == 3) &&
                                (typeof subcategory == 'undefined' || (subcategory >= 1 && subcategory <= 4))) {

                                let categories = JSON.parse(answersTeacher);
                                if (typeof subcategory == 'undefined' && category == 1 && (teacher_sub_ctg1.includes(message) == true)) {
                                  context.simpledb.roomleveldata.subcategory = parseInt(message);
                                  subcategory = context.simpledb.roomleveldata.subcategory;
                                  if (subcategory == 1 && category == 1) {
                                    text += categories.answersTeacher.value_1_1[0] + "\n\n";
                                  }
                                  if (subcategory == 2 && category == 1) {
                                    text += categories.answersTeacher.value_1_1[1] + "\n\n";
                                  }
                                  if (subcategory == 3 && category == 1) {
                                    text += categories.answersTeacher.value_1_1[2] + "\n\n";
                                  }
                                  text += backToMainMenu + "\n" + backToPreviousMenuMessage + "\n\n" + satisfiedReview + "\n" + notSatisfiedReview;
                                  context.simpledb.roomleveldata.count = parseInt(count) + 1;
                                  Chat.sendToRocketChat(context, event, [text]);
                                } else
                                  if (typeof subcategory == 'undefined' && category == 3 && (teacher_sub_ctg3.includes(message) == true)) {
                                    context.simpledb.roomleveldata.subcategory = parseInt(message);
                                    subcategory = context.simpledb.roomleveldata.subcategory;
                                    if (subcategory == 1 && category == 3) {
                                      text += categories.answersTeacher.value_3_1[0] + "\n\n";
                                    }
                                    if (subcategory == 2 && category == 3) {
                                      text += categories.answersTeacher.value_3_1[1] + "\n\n";
                                    }
                                    if (subcategory == 3 && category == 3) {
                                      text += categories.answersTeacher.value_3_1[2] + "\n\n";
                                    }
                                    if (subcategory == 4 && category == 3) {
                                      text += categories.answersTeacher.value_3_1[3] + "\n\n";
                                    }
                                    text += backToMainMenu + "\n" + backToPreviousMenuMessage + "\n\n" + satisfiedReview + "\n" + notSatisfiedReview;
                                    context.simpledb.roomleveldata.count = parseInt(count) + 1;
                                    Chat.sendToRocketChat(context, event, [text]);
                                  } else {
                                    Chat.sendToRocketChat(context, event, [unidentifiedTextResponse]);
                                  }
                              } else
                                if (count == 3 && maincategory == 1 && message == 0 && (category == 1 || category == 3)
                                  && (subcategory >= 1 && subcategory <= 4)) {

                                  let categories = JSON.parse(subCtgTeacher);
                                  if ((subcategory == 1 || subcategory == 2 || subcategory == 3) && category == 1) {
                                    for (i = 0; i < categories.subCtgTeacher.value_1.length; i++) {
                                      text += "*Type " + (i + 1) + "* " + categories.subCtgTeacher.value_1[i] + "\n\n";
                                    }
                                  }
                                  if ((subcategory == 1 || subcategory == 2 || subcategory == 3 || subcategory == 4) && category == 3) {
                                    for (i = 0; i < categories.subCtgTeacher.value_3.length; i++) {
                                      text += "*Type " + (i + 1) + "* " + categories.subCtgTeacher.value_3[i] + "\n\n";
                                    }
                                  }

                                  delete context.simpledb.roomleveldata.subcategory;
                                  context.simpledb.roomleveldata.count = parseInt(count) - 1;

                                  text += backToMainMenu + "\n" + backToPreviousMenuMessage;
                                  Chat.sendToRocketChat(context, event, [text]);
                                } else
                                  if (count == 4 && maincategory == 1 && message == 0 && (category == 1 || category == 3)
                                    && (subcategory >= 1 && subcategory <= 4)) {

                                    let categories = JSON.parse(subcategory);
                                    if ((subcategory == 1 || subcategory == 2 || subcategory == 3) && category == 1)
                                      for (i = 0; i < categories.subCtgTeacher.value_1.length; i++) {
                                        text += "*Type " + (i + 1) + "* " + categories.subCtgTeacher.value_1[i] + "\n\n";
                                      }
                                    if ((subcategory == 1 || subcategory == 2 || subcategory == 3 || subcategory == 4) && category == 3)
                                      for (i = 0; i < categories.subCtgTeacher.value_3.length; i++) {
                                        text += "*Type " + (i + 1) + "* " + categories.subCtgTeacher.value_3[i] + "\n\n";
                                      }

                                    delete context.simpledb.roomleveldata.subcategory;
                                    context.simpledb.roomleveldata.count = parseInt(count) - 2;

                                    text += backToMainMenu;
                                    Chat.sendToRocketChat(context, event, [text]);
                                  } else
                                    if (count == 2 && maincategory == 1 && category == 2 && (typeof subcategory == 'undefined'
                                      || (subcategory >= 1 && subcategory <= 7))) {
                                      if (typeof subcategory == 'undefined' && (teacher_sub_ctg2.includes(message) == true)) {
                                        context.simpledb.roomleveldata.subcategory = parseInt(message);
                                        subcategory = context.simpledb.roomleveldata.subcategory;
                                        if (subcategory == 1 && maincategory == 1 && category == 2) {
                                          let categories = JSON.parse(subSubCtgTeacher);
                                          for (i = 0; i < categories.subSubCtgTeacher.value_2_1.length; i++) {
                                            text += "*Type " + (i + 1) + "* " + categories.subSubCtgTeacher.value_2_1[i] + "\n\n";
                                          }
                                        }
                                        if (subcategory == 2 && maincategory == 1 && category == 2) {
                                          let categories = JSON.parse(subSubCtgTeacher);
                                          for (i = 0; i < categories.subSubCtgTeacher.value_2_2.length; i++) {
                                            text += "*Type " + (i + 1) + "* " + categories.subSubCtgTeacher.value_2_2[i] + "\n\n";
                                          }
                                        }
                                        if (subcategory == 3 && maincategory == 1 && category == 2) {
                                          let categories = JSON.parse(subSubCtgTeacher);
                                          for (i = 0; i < categories.subSubCtgTeacher.value_2_3.length; i++) {
                                            text += "*Type " + (i + 1) + "* " + categories.subSubCtgTeacher.value_2_3[i] + "\n\n";
                                          }
                                        }
                                        if (subcategory == 4 && maincategory == 1 && category == 2) {
                                          let categories = JSON.parse(subSubCtgTeacher);
                                          for (i = 0; i < categories.subSubCtgTeacher.value_2_4.length; i++) {
                                            text += "*Type " + (i + 1) + "* " + categories.subSubCtgTeacher.value_2_4[i] + "\n\n";
                                          }
                                        }
                                        if (subcategory == 5 && maincategory == 1 && category == 2) {
                                          let categories = JSON.parse(subSubCtgTeacher);
                                          for (i = 0; i < categories.subSubCtgTeacher.value_2_5.length; i++) {
                                            text += "*Type " + (i + 1) + "* " + categories.subSubCtgTeacher.value_2_5[i] + "\n\n";
                                          }
                                        }
                                        if (subcategory == 6 && maincategory == 1 && category == 2) {
                                          let categories = JSON.parse(subSubCtgTeacher);
                                          for (i = 0; i < categories.subSubCtgTeacher.value_2_6.length; i++) {
                                            text += "*Type " + (i + 1) + "* " + categories.subSubCtgTeacher.value_2_6[i] + "\n\n";
                                          }
                                        }
                                        if (subcategory == 7 && maincategory == 1 && category == 2) {
                                          let categories = JSON.parse(subSubCtgTeacher);
                                          for (i = 0; i < categories.subSubCtgTeacher.value_2_7.length; i++) {
                                            text += "*Type " + (i + 1) + "* " + categories.subSubCtgTeacher.value_2_7[i] + "\n\n";
                                          }
                                        }
                                        text += backToMainMenu + "\n\n" + backToPreviousMenuMessage;
                                        context.simpledb.roomleveldata.count = parseInt(count) + 1;
                                        Chat.sendToRocketChat(context, event, [text]);
                                      } else {
                                        Chat.sendToRocketChat(context, event, [unidentifiedTextResponse]);
                                      }
                                    } else
                                      if (count == 3 && maincategory == 1 && message == 0 && category == 2
                                        && (subcategory >= 1 && subcategory <= 7)) {

                                        let categories = JSON.parse(subCtgTeacher);
                                        for (i = 0; i < categories.subCtgTeacher.value_2.length; i++) {
                                          text += "*Type " + (i + 1) + "* " + categories.subCtgTeacher.value_2[i] + "\n\n";
                                        }
                                        delete context.simpledb.roomleveldata.subcategory;
                                        context.simpledb.roomleveldata.count = parseInt(count) - 1;

                                        text += backToMainMenu + "\n" + backToPreviousMenuMessage;
                                        Chat.sendToRocketChat(context, event, [text]);
                                      } else
                                        if (count == 3 && maincategory == 1 && category == 2 && (subcategory >= 1 && subcategory <= 7)
                                          && (typeof subsubcategory == 'undefined' || (subsubcategory >= 1 && subsubcategory <= 7))) {

                                          let categories = JSON.parse(answersTeacher);
                                          let index = parseInt(message) - 1;

                                          if ((typeof subsubcategory == 'undefined') && (teacher_subctg2_subctg1.includes(message) == true) && category == 2 && subcategory == 1) {
                                            context.simpledb.roomleveldata.subsubcategory = parseInt(message);
                                            subsubcategory = context.simpledb.roomleveldata.subsubcategory;
                                            text += categories.answersTeacher.value_2_1[index] + "\n\n";
                                            text += backToMainMenu + "\n" + backToPreviousMenuMessage + "\n\n" + satisfiedReview + "\n" + notSatisfiedReview;;
                                            context.simpledb.roomleveldata.count = parseInt(count) + 1;
                                            Chat.sendToRocketChat(context, event, [text]);
                                          } else
                                            if ((typeof subsubcategory == 'undefined') && (teacher_subctg2_subctg2.includes(message) == true) && category == 2 && subcategory == 2) {
                                              context.simpledb.roomleveldata.subsubcategory = parseInt(message);
                                              subsubcategory = context.simpledb.roomleveldata.subsubcategory;
                                              text += categories.answersTeacher.value_2_2[index] + "\n\n";
                                              text += backToMainMenu + "\n" + backToPreviousMenuMessage + "\n\n" + satisfiedReview + "\n" + notSatisfiedReview;;
                                              context.simpledb.roomleveldata.count = parseInt(count) + 1;
                                              Chat.sendToRocketChat(context, event, [text]);
                                            } else
                                              if ((typeof subsubcategory == 'undefined') && (teacher_subctg2_subctg3.includes(message) == true) && category == 2 && subcategory == 3) {
                                                context.simpledb.roomleveldata.subsubcategory = parseInt(message);
                                                subsubcategory = context.simpledb.roomleveldata.subsubcategory;
                                                text += categories.answersTeacher.value_2_3[index] + "\n\n";
                                                text += backToMainMenu + "\n" + backToPreviousMenuMessage + "\n\n" + satisfiedReview + "\n" + notSatisfiedReview;;
                                                context.simpledb.roomleveldata.count = parseInt(count) + 1;
                                                Chat.sendToRocketChat(context, event, [text]);
                                              } else
                                                if ((typeof subsubcategory == 'undefined') && (teacher_subctg2_subctg4.includes(message) == true) && category == 2 && subcategory == 4) {
                                                  context.simpledb.roomleveldata.subsubcategory = parseInt(message);
                                                  subsubcategory = context.simpledb.roomleveldata.subsubcategory;
                                                  text += categories.answersTeacher.value_2_4[index] + "\n\n";
                                                  text += backToMainMenu + "\n" + backToPreviousMenuMessage + "\n\n" + satisfiedReview + "\n" + notSatisfiedReview;;
                                                  context.simpledb.roomleveldata.count = parseInt(count) + 1;
                                                  Chat.sendToRocketChat(context, event, [text]);
                                                } else
                                                  if ((typeof subsubcategory == 'undefined') && (teacher_subctg2_subctg5.includes(message) == true) && category == 2 && subcategory == 5) {
                                                    context.simpledb.roomleveldata.subsubcategory = parseInt(message);
                                                    subsubcategory = context.simpledb.roomleveldata.subsubcategory;
                                                    text += categories.answersTeacher.value_2_5[index] + "\n\n";
                                                    text += backToMainMenu + "\n" + backToPreviousMenuMessage + "\n\n" + satisfiedReview + "\n" + notSatisfiedReview;;
                                                    context.simpledb.roomleveldata.count = parseInt(count) + 1;
                                                    Chat.sendToRocketChat(context, event, [text]);
                                                  } else
                                                    if ((typeof subsubcategory == 'undefined') && (teacher_subctg2_subctg6.includes(message) == true) && category == 2 && subcategory == 6) {
                                                      context.simpledb.roomleveldata.subsubcategory = parseInt(message);
                                                      subsubcategory = context.simpledb.roomleveldata.subsubcategory;
                                                      text += categories.answersTeacher.value_2_6[index] + "\n\n";
                                                      text += backToMainMenu + "\n" + backToPreviousMenuMessage + "\n\n" + satisfiedReview + "\n" + notSatisfiedReview;;
                                                      context.simpledb.roomleveldata.count = parseInt(count) + 1;
                                                      Chat.sendToRocketChat(context, event, [text]);
                                                    } else
                                                      if ((typeof subsubcategory == 'undefined') && (teacher_subctg2_subctg7.includes(message) == true) && category == 2 && subcategory == 7) {
                                                        context.simpledb.roomleveldata.subsubcategory = parseInt(message);
                                                        subsubcategory = context.simpledb.roomleveldata.subsubcategory;
                                                        text += categories.answersTeacher.value_2_7[index] + "\n\n";
                                                        text += backToMainMenu + "\n" + backToPreviousMenuMessage + "\n\n" + satisfiedReview + "\n" + notSatisfiedReview;;
                                                        context.simpledb.roomleveldata.count = parseInt(count) + 1;
                                                        Chat.sendToRocketChat(context, event, [text]);
                                                      } else {
                                                        Chat.sendToRocketChat(context, event, [unidentifiedTextResponse]);
                                                      }
                                        } else
                                          if (count == 4 && maincategory == 1 && message == 0 && category == 2 &&
                                            (subcategory >= 1 && subcategory <= 7)) {

                                            let categories = JSON.parse(subSubCtgTeacher);
                                            if (subcategory == 1 && maincategory == 1 && category == 2) {
                                              for (i = 0; i < categories.subSubCtgTeacher.value_2_1.length; i++) {
                                                text += "*Type " + (i + 1) + "* " + categories.subSubCtgTeacher.value_2_1[i] + "\n\n";
                                              }
                                            }
                                            if (subcategory == 2 && maincategory == 1 && category == 2) {
                                              for (i = 0; i < categories.subSubCtgTeacher.value_2_2.length; i++) {
                                                text += "*Type " + (i + 1) + "* " + categories.subSubCtgTeacher.value_2_2[i] + "\n\n";
                                              }
                                            }
                                            if (subcategory == 3 && maincategory == 1 && category == 2) {
                                              for (i = 0; i < categories.subSubCtgTeacher.value_2_3.length; i++) {
                                                text += "*Type " + (i + 1) + "* " + categories.subSubCtgTeacher.value_2_3[i] + "\n\n";
                                              }
                                            }
                                            if (subcategory == 4 && maincategory == 1 && category == 2) {
                                              for (i = 0; i < categories.subSubCtgTeacher.value_2_4.length; i++) {
                                                text += "*Type " + (i + 1) + "* " + categories.subSubCtgTeacher.value_2_4[i] + "\n\n";
                                              }
                                            }
                                            if (subcategory == 5 && maincategory == 1 && category == 2) {
                                              for (i = 0; i < categories.subSubCtgTeacher.value_2_5.length; i++) {
                                                text += "*Type " + (i + 1) + "* " + categories.subSubCtgTeacher.value_2_5[i] + "\n\n";
                                              }
                                            }
                                            if (subcategory == 6 && maincategory == 1 && category == 2) {
                                              for (i = 0; i < categories.subSubCtgTeacher.value_2_6.length; i++) {
                                                text += "*Type " + (i + 1) + "* " + categories.subSubCtgTeacher.value_2_6[i] + "\n\n";
                                              }
                                            }
                                            if (subcategory == 7 && maincategory == 1 && category == 2) {
                                              for (i = 0; i < categories.subSubCtgTeacher.value_2_7.length; i++) {
                                                text += "*Type " + (i + 1) + "* " + categories.subSubCtgTeacher.value_2_7[i] + "\n\n";
                                              }
                                            }

                                            delete context.simpledb.roomleveldata.subsubcategory;
                                            context.simpledb.roomleveldata.count = parseInt(count) - 1;

                                            text += backToMainMenu + "\n" + backToPreviousMenuMessage;
                                            Chat.sendToRocketChat(context, event, [text]);
                                          }
                                          /****************************************Teacher Category End********************************************************/
                                          else
                                            if (message == 99) {
                                              context.simpledb.roomleveldata.count = 0;
                                              delete context.simpledb.roomleveldata.squery;
                                              delete context.simpledb.roomleveldata.feedback;
                                              delete context.simpledb.roomleveldata.wordlist;
                                              delete context.simpledb.roomleveldata.maincategory;
                                              delete context.simpledb.roomleveldata.category;
                                              delete context.simpledb.roomleveldata.subcategory;
                                              delete context.simpledb.roomleveldata.subsubcategory;
                                              Chat.sendToRocketChat(context, event, [welComeMessage]);
                                            }
                                            else {
                                              // context.simpledb.roomleveldata.count = 0;
                                              // delete context.simpledb.roomleveldata.squery;
                                              // delete context.simpledb.roomleveldata.feedback;
                                              // delete context.simpledb.roomleveldata.wordlist;
                                              // delete context.simpledb.roomleveldata.maincategory;
                                              // delete context.simpledb.roomleveldata.category;
                                              // delete context.simpledb.roomleveldata.subcategory;
                                              // delete context.simpledb.roomleveldata.subsubcategory;
                                              Chat.sendToRocketChat(context, event, [unidentifiedTextResponse]);
                                            }

  } catch (error) {
    console.log(error);
    context.simpledb.roomleveldata.count = 0;
    delete context.simpledb.roomleveldata.squery;
    delete context.simpledb.roomleveldata.feedback;
    delete context.simpledb.roomleveldata.wordlist;
    delete context.simpledb.roomleveldata.category;
    delete context.simpledb.roomleveldata.maincategory;
    delete context.simpledb.roomleveldata.subcategory;
    delete context.simpledb.roomleveldata.subsubcategory;
    Chat.sendToRocketChat(context, event, [botunavailable]);
  }
}


module.exports.resetUser = function (context, event) {
  try {
    var currentdate = new Date();
    context.simpledb.roomleveldata.count = 0;
    context.simpledb.roomleveldata.oldtime = currentdate.getTime();
    delete context.simpledb.roomleveldata.squery;
    delete context.simpledb.roomleveldata.feedback;
    delete context.simpledb.roomleveldata.wordlist;
    delete context.simpledb.roomleveldata.category;
    delete context.simpledb.roomleveldata.maincategory;
    delete context.simpledb.roomleveldata.subcategory;
    delete context.simpledb.roomleveldata.subsubcategory;
    Chat.sendToRocketChat(context, event, [welComeMessage]);
  } catch (error) {
    console.log(error);
    context.simpledb.roomleveldata.count = 0;
    delete context.simpledb.roomleveldata.squery;
    delete context.simpledb.roomleveldata.feedback;
    delete context.simpledb.roomleveldata.wordlist;
    delete context.simpledb.roomleveldata.category;
    delete context.simpledb.roomleveldata.maincategory;
    delete context.simpledb.roomleveldata.subcategory;
    delete context.simpledb.roomleveldata.subsubcategory;
    Chat.sendToRocketChat(context, event, [botunavailable]);
  }
}

module.exports.botUnavailable = function (context, event) {
  try {
    context.simpledb.roomleveldata.count = 0;
    delete context.simpledb.roomleveldata.squery;
    delete context.simpledb.roomleveldata.feedback;
    delete context.simpledb.roomleveldata.wordlist;
    delete context.simpledb.roomleveldata.category;
    delete context.simpledb.roomleveldata.maincategory;
    delete context.simpledb.roomleveldata.subcategory;
    delete context.simpledb.roomleveldata.subsubcategory;
    Chat.sendToRocketChat(context, event, [botunavailable]);
    // callback();
  } catch (error) {
    console.log(error);
    context.simpledb.roomleveldata.count = 0;
    delete context.simpledb.roomleveldata.squery;
    delete context.simpledb.roomleveldata.feedback;
    delete context.simpledb.roomleveldata.wordlist;
    delete context.simpledb.roomleveldata.category;
    delete context.simpledb.roomleveldata.maincategory;
    delete context.simpledb.roomleveldata.subcategory;
    delete context.simpledb.roomleveldata.subsubcategory;
    Chat.sendToRocketChat(context, event, [botunavailable]);
    // callback();
  }
}