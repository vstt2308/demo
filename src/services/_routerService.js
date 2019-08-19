// routes
import Dashboard from 'Routes/dashboard';
import Crm from 'Routes/crm';
import NewList from 'Routes/new-modules';

export default [
   {
      path: 'dashboard',
      component: Dashboard
   },
   {
      path: 'crm',
      component: Crm
   },
   // Added component
	{
		path: 'new-modules',
		component: NewList
   },
   
  
]