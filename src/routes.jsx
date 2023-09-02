import { Home, Profile, Services, Aboutus, Donate, SignIn, SignUp } from "@/pages";
import {
  HomeIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";

export const routes = [
  {
    name: "home",
    path: "/home",
    element: <Home />,
  },
  {
    name: "NGO Office",
    path: "/profile",
    element: <Profile />,
  },
  {
    name: "Services",
    path: "/service",
    element: <Services />,
  },
  {
    name: "About US",
    path: "/aboutus",
    element: <Aboutus />,
  },
  {
    name: "Donate",
    path: "/donate",
    element: <Donate />,
  },
  {
    name: "Sign In",
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    name: "Sign Up",
    path: "/sign-up",
    element: <SignUp />,
  },
];

export default routes;
