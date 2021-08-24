import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import ApiService from '../API/ApiService'
import MainButton from '../components/UI/buttons/MainButton'

const CourseId = () => {
    const history = useHistory()
    const params = useParams()
    const [course, setCourse] = useState(null)
    const fetchCourseDetails = async (id) => setCourse(await ApiService.fetchCourse(id))

    useEffect(() => {
        fetchCourseDetails(params.id)
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

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
            <MainButton onClick={() => history.push('/courses')}>Назад к курсам</MainButton>
        </div>
    )
}

export default CourseId
