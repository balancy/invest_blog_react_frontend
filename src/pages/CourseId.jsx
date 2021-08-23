import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import ApiService from '../API/ApiService'
import CourseButton from '../components/UI/buttons/CourseButton'

const CourseId = () => {
    const history = useHistory()
    const params = useParams()
    const [course, setCourse] = useState(null)
    const fetchCourseDetails = async (id) => setCourse(await ApiService.fetchCourse(id))

    useEffect(() => {
        fetchCourseDetails(params.id)
    })

    return (
        <div>
            {
                course && (
                    <div>
                        <h3><strong>Курс: </strong> {course.title}</h3>
                        <hr />
                        <p>
                            <strong>Описание:</strong> {course.full_description}
                        </p>
                    </div>
                )
            }
            <CourseButton onClick={() => history.push('/courses')}>Назад к курсам</CourseButton>
        </div>
    )
}

export default CourseId
