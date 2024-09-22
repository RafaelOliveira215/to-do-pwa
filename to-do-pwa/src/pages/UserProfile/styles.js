import styled from 'styled-components';

export const ShowUserPageToogleContainer = styled.div`
display:flex ;
justify-content:center ;
margin-top:15px ;
`

export const ProfilePage = styled.div`
display:flex ;
align-items:center ;
flex-direction:column ;
`

export const ShowUserPageToogle = styled.button`
background-color:#007bff ;
color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  transition: background-color 0.3s;
  cursor: pointer;

&:hover {
  background-color: #0056b3;
}
`

export const Container = styled.div`
  max-width: 400px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #f4f4f4;
  border-radius: 8px;
`;

export const TaskForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const Input = styled.input`
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const Button = styled.button`
  padding: 0.5rem;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;

export const TaskList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const TaskItem = styled.li`
  background-color: ${({ completed }) => (completed ? '#d4edda' : 'white')};
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: ${({ completed }) => (completed ? '#c3e6cb' : '#f8f9fa')};
  }
`;

export const TaskDescription = styled.span`
  flex-grow: 1;
`;

export const TaskTime = styled.span`
  font-size: 0.9rem;
  color: #6c757d;
`;