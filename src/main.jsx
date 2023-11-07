import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AuthContextProvider from './contexts/auth';
import HomeLayout from './layouts/home-layout.jsx';
import IndexPage from './pages/index-page.jsx';
import MainErrorWrapper from './layouts/main-error-wrapper.jsx';
import UsersPage, {loader as usersLoader} from './pages/users-page.jsx';
import PostsPage, {loader as postsLoader} from './pages/posts-page.jsx';
import ToDosPage, {loader as todosLoader} from './pages/todos-page.jsx';
import CommentsPage, {loader as commentsLoader} from './pages/comments-page.jsx';
import ShowUserPage from './pages/show-user-page.jsx';
import ShowTodoPage from './pages/show-todo-page';
import ShowPostPage from './pages/show-post-page';
import ShowCommentPage from './pages/show-comment-page';
import ProtectedRoutes from './routes/protected-routes';
import AuthIndex from './pages/auth-index';
import AuthProfile from './pages/auth-profile';
import AuthPayment from './pages/auth-payment';
import Login from './pages/login-page';
import LogoutPage from './pages/logout-page';

const protectedRoutes =  [
  {
    path: "/auth",
    element: <ProtectedRoutes />,
    children: [
      {
        index: true,
        element: <AuthIndex />
      },
      {
        path: "profile",
        element: <AuthProfile />
      },
      {
        path: "payment",
        element: <AuthPayment />
      },
    ]
  }
];
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <MainErrorWrapper />,
    children: [
      {
        index: true, element: <IndexPage />
      },
      {
        path: "users",
        loader: usersLoader,
        element: <UsersPage />,
      },
      {
        path: "users/:userId/:userName",
        element: <ShowUserPage />
      },
      {
        path: "posts",
        element: <PostsPage />,
        loader: postsLoader
      },
      {
        path: "posts/:postId",
        element: <ShowPostPage />,
      },
      {
        path: 'todos',
        element: <ToDosPage />,
        loader: todosLoader
      },
      {
        path: 'todos/:todoId',
        element: <ShowTodoPage />,
      },
      {
        path: 'comments',
        element: <CommentsPage />,
        loader: commentsLoader
      },
      {
        path: 'comments/:commentId',
        element: <ShowCommentPage />,
      }
    ]
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "logout",
    element: <LogoutPage />
  },
  ...protectedRoutes
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </React.StrictMode>,
)
