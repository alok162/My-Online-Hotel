import React, { Component } from 'react';


class MobileHeader extends Component {
  render() {
      return (
        <div className="title-bar hide-for-large">
            <div className="title-bar-left">
              <button className="menu-icon" type="button" data-open="my-info"></button>
              <span className="title-bar-title">Ranchi restro</span>
            </div>
     </div>
    );
}

}

export default MobileHeader;