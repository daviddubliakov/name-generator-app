import GenderPicker from "../pages/GenderPicker";
import NameResult from "../pages/NameResult";

const ROUTES = [
  {
    path: '/name-result',
    element: <NameResult />
  },
  {
    path: '/',
    element: <GenderPicker />
  }
];

export default ROUTES;
