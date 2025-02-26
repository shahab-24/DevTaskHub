import React from 'react';

const TaskPage = () => {
        return (
                <div>
                <h2 className="text-2xl font-semibold mb-4">Your Tasks</h2>
                        <taskCard title='Complete Next.js Project' status='Prnding'></taskCard>
                        <taskCard title='Fix UI Bugs' status='In Progress'></taskCard>
                </div>
        );
};

export default TaskPage;