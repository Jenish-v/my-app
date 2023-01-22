interface Task {
  title: string;
  tasks: string[];
  id: number;
}

interface TaskListProps {
  taskList: Task[];
}

export { type TaskListProps, type Task };