# ITF Taekwon-Do theory learning web application

This web application is an interactive site designated for ITF style Taekwon-Do color belts, to help them prepare for belt exams.

## Features:
### Interactive study hub:
- **patterns:** learn about ITF patterns, that you can filter according to your belt rank
- **stances:** learn the basic information of the stances you have in your patterns
- **vocabulary:** learn the basic korean vocabulary according to your belt rank, including the basic commands, body parts and movement directions
### External API:
The study cards give a basic idea of pattern theory, but as a practitioner advances in belt ranks, more detail will be needed. That's why all patterns include a direct link to the correct historical person behing the pattern using fetch and async/await. Note that since the first pattern is not about a historical person, there is unfortunately no wikipedia page for more detailed info. However, if you want to know more in general about Taekwon-Do, follow the link unerneath the first pattern.
### Theory quiz game:
A multiple choice test, that the user can take based on their belt rank. When the test is finished, the user can see their results.

## Technology and Libraries:
- **Frontend:** React
- **Routing:** react-router-dom
- **UI and Styling:** Bootstrap 5 / React-Bootstrap
- **Icons:** lucide-react
- **External API:** Wikipedia REST API
- **Deployment:** GitHub Pages

## Local setup
To run this program locally you need to:
**Clone the repository:**
git clone https://github.com/EnikoToth13/ITF-Taekwon-Do-Quiz.git
**Install dependencies:**
npm install
**Start server:**
npm run dev