/**
 * Ecommerce Dashboard
 */

import React, { Component } from 'react'

// intl messages
import IntlMessages from 'Util/IntlMessages';

// page title bar
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';
import { NewWidget } from 'Components/Widgets';

 //import {TodoList} from 'Components/Widgets';

export default class EcommerceDashboard extends Component {
   render() {
      const { match } = this.props;
      return (
         <div className="ecom-dashboard-wrapper">
            <PageTitleBar title={<IntlMessages id="sidebar.ecommerce" />} match={match} />
            <NewWidget />
             {/* <TodoList /> */}
            
         </div>
      )
   }
}
