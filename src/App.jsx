
import './App.css'
import DepartmentComponent from './components/DepartmentComponent.jsx'
import EmployeeComponent from './components/EmployeeComponent.jsx'
import FooterComponent from './components/FooterComponent.jsx'
import HeaderComponent from './components/HeaderComponent.jsx'
import ListDepartmentComponent from './components/ListDepartmentComponent.jsx'
import ListEmployeeComponent from './components/ListEmployeeComponent.jsx'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  

  return (
    <>
    <BrowserRouter>
      <HeaderComponent/>
      <Routes>
        {/* //https://localhost:3000 */}
        <Route path='/' element={<ListEmployeeComponent/>}></Route>
        {/* //https://localhost:3000/employees */}
        <Route path='/employees' element={<ListEmployeeComponent/>}></Route>
        {/* //https://localhost:3000/add-employee */}
        <Route path='/add-employee' element={<EmployeeComponent/>}></Route>
        {/* //https://localhost:3000/edit-employee/1 */}
        <Route path='/edit-employee/:id' element={<EmployeeComponent/>}></Route>
        {/* //https://localhost:3000/departments */}
        <Route path='/departments' element={<ListDepartmentComponent/>}></Route>
        {/* //https://localhost:3000/add-department */}
        <Route path='/add-department' element={<DepartmentComponent/>}></Route>
        {/* //https://localhost:3000/update-department */}
        <Route path='/edit-department/:id' element={<DepartmentComponent/>}></Route>
      </Routes>
      
      <FooterComponent/>
    </BrowserRouter>
    </>
  )
}

export default App
