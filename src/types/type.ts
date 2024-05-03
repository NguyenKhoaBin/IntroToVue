export interface Todo {
    text: string;
    completed: boolean;
  }

  export interface AuthState {
    isAuthenticated: boolean;
    user: Record<string, any>; 
}


export interface TodoState {
    todos: Todo[];
  }

export interface Event {
  title: string;
  time: string;
  id: string;
  location: string;
  description: string;
}

export interface User {
  avt: string;
  firstName: string;
  lastName: string;
  email: string;
  userName: string;
}
