import React, { useState } from 'react'
import ApiService from '../API/ApiService'
import MainButton from './UI/buttons/MainButton'
import MainInput from './UI/input/MainInput'
import MainTextarea from './UI/textarea/MainTextarea'

const AddNewCourse = ({setAddedCourse}) => {
    const [title, setTitle] = useState('Название')
    const handleTitleChange = (e) => setTitle(e.target.value)

    const [mentor, setMentor] = useState('Преподаватель')
    const handleMentorChange = (e) => setMentor(e.target.value)

    const [shortDescription, setShortDescription] = useState('Краткое описание')
    const handleShortDescriptionChange = (e) =>
        setShortDescription(e.target.value)

    const [fullDescription, setFullDescription] = useState('Полное описание')
    const handleFullDescriptionChange = (e) =>
        setFullDescription(e.target.value)

    const addNewCourse = event => {
        event.preventDefault()
        ApiService.addCourse(mentor, title, shortDescription, fullDescription, setAddedCourse)
    }

    return (
        <div>
            <form onSubmit={addNewCourse}>
                <MainInput
                    type="text"
                    placeholder={title}
                    onChange={handleTitleChange}
                />
                <MainInput
                    type="text"
                    placeholder={mentor}
                    onChange={handleMentorChange}
                />
                <MainTextarea
                    placeholder={shortDescription}
                    onChange={handleShortDescriptionChange}
                />
                <MainTextarea
                    placeholder={fullDescription}
                    onChange={handleFullDescriptionChange}
                />
                <MainButton type="submit">Добавить</MainButton>
            </form>
        </div >
    )
}

export default AddNewCourse
