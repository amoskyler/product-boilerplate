/** @jsx React.DOM */
define(function(require){

  var cx = React.addons.classSet;
  var ProfilePic = require('components/ProfilePic/View');

  var ProfileCard = React.createClass({
    getDefaultProps: function () {
      return {
        points: 0
      };
    },

    getInitialState: function() {
      return {
        liked: false
      };
    },

    like: function() {
      this.setState({
        liked: !this.state.liked
      });
    },

    render: function() {
      var likeClasses = cx({
        active: this.state.liked,
        like: true,
        ui: true,
        corner: true,
        label: true
      });

      return (
        <div className='profile-card item'>
          <div className='image'>
            <ProfilePic username={this.props.username} />
            <a className={likeClasses} onClick={this.like}>
              <i className='like icon'/>
            </a>
          </div>
          <div className='content'>
            <div className='meta'>{this.props.points} points</div>
            <div className='name'>{this.props.username}</div>
            <p className='description'>Wow such a great person</p>
          </div>
        </div>
      );
    }
  });

  return ProfileCard;
});