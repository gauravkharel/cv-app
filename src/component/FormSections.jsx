import Education from './sections/Education'
import PersonalDetails from './sections/PersonalDetails'
import Projects from './sections/Projects'
import WorkExperience from './sections/WorkExperience'
import useFormContext from '../context/useFormContext'

function FormSections() {

    const {page} = useFormContext()

    const display = {
        0: <PersonalDetails />,
        1: <WorkExperience />,
        2: <Projects />,
        3: <Education />
    }

    const content = (
        <div>
        {display[page]}
        </div>
    )
  return content
}

export default FormSections