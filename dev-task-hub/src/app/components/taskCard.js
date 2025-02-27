// components/taskCard.js
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import React from 'react';

const TaskCard = ({ task, onEdit, onDelete, onToggleComplete }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="card bg-base-100 shadow-xl mb-4"
    >
      <div className="card-body">
        <h2 className="card-title">
          {task.title}
          {task.completed && (
            <span className="badge badge-secondary ml-2">Completed</span>
          )}
        </h2>
        <p>{task.description}</p>
        <p className="text-sm text-gray-500">
          <span className="font-semibold">Category:</span> {task.category}
        </p>
        <div className="card-actions justify-end mt-4">
          <button
            className="btn btn-success"
            onClick={() => onToggleComplete(task.id)}
          >
            {task.completed ? 'Undo' : 'Complete'}
          </button>
          <button
            className="btn btn-warning"
            onClick={() => onEdit(task.id)}
          >
            Edit
          </button>
          <button
            className="btn btn-error"
            onClick={() => onDelete(task.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </motion.div>
  );
};

TaskCard.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    category: PropTypes.string,
    completed: PropTypes.bool,
  }).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggleComplete: PropTypes.func.isRequired,
};

export default TaskCard;
