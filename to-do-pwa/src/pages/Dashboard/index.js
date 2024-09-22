import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import * as S from "./styles"

const Dashboard = () => {
    const [tasks, setTasks] = useState([]);
    const [description, setDescription] = useState('');
    const [time, setTime] = useState('');

    const navigate = useNavigate();
    const handleAddTask = (e) => {
        e.preventDefault();

        if (!description || !time) {
            alert('Please fill in both description and time.');
            return;
        }

        const newTask = {
            id: Date.now(),
            description,
            time,
            completed: false,
        };

        setTasks([...tasks, newTask]);
        setDescription('');
        setTime('');
    };

    // Toggle the completion status of a task
    const toggleTaskCompletion = (taskId) => {
        setTasks(
            tasks.map((task) =>
                task.id === taskId ? { ...task, completed: !task.completed } : task
            )
        );
    };
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (!user) {
                navigate('/');
            }
        });

        return () => unsubscribe();
    }, [navigate]);

    return (
        <>
            <S.ShowUserPageToogleContainer>
                <S.ShowUserPageToogle onClick={() => navigate('/userprofile')}>Ver perfil</S.ShowUserPageToogle>
            </S.ShowUserPageToogleContainer>


            <S.Container>
                <h1>To-Do List</h1>

                <S.TaskForm onSubmit={handleAddTask}>
                    <S.Input
                        type="text"
                        placeholder="Task description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                    <S.Input
                        type="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        required
                    />
                    <S.Button type="submit">Add Task</S.Button>
                </S.TaskForm>

                <S.TaskList>
                    {tasks.map((task) => (
                        <S.TaskItem
                            key={task.id}
                            completed={task.completed}
                            onClick={() => toggleTaskCompletion(task.id)}
                        >
                            <S.TaskDescription>{task.description}</S.TaskDescription>
                            <S.TaskTime>{task.time}</S.TaskTime>
                        </S.TaskItem>
                    ))}
                </S.TaskList>
            </S.Container>
        </>

    );

};

export default Dashboard;
