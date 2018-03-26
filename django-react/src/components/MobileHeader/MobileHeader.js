import React, { Component } from 'react';


class MobileHeader extends Component {
  render() {
      return (
        <div class="title-bar hide-for-large">
            <div class="title-bar-left">
              <button class="menu-icon" type="button" data-open="my-info"></button>
              <span class="title-bar-title">Ranchi restro</span>
            </div>
     </div>
    );
}

}

export default MobileHeader;