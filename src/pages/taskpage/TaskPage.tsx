﻿import styles from './TaskPage.module.scss';
import {ReactComponent as X} from '../../images/cross.svg';
import Button from '../../components/ui/button/Button';
import { useNavigate } from 'react-router-dom';
import { ChangeEvent, useState } from 'react';
import { FormDataType } from '../../context/types';
import { FormDataContext } from '../../context/form-data-context';
import React, { ReactNode, useContext } from 'react';

interface TaskProps {
  taskData: FormDataType
}

const TaskPage = ({taskData}: TaskProps) => {
  const {changeTaskData} = useContext(FormDataContext)

  const {name, id, description, list} = taskData
  const [descriptionValue, setDescriptionValue] = useState<string | undefined>(description)

  const navigate = useNavigate()

  const goToMain = () => {
    if (description !== descriptionValue) {
      changeTaskData({id, name, description: descriptionValue, list})
    }
    navigate('/')
  }

  const changeDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescriptionValue(e.target.value)
  }

  return(
    <div className={styles.task_page}>
      <h1 className={styles.task_caption}>{name}</h1>
      <textarea onChange={changeDescription} className={styles.task_description} value={descriptionValue} placeholder='This task has no description' autoFocus={true}/>
      <Button className={styles.button} onClick={goToMain}><X className={styles.close}/></Button>
    </div>
  )
}

export default TaskPage